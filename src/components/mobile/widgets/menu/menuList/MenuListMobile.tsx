import { MenuItem } from "../../../../../contracts/entities/MenuItem";
import { MenuItemMobile, MenuItemMobileProps } from "./menuItem/MenuItemMobile";

export interface MenuListMobileProps {
    list: Array<MenuItem>;
}

export const MenuListMobile = (props: MenuListMobileProps) => {
    return (
        <>
			{props.list.map((item, itemIndex) => (
				<MenuItemMobile
					key={itemIndex}
					title={item.title}
					iconUrl={item.iconUrl}
					url={item.url}
				/>
			))}
		</>
    );
}