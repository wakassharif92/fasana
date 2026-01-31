"use client";

import { useState } from "react";

// Menu data by category
const menuData = {
  All: [
    {
      name: "Shawarma Platter",
      description: "Hearty platter for shawarma lovers.",
      price: "from 1,450",
      tags: ["Most Ordered", "Single Serving"],
      category: "Shawarma",
    },
    {
      name: "Sandwich Falafel with Hummus",
      description: "Falafel sandwich served with hummus.",
      price: "from 740",
      tags: ["Popular", "Single Serving"],
      category: "Falafel Sandwich",
    },
    {
      name: "Sandwich Falafel Mixed",
      description: "Mixed falafel sandwich.",
      price: "from 770",
      tags: ["Popular", "Single Serving"],
      category: "Falafel Sandwich",
    },
    {
      name: "Fatayer Chicken Cheese",
      description: "Cheese, Chicken",
      price: "1,030",
      tags: ["Popular", "Single Serving"],
      category: "Turkish Fatayer",
    },
    {
      name: "Turkish Pizza Deluxe",
      description: "Classic Turkish pizza with special toppings.",
      price: "850",
      tags: ["Single Serving"],
      category: "Turkish Pizza",
    },
    {
      name: "Chicken Mandi",
      description: "Traditional Arabian rice dish with tender chicken.",
      price: "1,200",
      tags: ["Most Ordered"],
      category: "Mandi",
    },
  ],
  Popular: [
    {
      name: "Shawarma Platter",
      description: "Hearty platter for shawarma lovers.",
      price: "from 1,450",
      tags: ["Most Ordered", "Single Serving"],
      category: "Shawarma",
    },
    {
      name: "Sandwich Falafel with Hummus",
      description: "Falafel sandwich served with hummus.",
      price: "from 740",
      tags: ["Popular", "Single Serving"],
      category: "Falafel Sandwich",
    },
    {
      name: "Sandwich Falafel Mixed",
      description: "Mixed falafel sandwich.",
      price: "from 770",
      tags: ["Popular", "Single Serving"],
      category: "Falafel Sandwich",
    },
    {
      name: "Fatayer Chicken Cheese",
      description: "Cheese, Chicken",
      price: "1,030",
      tags: ["Popular", "Single Serving"],
      category: "Turkish Fatayer",
    },
  ],
  Shawarma: [
    {
      name: "Shawarma Platter",
      description: "Hearty platter for shawarma lovers.",
      price: "from 1,450",
      tags: ["Most Ordered", "Single Serving"],
      category: "Shawarma",
    },
    {
      name: "Chicken Shawarma Wrap",
      description: "Fresh chicken shawarma wrapped in saj bread.",
      price: "550",
      tags: ["Single Serving"],
      category: "Shawarma",
    },
    {
      name: "Beef Shawarma Plate",
      description: "Tender beef shawarma with sides.",
      price: "1,200",
      tags: ["Single Serving"],
      category: "Shawarma",
    },
  ],
  "Turkish Fatayer": [
    {
      name: "Fatayer Chicken Cheese",
      description: "Cheese, Chicken",
      price: "1,030",
      tags: ["Popular", "Single Serving"],
      category: "Turkish Fatayer",
    },
    {
      name: "Fatayer Beef",
      description: "Traditional Turkish pastry with spiced beef.",
      price: "950",
      tags: ["Single Serving"],
      category: "Turkish Fatayer",
    },
    {
      name: "Fatayer Spinach & Cheese",
      description: "Vegetarian option with fresh spinach.",
      price: "800",
      tags: ["Single Serving"],
      category: "Turkish Fatayer",
    },
  ],
  "Falafel Sandwich": [
    {
      name: "Sandwich Falafel with Hummus",
      description: "Falafel sandwich served with hummus.",
      price: "from 740",
      tags: ["Popular", "Single Serving"],
      category: "Falafel Sandwich",
    },
    {
      name: "Sandwich Falafel Mixed",
      description: "Mixed falafel sandwich.",
      price: "from 770",
      tags: ["Popular", "Single Serving"],
      category: "Falafel Sandwich",
    },
    {
      name: "Falafel Deluxe",
      description: "Premium falafel with extra toppings.",
      price: "850",
      tags: ["Single Serving"],
      category: "Falafel Sandwich",
    },
  ],
  Mandi: [
    {
      name: "Chicken Mandi",
      description: "Traditional Arabian rice dish with tender chicken.",
      price: "1,200",
      tags: ["Most Ordered"],
      category: "Mandi",
    },
    {
      name: "Lamb Mandi",
      description: "Aromatic rice with succulent lamb.",
      price: "1,500",
      tags: ["Single Serving"],
      category: "Mandi",
    },
  ],
  "Turkish Pizza": [
    {
      name: "Turkish Pizza Deluxe",
      description: "Classic Turkish pizza with special toppings.",
      price: "850",
      tags: ["Single Serving"],
      category: "Turkish Pizza",
    },
    {
      name: "Meat Lovers Pizza",
      description: "Loaded with mixed meats.",
      price: "950",
      tags: ["Single Serving"],
      category: "Turkish Pizza",
    },
  ],
  Sides: [
    {
      name: "Hummus Bowl",
      description: "Creamy chickpea dip with olive oil.",
      price: "350",
      tags: ["Single Serving"],
      category: "Sides",
    },
    {
      name: "Baba Ghanoush",
      description: "Smoky eggplant dip.",
      price: "380",
      tags: ["Single Serving"],
      category: "Sides",
    },
    {
      name: "Tabbouleh Salad",
      description: "Fresh parsley and bulgur salad.",
      price: "400",
      tags: ["Single Serving"],
      category: "Sides",
    },
  ],
  Mutabbaq: [
    {
      name: "Chicken Mutabbaq",
      description: "Stuffed savory pastry with chicken.",
      price: "650",
      tags: ["Single Serving"],
      category: "Mutabbaq",
    },
    {
      name: "Vegetable Mutabbaq",
      description: "Mixed vegetables in crispy pastry.",
      price: "550",
      tags: ["Single Serving"],
      category: "Mutabbaq",
    },
  ],
  Fries: [
    {
      name: "Classic French Fries",
      description: "Crispy golden fries.",
      price: "250",
      tags: ["Single Serving"],
      category: "Fries",
    },
    {
      name: "Loaded Cheese Fries",
      description: "Fries with melted cheese and toppings.",
      price: "450",
      tags: ["Popular", "Single Serving"],
      category: "Fries",
    },
  ],
};

