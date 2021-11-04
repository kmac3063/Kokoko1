import React from 'react';

import {Cell, Group, Header, List, Panel, PanelHeader, PanelHeaderBack, platform, Text, VKCOM} from '@vkontakte/vkui';

const AllowedQRListScreen = ({id, go, fetchedUser, codeList, allowedList}) => {
    const getAllowedList = () => {
        console.log(codeList)
        console.log(allowedList)
        let res = []
        for (let code of codeList) {
            console.log("code: " + code.text)
            console.log("codeType: " + typeof (code.text))
            let b = false
            for (let allowedCode of allowedList) {
                if (code.text.includes(allowedCode.text)) {
                    b = true
                    break
                }
            }
            if (b) {
                res.push(code)
            }
        }
        return res
    }

    const getNotAllowedList = () => {
        let res = []
        for (let code of codeList) {
            let b = false
            for (let allowedCode of allowedList) {
                if (code.text.includes(allowedCode.text)) {
                    b = true
                    break
                }
            }
            if (!b) {
                res.push(code)
            }
        }
        return res
    }

    const getAllowedFormat = () => {
        return allowedList.map((word, index) => "\"" + word.text + "\"" + (index === allowedList.length - 1 ? "" : ", "))
    }

    return <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={go} data-to={'Home'} label={platform === VKCOM ? 'Назад' : undefined}/>}
        >Разрешенные коды</PanelHeader>
        <Cell multiline> Код считается разрешенным, если включает в себя одну из следующий
            строк: {getAllowedFormat()}</Cell>
        <Text>
        </Text>
        <Group header={<Header>Разрешенные коды</Header>}>
            <List>
                {getAllowedList().map((code) =>
                    <Cell multiline key={code.id}>{code.text}</Cell>
                )}
            </List>
        </Group>
        <Group header={<Header>Неразрешенные коды</Header>}>
            <List>
                {getNotAllowedList().map((code) =>
                    <Cell multiline key={code.id}>{code.text}</Cell>
                )}
            </List>
        </Group>
    </Panel>
}

export default AllowedQRListScreen;
