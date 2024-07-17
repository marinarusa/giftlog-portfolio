import { useState } from "react";
import GiftCard from "./GiftCard";

export default function HomePage({ giftsList }) {
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [priceFilter, setPriceFilter] = useState("All");

    // Combine both filters
    let filteredGifts = giftsList;

    if (categoryFilter !== "All") {
        filteredGifts = filteredGifts.filter(gift => gift.category === categoryFilter);
    }

    if (priceFilter !== "All") {
        filteredGifts = filteredGifts.filter(gift => {
            if (priceFilter === "$10-50") return gift.price >= 10 && gift.price <= 50;
            if (priceFilter === "$50-100") return gift.price >= 50 && gift.price <= 100;
            if (priceFilter === "$100+") return gift.price > 100;
            return true;
        });
    }

    return (
        <div>
            <div className="mb-4">
                <div className="mb-2">
                    <strong>Category Filter: </strong> {categoryFilter}
                </div>
                <button class="my-button" onClick={() => setCategoryFilter("All")}>All</button>
                <button class="my-button" onClick={() => setCategoryFilter("Fashion")}>Fashion</button>
                <button class="my-button" onClick={() => setCategoryFilter("Home")}>Home</button>
                <button class="my-button" onClick={() => setCategoryFilter("Events")}>Events</button>
                <button class="my-button" onClick={() => setCategoryFilter("Electronics and appliances")}>Electronics and Appliances</button>
                <button class="my-button" onClick={() => setCategoryFilter("Beauty and cosmetics")}>Beauty and cosmetics</button>
            </div>
            <div className="mb-4">
                <div className="mb-2">
                    <strong>Price Filter: </strong> {priceFilter}
                </div>
                <button className="btn btn-primary me-2" onClick={() => setPriceFilter("All")}>All</button>
                <button className="btn btn-primary me-2" onClick={() => setPriceFilter("$10-50")}>$10-50</button>
                <button className="btn btn-primary me-2" onClick={() => setPriceFilter("$50-100")}>$50-100</button>
                <button className="btn btn-primary me-2" onClick={() => setPriceFilter("$100+")}>Over $100</button>
            </div>
            <div>
                {filteredGifts.map(g => <GiftCard key={g.id} gift={g} />)}
            </div>
        </div>
    );
}

