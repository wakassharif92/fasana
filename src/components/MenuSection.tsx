"use client";

import { useState } from "react";

type MenuItem = {
  name: string;
  category: string;
  priceR?: string;
  priceL?: string;
  price?: string;
};

// Menu data by category
const menuData: { [key: string]: MenuItem[] } = {
  All: [
    // COFFEES
    { name: "Espresso", priceR: "450", priceL: "565", category: "Coffees" },
    { name: "Café Latte", priceR: "545", priceL: "595", category: "Coffees" },
    {
      name: "Flavoured Latte",
      priceR: "565",
      priceL: "615",
      category: "Coffees",
    },
    {
      name: "Cappuccino (Hot/Iced)",
      priceR: "495",
      priceL: "545",
      category: "Coffees",
    },
    { name: "Flat White", priceR: "545", priceL: "595", category: "Coffees" },
    {
      name: "Pistachio Latte",
      priceR: "625",
      priceL: "695",
      category: "Coffees",
    },
    {
      name: "Spanish Latte",
      priceR: "595",
      priceL: "735",
      category: "Coffees",
    },
    {
      name: "Chai Tea Latte",
      priceR: "595",
      priceL: "645",
      category: "Coffees",
    },
    { name: "Lotus Latte", priceR: "595", priceL: "645", category: "Coffees" },
    {
      name: "Hazelnut Macchiato",
      priceR: "625",
      priceL: "745",
      category: "Coffees",
    },
    { name: "Americano", priceR: "425", priceL: "495", category: "Coffees" },
    {
      name: "White Americano",
      priceR: "425",
      priceL: "495",
      category: "Coffees",
    },
    { name: "Cortado", priceR: "425", priceL: "495", category: "Coffees" },
    { name: "White Mocha", priceR: "625", priceL: "695", category: "Coffees" },
    { name: "Iced Coffee", priceR: "625", priceL: "695", category: "Coffees" },
    // ICED COFFEES
    {
      name: "Iced Espresso",
      priceR: "525",
      priceL: "565",
      category: "Iced Coffees",
    },
    {
      name: "Iced Latte",
      priceR: "525",
      priceL: "665",
      category: "Iced Coffees",
    },
    {
      name: "Flavoured Latte",
      priceR: "625",
      priceL: "735",
      category: "Iced Coffees",
    },
    {
      name: "Iced Cappuccino",
      priceR: "525",
      priceL: "595",
      category: "Iced Coffees",
    },
    {
      name: "Iced White Mocha",
      priceR: "695",
      priceL: "795",
      category: "Iced Coffees",
    },
    {
      name: "Iced Spanish Latte",
      priceR: "725",
      priceL: "845",
      category: "Iced Coffees",
    },
    {
      name: "Iced Caramel Macchiato",
      priceR: "695",
      priceL: "775",
      category: "Iced Coffees",
    },
    {
      name: "Iced Hazelnut Macchiato",
      priceR: "695",
      priceL: "775",
      category: "Iced Coffees",
    },
    {
      name: "Iced Flat White",
      priceR: "595",
      priceL: "695",
      category: "Iced Coffees",
    },
    {
      name: "Iced Pistachio Latte",
      priceR: "895",
      priceL: "995",
      category: "Iced Coffees",
    },
    {
      name: "Hot So Hot Chocolate",
      priceR: "695",
      priceL: "795",
      category: "Iced Coffees",
    },
    // TEAS
    { name: "Peach Iced Tea", priceR: "495", priceL: "575", category: "Teas" },
    { name: "Lemon Iced Tea", priceR: "495", priceL: "525", category: "Teas" },
    {
      name: "English Breakfast Tea",
      priceR: "",
      priceL: "95",
      category: "Teas",
    },
    { name: "Green Tea", priceR: "", priceL: "95", category: "Teas" },
    { name: "Lipton Tea", priceR: "", priceL: "295", category: "Teas" },
    { name: "Green Tea", priceR: "", priceL: "295", category: "Teas" },
    { name: "Karak Chai (Sweet)", priceR: "", priceL: "95", category: "Teas" },
    // HOT CHOCOLATES
    {
      name: "Signature Hot Chocolate",
      priceR: "595",
      priceL: "625",
      category: "Hot Chocolates",
    },
    {
      name: "Dark Hot Chocolate",
      priceR: "595",
      priceL: "625",
      category: "Hot Chocolates",
    },
    {
      name: "Salted Caramel Hot Chocolate",
      priceR: "595",
      priceL: "665",
      category: "Hot Chocolates",
    },
    {
      name: "Marshmallow Hot Chocolate",
      priceR: "595",
      priceL: "665",
      category: "Hot Chocolates",
    },
    // SMOOTHIES
    { name: "Blueberry", priceR: "765", priceL: "885", category: "Smoothies" },
    { name: "Guava", priceR: "795", priceL: "895", category: "Smoothies" },
    {
      name: "Strawberry Banana",
      priceR: "795",
      priceL: "895",
      category: "Smoothies",
    },
    {
      name: "Peachy Pineapple",
      priceR: "795",
      priceL: "895",
      category: "Smoothies",
    },
    {
      name: "Mango Pineapple",
      priceR: "795",
      priceL: "895",
      category: "Smoothies",
    },
    {
      name: "Fresh Orange & Coconut",
      priceR: "895",
      priceL: "995",
      category: "Smoothies",
    },
    // SHAKES
    { name: "Classic Shake", price: "645", category: "Shakes" },
    { name: "Strawberry Vanilla Strawberry", price: "", category: "Shakes" },
    { name: "Oreo Shake", price: "745", category: "Shakes" },
    { name: "Dark Chocolate Shake", price: "795", category: "Shakes" },
    { name: "Peaches And Cream Shake", price: "645", category: "Shakes" },
    { name: "Royal Prairie Shake", price: "645", category: "Shakes" },
    { name: "Raspberry Chocolate Shake", price: "645", category: "Shakes" },
    { name: "Choco Hazelnut Shake", price: "645", category: "Shakes" },
    { name: "Hazelnut Shake", price: "645", category: "Shakes" },
    { name: "Mocha Shake", price: "645", category: "Shakes" },
    { name: "Espresso Vanilla Shake", price: "645", category: "Shakes" },
    { name: "White Chocolate Shake", price: "795", category: "Shakes" },
    { name: "Salted Caramel Shake", price: "795", category: "Shakes" },
    { name: "Marshmallow Shake", price: "645", category: "Shakes" },
    // MOCKTAILS
    { name: "Mint Margarita", price: "425", category: "Mocktails" },
    { name: "Piña Colada", price: "545", category: "Mocktails" },
    { name: "Mojito", price: "425", category: "Mocktails" },
    { name: "The Last Temptation", price: "440", category: "Mocktails" },
    { name: "Mango and Perigord Juice", price: "", category: "Mocktails" },
    { name: "Paradise Island", price: "495", category: "Mocktails" },
    { name: "Fruit Blend", price: "", category: "Mocktails" },
    { name: "Lemon Mint", price: "465", category: "Mocktails" },
    { name: "Manhattan", price: "440", category: "Mocktails" },
    { name: "Blue Breeze", price: "", category: "Mocktails" },
    // CHILLERS
    {
      name: "Paradise Chiller",
      priceR: "545",
      priceL: "595",
      category: "Chillers",
    },
    {
      name: "Black Pearl Chiller",
      priceR: "665",
      priceL: "125",
      category: "Chillers",
    },
    {
      name: "Iced Lemon Chiller",
      priceR: "545",
      priceL: "625",
      category: "Chillers",
    },
    {
      name: "Wild Tropical Chiller",
      priceR: "645",
      priceL: "525",
      category: "Chillers",
    },
    // DRINKS
    { name: "Soft Drinks", price: "140", category: "Drinks" },
    { name: "Mineral Water", price: "90", category: "Drinks" },
  ],
  Coffees: [],
  "Iced Coffees": [],
  Teas: [],
  "Hot Chocolates": [],
  Smoothies: [],
  Shakes: [],
  Mocktails: [],
  Chillers: [],
  Drinks: [],
};

