import React, {useEffect, useRef, useState} from 'react';
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
    const [logText, setLogText] = useState("")
    const [getText, setGetText] = useState("")

    const allowedList = [{text: "test", id: 4}, {text: "b", id: 5}, {text: "123", id: 6}]

    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme')
                // schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                schemeAttribute.value = 'client_light';
                setScheme(schemeAttribute.value)
                document.body.attributes.setNamedItem(schemeAttribute);
            }

            if (type === 'VKWebAppOpenCodeReaderResult') {
                setCodeList([...codeList, {text: data.code_data, id: Math.random().toString()}])
            }
        });

        async function fetchData() {
            setPopout(null);
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            bridge.send("VKWebAppStorageGetKeys", {"count": 1, "offset": 0}).then(data => {
                bridge.send("VKWebAppStorageGet", {"keys": ["codeList"]}).then(data1 => {
                    setCodeList(JSON.parse(data1.keys[0].value))
                });
            }).catch(() => {
                bridge.send("VKWebAppStorageSet", {"key": "codeList", "value": JSON.stringify([])});
            })
        }

        fetchData();
    }, []);

    function useDidUpdateEffect(fn, inputs) {
        const didMountRef = useRef(false);

        useEffect(() => {
            if (didMountRef.current)
                fn();
            else
                didMountRef.current = true;
        }, inputs);
    }

    useDidUpdateEffect(() => {
        bridge.send("VKWebAppStorageSet", {
            "key": "codeList",
            "value": JSON.stringify(codeList)
        });
    }, [codeList])

    const fake = () => {
        setCodeList([...codeList, {text: "ASD", id: Math.random().toString()}])
    }

    const doGet = () => {
        bridge.send("VKWebAppStorageGet", {"keys": ["codeList"]}).then(data => {
            setGetText(JSON.stringify(data))
        });
    }

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
                    <Home id='Home'
                          fetchedUser={fetchedUser} go={go} showQRReader={showQRReader}
                          codeList={codeList}
                          logText={logText}
                          getText={getText}
                          fake={fake}
                          doGet={doGet}
                    />
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
