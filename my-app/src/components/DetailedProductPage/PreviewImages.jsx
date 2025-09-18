"use client";
import React, { useState, useRef, useEffect } from "react";
import ProductDetails from "./ProductDetails";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PreviewImages = ({ images, data }) => {
  const [mainImage, setMainImage] = useState(images[0] || "");
  const [isHovering, setIsHovering] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const scrollRef = useRef(null);

  const lensSize = 300;

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -150 : 150,
        behavior: "smooth",
      });
    }
  };

  // === auto-carousel for mobile ===
  const [mobileIndex, setMobileIndex] = useState(0);
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setMobileIndex((prev) => (prev + 1) % images.length);
      }, 3000); // change slide every 3s
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center md:space-x-10 p-4">
      {/* LEFT */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        {/* === MOBILE FULL-SCREEN CAROUSEL === */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:hidden overflow-hidden">
  {/* slider */}
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      width: `${images.length * 100}%`,
      transform: `translateX(-${mobileIndex * (100 / images.length)}%)`,
    }}
    // enable swipe on mobile
    onTouchStart={(e) => (window.touchStartX = e.touches[0].clientX)}
    onTouchEnd={(e) => {
      const diff = e.changedTouches[0].clientX - window.touchStartX;
      if (diff > 50 && mobileIndex > 0) setMobileIndex(mobileIndex - 1); // swipe right
      if (diff < -50 && mobileIndex < images.length - 1) setMobileIndex(mobileIndex + 1); // swipe left
    }}
  >
    {images.map((img, i) => (
      <div
        key={i}
        className="w-full h-full flex items-center justify-center flex-shrink-0 bg-white"
        onClick={() => setMainImage(img)}
      >
        <img
          src={img}
          alt={`Slide ${i + 1}`}
          className="max-h-full max-w-full object-contain transition-all duration-300"
        />
      </div>
    ))}
  </div>

  {/* arrows */}
  {/* <button
    onClick={() => mobileIndex > 0 && setMobileIndex(mobileIndex - 1)}
    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
  >
    ‹
  </button>
  <button
    onClick={() =>
      mobileIndex < images.length - 1 && setMobileIndex(mobileIndex + 1)
    }
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
  >
    ›
  </button> */}

  {/* dots indicator */}
  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
    {images.map((_, i) => (
      <span
        key={i}
        onClick={() => setMobileIndex(i)}
        className={`w-2 h-2 rounded-full cursor-pointer ${
          i === mobileIndex ? "bg-green-500" : "bg-gray-300"
        }`}
      ></span>
    ))}
  </div>
</div>



        {/* === DESKTOP MAIN IMAGE WITH LENS === */}
        <div
          className="relative w-96 h-96 md:w-[500px] md:h-[500px] overflow-hidden hidden md:block"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            if (x < lensSize / 2) x = lensSize / 2;
            if (x > rect.width - lensSize / 2) x = rect.width - lensSize / 2;
            if (y < lensSize / 2) y = lensSize / 2;
            if (y > rect.height - lensSize / 2) y = rect.height - lensSize / 2;

            setLensPos({ x, y });
          }}
        >
          {isHovering && (
            <div className="absolute inset-0 bg-black/20 pointer-events-none z-10"></div>
          )}

          <img
            src={mainImage}
            alt="Main product"
            className="w-full h-full object-cover relative z-0 hover:"
          />

          {isHovering && (
            <div
              className="absolute border-2 border-green-500 bg-white/30 pointer-events-none z-20"
              style={{
                width: `${lensSize}px`,
                height: `${lensSize}px`,
                top: `${lensPos.y - lensSize / 2}px`,
                left: `${lensPos.x - lensSize / 2}px`,
              }}
            />
          )}
        </div>

        {/* Thumbnails desktop only */}
        {images.length > 1 && (
          <div className="relative mt-3 w-full max-w-md mx-auto hidden md:block">
            {images.length > 5 && (
              <>
                <button
                  className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-1 z-10"
                  onClick={() => scroll("left")}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-1 z-10"
                  onClick={() => scroll("right")}
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <div
              ref={scrollRef}
              className={`flex space-x-2 ${
                images.length > 5
                  ? "overflow-x-auto scrollbar-hide md:overflow-x-hidden"
                  : "overflow-x-hidden justify-center"
              }`}
              style={{ maxWidth: images.length > 5 ? "350px" : "100%" }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 object-contain rounded-lg cursor-pointer border flex-shrink-0 ${
                    mainImage === img ? "border-green-500" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Desktop-only "Type / View More" block */}
        <div className="hidden md:block mt-6 text-left w-full px-4">
          <h1 className="text-lg font-semibold mb-2">Product Details</h1>
          <div className="text-sm">
            <h2 className="font-medium">Type</h2>
            <p className="text-gray-600">{data?.category}</p>
            <a
              href="#"
              className="text-green-600 hover:underline inline-block mt-1"
            >
              View more
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 relative">
        {isHovering && (
          <div className="hidden md:block fixed top-20 right-30 w-[650px] h-[650px] overflow-hidden bg-white shadow-lg z-50">
            <img
              src={mainImage}
              alt="Zoom view"
              style={{
                width: "250%",
                height: "250%",
                objectFit: "cover",
                transform: `translate(-${
                  ((lensPos.x - lensSize / 2) / 384) * 100
                }%, -${((lensPos.y - lensSize / 2) / 384) * 100}%)`,
                transformOrigin: "top left",
              }}
            />
          </div>
        )}

        <div className="mt-6 w-full">
          <ProductDetails data={data} />
        </div>
      </div>
    </div>
  );
};

export default PreviewImages;
