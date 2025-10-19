"use client";
import { useState } from "react";
import Image from "next/image";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import { galleryItems } from "@/data/data";
import Topsection from "@/Components/TopSection";

const GalleryPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    if (galleryItems.length === 0) {
        return (
            <div className="flex items-center justify-center h-[60vh] text-center">
                <p className="text-lg text-gray-600">
                    No gallery items available yet. Please check back soon! 📸
                </p>
            </div>
        );
    }

    return (
        <>
            <Topsection title="Gallery" image="/aboutbg.png" />
            <div className="tw:pt-0 tw:z-20 tw:pb-16 tw:relative tw:bg-white tw:text-black">
                <div className="tw:max-w-7xl tw:mx-auto tw:relative">
                    <div className="section-title tw:text-center tw:mb-12">
                        <h3 className="wow fadeInUp">Our Gallery</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">
                            Explore the world with Paradise Tours
                        </h2>
                        <p className="wow fadeInUp tw:text-gray-800" data-wow-delay="0.2s">
                            From bustling cities to serene natural landscapes, Paradise Tours & Travel
                            offers unforgettable experiences across the globe. Discover our top
                            destinations and get inspired for your next adventure:
                        </p>


                    </div>

                    {/* Bento Grid */}
                    <div className="tw:grid tw:grid-cols-2 tw:sm:grid-cols-3 tw:lg:grid-cols-4 tw:gap-4 tw:auto-rows-[150px] tw:mt-16">
                        {galleryItems.map((item, idx) => {
                            const rowSpan = item.rowSpan || 1;
                            const colSpan = item.colSpan || 1;

                            return (
                                <div
                                    key={idx}
                                    className={`tw:relative tw:group tw:cursor-pointer tw:overflow-hidden tw:rounded-lg tw:shadow-md tw:row-span-${rowSpan} tw:col-span-${colSpan}`}
                                    style={{
                                        gridRowEnd: `span ${rowSpan}`,
                                        gridColumnEnd: `span ${colSpan}`,
                                    }}
                                    onClick={() => {
                                        if (item.type !== "video") {
                                            setPhotoIndex(idx);
                                            setIsOpen(true);
                                        }
                                    }}
                                >
                                    {item.type === "video" ? (
                                        <video
                                            src={item.src}
                                            controls
                                            className="tw:w-full tw:h-full tw:object-cover tw:rounded-lg"
                                        />
                                    ) : (
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={400}
                                            height={300}
                                            className="tw:w-full tw:h-full tw:object-cover tw:rounded-lg tw:transform tw:group-hover:scale-105 tw:transition tw:duration-300"
                                        />
                                    )}
                                    <p className="relative tw:bottom-0 tw:w-full tw:bg-black/50 tw:text-white tw:text-xs tw:sm:text-sm p-2 text-center opacity-0 group-hover:opacity-100 transition">
                                        {item.caption}
                                    </p>

                                </div>
                            );
                        })}
                    </div>

                    {/* Lightbox */}
                    {isOpen && (
                        <Lightbox
                            mainSrc={galleryItems[photoIndex].src}
                            nextSrc={galleryItems[(photoIndex + 1) % galleryItems.length].src}
                            prevSrc={galleryItems[(photoIndex + galleryItems.length - 1) % galleryItems.length].src}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() =>
                                setPhotoIndex((photoIndex + galleryItems.length - 1) % galleryItems.length)
                            }
                            onMoveNextRequest={() =>
                                setPhotoIndex((photoIndex + 1) % galleryItems.length)
                            }
                            imageCaption={galleryItems[photoIndex].caption}
                        />
                    )}
                </div>
            </div>
        </>

    );
};

export default GalleryPage;
