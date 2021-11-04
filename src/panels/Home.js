import React from 'react';

import {Cell, Counter, Panel, PanelHeader, Separator} from '@vkontakte/vkui';
import {Icon28QrCodeOutline, Icon28ScanViewfinderOutline, Icon28StarsCircleFillViolet} from "@vkontakte/icons";

const Home = ({id, go, fetchedUser, showQRReader, codeList}) => {
    const START_SIZE = 8
    /*
        const [bitsSize, setBitsSize] = useState(START_SIZE)
        const [bitsInSecond, setBitsInSecond] = useState(Array.from({length: bitsSize}, (v, i) => 0))
        const [currentSecond, setCurrentSecond] = useState(0)
        const [myInterval, setMyInterval] = useState(null)

        const switchChange = (index, value) => {
            stopPressed()
            bitsInSecond[index] = bitsInSecond[index] ^ 1
        }

        const startPressed = (bits) => {
            if (myInterval !== null) {
                clearInterval(myInterval)
            }
            let sec = 0
            setCurrentSecond(1)
            console.log(bits[0])
            bridge.send("VKWebAppFlashSetLevel", {"level": bits[0]});
            let timerId = setInterval(() => {
                sec = (sec + 1) % (bitsSize)
                setCurrentSecond(sec + 1)
                console.log(bits[sec])
                bridge.send("VKWebAppFlashSetLevel", {"level": bits[sec]});
            }, 1000);
            setMyInterval(timerId)
        }

        const stopPressed = () => {
            clearInterval(myInterval)
            setCurrentSecond(0)
            console.log("Stop!")
            bridge.send("VKWebAppFlashSetLevel", {"level": 0});
        }*/

    return <Panel id={id}>
        <PanelHeader>QR приложулька</PanelHeader>

        <Cell onClick={showQRReader} before={<Icon28ScanViewfinderOutline/>}>
            Отсканировать QR код
        </Cell>

        <Cell onClick={go} data-to='QrList' expandable before={<Icon28QrCodeOutline/>}
              indicator={<Counter mode="primary">{codeList.length}</Counter>}>
            Список отсканированных QR кодов
        </Cell>

        <Separator/>

        <Cell onClick={go} data-to='AllowedQrList' expandable before={<Icon28StarsCircleFillViolet/>}>
            Бонусное задание
        </Cell>
    </Panel>
}

export default Home;
