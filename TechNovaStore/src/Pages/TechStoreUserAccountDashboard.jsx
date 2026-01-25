import React from "react";
import Sidebar from "../Componets/layout/UserDashboard/Sidebar/Sidebar";
import PageHeadingSection from "../Componets/layout/UserDashboard/PageHeadingSection/PageHeadingSection";
import LoyaltySection from "../Componets/layout/UserDashboard/LoyaltySection/LoyaltySection";
import StatsColumnSection from "../Componets/layout/UserDashboard/StatsColumnSection/StatsColumnSection";
import RecentOrdersTable from "../Componets/layout/UserDashboard/RecentOrdersTable/RecentOrdersTable";
import SupportGridSection from "../Componets/layout/UserDashboard/SupportGridSection/SupportGridSection";
import {
  DashboardContainer,
  MainContent,
  GridSection,
} from "./Styled.TechStoreUserAccountDashboard";
import { MdLocalShipping, MdVerified, MdSupportAgent } from "react-icons/md";

const TechStoreUserAccountDashboard = () => {
  const userData = {
    name: "Alex Rivera",
    membership: "Pro Member",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBsEPG77fA2cIG-e-DWFTiCqgZYC-25pA3w7hjsEEvM5Ad3k1RjjemwVPebd8KESkHwfZUO0IcHttfqaSZK61MSchm4U2V5RE2FWHpIEpd8dzVty0UGKq-zjlZPdYjqdc6tXypcaMv4_qRtWMVI-cl15bloLAJGqqLG_x5ZL2n_wfRqvgV_K7uUjyjQQ8toDk-9SqohYM1ATosZGFDrNWxH-orAYa4uToPLU7vxYisueFleGFkzqCpJ2QTwNS1vUiJZj5Pb_zgc2Q86",
  };

  const loyaltyData = {
    points: 2450,
    targetPoints: 3000,
    status: "Platinum",
    pointsAway: 550,
  };

  const stats = [
    {
      label: "Pending Shipments",
      value: "02",
      icon: MdLocalShipping,
      color: "#3b82f6",
    },
    {
      label: "Active Warranties",
      value: "14",
      icon: MdVerified,
      color: "#10b981",
    },
    {
      label: "Open Tickets",
      value: "01",
      icon: MdSupportAgent,
      color: "#f97316",
    },
  ];

  const recentOrders = [
    {
      id: "#TX-88291",
      product: "Razer Blade 15 + Mouse",
      date: "Oct 12, 2023",
      total: "$2,499.00",
      status: "Shipped",
      statusColor: "#3b82f6",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCg8fJj3kxiE2Dt5MoSXeayx8JDCbdDadMtGlNfV8MdV54P-XixxjTdiA3uRojkv0MxscET3j3d5h1bQ8lR0Kt9aYNggjFLWl2vZ73GuxC6CCGm-TOMhgkmWvhsjDtR3eT3JsOr2t47KGxyPTYt8kY1plKxjbMw_RukOtiXxILR-Q9Hj1FUzJk553KRnnIHRXLjRpLA0Nu27s38c961NoXWrhhDjztFkgxTnkUFu06-QKCFv30WzKLwZAIJC7pSbXSIJ1M9L7athtRn",
      actionLabel: "Track",
    },
    {
      id: "#TX-88104",
      product: "iPhone 15 Pro Max",
      date: "Sep 28, 2023",
      total: "$1,199.00",
      status: "Delivered",
      statusColor: "#10b981",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB7fNQ56Ygr8Dh9uJNiFE2rabhmGRwnGfy0gLg4x_dNWddKSrVgjH-vtXWc8rX4Qj40__5WJ8mKYnn3NFMF8XMWbrP3htRHP2T9_G7iYeBxS2HkE0aKXfgFEdOUhGEPJQEqAD0htNMP1zR7K9DycHZpP_Go87aySVFVL3GiLs0aEOYnpgdpQlzEpVsbjERf4ounSktT2rSWLC9crQQDfUchA6fTRo-GmA5j7JVdKbCUFbBakmLOoWKERw7eiMO3RckvGG5PNZeEZ_WG",
      actionLabel: "Invoice",
    },
    {
      id: "#TX-87955",
      product: "Sony WH-1000XM5",
      date: "Sep 15, 2023",
      total: "$349.00",
      status: "Delivered",
      statusColor: "#10b981",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDpQ4s9px-0TUu5XK8BFsoGzoby_FESLENPfJxsp_CdpU0MC-_DENd5ZNN3XKXTxWS5f-lLJETiwsVL5i_xjBuUo9xS_8YfExhmIsrEr7_oNSLPYKqzA0BVHHK06b31By5Xju6WWHcu7kg6FG3vyXEQiOPqOPOtQgGkmj5h7RwpSPbygiul00o27GBK_EHTkI7ccW3ij5SskBVjegSWIP7Mlp4i3M9rrG0_akL3GNnsH1NA713AluRQL6TRx9KMAlnmAdzUOP6fyGOo",
      actionLabel: "Invoice",
    },
  ];

  return (
    <DashboardContainer>
      <div
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <Sidebar userData={userData} />
        <MainContent>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              paddingBottom: "3rem",
            }}
          >
            <PageHeadingSection userName={userData.name.split(" ")[0]} />
            <GridSection>
              <LoyaltySection loyaltyData={loyaltyData} />
              <StatsColumnSection stats={stats} />
            </GridSection>
            <RecentOrdersTable recentOrders={recentOrders} />
            <SupportGridSection />
          </div>
        </MainContent>
      </div>
    </DashboardContainer>
  );
};

export default TechStoreUserAccountDashboard;