// Populate category-specific arrays
menuData.All.forEach((item) => {
  const category = item.category;
  if (menuData[category]) {
    (menuData[category] as MenuItem[]).push(item);
  }
});

export default function MenuSection() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "All",
    "Coffees",
    "Iced Coffees",
    "Teas",
    "Hot Chocolates",
    "Smoothies",
    "Shakes",
    "Mocktails",
    "Chillers",
    "Drinks",
  ];

  const currentItems = menuData[selectedFilter as keyof typeof menuData] || [];

  return (
    <div className="w-full min-h-screen flex relative bg-black">
      {/* Left side image - Hidden on mobile and tablet, visible on large screens only */}
      <div className="hidden lg:block fixed left-0 top-0 w-1/2 h-screen bg-cover bg-center bg-gray-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=1200&fit=crop"
          alt="Menu Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/50" />

        {/* Title positioned at bottom left */}
        <div className="absolute bottom-0 left-0 p-8 z-10">
          <p className="text-xs tracking-[0.3em] uppercase text-white/80 mb-3 font-inria">
            EXPERIENCE
          </p>
          <h2
            className="text-5xl lg:text-7xl font-semibold text-white"
            style={{
              letterSpacing: "0.02em",
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Menu
          </h2>
        </div>
      </div>

      {/* Right side - Menu list (Full width on mobile/tablet, half width on desktop) */}
      <div className="w-full lg:w-1/2 lg:ml-auto flex flex-col bg-black min-h-screen">
        {/* Header with title and filters */}
        <div className="sticky top-0 z-20 bg-black/95 backdrop-blur-sm px-4 md:px-6 lg:px-8 pt-6 md:pt-8 pb-4">
          {/* Title - Visible on mobile/tablet, hidden on large screens */}
          <div className="lg:hidden mb-4 md:mb-6">
            <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-2 font-inria">
              EXPERIENCE
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold text-white"
              style={{
                letterSpacing: "0.02em",
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Menu
            </h2>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                  selectedFilter === filter
                    ? "bg-[#00bfa5] text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable menu items list */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-4">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 md:p-4 flex flex-col md:flex-row items-start gap-3 md:gap-4 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-600" />
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-2 md:gap-4">
                  <div className="flex-1 w-full">
                    <p className="text-[9px] md:text-[10px] tracking-wider uppercase text-white/50 mb-1 font-inria">
                      {item.category.toUpperCase()}
                    </p>
                    <h3 className="text-sm md:text-lg font-semibold text-white mb-1 font-inria break-words">
                      {item.name}
                    </h3>
                  </div>
                  <div className="text-right md:text-right flex-shrink-0 w-full md:w-auto flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2">
                    <div className="flex gap-3 items-center">
                      {item.priceR && (
                        <div className="text-center">
                          <p className="text-[9px] text-white/50 uppercase mb-1">
                            R
                          </p>
                          <p className="text-sm md:text-base font-semibold text-white whitespace-nowrap">
                            {item.priceR}
                          </p>
                        </div>
                      )}
                      {item.priceL && (
                        <div className="text-center">
                          <p className="text-[9px] text-white/50 uppercase mb-1">
                            L
                          </p>
                          <p className="text-sm md:text-base font-semibold text-white whitespace-nowrap">
                            {item.priceL}
                          </p>
                        </div>
                      )}
                      {item.price && !item.priceR && !item.priceL && (
                        <p className="text-sm md:text-base font-semibold text-white whitespace-nowrap">
                          {item.price}
                        </p>
                      )}
                    </div>
                    <button className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs md:text-sm font-medium transition-all border border-white/20 whitespace-nowrap">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Add padding at bottom for comfortable scrolling */}
          <div className="h-8" />
        </div>
      </div>
    </div>
  );
}
