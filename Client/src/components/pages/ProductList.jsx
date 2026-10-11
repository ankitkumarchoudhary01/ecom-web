import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import {
    ArrowRight,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Heart,
    Menu,
    Package,
    Search,
    ShoppingBag,
    SlidersHorizontal,
    Star,
    UserRound,
    X,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const CATEGORIES = [
    "All Products",
    "Valmo",
    "Valmo Sustainable",
    "Bags",
    "Barcode Labels",
    "Soft Net Rolls",
    "Tapes",
    "Stickers",
    "Bubble Roll",
    "Combos",
];

const PRODUCTS = [
    {
        name: 'Valmo Label Rolls 4×6"',
        price: 1700,
        category: "Barcode Labels",
        brand: "Valmo",
        badge: null,
        rating: 3.3,
        reviews: 12,
        priceLabel: "₹1,700 – ₹4,110",
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",
    },
    {
        name: "Valmo 10×14 Pack of 2000",
        price: 5428,
        category: "Valmo",
        badge: "Best Seller",
        rating: 4.4,
        reviews: 28,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Valmo 10×14 Pack of 5000",
        price: 13570,
        category: "Valmo",
        badge: "Popular",
        rating: 4.5,
        reviews: 19,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Valmo 16×18 Pack of 1000",
        price: 5286,
        category: "Valmo",
        badge: null,
        rating: 5,
        reviews: 8,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Valmo 16×18 Pack of 2000",
        price: 10572,
        category: "Valmo",
        badge: null,
        rating: 5,
        reviews: 15,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Valmo 16×18 Pack of 5000",
        price: 26500,
        category: "Valmo",
        badge: "Bulk",
        rating: 4.8,
        reviews: 9,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Soft Net Packaging Roll",
        price: 25960,
        category: "Soft Net Rolls",
        badge: "Premium",
        rating: 4.7,
        reviews: 11,
        priceLabel: "₹25,960 – ₹2,18,300",
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Valmo Delivery Bags II — 157 LTR",
        price: 1100,
        category: "Bags",
        badge: null,
        rating: 3.3,
        reviews: 14,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Valmo Sustainable 16×18 Pack of 5000",
        price: 28900,
        category: "Valmo Sustainable",
        badge: "Sustainable",
        rating: 4.9,
        reviews: 7,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Valmo Sustainable Delivery Bags",
        price: 1100,
        category: "Valmo Sustainable",
        badge: "Eco Pick",
        rating: 4.6,
        reviews: 6,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Valmo Sustainable 16×18 Pack of 2000",
        price: 11560,
        category: "Valmo Sustainable",
        badge: null,
        rating: 4.8,
        reviews: 10,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Valmo Sustainable 16×18 Pack of 1000",
        price: 5780,
        category: "Valmo Sustainable",
        badge: null,
        rating: 4.7,
        reviews: 13,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Premium Courier Bags",
        price: 1890,
        category: "Bags",
        badge: "New",
        rating: 4.5,
        reviews: 8,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Industrial Packaging Tape",
        price: 780,
        category: "Tapes",
        badge: null,
        rating: 4.6,
        reviews: 21,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Self Adhesive Labels",
        price: 1290,
        category: "Stickers",
        badge: null,
        rating: 4.2,
        reviews: 17,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
    {
        name: "Protective Bubble Roll",
        price: 2450,
        category: "Bubble Roll",
        badge: null,
        rating: 4.8,
        reviews: 16,
        image: "https://res.cloudinary.com/dakzbu1db/image/upload/v1791519767/2_763bc661-3856-4f5d-ba43-ead30487edd8_mqxvbm.webp",

    },
];

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

const filterProducts = (products, category, query) => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
        const matchesCategory =
            category === "All Products" ||
            product.category === category;

        const matchesSearch =
            !normalizedQuery ||
            product.name.toLowerCase().includes(normalizedQuery);

        return matchesCategory && matchesSearch;
    });
};

const sortProducts = (products, sort) => {
    const sorted = [...products];

    switch (sort) {
        case "low":
            return sorted.sort((a, b) => a.price - b.price);

        case "high":
            return sorted.sort((a, b) => b.price - a.price);

        case "rating":
            return sorted.sort((a, b) => b.rating - a.rating);

        default:
            return sorted;
    }
};

/* -------------------------------------------------------------------------- */
/* Product Card                                                               */
/* -------------------------------------------------------------------------- */

