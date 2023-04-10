import Tab from "components/tab";
import React from "react";
import FBox from "elements/fbox";
import { BasicVar } from "styles/variables";
import { Box } from "elements";
import Heading from "elements/heading";
import Text from "elements/text";
import Input from "components/input";
import { CARSMOCKDATA } from "constants/document";
import Card from "components/card";
import Price from "components/price";
import Img from "elements/img";

const items = [
    { label: 'Compacts', key: 'compacts' },
    { label: 'Motorcycles', key: 'motorcycles' },
    { label: 'Muscle', key: 'muscle' },
    { label: 'Off-Road', key: 'off-road' },
    { label: 'Rally', key: 'rally' },
    { label: 'SUVS', key: 'suvs' },
]

const AvaiableCars = () => {
    const [activeKey, setActiveKey] = React.useState<string>(items[1].key);

    return (
        <FBox g={'1rem'} h={'100%'}>
            <Box w={'70%'} bg={BasicVar.bgCard.label} p={'2rem'} overflow={'auto'}>
                <Box mb={'1rem'}>
                    <Heading level={3}>Available Cars</Heading>
                </Box>
                <Tab items={items} activeKey={activeKey} setActiveKey={setActiveKey}>
                    <FBox wrap={'wrap'} m={'0 -0.5rem'}>
                        {CARSMOCKDATA.map((item: CarInfo, key: number) => (
                            <Box w={'33.3%'}>
                                <Card key={key} item={item} order={key}>
                                    <Price item={item} isSm />
                                    <FBox flex={1} vAlign={'center'} >
                                        <Img src={`/cars/${item.img}`} width={'100%'} />
                                    </FBox>
                                    <Box bg={BasicVar.bgCard.label} p={'0.5rem 2rem'}>
                                        <Text size={4}>{item.name}</Text>
                                    </Box>
                                </Card>
                            </Box>
                        ))}
                    </FBox>
                </Tab>
            </Box>
            <FBox fDir={'column'} h={'100%'} w={'30%'} bg={BasicVar.bgCard.label} p={'2rem'}>
                <FBox fDir={'column'} g={'0.5rem'} mb={'2rem'}>
                    <Text size={3}>Name Car</Text>
                    <Input />
                </FBox>
                <FBox fDir={'column'} g={'0.5rem'} mb={'2rem'}>
                    <Text size={3}>Model</Text>
                    <Input prefix="#" />
                </FBox>
                <FBox fDir={'column'} g={'0.5rem'} mb={'2rem'}>
                    <Text size={3}>special offer price</Text>
                    <Input prefix="$" />
                </FBox>
            </FBox>
        </FBox>
    )
}

export default AvaiableCars;
