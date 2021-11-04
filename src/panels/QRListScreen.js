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
    const onRemove = (i) => {
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
