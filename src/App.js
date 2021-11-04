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
    const [codeList, setCodeList] = useState(
        [{text: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', id: 1}, {text: 'BBB', id: 2}, {text: 'CCCC', id: 3}]
    )
    const [maxId, setMaxId] = useState(10)

    const allowedList = [{text:"test", id: 4}, {text:"база", id: 5}, {text:"123", id: 6}]

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
                console.log(data)
                setCodeList([...codeList, {text: data.code_data, id: maxId}])
                setMaxId(maxId + 1)
            }
        });

        async function fetchData() {
            setPopout(null);
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
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
                    <Home id='Home' fetchedUser={fetchedUser} go={go} showQRReader={showQRReader}/>
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
