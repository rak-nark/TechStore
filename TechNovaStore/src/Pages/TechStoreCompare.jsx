import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  Content,
  Breadcrumbs,
  CrumbLink,
  Divider,
  CrumbCurrent,
  PageHeader,
  HeadingBlock,
  Title,
  Subtitle,
  HeaderActions,
  GhostButton,
  PrimaryGhostButton,
} from "./Styled.TechStoreCompare";
import ComparisonTable from "../Componets/layout/Compare/ComparisonTable";
import RelatedProducts from "../Componets/layout/Compare/RelatedProducts";
import { MdShare, MdContentCopy } from "react-icons/md";

const TechStoreCompare = () => {
  const navigate = useNavigate();
  const [showDifferences, setShowDifferences] = useState(true);

  const products = [
    {
      id: 1,
      name: 'MacBook Pro 14"',
      subtitle: "Apple M3 Pro Chip",
      price: "$1,999",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA3QziTZn_CstKzFBGie2tVIsUbxOoKVrvmBCU6Kn-qP_TH7OiddTI-9F4HBgiWI2vIiJFDROUBCSd-VCAa0vfcdsZ5_LtUNiFlVs4NhNI69ohr7dcRz2zlxuwXMFpNh9ZKbvH96u_sPL1kd5uK82APhr9DTIJUaRoe5F6pLCldrvi-QbY08bhZQ6663neAG7vzTPpuqp0c9XNURe9cQS68sjHF6i-5j4gs92VfSOujpOgxGR8Sn3v81Dnkz-PE28pLNtGBNNHYJIzv",
    },
    {
      id: 2,
      name: "Dell XPS 15",
      subtitle: "Core i9 13th Gen",
      price: "$2,299",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCDX49FKMAdOK2ANFHKSaxOP7V9JiafTcIgYWR3wPWgCB0dH9byB8csoBZxT7OxA2yT-Qf6vC2vYvhChJMna4-XxB5XdiW1GCAFHUgQBha4JUkeqYpceXRI9AdDC7EBBkp5Lv-VNEWfQ2hx2GyDaZ3PpaMhfuA8L4P02L0sGbOLs1LTjWaJEdfm_FdS-E3Y9nO8p1Y_AxpthLbKP27SpBEl6LuUkSNTAxULMseRuV5JiYXgua-gatR2d23JP0BVEIsi8v5HkxNQVvi-",
    },
    {
      id: 3,
      name: "Razer Blade 14",
      subtitle: "AMD Ryzen 9 7000",
      price: "$1,899",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBOKIBdDsI9LfZtsMg7-Fnqa4qSVWid41uBO9-iHJijz8DdusEzuhZMCDIjKtvSs7SMu675-VAV3itHB-jabL_M8L0aq-GLKqK9q54y25Au8yIMS__wi1Y_wEnayh8o2xj8uVmhkYZvqIq_kRvwBmWAY0p58YO3AEBLe4pdcwgkpV_0CPM4yjBCxUrdXbqXqCMvXVaZPZtLpIN4YJXSSeI7h1Ivxvf3f7yPE0d5UXwzAtAsBiuxU52kI8hadJdfLbFNxnerfK2Jaa2c",
    },
  ];

  const sections = [
    {
      key: "performance",
      title: "Performance Specs",
      rows: [
        {
          label: "Processor",
          values: [
            "Apple M3 Pro (11-core CPU)",
            "Intel Core i9-13900H (14-core)",
            "AMD Ryzen 9 7940HS (8-core)",
          ],
        },
        {
          label: "RAM",
          values: [
            "18GB Unified Memory",
            "32GB DDR5 (5200MHz)",
            "16GB DDR5 (5600MHz)",
          ],
        },
        {
          label: "Graphics",
          values: [
            "14-core Apple GPU",
            "NVIDIA GeForce RTX 4070 (8GB)",
            "NVIDIA GeForce RTX 4060 (8GB)",
          ],
        },
      ],
    },
    {
      key: "display",
      title: "Display & Build",
      rows: [
        {
          label: "Screen",
          values: [
            '14.2" Liquid Retina XDR (120Hz)',
            '15.6" 3.5K OLED Touch (60Hz)',
            '14" QHD+ (240Hz)',
          ],
        },
        {
          label: "Brightness",
          values: ["1600 nits (Peak HDR)", "400 nits", "500 nits"],
        },
        {
          label: "Weight",
          values: [
            "3.5 lbs (1.61 kg)",
            "4.2 lbs (1.92 kg)",
            "3.9 lbs (1.78 kg)",
          ],
        },
      ],
    },
    {
      key: "battery",
      title: "Battery & Ports",
      rows: [
        {
          label: "Battery Life",
          values: ["Up to 18 hours", "Up to 12 hours", "Up to 10 hours"],
        },
        {
          label: "Ports",
          values: [
            "3x TB4, HDMI, SD Card, MagSafe",
            "2x TB4, 1x USB-C 3.2, SD Slot",
            "2x USB-A 3.2, 2x USB-C, HDMI 2.1",
          ],
        },
      ],
    },
  ];

  const relatedProducts = [
    {
      id: 101,
      name: "Surface Laptop Studio 2",
      price: "$2,399",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBAZnV3qWw7JU0QwWnLYTf01AZHUna2eJkIMAjh8UjxNCdocG7yoc-6HWMuhBWIt6dSvCka-Sa3w7-KTncE9TqUjzdBWhVYlpKlu-4HyncyzwK-ccsb1RQZUVc5HRpCXvuxLd3UpZCoyMAI1SYsiHjrb8dZouxCZdVaPLNqlUspqd22qUkZhB0_Gi0jp44q4rUGHh6JRo6T-4J4gewxHSlTQT-w3GfPCtbPe1ADIDRN-4PGro7HXzrWZV2Np5_0WvRCxv99Z3Bnj6Sd",
      description: "Intel Core i7, 16GB RAM, 512GB SSD. Perfect for creatives.",
    },
    {
      id: 102,
      name: "ROG Zephyrus G14",
      price: "$1,599",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCEEDFQpxaYYNefDkcn8vA1H4KZgqmw30GJCmb5txeyXd_YjiKv168_SZLuLI6W6qnjH37gYAXVMAD21DA1An8Y_ZyiTcblhtaE5HmV_8w9pELDBwr_FkfqI7Ttah_ZSCb7ZTjtcH-wbxzW0XyEuxhWNdCCNkXEbkYGonUyftWiNB14_y7EaLlyHNuQx7ulw61tOFJss8nt6ISLFdIyIFKx4B8oKnwjZf5JbkMG_M45vuXyKj1Y9PDtuvD7qXY1XF0-iGTL4ja00vWq",
      description:
        "Ryzen 9, RTX 4070, Nebula HDR display. Ultra-portable gaming.",
    },
    {
      id: 103,
      name: "ThinkPad X1 Carbon",
      price: "$1,450",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBEtoT3Adloigtal-N4odEDoHJHLSE-jujWM-tNz2JSdY2zoBGtcD4DWb5k48ITVHy_0Z-rKOG00joEgOo3fPbm603pci0nQz0nOqfc8p9r3Ma-xMdZ4Q2GjmYNv19dz_Ydy7tGlUv15oGMWLFOOvIPNEo341uTlJ3xYzB5zmnEp51maKgCDT0kSXMg_AqbLvB2QwJj59DfLjiNKtTTKaFHEekVwRm_FcwjZd41YtVsl9z0De0so1O3nwcE8Netn6qyvdL6lfp3ew8Z",
      description: "The ultimate business machine. Carbon fiber chassis.",
    },
    {
      id: 104,
      name: 'MacBook Air 15"',
      price: "$1,299",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6hguOvYdzCQIO3ldupVNah3Yen1HYNqFih0o_U7sXCuSdYj732ttLQ4-gMRl6iVyAtkJnhlIaP5j3EwpZzfwWa-ZFYbk6dyqU7A2rN-P5vbu5lO7o-8W4oMKgsEs634nZTl9U3QuADI3rD9bPfkCDMSqYbmqyv1lelZuml0yNoMoGnb-s7xLf54hDgqwGrzALKagZtqYH7FFzLCT0LU5Bh18s7MFPlt5mNXin-i2oXu1lk8G4k39YH-mnQSS0PtsTL2IamGMyzuv",
      description: "Apple M2, 18-hour battery. Thin, light, powerful.",
    },
  ];

  const handleAddToCart = (productId) => {
    navigate("/cart");
  };

  const handleRemoveProduct = (productId) => {
    // Placeholder remove; in a real app we'd update state
    console.log("Remove product", productId);
  };

  return (
    <PageWrapper>
      <Content>
        <Breadcrumbs>
          <CrumbLink onClick={() => navigate("/")}>Home</CrumbLink>
          <Divider>/</Divider>
          <CrumbLink onClick={() => navigate("/catalog/laptops")}>
            Laptops
          </CrumbLink>
          <Divider>/</Divider>
          <CrumbCurrent>Comparison Tool</CrumbCurrent>
        </Breadcrumbs>

        <PageHeader>
          <HeadingBlock>
            <Title>Compare Laptops</Title>
            <Subtitle>
              Side-by-side technical specification analysis of premium devices.
            </Subtitle>
          </HeadingBlock>
          <HeaderActions>
            <GhostButton>
              <MdShare size={18} /> Share
            </GhostButton>
            <PrimaryGhostButton>
              <MdContentCopy size={18} /> Copy Comparison
            </PrimaryGhostButton>
          </HeaderActions>
        </PageHeader>

        <ComparisonTable
          products={products}
          sections={sections}
          showDifferences={showDifferences}
          onToggleDifferences={() => setShowDifferences((prev) => !prev)}
          onRemoveProduct={handleRemoveProduct}
          onAddToCart={handleAddToCart}
        />

        <RelatedProducts items={relatedProducts} onAdd={handleAddToCart} />
      </Content>
    </PageWrapper>
  );
};

export default TechStoreCompare;
