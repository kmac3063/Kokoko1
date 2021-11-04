import React, {useEffect, useState} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {AdaptivityProvider, AppRoot, ScreenSpinner, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import WelcomeScreen from "./panels/WelcomeScreen";
import QRListScreen from "./panels/QRListScreen";
import AllowedQRListScreen from "./panels/AllowedQRListScreen";

const App = (allowedList1 = allowedList) => {
    const [activePanel, setActivePanel] = useState('WelcomeScreen');
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
    const [scheme, setScheme] = useState(null)
    const [codeList, setCodeList] = useState([])
    const [maxId, setMaxId] = useState(0)

    const allowedList = [{text: "test", id: 4}, {text: "b", id: 5}, {text: "123", id: 6}]

    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            console.log("Type: " + type + ". Data: " + data)
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme')
                // schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                schemeAttribute.value = 'client_light';
                setScheme(schemeAttribute.value)
                document.body.attributes.setNamedItem(schemeAttribute);
            }

            if (type === 'VKWebAppStorageGetKeysFailed' || type === 'VKWebAppStorageGetFailed') {
                bridge.send("VKWebAppStorageSet", {"key": "maxId", "value": "0"});
                bridge.send("VKWebAppStorageSet", {"key": "codeList", "value": JSON.stringify([])});
            }

            if (type === "VKWebAppStorageGetKeysResult") {
                bridge.send("VKWebAppStorageGet", {"keys": ["maxId", "codeList"]});
            }

            if (type === 'VKWebAppStorageGetResult') {
                setMaxId(parseInt(data.keys.filter((p) => p.key === "maxId").value))
                setCodeList(JSON.parse(data.keys.filter((p) => p.key === "codeList").value))
            }

            if (type === 'VKWebAppOpenCodeReaderResult') {
                bridge.send("VKWebAppStorageSet", {"key": "maxId", "value": JSON.stringify(maxId)});
                bridge.send("VKWebAppStorageSet", {"key": "codeList", "value": JSON.stringify(codeList)});

                setCodeList([...codeList, {text: data.code_data, id: maxId}])
                setMaxId(maxId + 1)
            }
        });

        async function fetchData() {
            setPopout(null);
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            bridge.send("VKWebAppStorageGetKeys", {"count": 2, "offset": 0});
        }

        fetchData();
    }, []);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    const showQRReader = () => {
        bridge.send("VKWebAppOpenCodeReader")
    }

    return (
        <AdaptivityProvider>
            <AppRoot>
                <View activePanel={activePanel} popout={popout}>
                    <WelcomeScreen id='WelcomeScreen' fetchedUser={fetchedUser} go={go}/>
                    <Home id='Home' fetchedUser={fetchedUser} go={go} showQRReader={showQRReader} codeList={codeList}/>
                    <QRListScreen id='QrList' fetchedUser={fetchedUser} go={go}
                                  codeList={codeList}
                                  setCodeList={setCodeList}/>
                    <AllowedQRListScreen id='AllowedQrList'
                                         fetchedUser={fetchedUser}
                                         go={go}
                                         codeList={codeList}
                                         allowedList={allowedList}/>
                </View>
            </AppRoot>
        </AdaptivityProvider>
    );
}

export default App;