export default function MenuSection() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "All",
    "Popular",
    "Shawarma",
    "Turkish Fatayer",
    "Falafel Sandwich",
    "Mandi",
    "Turkish Pizza",
    "Sides",
    "Mutabbaq",
    "Fries",
  ];

  const currentItems = menuData[selectedFilter as keyof typeof menuData] || [];

  return (
    <div className="w-full h-screen flex relative bg-black/40">
      {/* Fixed left side - Image with overlay and title */}
      <div className="hidden md:block fixed left-0 top-0 w-1/2 h-screen bg-cover bg-center bg-gray-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=1200&fit=crop"
          alt="Menu Background"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay from bottom */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        {/* Overall black overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Title positioned at bottom left */}
        <div className="absolute bottom-0 left-0 p-8 z-10">
          <p className="text-xs tracking-[0.3em] uppercase text-white/80 mb-3 font-inria">
            EXPERIENCE
          </p>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white"
            style={{
              letterSpacing: "0.02em",
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Menu
          </h2>
        </div>
      </div>

      {/* Right side - Scrollable menu list */}
      <div className="w-full md:w-1/2 md:ml-auto flex flex-col bg-black/90 md:bg-black">
        {/* Header with filters */}
        <div className="sticky top-0 z-20 bg-black/95 backdrop-blur-sm px-6 md:px-8 pt-8 pb-4">
          {/* Mobile only title */}
          <div className="md:hidden mb-6">
            <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-2 font-inria">
              EXPERIENCE
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-6"
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
        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 space-y-4">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 flex items-start gap-4 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-wider uppercase text-white/50 mb-1 font-inria">
                      {item.category.toUpperCase()}
                    </p>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-1 font-inria break-words">
                      {item.name}
                    </h3>
                    <p className="text-sm text-white/70 mb-2">
                      {item.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full border border-[#00bfa5]/40 text-[#00bfa5]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-lg font-semibold text-white mb-2 whitespace-nowrap">
                      {item.price}
                    </p>
                    <button className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all border border-white/20 whitespace-nowrap">
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
