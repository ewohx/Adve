import { Routes, Route } from 'react-router-dom';
import { NotFoundMobile } from '../pages/notFound/NotFoundMobile';
import './AppMobile.css';
import { HeaderMobile } from '../widgets/header/HeaderMobile';
import { MainMobile } from '../pages/main/MainMobile';
import { MenuMobile } from '../widgets/menu/MenuMobile';
import { useEffect, useState } from 'react';
import { AboutMobile } from '../pages/about/AboutMobile';
import { LocationsListMobile } from '../pages/locationsList/LocationsListMobile';
import { LocationMobile } from '../pages/location/LocationMobile';

export const AppMobile = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [overflowedCount, setOverflowedCount] = useState<number>(0);

    useEffect(() => {
        if (overflowedCount > 0) {
            document.body.classList.add('overflowed');
        }
        else {
            document.body.classList.remove('overflowed');
        }
    }, [overflowedCount]);

    const handleOnOpenMenu = () => {
        setIsMenuOpen(true);
        setOverflowedCount(prev => prev + 1);
    }

    const handleOnCloseMenu = () => {
        setIsMenuOpen(false);
        setOverflowedCount(prev => prev - 1);
    }
    
    return (
        <div className={`app-mobile`}>
            <HeaderMobile onMenuOpen={handleOnOpenMenu} />
            <MenuMobile isOpen={isMenuOpen} onClose={handleOnCloseMenu} />
            <div
                className={`page-content-mobile`}
            >
                <Routes>
                    <Route path="/" element={<MainMobile />} />
                    <Route path="/locations" element={<LocationsListMobile />} />
                    <Route path="/locations/:locationUrl" element={<LocationMobile />} />
                    <Route path="/about" element={<AboutMobile />} />
                    <Route path="*" element={<NotFoundMobile />} />
                </Routes>
            </div>
        </div>
    );
}