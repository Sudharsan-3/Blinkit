"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { LuTimer } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Products = ({ data = [] }) => {
    const scrollerRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Update card width and arrows
    const updateMeasurements = () => {
        const s = scrollerRef.current;
        if (!s) return;

        const containerW = s.clientWidth || 0;
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);

        // Card width: 2 per screen on mobile, 6.5 on desktop
        setCardWidth(mobile ? containerW / 2 - 12 : containerW / 6.5);

        const maxScroll = s.scrollWidth - s.clientWidth;
        setShowRight(maxScroll > 5);
        setShowLeft(s.scrollLeft > 5);
    };

    const onScroll = () => {
        const s = scrollerRef.current;
        if (!s) return;
        const { scrollLeft, scrollWidth, clientWidth } = s;
        const maxScroll = scrollWidth - clientWidth;

        setShowLeft(scrollLeft > 5);
        setShowRight(scrollLeft < maxScroll - 5);
    };

    useEffect(() => {
        updateMeasurements();

        const ro =
            typeof ResizeObserver !== "undefined" && scrollerRef.current
                ? new ResizeObserver(updateMeasurements)
                : null;
        if (ro && scrollerRef.current) ro.observe(scrollerRef.current);
        else window.addEventListener("resize", updateMeasurements);

        const s = scrollerRef.current;
        if (s) s.addEventListener("scroll", onScroll);

        const t = setTimeout(updateMeasurements, 300);

        return () => {
            if (ro && scrollerRef.current) ro.unobserve(scrollerRef.current);
            else window.removeEventListener("resize", updateMeasurements);
            if (s) s.removeEventListener("scroll", onScroll);
            clearTimeout(t);
        };
    }, [data.length]);

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const handleScroll = (dir) => {
        const s = scrollerRef.current;
        if (!s || cardWidth <= 0) return;

        const scrollAmount = isMobile ? cardWidth * 2 : cardWidth * 6;
        const { scrollLeft, scrollWidth, clientWidth } = s;
        const maxScroll = scrollWidth - clientWidth;

        let target =
            dir === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
        target = Math.round(clamp(target, 0, maxScroll));

        s.scrollTo({ left: target, behavior: "smooth" });
    };

    return (
        <div className="relative w-full">
            {/* Hide scrollbar */}
            <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

            {/* Left arrow */}
            {!isMobile && showLeft && (
                <button
                    onClick={() => handleScroll("left")}
                    aria-label="previous"
                    className="absolute left-2 top-1/2 z-30 -translate-y-1/2 bg-white p-2 rounded-full shadow-sm hover:bg-gray-100"
                >
                    <FaChevronLeft size={16} />
                </button>
            )}

            {/* Products scroller */}
            <div
                ref={scrollerRef}
                className="no-scrollbar flex gap-3 py-2 overflow-x-auto scroll-smooth"
                style={{ WebkitOverflowScrolling: "touch", paddingLeft: 0, paddingRight: 0 }}
            >
                {data.length > 0 ? (
                    data.map((item) => {
                        const hasOffer = item.offer && item.offer > 0;
                        const discounted = hasOffer
                            ? Math.round(item.price - (item.price * item.offer) / 100)
                            : item.price;

                        const w = cardWidth || 170;

                        return (
                            <div
                                key={item.id}
                                style={{ minWidth: `${w}px`, maxWidth: `${w}px` }}
                                className="relative bg-white border border-gray-100 rounded-md p-2 shadow-md flex-shrink-0 "
                            >
                                {/* Offer badge */}
                                {item.offer > 0 && (
                                    <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded font-semibold">
                                        {item.offer}% OFF
                                    </div>
                                )}


                                {/* Image */}
                                <div className="flex items-center justify-center h-32">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={120}
                                        height={120}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Timer */}
                                <div className="mt-1 inline-flex items-center bg-gray-100 text-xs px-2 py-0.5 rounded font-okra">
                                    <LuTimer size={12} />
                                    <span className="ml-1">{item.timin}</span>
                                </div>

                                {/* Name & qty */}
                                <div className="mt-2">
                                    <div className="text-sm font-medium leading-tight h-10 overflow-hidden text-ellipsis">
                                        {item.name}
                                    </div>
                                    {item.qty && <div className="text-xs text-gray-500">{item.qty}</div>}
                                </div>

                                {/* Price + Add button */}
                                <div className="mt-2 flex items-center justify-between">
                                    {/* Price */}
                                    <div className="flex flex-col items-center justify-center" style={{ minHeight: "32px" }}>
                                        {hasOffer ? (
                                            <>
                                                <div className="text-sm font-semibold">₹{discounted}</div>
                                                <div className="text-xs text-gray-400 line-through">₹{item.price}</div>
                                            </>
                                        ) : (
                                            <div className="text-sm font-semibold">₹{item.price}</div>
                                        )}
                                    </div>

                                    {/* Add button */}
                                    <button
                                        className="ml-2 border border-green-600 text-green-600 text-xs px-3 py-2 rounded hover:cursor-pointer"
                                        style={{ height: "32px" }}
                                        aria-label={`Add ${item.name}`}
                                    >
                                        ADD
                                    </button>
                                </div>

                            </div>
                        );
                    })
                ) : (
                    <div className="text-sm text-gray-500">No products</div>
                )}
            </div>

            {/* Right arrow */}
            {!isMobile && showRight && (
                <button
                    onClick={() => handleScroll("right")}
                    aria-label="next"
                    className="absolute right-2 top-1/2 z-30 -translate-y-1/2 bg-white p-2 rounded-full shadow-sm hover:bg-gray-100"
                >
                    <FaChevronRight size={16} />
                </button>
            )}
        </div>
    );
};

export default Products;
