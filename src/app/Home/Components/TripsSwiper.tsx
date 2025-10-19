"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const TripsSwiper = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true,
                el: '.swiper-pagination'
            }}
            breakpoints={{

                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            className="swiper"
        >
            <SwiperSlide>
                <a href="#" className="swiper-slide">
                    <div className="card">
                        <img
                            src="new-images/trips/image-1.webp"
                            className="card-img-top"
                            alt="Climbing in Nepal"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Chardham Pilgrimage Package</h5>
                            <span>12 Days </span>
                            <p>
                                Embark on a spiritually enriching journey with our Chardham
                                Pilgrimage Package, designed for a transformative
                                experience...
                            </p>
                            <strong>View Details</strong>
                        </div>
                    </div>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href="#" className="swiper-slide">
                    <div className="card">
                        <img
                            src="new-images/trips/image-2.jpeg"
                            className="card-img-top"
                            alt="Everest Base Camp"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Janakpur Cultural Tour</h5>
                            <span>2 Days </span>
                            <p>
                                Discover the cultural heritage of Janakpur with our 1-night,
                                2-day package. Visit sacred sites, explore local...
                            </p>
                            <strong>View Details</strong>
                        </div>
                    </div>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href="#" className="swiper-slide">
                    <div className="card">
                        <img
                            src="new-images/trips/image-3.jpeg"
                            className="card-img-top"
                            alt="Annapurna Base Camp"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Bardia & Chisapani Combo Offer</h5>
                            <span>3 Days </span>
                            <p>
                                Experience the wilderness of Bardia National Park and the
                                tranquility of Chisapani with our unique combo offer...
                            </p>
                            <strong>View Details</strong>
                        </div>
                    </div>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href="#" className="swiper-slide">
                    <div className="card">
                        <img
                            src="new-images/trips/image-4.jpeg"
                            className="card-img-top"
                            alt="First-Time Trekker Mistakes"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Blissful Muktinath-Jomsom Getaway</h5>
                            <span>3 Days </span>
                            <p>
                                Discover Muktinath Temple and Jomsom's beauty in just 2
                                nights and 3 days. This package includes comfortable...
                            </p>
                            <strong>View Details</strong>
                        </div>
                    </div>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href="#" className="swiper-slide">
                    <div className="card">
                        <img
                            src="new-images/trips/image-5.jpg"
                            className="card-img-top"
                            alt="Extra Trip 1"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Mt. Kailash & Mansarovar Tour</h5>
                            <span>15 Days </span>
                            <p>
                                Embark on a transformative 15-day journey to the sacred
                                realms of Mt. Kailash and Lake Mansarovar, revered by
                                Hindus...
                            </p>
                            <strong>View Details</strong>
                        </div>
                    </div>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href="#" className="swiper-slide">
                    <div className="card">
                        <img
                            src="new-images/trips/image-6.jpeg"
                            className="card-img-top"
                            alt="Extra Trip 2"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Exciting Lumbini Pilgrimage</h5>
                            <span>3 Days </span>
                            <p>
                                Commence upon spiritual journey to Lumbini, the birthplace
                                of Lord Buddha, with our 2-night, 3-day package. Visit...
                            </p>
                            <strong>View Details</strong>
                        </div>
                    </div>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href="#" className="swiper-slide">
                    <div className="card">
                        <img
                            src="new-images/trips/image-7.jpeg"
                            className="card-img-top"
                            alt="Extra Trip 3"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Scenic Pokhara Valley Retreat</h5>
                            <span>4 Days </span>
                            <p>
                                Experience the allure of Rara Lake with our 3-night, 4-day
                                package. From exploring the pristine beauty of Rara...
                            </p>
                            <strong>View Details</strong>
                        </div>
                    </div>
                </a>
            </SwiperSlide>

            <div className="swiper-pagination"></div>
        </Swiper>
    );
};

export default TripsSwiper;