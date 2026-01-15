import { Header } from "../components/layout/Header/Header.jsx";
import { SearchBar } from "../components/ui/SearchBar.jsx";
import { PromoCarousel } from "../components/PromoCarousel.jsx";
import { CategoriesGrid } from "../components/CategoriesGrid.jsx";
import { NewArrivals } from "../components/NewArrivals.jsx";
import { BestSellers } from "../components/BottomNavigation.jsx";
import { BottomNavigation } from "../components/BottomNav.jsx";

export const HomeDesktop = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-20">
      <Header />

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