function ProductVisual({ product }) {
    return (
        <div className="relative flex h-[235px] items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-100">
            <span className="absolute left-4 top-4 rounded-full bg-[#173F67] px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-white">
                {product.badge || product.category}
            </span>

            <button
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white text-slate-400 shadow-sm"
                aria-label="Add to wishlist"
            >
                <Heart size={17} />
            </button>

            <div>
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                />
            </div>
            {/* <div className="relative h-[140px] w-[185px] -rotate-2 rounded-[22px] border border-slate-200 bg-white shadow-[0_20px_35px_rgba(16,43,70,.12)]">
        <div className="absolute left-4 top-4 h-2 w-20 rounded-full bg-[#F3A928]/70" />

        <div className="absolute left-4 top-10 text-[9px] font-black tracking-[.2em] text-[#173F67]">
          PROWRRAP
        </div>

        <div className="absolute bottom-6 left-5 flex gap-1">
          {Array.from({ length: 8 }).map((_, index) => (
            <i
              key={index}
              className="h-6 w-1 rounded-full bg-[#173F67]/25"
            />
          ))}
        </div>
      </div> */}
        </div>
    );
}

function Rating({ rating, reviews }) {
    return (
        <div className="mt-3 flex items-center gap-1.5">
            <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => {
                    const filled =
                        index + 1 <= Math.round(rating);

                    return (
                        <Star
                            key={index}
                            size={12}
                            className={
                                filled
                                    ? "fill-[#F3A928] text-[#F3A928]"
                                    : "text-slate-200"
                            }
                        />
                    );
                })}
            </div>

            <span className="text-[11px] text-slate-400">
                {rating.toFixed(1)} ({reviews})
            </span>
        </div>
    );
}

function ProductCard({ product }) {
    const price = product.priceLabel || formatPrice(product.price);

    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-card">
            <ProductVisual product={product} />

            <div className="p-5">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[.15em] text-[#245783]">
                    {product.category}
                </div>

                {/* Product name and rating */}
                <div className="flex items-start justify-between gap-3">
                    <h3 className="min-h-[24px] flex-1 text-[15px] font-extrabold leading-5 text-[#173F67]">
                        {product.name}
                    </h3>

                    {product.rating != null && (
                        <div className="flex shrink-0 items-center gap-1 rounded-lg bg-amber-50 px-2 py-1">
                            <Star
                                size={13}
                                className="fill-[#F3A928] text-[#F3A928]"
                            />
                            <span className="text-xs font-bold text-[#173F67]">
                                {Number(product.rating).toFixed(1)}
                            </span>
                        </div>
                    )}
                </div>

                {/* Review count */}
                {product.reviews != null && (
                    <div className="mt-1 text-xs text-slate-400">
                        {product.reviews} reviews
                    </div>
                )}

                {/* Price */}
                <div className="mt-4 text-lg font-black text-[#173F67]">
                    {price}
                </div>

                {/* Add to cart button */}
                <button className="btn-primary mt-4 flex w-full items-center justify-center gap-2">
                    <span>
                        {product.priceLabel ? "Select options" : "Add to cart"}
                    </span>
                    <ArrowRight size={15} />
                </button>
            </div>
        </article>
    );
}

/* -------------------------------------------------------------------------- */
/* Filters                                                                    */
/* -------------------------------------------------------------------------- */

