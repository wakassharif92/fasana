"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Left Section - About */}
          <div>
            <h2 className="text-xl md:text-2xl font-serif font-bold mb-2">
              Fasana Cafe
            </h2>
            <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6">
              Fasana Cafe is a cozy haven where coffee meets culture. Enjoy
            </p>
            {/* <p className="text-xs md:text-sm text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Authentic Turkish & Middle Eastern flavors: Shawarma, Falafel,
              Mandi, Mutabbaq, Turkish Pizza and more.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <button className="bg-white text-black px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-gray-200 transition-colors">
                Order Now
              </button>
              <button className="border border-white text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-white/10 transition-colors">
                View Menu
              </button>
            </div>
          </div>

          {/* Middle Section - Visit */}
          <div>
            <h3 className="text-xs md:text-sm font-semibold tracking-widest mb-4 md:mb-6 text-gray-200">
              VISIT
            </h3>
            <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-300">
              {/* <p>Istanbul-style Turkish & Middle Eastern Restaurant</p> */}
              {/* <p>Pakistan</p> */}
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors block"
              >
                Visit Us
              </Link>

              <div className="pt-2">
                <p className="text-gray-400 text-[11px] md:text-xs mb-1">
                  Contact No.
                </p>
                <p className="font-semibold text-sm">923001234567</p>
              </div>
            </div>
          </div>

          {/* Right Section - Explore & Social */}
          <div>
            <div className="mb-6 md:mb-8">
              <h3 className="text-xs md:text-sm font-semibold tracking-widest mb-4 md:mb-6 text-gray-200">
                EXPLORE
              </h3>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Ambience
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs md:text-sm font-semibold tracking-widest mb-4 md:mb-6 text-gray-200">
                SOCIAL
              </h3>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-4">
          <p>© 2026 Fasana Cafe. All rights reserved.</p>
          <p className="text-center md:text-right">
            Developed by Bits O' Clock
          </p>
        </div>
      </div>
    </footer>
  );
}
