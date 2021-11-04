import React from 'react';

import {
    Cell,
    Group,
    List,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    PanelHeaderClose,
    platform,
    VKCOM
} from '@vkontakte/vkui';

const QRListScreen = ({id, go, fetchedUser, codeList, setCodeList}) => {
    const onDragFinish = (from, to) => {
        const draggingList = [...codeList];
        draggingList.splice(from, 1);
        draggingList.splice(to, 0, codeList[from]);
        setCodeList(draggingList);
    }

    const onRemove = (i) => {
        console.log("onRemove id: " + i)
        console.log("Before: " + codeList)
        console.log("After: " + codeList.filter((code) => code.id !== i))
        setCodeList(codeList.filter((code) => code.id !== i))
    }

    return <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={go} data-to={'Home'}/>}
        >Список кодов</PanelHeader>
        <Group>
            <List>
                {codeList.map((code) =>
                    <Cell multiline key={code.id}
                          removable onRemove={() => {onRemove(code.id)}}
                    >
                        {code.text}
                    </Cell>
                )}
            </List>
        </Group>
    </Panel>
}

export default QRListScreen;
