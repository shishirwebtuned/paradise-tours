"use client";
import { useState } from "react";
import Script from "next/script";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { faqs } from "@/data/data";
import Topsection from "@/Components/TopSection";


export default function SupportFAQs() {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState<string | null>(null);

    const filteredFaqs = faqs.filter(
        (faq) =>
            faq.question.toLowerCase().includes(search.toLowerCase()) ||
            faq.answer.toLowerCase().includes(search.toLowerCase())
    );

    const categories = ["General", "Bookings", "Payments", "Policies"];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <Script
                id="faq-json-ld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
            <Topsection title="Support & FAQs" image="/aboutbg.png" />
            <section className="tw:text-black tw:pt-0 tw:z-20 tw:pb-16 tw:text-center tw:relative">

                <div className="section-title tw:text-center tw:mb-12 tw:flex tw:items-center tw:flex-col">
                    <h3 className="wow fadeInUp">Support & FAQs</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                        We're Here to Help
                    </h2>
                    <p className="wow fadeInUp tw:lg:text-[15px] tw:md:text-[13px] tw:text-[11px] tw:max-w-3xl tw:text-center tw:text-gray-800" data-wow-delay="0.2s">
                        Have questions about our tours, bookings, or travel packages? Browse our frequently asked questions below or contact our support team for personalized assistance.
                    </p>
                </div>

            </section>

            {/* Sticky Table of Contents */}
            {/* <aside className="hidden md:block absolute left-4 top-32 bg-white shadow-md rounded-lg p-4 space-y-2 w-auto z-10">
                <h2 className="font-semibold mb-2">On this page</h2>
                {categories.map((cat) => (
                    <a key={cat} href={`#${cat}`} className="block text-blue-600 hover:underline">
                        {cat}
                    </a>
                ))}
            </aside> */}

            {/* FAQ Section */}
            <section className="tw:max-w-3xl tw:mx-auto tw:px-4 tw:z-20 tw:py-6">
                <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="tw:w-full tw:border tw:border-gray-500 tw:rounded-lg tw:p-3 tw:mb-8"
                />

                {categories.map((cat) => (
                    <div key={cat} id={cat} className="tw:mb-12 tw:mt-8">
                        <span className="tw:lg:text-2xl tw:md:text-xl tw:text-lg tw:font-medium  tw:text-[#63ab45]">{cat}</span>
                        <div className="tw:space-y-4 tw:mt-2">
                            {filteredFaqs
                                .filter((faq) => faq.category === cat)
                                .map((faq) => (
                                    <div
                                        key={faq.question}
                                        className={`tw:border tw:rounded-lg ${open === faq.question ? "tw:divide-y" : "tw:divide-y-0"}  tw:divide-gray-300 tw:transition-all tw:duration-300 tw:ease-in-out tw:text-[11px] tw:md:text-[13px] tw:lg:text-[15px]`}
                                    >
                                        <button
                                            className="tw:w-full tw:text-left tw:px-4 tw:py-3 tw:font-medium tw:flex tw:justify-between tw:items-center focus:outline-none focus:ring-0"
                                            aria-expanded={open === faq.question}
                                            aria-controls={`faq-${faq.question}`}
                                            onClick={() =>
                                                setOpen(open === faq.question ? null : faq.question)
                                            }
                                        >
                                            {faq.question}
                                            <span>{open === faq.question ? "−" : "+"}</span>
                                        </button>

                                        {/* Animated answer */}
                                        <div
                                            id={`faq-${faq.question}`}
                                            className={`tw:overflow-hidden tw:transition-all tw:duration-300 tw:ease-in-out ${open === faq.question
                                                ? "tw:max-h-40 tw:opacity-100"
                                                : "tw:max-h-0 tw:opacity-0"
                                                }`}
                                        >
                                            <div className="tw:px-4 tw:pb-3 tw:mt-3 tw:text-gray-700">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}

            </section>

            {/* Contact Panel */}
            <section className="tw:bg-gray-50 tw:py-12">
                <div className="tw:max-w-3xl tw:mx-auto tw:text-center tw:space-y-6 tw:shadow-md tw:bg-white tw:px-4 tw:py-6 tw:rounded-lg">
                    <h2 className="tw:text-2xl tw:font-bold tw:mt-2">Still need help?</h2>
                    <p className="tw:pt-3">Get in touch with our support team.</p>
                    <div className="tw:flex tw:justify-center tw:space-x-6">
                        <a href="tel:+123456789" className="tw:text-blue-600 tw:inline-flex tw:items-center tw:hover:underline tw:gap-2">
                            <IoMdCall />
                            Call Us
                        </a>
                        <a href="mailto:support@paradise.com" className="tw:text-blue-600 tw:gap-2 tw:inline-flex tw:items-center tw:hover:underline">
                            <MdEmail /> Email Us
                        </a>
                    </div>
                    <form className="tw:mt-6 tw:flex tw:flex-col tw:gap-y-6 tw:max-w-md tw:mx-auto">
                        <input type="text" placeholder="Your Name" className="tw:w-full tw:border tw:rounded-lg tw:p-3 tw:focus:outline-none tw:focus:ring tw:focus:ring-blue-400" />
                        <input type="email" placeholder="Your Email" className="tw:w-full tw:border tw:rounded-lg tw:p-3 tw:focus:outline-none tw:focus:ring tw:focus:ring-blue-400" />
                        <textarea placeholder="Your Message" className="tw:w-full tw:border tw:rounded-lg tw:p-3 tw:focus:outline-none tw:focus:ring tw:focus:ring-blue-400" rows={4}></textarea>
                        <div className="tw:bg-[#63AB45] tw:cursor-pointer  tw:text-white tw:px-6 tw:py-3 tw:rounded-lg tw:w-full">
                            Send Message
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}