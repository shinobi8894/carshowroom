import React from "react";
import { Box } from "elements";
import { Link, Outlet } from "react-router-dom";
import { NavWrapper, NavItemWrapper, Badge } from "./styles/mainpage.styled";
import FBox from "elements/fbox";
import Icon from "components/icon";

const navItems: MenuItemType[] = [
	{ label: 'All Categor',		key: '', 				badge: 15 },
	{ label: 'Compacts',		key: 'compacts', 		badge: 3 },
	{ label: 'Motorcycles',		key: 'motorcycles', 	badge: 32 },
	{ label: 'Muscle',			key: 'muscle', 			badge: 155 },
	{ label: 'Off-Road',		key: 'off-road', 		badge: 34 },
	{ label: 'Rally',			key: 'rally', 			badge: 54 },
	{ label: 'SUVS',			key: 'suvs', 			badge: 5 },
	{ label: 'Specil Edition',	key: 'specil-edition', 	badge: 11 },
	{ label: 'Compacts',		key: 'compacts1', 		badge: 15 },
	{ label: 'Motorcycles',		key: 'motorcycles1', 	badge: 15 },
	{ label: 'Muscle',			key: 'muscle1', 		badge: 15 },
	{ label: 'Off-Road',		key: 'off-road1', 		badge: 15 },
]

interface NavItemProps {
	item: MenuItemType
	activeKey: string
	setActiveKey: any
}

const NavItem = ({ item, activeKey, setActiveKey }: NavItemProps) => {

	return (
		<NavItemWrapper active={item.key === activeKey}>
			<Link to={item.key || ''} onClick={() => setActiveKey(item.key)}>
				<FBox hAlign={'space-between'}>
					{item.label}
					<FBox vAlign={'center'} g={'1rem'}>
						<Badge>{item.badge}</Badge>
						<Icon icon="ArrowRight" width="10px" height="10px" />
					</FBox>
				</FBox>
			</Link>
		</NavItemWrapper>
	)
}

const MainPage = () => {
	const [activeKey, setActiveKey] = React.useState(navItems[0].key);

	return (
		<FBox h={'100%'}>
			<Box as={'nav'} overflow={'auto'} h={'100%'} minW={'17rem'}>
				<NavWrapper>
					{navItems.map((item: MenuItemType, key) => (
						<NavItem key={key} item={item} activeKey={activeKey} setActiveKey={setActiveKey} />
					))}
				</NavWrapper>
			</Box>
			<Box p={'0 1rem'} flex={1} overflow={'auto'} >
				<Outlet />
			</Box>
		</FBox>
	)
}

export default MainPage;
