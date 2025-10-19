import Script from "next/script";
import TripsSwiper from "./Home/Components/TripsSwiper";

export default function HomePage() {
  return (
    <>
      <div className="hero hero-video">
        <div className="hero-bg-video">

          <video autoPlay muted loop id="video">
            <source src="videos/hero-video.mp4" type="video/mp4" />
          </video>


          {/* <div id="herovideo" className="player" data-property="{videoURL:'74DWwSxsVSs',containment:'.hero-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="hero-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title">
                    <h1 className="text-anime-style-2" data-cursor="-opaque">
                      Trusted Travel Agent in Melbourne
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias nobis odio dolore quod cupiditate aperiam incidunt
                      fuga quia voluptate ipsam!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="hero-form">
                    <div
                      className="reservation-form d-flex justify-content-end align-items-center"
                    >
                      <div className="form-container rounded-4">
                        <h5 className="text-center mb-3">Select a date to explore</h5>
                        <h2 className="text-center mb-4">Make Your Reservation</h2>
                        <form>
                          <div className="mb-3">
                            <label htmlFor="checkIn" className="form-label"
                            >Check In
                            </label>
                            <input
                              type="date"
                              id="checkIn"
                              className="form-control"
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="checkOut" className="form-label"
                            >Check Out</label>
                            <input
                              type="date"
                              id="checkOut"
                              className="form-control"
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="rooms" className="form-label">Rooms</label>
                            <select id="rooms" className="form-select">
                              <option>1 Room</option>
                              <option>2 Rooms</option>
                              <option>3 Rooms</option>
                            </select>
                          </div>
                          <div className="row g-3 mb-3">
                            <div className="col">
                              <label htmlFor="adults" className="form-label"
                              >Adults</label>
                              <select id="adults" className="form-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                            <div className="col">
                              <label htmlFor="children" className="form-label"
                              >Children</label>
                              <select id="children" className="form-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                          </div>
                          <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-lg">
                              Confirm Availability <span className="ms-2">✈️</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-us-images">
                <div className="about-img-1">
                  <figure className="image-anime">
                    <img src="new-images/shocking-view-image.jpg" alt="" />
                  </figure>
                </div>

                {/* <div className="about-img-2">
                  <figure className="image-anime">
                    <img src="images/about-img-1.jpg" alt="" />
                  </figure>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-us-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Shocking Views</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Get a glimpse of what you can experience
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Paradise Tours and Travel isn’t just about booking flights and
                    hotels – it’s about crafting unforgettable experiences that
                    stay with you forever. Here’s a taste of the incredible
                    adventures you can embark on:
                  </p>
                </div>

                <div className="listing-content">
                  <ul>
                    <li className="wow fadeInUp tw:flex tw:flex-row tw:items-center" data-wow-delay="0.2s">
                      <span className="list-icon">
                        <img src="new-images/icons/pray.png" />
                      </span>
                      <span className="text">Immerse Yourself in Culture</span>
                    </li>
                    <li className="wow fadeInUp tw:flex tw:flex-row tw:items-center" data-wow-delay="0.2s">
                      <span className="list-icon">
                        <img src="new-images/icons/lake.png" />
                      </span>
                      <span className="text"
                      >Experience the Majesty of the Himalayas</span>
                    </li>
                    <li className="wow fadeInUp tw:flex tw:flex-row tw:items-center" data-wow-delay="0.2s">
                      <span className="list-icon">
                        <img src="new-images/icons/palm-tree.png" />
                      </span>
                      <span className="text">Relax and Recharge in Paradise</span>
                    </li>
                    <li className="wow fadeInUp tw:flex tw:flex-row tw:items-center" data-wow-delay="0.2s">
                      <span className="list-icon">
                        <img src="new-images/icons/diamonds.png" />
                      </span>
                      <span className="text">Discover Hidden Gems</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottom-content wow fadeInUp" data-wow-delay="0.2s">
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Get ready for the best vacation ever!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row section-row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h3 className="wow fadeInUp">Our Attractions</h3>
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              Explore the World with Us
            </h2>
          </div>
        </div>
      </div>
      <div className="scene">
        <div className="background"></div>
        <div className="background background--2"></div>
        <div className="background background--3"></div>
        <div className="content">
          <h1></h1>
          <hr />
          <h2></h2>
        </div>
        {/* <div className="randomize">
          <button>↻</button>
        </div> */}
      </div>

      <div className="why-choose-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="why-choose-item wow fadeInUp">
                <div className="icon-box">
                  <img src="new-images/icons/low-cost.png" alt="" />
                </div>
                <div className="why-choose-item-content">
                  <h3>Expertise Meets Affordability</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="why-choose-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-box">
                  <img src="new-images/icons/beach.png" alt="" />
                </div>
                <div className="why-choose-item-content">
                  <h3>Stress-Free Planning, Seamless Journeys</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box">
                  <img src="new-images/icons/customer-service.png" alt="" />
                </div>
                <div className="why-choose-item-content">
                  <h3>24/7 priority customer support</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box">
                  <img src="new-images/icons/notes.png" alt="" />
                </div>
                <div className="why-choose-item-content">
                  <h3>Carefully & Expertly Curated Packages</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="trips">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="wow fadeInUp">Trips</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Let's go on a trip together
                </h2>
              </div>
            </div>
          </div>
          <TripsSwiper />
        </div>
      </section>

      <div className="what-we-do">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">Travel in Style</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Relax, explore, and create lasting memories. We’ll handle the
                  rest.
                </h2>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="section-title-content wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <p>
                  Relaxing on pristine beaches, exploring ancient ruins, or
                  savoring exotic cuisines. At Paradise , we craft dream vacations
                  that let you unwind, explore, and create lasting memories. We
                  handle the logistics, you focus on the fun. Contact us today and
                  let the adventure begin!
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="intro-video-box">
                <div className="intro-bg-video">

                  <video autoPlay muted loop id="myvideo">
                    <source
                      src="new-images/video/middle-page-video.mp4"
                      type="video/mp4"
                    />
                  </video>

                  {/* <div id="herovideo" className="player" data-property="{videoURL:'74DWwSxsVSs',containment:'.hero-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
                </div>


                <div className="intro-video-counter">
                  <h1 className="text-anime-style-2" data-cursor="-opaque">
                    Paradise Tours & Travel: Explore Further, Worry Less
                  </h1>
                  <p
                    className="section-title-content wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    World awaits! We craft unforgettable experiences – hikes,
                    ruins, beaches & beyond. Let our experts plan it all.
                    Stress-free travel, 24/7 support. Explore sustainably with
                    Paradise!
                  </p>
                  <a href="#" className="btn-default">READ MORE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="marquee-wrapper">
        <div className="item item1">
          <img
            src="new-images/partner-logo/1.png"
            alt="uae"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="item item2">
          <img
            src="new-images/partner-logo/2.png"
            alt="usa"
            className="object-cover object-center"
          />
        </div>
        <div className="item item3">
          <img
            src="new-images/partner-logo/3.png"
            alt="australia"
            className="object-cover object-center"
          />
        </div>
        <div className="item item4">
          <img
            src="new-images/partner-logo/4.png"
            alt="denmark"
            className="object-cover object-center h-full w-full"
          />
        </div>
        <div className="item item5">
          <img
            src="new-images/partner-logo/5.png"
            alt="brunei"
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="our-faqs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="our-faqs-content">
                <div className="section-title text-center">
                  <h3 className="wow fadeInUp">FAQs</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Frequently asked questions
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <div className="faq-cta-box">
                <div className="customer-images">
                  <figure><img src="new-images/faq-image.jpg" alt="" /></figure>
                </div>
                <div
                  className="faq-cta-box-content wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <h3>Still have you any question?</h3>
                  <a href="tel:+0450 020 940" className="btn-faqs">0450 020 940</a>
                </div>
              </div> */}
            </div>
            <div className="col-lg-12">
              <div className="faq-accordion" id="faqaccordion">
                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="heading1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      <span>1.</span>What is included in the tour packages?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading1"
                    data-bs-parent="#faqaccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Our tour packages typically include flight bookings,
                        accommodation, transportation, guided tours, and sometimes
                        meals and entrance fees to attractions. However, the
                        specific inclusions may vary depending on the package. We
                        always provide detailed information about what is included
                        in each package on our website or during the booking
                        process.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                  <h2 className="accordion-header" id="heading2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      <span>2.</span>

                      How do I book a tour or vacation package with your company?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading2"
                    data-bs-parent="#faqaccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Booking a tour or vacation package with us is easy! You
                        can either browse our website and book online, or you can
                        contact our friendly customer service team who will assist
                        you in finding the perfect itinerary for your needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                  <h2 className="accordion-header" id="heading3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      <span>3.</span>Do you offer travel insurance?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading3"
                    data-bs-parent="#faqaccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, we offer optional travel insurance for added peace of
                        mind during your trip. Our travel insurance typically
                        covers trip cancellations, medical emergencies, lost
                        luggage, and other unforeseen circumstances. We highly
                        recommend purchasing travel insurance to protect your
                        investment in case of any unexpected events.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                  <h2 className="accordion-header" id="heading4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      <span>4.</span>What happens if I need to cancel or change my
                      booking?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading4"
                    data-bs-parent="#faqaccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Our cancellation and change policies vary depending on the
                        type of booking and the terms and conditions of the
                        suppliers we work with. We always strive to be as flexible
                        as possible and will do our best to accommodate your
                        needs. However, please be aware that cancellation fees may
                        apply, especially if you are canceling close to the
                        departure date.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                  <h2 className="accordion-header" id="heading5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                      <span>5.</span>Are your tours suitable for solo travelers,
                      families, or groups?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading5"
                    data-bs-parent="#faqaccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Absolutely! We cater to a wide range of travelers,
                        including solo adventurers, families, couples, and groups
                        of friends. Many of our tours are designed to be enjoyed
                        by travelers of all ages and interests. We also offer
                        customizable private tours for those looking for a more
                        personalized experience. Whatever your travel style, we
                        have something for everyone!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                  <h2 className="accordion-header" id="heading6">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse6"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                      <span>6.</span>Do you offer any discounts or promotions for
                      your tours?
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading6"
                    data-bs-parent="#faqaccordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, we frequently offer discounts and promotions on our
                        tours and vacation packages. These may include early
                        booking discounts, last-minute deals, group discounts,
                        loyalty rewards, or seasonal promotions. Be sure to check
                        our website regularly or subscribe to our newsletter to
                        stay updated on the latest offers and discounts available.
                        Additionally, feel free to inquire with our customer
                        service team about any current promotions when booking
                        your trip.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="scroll-container">
        <div className="scroll-text">
          <span className="tw:flex tw:items-center tw:gap-1">
            The <strong>best</strong> place for your <strong>adventure</strong> is here
            <img src="new-images/icons/plane.png" />
          </span>

          <span className="tw:flex tw:items-center tw:gap-1">
            The <strong>best</strong> place for your <strong>adventure</strong> is here
            <img src="new-images/icons/ship.png" />
          </span>

          <span className="tw:flex tw:items-center tw:gap-1">
            The <strong>best</strong> place for your <strong>adventure</strong> is here
            <img src="new-images/icons/bag.png" />
          </span>

          <span className="tw:flex tw:items-center tw:gap-1">
            The <strong>best</strong> place for your <strong>adventure</strong> is here
            <img src="new-images/icons/plane.png" />
          </span>

          {/* Duplicate content for seamless scrolling */}
          <span className="tw:flex tw:items-center tw:gap-1">
            The <strong>best</strong> place for your <strong>adventure</strong> is here
            <img src="new-images/icons/ship.png" />
          </span>

          <span className="tw:flex tw:items-center tw:gap-1">
            The <strong>best</strong> place for your <strong>adventure</strong> is here
            <img src="new-images/icons/bag.png" />
          </span>
        </div>
      </div>


    </>
  );
}
