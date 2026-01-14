import { MdOutlineMenu, MdCancel, MdShoppingCart, MdSearch, MdPerson } from "react-icons/md";
import { useHeader } from './UseHeader';
import Carousel from '../../ui/Carousel/Carousel ';

export default function Header() {
    const { 
        isMenuOpen, 
        cartCount, 
        navItems, 
        toggleMenu, 
        closeMenu 
    } = useHeader();
    
    return (
        <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-cyan-400">
                            TechStore
                        </a>
                    </div>
                    
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                            <MdSearch size={24} />
                        </button>
                        <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                            <MdPerson size={24} />
                        </button>
                        <button className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                            <MdShoppingCart size={24} />
                            
                        </button>
                    </div>
                    
                    <div className="md:hidden flex items-center space-x-3">
                        <button className="relative text-white">
                            <MdShoppingCart size={24} />
                           
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            {isMenuOpen ? <MdCancel size={28} /> : <MdOutlineMenu size={28} />}
                        </button>
                    </div>
                </div>
                
                {isMenuOpen && (
                    <div className="md:hidden pb-4 border-t border-slate-700 mt-2 pt-4">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-cyan-400 hover:bg-slate-800 px-3 py-2 rounded-md transition-colors duration-200"
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex space-x-3 pt-2 px-3">
                                <button className="flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-slate-800 px-4 py-2 rounded-md transition-colors duration-200 flex-1">
                                    <MdSearch size={20} className="mr-2" />
                                    Buscar
                                </button>
                                <button className="flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-slate-800 px-4 py-2 rounded-md transition-colors duration-200 flex-1">
                                    <MdPerson size={20} className="mr-2" />
                                    Cuenta
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            <Carousel />
        </header>
    );
}