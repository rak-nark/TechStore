import React from "react";
import { Card } from "../Componets/layout/Card/Card";
import Categories from "../Componets/layout/Categories/Categories";
import BestSellers from "../Componets/layout/BestSellers/BestSellers";
import PromotionalBanner from "../Componets/layout/PromotionalBanner/PromotionalBanner";
import Newsletter from "../Componets/layout/Newsletter/Newsletter";
import { Main } from "../Componets/styles/GlobalStyles";

export const TechStoreHomePage = () => {
  return (
    <Main>
      <Card imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDjOMIYCksbWbMUPCB2xNEBv8P39ai0-tfBJAS30hgl1lEW_peMDX-59E_4tbIIfBS_HPPGnx8ko6mbRyg_fp0RX_d79-j3FDEbs_BCULBl1ZKVE6HNs3LPiSBteYn3I_kzm4muBcbUVsUILmST9WZtsYBh2eEtP0GNfAndC_zztCN5ajigyRPTlngmPCRLh2NNzXCnBWAVjZlFFkEw0HtrD66OEfyGSApAim3jNxhew_7us2m6QTU4uPUzr0kvJSQL84oS5GnfgZRi" />
      <Categories />
      <BestSellers />
      <PromotionalBanner />
      <Newsletter />
    </Main>
  );
};

export default TechStoreHomePage;
