import Tab from "components/tab";
import React from "react";
import FBox from "elements/fbox";
import { CARSMOCKDATA } from "constants/document";
import Card from "components/card";
import Text from "elements/text";
import { BasicVar, DefaultColor } from "styles/variables";
import Icon from "components/icon";
import { Box } from "elements";
import Img from "elements/img";
import Price from "components/price";
import ClipBox from "components/clip-box";

const items = [
    { label: 'Compacts', key: 'compacts' },
    { label: 'Motorcycles', key: 'motorcycles' },
    { label: 'Muscle', key: 'muscle' },
    { label: 'Off-Road', key: 'off-road' },
    { label: 'Rally', key: 'rally' },
    { label: 'SUVS', key: 'suvs' },
]

const SpecialOffers = () => {
    const [activeKey, setActiveKey] = React.useState<string>(items[1].key);

    return (
        <Tab items={items} activeKey={activeKey} setActiveKey={setActiveKey}>
            <FBox wrap={'wrap'} m={'0 -0.5rem'} pr={'1rem'} gy={'1rem'}>
                {/* CARSMOCKDATA filter with activeKey */}
                {CARSMOCKDATA.map((item: CarInfo, key: number) => (
                    <Box w={'33.3%'}>
                        <Card key={key} item={item} order={key} >
                            <Box position={'absolute'} top={'0'} right={'0'}>
                                <Price item={item} />
                            </Box>
                            <FBox p={'1rem 0'} flex={1} vAlign={'center'} >
                                <Img src={`/cars/${item.img}`} width={'100%'} />
                            </FBox>
                            <Box bg={BasicVar.bgCard.label} p={'1rem 2rem'}>
                                <Text size={2}>{item.name}</Text>
                            </Box>
                            <Box p={'1rem 2rem'} bg={BasicVar.color.label} overflow={'auto'}>
                                <FBox g={'0.8rem'}>
                                    <FBox vAlign={'center'} g={'0.5rem'}>
                                        <ClipBox bg={DefaultColor.danger.label} p={'0.8rem 0.5rem'}>
                                            <Icon icon="Speed" width="26px" height="17px" />
                                        </ClipBox>
                                        <FBox fDir={'column'}>
                                            <Text color={BasicVar.bg.label} size={4} lh={1}>{item.speed}</Text>
                                            <Text size={6} color={BasicVar.color2.label} lh={1}>km/h</Text>
                                        </FBox>
                                    </FBox>
                                    <FBox vAlign={'center'} g={'0.5rem'}>
                                        <ClipBox bg={DefaultColor.danger.label} p={'0.8rem 0.5rem'}>
                                            <Icon icon="Speed" width="26px" height="17px" />
                                        </ClipBox>
                                        <FBox fDir={'column'}>
                                            <Text color={BasicVar.bg.label} size={4} lh={1}>{item.speed}</Text>
                                            <Text size={6} color={BasicVar.color2.label} lh={1}>Acceleration</Text>
                                        </FBox>
                                    </FBox>
                                    <FBox vAlign={'center'} g={'0.5rem'}>
                                        <ClipBox bg={DefaultColor.danger.label} p={'0.8rem 0.5rem'}>
                                            <Icon icon="Speed" width="26px" height="17px" />
                                        </ClipBox>
                                        <FBox fDir={'column'}>
                                            <Text color={BasicVar.bg.label} size={4} lh={1}>{item.speed}</Text>
                                            <Text size={6} color={BasicVar.color2.label} lh={1}>Braking</Text>
                                        </FBox>
                                    </FBox>
                                    <FBox vAlign={'center'} g={'0.5rem'}>
                                        <ClipBox bg={DefaultColor.danger.label} p={'0.8rem 0.5rem'}>
                                            <Icon icon="Speed" width="26px" height="17px" />
                                        </ClipBox>
                                        <FBox fDir={'column'}>
                                            <Text color={BasicVar.bg.label} size={4} lh={1}>{item.speed}</Text>
                                            <Text size={6} color={BasicVar.color2.label} lh={1}>Control</Text>
                                        </FBox>
                                    </FBox>
                                </FBox>
                            </Box>
                        </Card>
                    </Box>
                ))}
            </FBox>
        </Tab>
    )
}

export default SpecialOffers;
