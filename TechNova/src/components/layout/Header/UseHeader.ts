import { useState } from 'react';

interface NavItem {
    name: string;
    href: string;
}

export const useHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(3);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    const navItems: NavItem[] = [
        { name: 'Audífonos', href: '#audifonos' },
        { name: 'Laptops', href: '#laptops' },
        { name: 'Smartphones', href: '#smartphones' },
        { name: 'Accesorios', href: '#accesorios' },
        { name: 'Ofertas', href: '#ofertas' }
    ];



    return {
        isMenuOpen,
        cartCount,
        navItems,
        toggleMenu,
        closeMenu,
    };
};