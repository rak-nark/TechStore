# Data Module Documentation

## Overview

The `src/Data/` module centralizes all shared product and page-specific data, eliminating duplication across pages and providing a single source of truth for product information.

## File Structure

```
src/Data/
├── index.js          # Unified exports for all data modules
├── products.js       # Core product entities (IDs 1-6 for Catalog, 101-104 for BestSellers)
├── catalog.js        # Catalog page product compositions
├── home.js           # Home page (BestSellers) product compositions
└── compare.js        # Compare page sections and related products
```

## Module Descriptions

### products.js

**Purpose**: Canonical product database containing all product entities.

**Exports**:

- `PRODUCTS`: Object mapping product IDs to product entities.
- `getProductById(id)`: Helper to fetch a product by ID.
- `primaryImageOf(product)`: Helper to extract the first image from a product.

**Product Schema**:
Each product contains:

- `id`: Unique identifier (1-6 for laptops, 101-104 for electronics).
- `brand`: Product manufacturer.
- `name`: Full product name.
- `cardTitle`: Short name for card displays (optional).
- `shortDescription`: Brief description for listings.
- `badge`: Badge type ("Sale", "New", "Hot Deal", etc.).
- `category`: Product category (Laptops, Audio, Gaming, etc.).
- `rating`: Average rating (0-5).
- `reviewCount`: Total number of reviews.
- `price`: Current price in COP.
- `oldPrice`: Previous price (optional, for discounts).
- `inStock`: Availability status.
- `images`: Array of image URLs.
- `colors`: Array of color options (with hex values).
- `storageOptions`: Array of storage variants (e.g., 256GB, 512GB).
- `specs`: Array of technical specifications.
- `compareTo`: Competing product names for comparison.
- `comparisons`: Detailed comparison table data.

**Used by**:

- [TechStoreProductDetail.jsx](../Pages/TechStoreProductDetail.jsx): For detailed product pages.
- [catalog.js](catalog.js): To derive CatalogProductCard props.
- [home.js](home.js): To derive BestSellers props.

### catalog.js

**Purpose**: Maps PRODUCTS to the shape required by `CatalogProductCard` component.

**Exports**:

- `catalogProducts`: Array of product objects for the Catalog page.

**Shape**:

```javascript
{
  (id,
    brand,
    title,
    description,
    image,
    currentPrice,
    oldPrice,
    badges,
    inStock,
    isFavorite,
    isCompared);
}
```

**Used by**:

- [TechStoreCatalog.jsx](../Pages/TechStoreCatalog.jsx): Imports `catalogProducts` and passes to grid.

### home.js

**Purpose**: Maps PRODUCTS to the shape required by `BestSellers` component.

**Exports**:

- `bestSellers`: Array of product objects for the Home page.
- `bestSellerIds`: Array of IDs used for BestSellers (101-104).

**Shape**:

```javascript
{
  (id,
    image,
    badge,
    title,
    description,
    rating,
    reviewCount,
    currentPrice,
    oldPrice);
}
```

**Used by**:

- [TechStoreHomePage.jsx](../Pages/TechStoreHomePage.jsx): Imports `bestSellers` and passes to BestSellers component.

### compare.js

**Purpose**: Centralizes compare page data including products, sections, and related items.

**Exports**:

- `compareProducts`: Array of 3 laptop products for the main comparison table.
- `compareSections`: Array of comparison sections (Performance, Display, Battery).
- `relatedProducts`: Array of 4 related product recommendations.

**Used by**:

- [TechStoreCompare.jsx](../Pages/TechStoreCompare.jsx): Imports all three exports to populate the compare page.

### index.js

**Purpose**: Unified export point for easier imports throughout the application.

**Exports**:

- Re-exports all exports from products, catalog, home, and compare modules.

**Usage**:

```javascript
import {
  PRODUCTS,
  catalogProducts,
  bestSellers,
  compareProducts,
} from "../Data";
```

## Integration with Pages

### TechStoreCatalog.jsx

```javascript
import { catalogProducts } from "../Data/catalog";
// Replace inline products array with: const products = catalogProducts;
```

### TechStoreHomePage.jsx

```javascript
import { bestSellers } from "../Data/home";
// Pass to BestSellers: <BestSellers products={bestSellers} />
```

### TechStoreCompare.jsx

```javascript
import {
  compareProducts,
  compareSections,
  relatedProducts,
} from "../Data/compare";
// Use all three in the page
```

### TechStoreProductDetail.jsx

```javascript
import { PRODUCTS } from "../Data/products";
// Replace productsDatabase with PRODUCTS
const product = PRODUCTS[id] || PRODUCTS[1];
```

## Benefits

1. **Single Source of Truth**: Product data is defined once in `products.js`.
2. **Reduced Duplication**: No more product arrays scattered across multiple pages.
3. **Composable Data**: `catalog.js` and `home.js` compose data from canonical products.
4. **Type Consistency**: All product shapes are derived from the same source.
5. **Maintainability**: Updates to product info require changes in only one place.
6. **Scalability**: New pages can easily import and compose existing product data.

## Future Enhancements

- **API Integration**: Replace hardcoded PRODUCTS with API calls to a backend.
- **Filtering & Sorting**: Add helper functions for catalog filtering and sorting.
- **Cart/Wishlist Data**: Centralize user-specific product data (favorites, cart items).
- **Internationalization**: Support multiple currencies and languages for product data.
