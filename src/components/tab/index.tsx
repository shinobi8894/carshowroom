import React from "react";
import { TabButton, TabHeader, TabWrapper } from "./styles/tab.styled";
import { Box } from "elements";

interface TabItemType {
    label: string
    link?: string
    key: string
}

interface PropsType {
    children: any
    items: TabItemType[]
    activeKey: string
    setActiveKey: any
}

const Tab:React.FC<PropsType> = ({ children, items, activeKey, setActiveKey }) => {

    return (
        <TabWrapper>
            <TabHeader>
                {items.map((item, key) => (
                    <TabButton active={item.key === activeKey} onClick={() => setActiveKey(item.key)}>
                        {item.label}
                    </TabButton>
                ))}
            </TabHeader>
            <Box flex={1} overflow={'auto'}>
                {
                    children
                }
            </Box>
        </TabWrapper>
    )
}

export default Tab;