import React from "react";
import { Card } from "../../Componets/layout/Home/Card/Card";
import Categories from "../../Componets/layout/Home/Categories/Categories";
import BestSellers from "../../Componets/layout/Home/BestSellers/BestSellers";
import PromotionalBanner from "../../Componets/layout/Home/PromotionalBanner/PromotionalBanner";
import { Main } from "../../GlobalStyles";
import { bestSellers } from "../../Data/home";

export const TechStoreHomePage = () => {
  return (
    <Main>
      <Card imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDjOMIYCksbWbMUPCB2xNEBv8P39ai0-tfBJAS30hgl1lEW_peMDX-59E_4tbIIfBS_HPPGnx8ko6mbRyg_fp0RX_d79-j3FDEbs_BCULBl1ZKVE6HNs3LPiSBteYn3I_kzm4muBcbUVsUILmST9WZtsYBh2eEtP0GNfAndC_zztCN5ajigyRPTlngmPCRLh2NNzXCnBWAVjZlFFkEw0HtrD66OEfyGSApAim3jNxhew_7us2m6QTU4uPUzr0kvJSQL84oS5GnfgZRi" />
      <Categories />
      <BestSellers products={bestSellers} />
      <PromotionalBanner />
    </Main>
  );
};

export default TechStoreHomePage;
