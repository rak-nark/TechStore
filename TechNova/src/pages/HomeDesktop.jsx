import { SearchBar } from "../components/HomeComponents/SearchBar.jsx";
import { PromoCarousel } from "../components/HomeComponents/PromoCarousel.jsx";
import { CategoriesGrid } from "../components/HomeComponents/CategoriesGrid.jsx";
import { NewArrivals } from "../components/HomeComponents/NewArrivals.jsx";
import { BestSellers } from "../components/HomeComponents/BestSellers.jsx";
import { BottomNavigation } from "../components/CatalogoComponents/BottomNavigation.jsx";

export const HomeDesktop = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-20">
      <main className="max-w-md mx-auto">
        <SearchBar />
        <PromoCarousel />
        <CategoriesGrid />
        <NewArrivals />
        <BestSellers />
      </main>

      <BottomNavigation />
    </div>
  );
};

export default HomeDesktop;