function CategoryFilter({
    selectedCategory,
    onCategoryChange,
    onClose,
}) {
    return (
        <aside className="card sticky top-[20px] p-2  ">
            <div className="pr-4 border-r border-yellow-600">
                <div className="flex justify-between ">
                    <h2 className="font-extrabold text-[#173F67]">
                        Categories
                    </h2>

                    <span className="text-[10px] text-slate-400">
                        {PRODUCTS.length}
                    </span>
                </div>

                <div className="mt-4 space-y-1">
                    {CATEGORIES.map((category) => {
                        const selected =
                            selectedCategory === category;

                        return (
                            <button
                                key={category}
                                onClick={() => {
                                    onCategoryChange(category);
                                    onClose();
                                }}
                                className={`flex w-full justify-between rounded-xl px-3 py-2.5 text-left text-xs font-bold ${selected
                                    ? "bg-[#173F67] text-white"
                                    : "text-slate-600 hover:bg-slate-50"
                                    }`}
                            >
                                {category}

                                {selected && (
                                    <Check
                                        size={14}
                                        className="mt-1 text-[#F3A928]"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                <BulkOrderCallout />
            </div>
        </aside>
    );
}

function BulkOrderCallout() {
    return (
        <div className="mt-7 border-t pt-5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Need bulk quantity?
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-500">
                Talk to our team for business pricing and custom
                requirements.
            </p>

            <button className="mt-3 text-xs font-extrabold text-[#245783]">
                Contact sales →
            </button>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* Toolbar                                                                    */
/* -------------------------------------------------------------------------- */

function MobileFilterButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="btn-light lg:hidden"
        >
            <SlidersHorizontal size={16} />
            Filters
        </button>
    );
}

function SortSelect({ value, onChange }) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="appearance-none rounded-xl border bg-white py-2.5 pl-3 pr-9 text-xs font-bold text-[#173F67]"
            >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
            </select>

            <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            />
        </div>
    );
}

function ProductToolbar({
    productCount,
    sort,
    onSortChange,
}) {
    return (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
                <div className="text-sm font-bold text-[#173F67]">
                    {productCount} products
                </div>

                <div className="mt-1 text-xs text-slate-400">
                    Showing products from our packaging catalogue
                </div>
            </div>

            <SortSelect
                value={sort}
                onChange={onSortChange}
            />
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* Pagination                                                                 */
/* -------------------------------------------------------------------------- */

function Pagination() {
    return (
        <div className="mt-10 flex justify-center gap-2">
            <button className="grid h-10 w-10 place-items-center rounded-xl border bg-white text-slate-400">
                <ChevronLeft size={17} />
            </button>

            <button className="grid h-10 w-10 place-items-center rounded-xl bg-[#173F67] text-sm font-bold text-white">
                1
            </button>

            <button className="grid h-10 w-10 place-items-center rounded-xl border bg-white text-sm font-bold">
                2
            </button>

            <button className="grid h-10 w-10 place-items-center rounded-xl border bg-white">
                <ChevronRight size={17} />
            </button>
        </div>
    );
}



/* -------------------------------------------------------------------------- */
/* App                                                                        */
/* -------------------------------------------------------------------------- */
function ProductList() {
    const [searchParams, setSearchParams] = useSearchParams();

    // Read the category from the URL
    const getCategoryFromURL = () => {
        const urlCategory = searchParams.get("category");

        return CATEGORIES.includes(urlCategory)
            ? urlCategory
            : "All Products";
    };

    const [category, setCategory] = useState(getCategoryFromURL);
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("featured");
    const [filtersOpen, setFiltersOpen] = useState(false);

    // Keep the category synchronized with URL navigation
    useEffect(() => {
        setCategory(getCategoryFromURL());
    }, [searchParams]);

    // Update URL when the selected category changes
    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);

        const nextParams = new URLSearchParams(searchParams);

        if (newCategory === "All Products") {
            nextParams.delete("category");
        } else {
            nextParams.set("category", newCategory);
        }

        setSearchParams(nextParams, { replace: true });
        setFiltersOpen(false);
    };

    // Filter and sort products
    const products = useMemo(() => {
        const filteredProducts = filterProducts(
            PRODUCTS,
            category,
            query
        );

        return sortProducts(filteredProducts, sort);
    }, [category, query, sort]);

    return (
        <main className="mx-auto max-w-[1380px] px-4 py-7 md:px-7">
            <MobileFilterButton
                onClick={() => setFiltersOpen((prev) => !prev)}
            />

            <div className="mt-5 grid gap-8 lg:grid-cols-[235px_1fr]">
                <aside className={`${filtersOpen ? "block" : "hidden"} lg:block`}>
                    <CategoryFilter
                        selectedCategory={category}
                        onCategoryChange={handleCategoryChange}
                        onClose={() => setFiltersOpen(false)}
                    />
                </aside>

                <section>
                    <ProductToolbar
                        productCount={products.length}
                        sort={sort}
                        onSortChange={setSort}
                    />

                    <ProductGrid products={products} />

                    <Pagination />
                </section>
            </div>
        </main>
    );
}


/* -------------------------------------------------------------------------- */
/* Product Grid                                                               */
/* -------------------------------------------------------------------------- */

function ProductGrid({ products }) {
    if (!products.length) {
        return (
            <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">
                <h3 className="font-bold text-[#173F67]">
                    No products found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                    Try another search or category.
                </p>
            </div>
        );
    }

    return (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
                <ProductCard
                    key={product.name}
                    product={product}
                />
            ))}
        </div>
    );
}

export default ProductList;