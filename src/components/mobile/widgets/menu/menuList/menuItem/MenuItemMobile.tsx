import './MenuItemMobile.css';

export interface MenuItemMobileProps {
	title: string;
	iconUrl: string;
	url: string;
}

export const MenuItemMobile = (props: MenuItemMobileProps) => {
    const handleOnClick = () => {
        window.location.href = props.url;
    }

    return (
        <button onClick={handleOnClick} >
            {props.iconUrl && <img src={props.iconUrl} alt={props.title} className='menu-item-icon-mobile' />}
            {props.title}
        </button>
    );
}