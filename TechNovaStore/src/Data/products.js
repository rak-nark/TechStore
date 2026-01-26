// Centralized product entities and helpers

export const PRODUCTS = {
  // BestSellers products (IDs 101-104)
  101: {
    id: 101,
    brand: "Sonic",
    name: "Sonic X-10 Wireless Headphones",
    cardTitle: "Sonic X-10 Wireless",
    shortDescription:
      "Pure studio quality audio with active noise cancellation technology.",
    badge: "Sale",
    category: "Audio",
    rating: 4.5,
    reviewCount: 42,
    price: 1195000,
    oldPrice: 1395000,
    inStock: true,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnRkNMYEHMLWxL31XX7j6e8EbOaOYV2qk8JdArdeg3LobAmw0ZbmkteSvtRIScyuunaQ6u9wWNbVa2Y8s5ZdrmW46XfPkijrHUuwD6uGV-4RWU7Hubl9vIHQoNzw_ILDxR80c54wFBw7CqzXXdXqyPva_eXv9v9xY0qwIzzaBqtb9JFpah4vaiLB7XpX-OzKofzWa6xuakvCkUXmZ6n7OQR0SGWxeHySm8Q8GNvAIj0wImH3cHaAlqIG7RB0HPqz9Jfg2Wt9i7toQd",
    ],
    colors: [
      { name: "Black", value: "black", hex: "#000000" },
      { name: "Silver", value: "silver", hex: "#c0c0c0" },
      { name: "Blue", value: "blue", hex: "#0066cc" },
    ],
    storageOptions: [],
    specs: [
      { label: "Driver Size", value: "40mm Dynamic" },
      { label: "Frequency Response", value: "20Hz - 20kHz" },
      { label: "Impedance", value: "32 Ohms" },
      { label: "Bluetooth", value: "5.3 with aptX HD" },
      { label: "Battery Life", value: "Up to 30 hours" },
      { label: "Noise Cancellation", value: "Active ANC" },
    ],
    compareTo: ["Sony WH-1000XM5", "Bose QC45"],
    comparisons: [
      {
        feature: "Price",
        current: "$1,195,000",
        products: ["$1,495,000", "$1,395,000"],
        currentHighlight: true,
      },
      { feature: "Battery", current: "30h", products: ["30h", "24h"] },
      { feature: "Weight", current: "250g", products: ["254g", "240g"] },
      { feature: "ANC", current: "check", products: ["check", "check"] },
    ],
  },
  102: {
    id: 102,
    brand: "Vortex",
    name: "Vortex G-Pro Gaming Mouse",
    cardTitle: "Vortex G-Pro Mouse",
    shortDescription:
      "Ultra-responsive gaming mouse with customizable RGB lighting and weights.",
    badge: null,
    category: "Gaming",
    rating: 5,
    reviewCount: 128,
    price: 356000,
    inStock: true,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_1Ud5QR59uTDHTeTjB8SO-YjGFXx4YfTkuStR6y1OC66G1tKh_iv2HtqTVebz0aIA73npxqoNSFHcCYKRFwlNqL9V35458nyqsDCWjEyVTDNlCAWeIowHzER1me04z_masi-vJaEt-Mz4OHLOIVQIu_LJhO0KD_k-pC7dFjGhx-o5agNvyGvTnY39vXwT5_JwQGjcdCuC8q7LIlnpfkbhyLKCF9WzleuMBGC8lE0N6ifqpG-4_dkQU5yOJynRRG9_-vc4-tz5GyQl",
    ],
    colors: [
      { name: "Black", value: "black", hex: "#000000" },
      { name: "White", value: "white", hex: "#ffffff" },
    ],
    storageOptions: [],
    specs: [
      { label: "Sensor", value: "PixArt PMW3395" },
      { label: "DPI Range", value: "100 - 26,000" },
      { label: "Polling Rate", value: "1000Hz" },
      { label: "Switches", value: "Omron 80M" },
      { label: "Weight", value: "63g ultralight" },
      { label: "RGB Lighting", value: "16.8M colors" },
    ],
    compareTo: ["Logitech G Pro X", "Razer DeathAdder V3"],
    comparisons: [
      {
        feature: "Price",
        current: "$356,000",
        products: ["$459,000", "$379,000"],
        currentHighlight: true,
      },
      { feature: "DPI", current: "26,000", products: ["25,600", "30,000"] },
      {
        feature: "Weight",
        current: "63g",
        currentHighlight: true,
        products: ["63g", "59g"],
      },
      { feature: "Wireless", current: "check", products: ["check", "check"] },
    ],
  },
  103: {
    id: 103,
    brand: "Apple",
    name: "iPhone 15 Pro Max",
    cardTitle: "iPhone 15 Pro Max",
    shortDescription:
      "Titanium design, A17 Pro chip, and the most powerful iPhone camera system.",
    badge: "New",
    category: "Smartphones",
    rating: 4,
    reviewCount: 15,
    price: 4795000,
    inStock: true,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBo60gOhke02hU-VYdGZdy7bebc2nuMdjq3ZJ051GFiKAQepEX4__jxQryROpGUpKiic5GUjUI5TNaL9T2qpI06QQ-U3HZZ1CEQ0Ro-yYYVBBEA5jJGDfIdrtCaER-WJV9PU2QFWQ7kUbkTrXt6AN45ZkoQkliN0Ji4L5oWy8Il4IOUPYi0-_7CzVcxUs4gRBZgjajLOFyMSH-lsP4E0yqKYopKXiSb1gwg5Mt0jlKGH0J0xFmE3QxQgDThXCJgcBrOz0GJX6t3SL_1",
    ],
    colors: [
      { name: "Natural Titanium", value: "natural", hex: "#8c8c8c" },
      { name: "Blue Titanium", value: "blue", hex: "#4a5a6a" },
      { name: "White Titanium", value: "white", hex: "#e5e5e5" },
      { name: "Black Titanium", value: "black", hex: "#2c2c2c" },
    ],
    storageOptions: [
      { label: "256GB", value: "256gb" },
      { label: "512GB", value: "512gb" },
      { label: "1TB", value: "1tb" },
    ],
    specs: [
      { label: "Chip", value: "A17 Pro (3nm)" },
      { label: "Display", value: '6.7" Super Retina XDR' },
      { label: "Camera System", value: "48MP Main + 12MP Ultra Wide" },
      { label: "Video", value: "4K60 ProRes" },
      { label: "Battery", value: "Up to 29 hours video" },
      { label: "Material", value: "Titanium Design" },
    ],
    compareTo: ["Samsung S24 Ultra", "Google Pixel 8 Pro"],
    comparisons: [
      {
        feature: "Price",
        current: "$4,795,000",
        products: ["$5,195,000", "$3,995,000"],
      },
      { feature: "Display", current: '6.7"', products: ['6.8"', '6.7"'] },
      {
        feature: "Chip Score",
        current: "16,800",
        currentHighlight: true,
        products: ["14,200", "13,800"],
      },
      { feature: "5G", current: "check", products: ["check", "check"] },
    ],
  },
  104: {
    id: 104,
    brand: "Titan",
    name: "Titan Smart Watch Pro",
    cardTitle: "Titan Smart Watch",
    shortDescription:
      "Monitor your health metrics and stay connected with this premium wearable.",
    badge: null,
    category: "Wearables",
    rating: 4,
    reviewCount: 89,
    price: 1395000,
    inStock: true,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJz2ol-euX4sVjBouXSfKLfagaYSokglWLM5e7KnvydK-KgOarfpikM_nT9LQRhLBiofazsHvU3zHXIzBKKfp1BBPzqPbSuJaK10ZxIma1bSfH4G4K7fo-UOyqGEHqrAKMFlOZib5lh3bBoMLM9m7UWEK6EDlX298IgaL6EsTqlJIiqMZIvqb7g2CTSpRu4Td76gebqd9gHBfOef6nujCXLZG00X9PErtuQGcIuHADXyhgqYZtoiEus-nVo23goIZeQeFvumDsAgH2",
    ],
    colors: [
      { name: "Midnight", value: "midnight", hex: "#191970" },
      { name: "Starlight", value: "starlight", hex: "#faf0e6" },
      { name: "Silver", value: "silver", hex: "#c0c0c0" },
    ],
    storageOptions: [],
    specs: [
      { label: "Display", value: '1.9" AMOLED Always-On' },
      { label: "Health Sensors", value: "Heart Rate, ECG, SpO2" },
      { label: "Fitness Tracking", value: "100+ Workout Modes" },
      { label: "GPS", value: "Dual-band GPS" },
      { label: "Battery", value: "Up to 18 days" },
      { label: "Water Resistance", value: "5ATM + IP68" },
    ],
    compareTo: ["Apple Watch Series 9", "Galaxy Watch 6"],
    comparisons: [
      {
        feature: "Price",
        current: "$1,395,000",
        currentHighlight: true,
        products: ["$1,795,000", "$1,495,000"],
      },
      {
        feature: "Battery",
        current: "18 days",
        currentHighlight: true,
        products: ["18h", "40h"],
      },
      { feature: "Display", current: '1.9"', products: ['1.9"', '1.5"'] },
      { feature: "GPS", current: "check", products: ["check", "check"] },
    ],
  },

  // Catalog Laptops (IDs 1-6)
  1: {
    id: 1,
    brand: "Apple",
    name: 'MacBook Pro 14" M3 Chip',
    shortDescription:
      "8-core CPU, 10-core GPU, 8GB Unified Memory, 512GB SSD Storage, Liquid Retina XDR.",
    badge: "New",
    badges: ["New", "In Stock"],
    category: "Laptops",
    rating: 4.8,
    reviewCount: 1240,
    price: 5995000,
    oldPrice: 6395000,
    inStock: true,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGKyxw3qREtNjQNVS0HYlChrFUC_WtS-6NU_dJB045P1rM9l2Ni_F6QnOFRJ5ozZbWbe6nAgEiWlH8IvBN7HUBO0p2K0FXC96AZIC-_15OpT66GRACkHp7hFnw0AjBVvPV229F00AF0srGCrmwtlat9oE5g6M8IqJ6fyMRBrIRqV2emT5PxeKvZXsRCTf5YwgDLawkYZySOL6AGP-5JFWcJVGwJK9Yy_wCQGZ6LANLLoky-XW28K4HBR-FCy-k-KrB3LwX5zFVBIvc",
    ],
    colors: [
      { name: "Space Gray", value: "gray", hex: "#2c2c2e" },
      { name: "Silver", value: "silver", hex: "#c0c0c0" },
    ],
    storageOptions: [
      { label: "512GB", value: "512gb" },
      { label: "1TB", value: "1tb" },
      { label: "2TB", value: "2tb" },
    ],
    specs: [
      { label: "Processor", value: "Apple M3 Chip - 8-core CPU" },
      { label: "Graphics", value: "10-core GPU" },
      { label: "Display", value: '14.2" Liquid Retina XDR' },
      { label: "Memory", value: "8GB Unified Memory" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Battery", value: "Up to 17 hours" },
    ],
    compareTo: ["Dell XPS 13", "Razer Blade 14"],
    comparisons: [
      {
        feature: "Price",
        current: "$5,995,000",
        products: ["$5,195,000", "$11,195,000"],
      },
      { feature: "Weight", current: "1.6kg", products: ["1.2kg", "1.8kg"] },
      {
        feature: "CPU Score",
        current: "18,240",
        currentHighlight: true,
        products: ["14,120", "16,200"],
      },
      {
        feature: "Thunderbolt",
        current: "check",
        products: ["check", "check"],
      },
    ],
  },
  2: {
    id: 2,
    brand: "Dell",
    name: "Dell XPS 13 Plus",
    shortDescription:
      'Intel Core i7, 16GB RAM, 1TB SSD, 13.4" 4K OLED Touch Display, Platinum Gray.',
    badge: "Hot Deal",
    badges: ["Hot Deal", "In Stock"],
    category: "Laptops",
    rating: 4.6,
    reviewCount: 892,
    price: 5195000,
    inStock: true,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ7Rgp5rhXgzQVxy0_vYqdfwDCYbRx3k3yphhRqpljwjGW-iTP8hxa-wpgx7espoE0AmxXf7AxsNX3hr71me-NDJEmnOwmcD792pfZD-KMgRKRlbXsYuX2CZKkMEkXu-O1DFiQEC6_7HQIHEuH8C-wexxrNJV83u0JdhQRhM6HUdzJcSf2YNrYJI6ngz-2uK9piW56HZOike3tXy0vVWKtjgFWZ-J3AtKogxU-S8EHdHnG_hSnlvNVppp-D53iqE2Ob6tMwuPpK_4_",
    ],
    colors: [
      { name: "Platinum", value: "platinum", hex: "#e8e8e8" },
      { name: "Graphite", value: "graphite", hex: "#3c3c3c" },
    ],
    storageOptions: [
      { label: "512GB", value: "512gb" },
      { label: "1TB", value: "1tb" },
    ],
    specs: [
      { label: "Processor", value: "Intel Core i7-1360P" },
      { label: "Graphics", value: "Intel Iris Xe Graphics" },
      { label: "Display", value: '13.4" 4K OLED Touch' },
      { label: "Memory", value: "16GB LPDDR5" },
      { label: "Storage", value: "1TB SSD" },
      { label: "Battery", value: "Up to 12 hours" },
    ],
    compareTo: ["MacBook Pro 14", "Surface Laptop 5"],
    comparisons: [
      {
        feature: "Price",
        current: "$5,195,000",
        products: ["$5,995,000", "$3,995,000"],
      },
      { feature: "Weight", current: "1.2kg", products: ["1.6kg", "1.3kg"] },
      {
        feature: "CPU Score",
        current: "14,120",
        products: ["18,240", "11,400"],
      },
      {
        feature: "Touch Screen",
        current: "check",
        products: [],
        currentHighlight: true,
      },
    ],
  },
  3: {
    id: 3,
    brand: "Razer",
    name: "Razer Blade 15 Gaming",
    shortDescription:
      "RTX 4070, Core i9, 32GB RAM, 1TB SSD, 240Hz QHD+ Display, Chroma RGB.",
    badge: "Low Stock",
    badges: ["Low Stock"],
    category: "Laptops",
    rating: 4.7,
    reviewCount: 654,
    price: 11195000,
    inStock: true,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9E-gcgtMpbFIHQ8uB-xLjee6LyG02S-6WVw4z0F_zshpC2b3aFUEXSTZmTKq1jO-7faZLZhFocgW84pRaBUik8679nZ3XcSY1xc5MVkKgYfuvxYqSBvLH-J9oKYClZMaj0B1WyXs7qlCPogIxMd6oPxxYstl0ZfovzS3K6scneI4DjdKjjiBDjILVt5rJIGmfC09dEAIIzdBptHycG8MpDIKYHWqPFY9qE_b3oZ1HQOgZgUBnn93yhOoWORb-aiyQgJJ73QR0oV9G",
    ],
    colors: [
      { name: "Black", value: "black", hex: "#000000" },
      { name: "Mercury White", value: "white", hex: "#f5f5f5" },
    ],
    storageOptions: [
      { label: "512GB", value: "512gb" },
      { label: "1TB", value: "1tb" },
      { label: "2TB", value: "2tb" },
    ],
    specs: [
      { label: "Processor", value: "Intel Core i9-13900H" },
      { label: "Graphics", value: "NVIDIA RTX 4070 8GB" },
      { label: "Display", value: '15.6" 240Hz QHD+' },
      { label: "Memory", value: "32GB DDR5" },
      { label: "Storage", value: "1TB NVMe SSD" },
      { label: "RGB", value: "Chroma RGB per-key" },
    ],
    compareTo: ["ASUS ROG Zephyrus", "MSI Stealth"],
    comparisons: [
      {
        feature: "Price",
        current: "$11,195,000",
        products: ["$7,395,000", "$9,500,000"],
      },
      { feature: "Weight", current: "2.0kg", products: ["1.7kg", "1.9kg"] },
      {
        feature: "GPU Score",
        current: "12,840",
        currentHighlight: true,
        products: ["9,400", "10,200"],
      },
      {
        feature: "RGB Lighting",
        current: "check",
        products: ["check", "check"],
      },
    ],
  },
  4: {
    id: 4,
    brand: "ASUS",
    name: "ASUS ROG Zephyrus G14",
    shortDescription:
      'Ryzen 9, RTX 4060, 16GB RAM, 1TB SSD, 14" Nebula Display, Moonlight White.',
    badge: "In Stock",
    badges: ["In Stock"],
    category: "Laptops",
    rating: 4.5,
    reviewCount: 432,
    price: 7395000,
    inStock: true,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChugQznoMxkY16-58NUkwJ3MBOy3MPkplpXNieOsMbkqLxEih6MhSMBNLuS630I0LAZyG_dj9w89qUbbdWKi7RthYsu0wskOHg03zNdrgQeEox5J4iGO4fLZeZOKe8NijHcdHCcfMSwEDWtfE-ZP6-60sQvGMx_USK12OEZIihL4mjfhcGATUPWq_CmT7sXwzzWvCfcMh68rG8IEH_IM6-stnQ2eiHzttzwMLoo1Ni4U3rvPcn6jyZw5j5BAowuG4Z38EFzJiccleM",
    ],
    colors: [
      { name: "Moonlight White", value: "white", hex: "#f5f5f5" },
      { name: "Eclipse Gray", value: "gray", hex: "#3c3c3c" },
    ],
    storageOptions: [
      { label: "512GB", value: "512gb" },
      { label: "1TB", value: "1tb" },
    ],
    specs: [
      { label: "Processor", value: "AMD Ryzen 9 7940HS" },
      { label: "Graphics", value: "NVIDIA RTX 4060 8GB" },
      { label: "Display", value: '14" Nebula QHD+ 165Hz' },
      { label: "Memory", value: "16GB DDR5" },
      { label: "Storage", value: "1TB NVMe SSD" },
      { label: "Weight", value: "1.7kg ultraportable" },
    ],
    compareTo: ["Razer Blade 14", "Lenovo Legion Slim"],
    comparisons: [
      {
        feature: "Price",
        current: "$7,395,000",
        products: ["$11,195,000", "$6,995,000"],
        currentHighlight: true,
      },
      {
        feature: "Weight",
        current: "1.7kg",
        currentHighlight: true,
        products: ["1.8kg", "2.0kg"],
      },
      { feature: "Battery", current: "10h", products: ["8h", "7h"] },
      { feature: "RTX GPU", current: "check", products: ["check", "check"] },
    ],
  },
  5: {
    id: 5,
    brand: "Microsoft",
    name: "Surface Laptop 5",
    shortDescription:
      'Core i5, 8GB RAM, 256GB SSD, 13.5" PixelSense Touch, Alcantara Sage.',
    badges: ["Best Seller", "In Stock"],
    category: "Laptops",
    price: 3995000,
    inStock: true,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBs_hL42501ZLhRNfW7h6J880AdnOoRxFreGMYmH11ZEe172dzPT15AeeVjQ3qNL5is7HBOWTVboIPn-WZKHbSISuWefjeZHHaXZgrkIqFYcmTrQX7xMACUobRVEMINFNICaLZ_jipJ1nIhRMGJBrsji7dq0Lv21R2NamVQRyR2CKQbTMdRsR78tjpW33pQsTq-36NE0cLmaa2Onc-FozGa4XHGlZGuFFWDNVjCfM94bLfto-v4IqED05MNTlUwj7RvVu7GrXYQM7Aw",
    ],
  },
  6: {
    id: 6,
    brand: "Apple",
    name: 'MacBook Air 13" M2',
    shortDescription:
      "8-core CPU, 8-core GPU, 8GB RAM, 256GB SSD, Liquid Retina, Midnight.",
    badges: [],
    category: "Laptops",
    price: 4395000,
    inStock: false,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1syvIoRmNCkkVHpnIGxHOLLzwSBeKoDvnMu5YbOe4fmYNEBXdcWMOtBswpqr6ucCVtGUmU27eYLq50hCDF2pBZ4LnzF-C60O04A2DvUsQFHLvSkImjNrXByPhJ3cw52XGLb3wInuIwW7vTfSpbNNLJgQwTKIQAF-7LKzQSuN2L_PYwPSXqS2W7hZP2FAejuHuyoixiqK03g8S7_oP3RbmttE6iHrLG-Nfd-zBuHE9VyE9lh-6YEm6UP1h8_k-T_HWFeQKuO1YxY2R",
    ],
  },
};

export const getProductById = (id) => PRODUCTS[id];

export const primaryImageOf = (product) => product?.images?.[0] || null;
