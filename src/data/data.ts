import { Attraction, BlogPost, FAQItem, GalleryItem, Offer } from "./type";

export const postsData: BlogPost[] = [
  {
    id: 1,
    title: "Exploring the Beauty of the Himalayas",
    excerpt:
      "Discover breathtaking views, serene landscapes, and an adventure of a lifetime in the heart of the Himalayas.",
    date: "Sep 15, 2025",
    readTime: "5 min read",
    category: "Trekking & Hiking",
    tags: ["Travel", "Adventure"],
    image: "/new-images/trips/image-1.webp",
  },
  {
    id: 2,
    title: "Top 10 Beaches to Visit in 2025",
    excerpt:
      "From tropical paradises to hidden gems, here are the best beaches to relax, unwind, and enjoy the waves.",
    date: "Sep 10, 2025",
    readTime: "7 min read",
    category: "Peak Climbing",
    tags: ["Beaches", "Relaxation"],
    image: "/new-images/trips/image-2.jpeg",
  },
  {
    id: 3,
    title: "Exploring the Beauty of the Himalayas",
    excerpt:
      "Discover breathtaking views, serene landscapes, and an adventure of a lifetime in the heart of the Himalayas.",
    date: "Sep 15, 2025",
    readTime: "5 min read",
    category: "Cultural Tours",
    tags: ["Travel", "Adventure"],
    image: "new-images/trips/image-6.jpeg",
  },
  {
    id: 4,
    title: "Exploring the Beauty of the Himalayas",
    excerpt:
      "Discover breathtaking views, serene landscapes, and an adventure of a lifetime in the heart of the Himalayas.",
    date: "Sep 15, 2025",
    readTime: "5 min read",
    category: "Adventure Activities",
    tags: ["Travel", "Adventure"],
    image: "new-images/trips/image-4.jpeg",
  },
  {
    id: 5,
    title: "Exploring the Beauty of the Himalayas",
    excerpt:
      "Discover breathtaking views, serene landscapes, and an adventure of a lifetime in the heart of the Himalayas.",
    date: "Sep 15, 2025",
    readTime: "5 min read",
    category: "Travel Tips",
    tags: ["Travel", "Adventure"],
    image: "new-images/trips/image-7.jpeg",
  },
  {
    id: 6,
    title: "Exploring the Beauty of the Himalayas",
    excerpt:
      "Discover breathtaking views, serene landscapes, and an adventure of a lifetime in the heart of the Himalayas.",
    date: "Sep 15, 2025",
    readTime: "5 min read",
    category: "Festivals & Events",
    tags: ["Travel", "Adventure"],
    image: "new-images/trips/image-2.jpeg",
  },
  {
    id: 7,
    title: "Exploring the Beauty of the Himalayas",
    excerpt:
      "Discover breathtaking views, serene landscapes, and an adventure of a lifetime in the heart of the Himalayas.",
    date: "Sep 15, 2025",
    readTime: "5 min read",
    category: "Trekking & Hiking",
    tags: ["Travel", "Adventure"],
    image: "new-images/trips/image-3.jpeg",
  },
  {
    id: 8,
    title: "Exploring the Beauty of the Himalayas",
    excerpt:
      "Discover breathtaking views, serene landscapes, and an adventure of a lifetime in the heart of the Himalayas.",
    date: "Sep 15, 2025",
    readTime: "5 min read",
    category: "Peak Climbing",
    tags: ["Travel", "Adventure"],
    image: "new-images/trips/image-6.jpeg",
  },
  {
    id: 9,
    title: "Exploring the Beauty of the Himalayas",
    excerpt:
      "Discover breathtaking views, serene landscapes, and an adventure of a lifetime in the heart of the Himalayas.",
    date: "Sep 15, 2025",
    readTime: "5 min read",
    category: "Cultural Tours",
    tags: ["Travel", "Adventure"],
    image: "new-images/trips/image-7.jpeg",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "What is Paradise Tours?",
    answer: "We are a travel agency offering curated trips worldwide.",
    category: "General",
  },
  {
    question: "How do I create an account?",
    answer: "You can sign up with your email and phone number.",
    category: "General",
  },
  {
    question: "How do I book a trip?",
    answer:
      "Select your preferred package, choose dates, and complete the checkout process.",
    category: "Bookings",
  },
  {
    question: "Can I change my booking?",
    answer: "Yes, you can modify bookings up to 48 hours before departure.",
    category: "Bookings",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept credit/debit cards, PayPal, and bank transfers.",
    category: "Payments",
  },
  {
    question: "Is my payment secure?",
    answer: "Yes, we use SSL encryption and trusted payment gateways.",
    category: "Payments",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellations up to 72 hours before departure are fully refundable.",
    category: "Policies",
  },
  {
    question: "Do you offer travel insurance?",
    answer: "Yes, we recommend adding travel insurance at checkout.",
    category: "Policies",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    src: "/new-images/dubai-image.jpg",
    alt: "Dubai",
    caption: "Beautiful scenery from trip 1",
    rowSpan: 2,
    colSpan: 2,
  },
  {
    src: "/new-images/indonesia-image.jpg",
    alt: "Indonesia",
    caption: "Beautiful scenery from trip 2",
  },
  {
    src: "/new-images/nepal-boudha.jpg",
    alt: "Nepal",
    caption: "Beautiful scenery from trip 3",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Gallery 1",
    caption: "Relaxing by the lake",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Gallery 2",
    caption: "Adventure snapshot",
    colSpan: 1,
    rowSpan: 1,
  },

  {
    src: "/images/gallery-3.jpg",
    alt: "Gallery 3",
    caption: "Nature vibes",
    rowSpan: 2,
  },
  {
    src: "/videos/hero-video.mp4",
    alt: "Video placeholder",
    caption: "Short travel video",
    type: "video",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Gallery 2",
    caption: "Adventure snapshot",
    rowSpan: 1,
  },
];

export const offers: Offer[] = [
  {
    id: 1,
    image: "/new-images/trips/image-1.webp",
    headline: "Luxury Spa Package",
    description: "Relax and rejuvenate with our exclusive spa package.",
    price: "$99",
    discount: "$200",
    savings: "Save $50",
    validity: "Valid until 30 Sep 2025",
  },
  {
    id: 2,
    image: "/new-images/trips/image-2.jpeg",
    headline: "Weekend Getaway",
    description: "Enjoy a peaceful weekend with 2 nights stay.",
    price: "$199",
    discount: "$280",
    savings: "Save $80",
    validity: "Valid until 15 Oct 2025",
  },
  {
    id: 3,
    image: "/new-images/trips/image-6.jpeg",
    headline: "Indonesia Special Package",
    description:
      "Experience the beauty of Indonesia with this exclusive package.",
    price: "$299",
    discount: "$400",
    savings: "Save $100",
    validity: "Valid until 31 Dec 2025",
  },
];

export const specialOfferFAQ = [
  {
    question: "Can I combine offers?",
    answer: "No, each offer must be redeemed separately.",
  },
  {
    question: "How do I book?",
    answer: "Click the 'Book Now' button and follow the steps.",
  },
  {
    question: "Is payment refundable?",
    answer: "All payments are non-refundable.",
  },
];

export const termsData = [
  {
    title: "Term 1",
    content: "Offer valid for a limited time only. ",
  },
  {
    title: "Term 2",
    content: "Cannot be combined with other offers.",
  },
  {
    title: "Term 3",
    content: "Non-refundable payments.",
  },
];

export const redeemData = [
  {
    title: "Step 1",
    content: "Click the 'Book Now' button.",
  },
  {
    title: "Step 2",
    content: "Fill out your details and select your offer.",
  },
  {
    title: "Step 3",
    content: "Confirm payment and receive confirmation email.",
  },
];

export const faqData = [
  {
    title: "Can I combine offers?",
    content: "No, each offer must be redeemed separately.",
  },
  {
    title: "How do I book?",
    content: "Click the 'Book Now' button and follow the steps.",
  },
  {
    title: "Is payment refundable? ",
    content: "All payments are non-refundable.",
  },
];

export const attractionsData: Attraction[] = [
  {
    id: 1,
    name: "Bali Beach",
    category: "Nature",
    description: "A beautiful sandy beach with crystal clear water.",
    distance: "5 km / 15 min",
    image: "/new-images/trips/image-2.jpeg",
    address: "Jl. Pantai Kuta, Bali, Indonesia",
    hours: "6:00 AM - 6:00 PM",
    directionsUrl: "https://maps.app.goo.gl/3RVjwSq5TpheAAUo9",
  },
  {
    id: 2,
    name: "Ubud Monkey Forest",
    category: "Culture",
    description: "A sanctuary of monkeys and ancient temples.",
    distance: "15 km / 35 min",
    image: "/new-images/trips/image-3.jpeg",
    address: "Jl. Monkey Forest, Ubud, Bali",
    hours: "8:00 AM - 6:00 PM",
    directionsUrl: "https://maps.app.goo.gl/3RVjwSq5TpheAAUo9",
  },
  {
    id: 3,
    name: "Local Balinese Restaurant",
    category: "Dining",
    description: "Taste authentic Balinese cuisine in a cozy environment.",
    distance: "3 km / 10 min",
    image: "/new-images/trips/image-4.jpeg",
    address: "Jl. Raya Seminyak, Bali",
    hours: "10:00 AM - 10:00 PM",
    directionsUrl: "https://maps.app.goo.gl/3RVjwSq5TpheAAUo9",
  },
  {
    id: 4,
    name: "Tegallalang Rice Terraces",
    category: "Nature",
    description: "Iconic stepped rice fields surrounded by lush greenery.",
    distance: "20 km / 45 min",
    image: "/new-images/trips/image-5.jpg",
    address: "Jl. Raya Tegallalang, Ubud, Bali",
    hours: "6:00 AM - 6:00 PM",
    directionsUrl: "https://maps.app.goo.gl/4ABcdeTegallalang",
  },
  {
    id: 5,
    name: "Pura Ulun Danu Bratan",
    category: "Culture",
    description: "A picturesque water temple on the shores of Lake Bratan.",
    distance: "35 km / 1 hr",
    image: "/new-images/trips/image-6.jpeg",
    address: "Jl. Raya Candi Kuning, Bali",
    hours: "7:00 AM - 5:00 PM",
    directionsUrl: "https://maps.app.goo.gl/5XYzUlunDanu",
  },
  {
    id: 6,
    name: "Seminyak Beach Cafe",
    category: "Dining",
    description:
      "Relax with ocean views and enjoy a selection of cocktails and seafood.",
    distance: "4 km / 12 min",
    image: "/new-images/trips/image-7.jpeg",
    address: "Jl. Kayu Aya, Seminyak, Bali",
    hours: "9:00 AM - 11:00 PM",
    directionsUrl: "https://maps.app.goo.gl/6CafeSeminyak",
  },
];

export const tripsData = [
  {
    id: 1,
    title: "Dubai Adventure",
    image: "/new-images/trips/image-2.jpeg",
    images: [
      "/new-images/trips/image-1.webp",
      "/new-images/trips/image-2.jpeg",
      "/new-images/trips/image-3.jpeg",
    ],
    shortDescription: "A 5-day luxury getaway in the city of wonders.",
    overview:
      "Experience the glamour of Dubai with desert safaris, city tours, and beach relaxation.",
    highlights: ["Desert Safari", "Burj Khalifa Visit", "Dhow Cruise Dinner"],
    inclusions: ["Hotel Stay", "Daily Breakfast", "Airport Transfers"],
    exclusions: ["Flights", "Personal Expenses"],
    itinerary: [
      { day: "Day 1", details: "Arrival and leisure evening at Marina." },
      { day: "Day 2", details: "City tour and Burj Khalifa visit." },
      { day: "Day 3", details: "Desert safari with BBQ dinner." },
      { day: "Day 4", details: "Shopping and Dhow Cruise." },
      { day: "Day 5", details: "Departure." },
    ],
  },
  {
    id: 2,
    title: "Annapurna Base Camp Trek",
    image: "/new-images/trips/image-3.jpeg",
    shortDescription: "A 12-day trek to the heart of the Himalayas.",
    overview:
      "Walk through rhododendron forests and enjoy panoramic Himalayan views.",
    highlights: [
      "Sunrise at Poon Hill",
      "Traditional Gurung Villages",
      "Majestic Himalayas",
    ],
    inclusions: ["Guide", "Porter", "Permits"],
    exclusions: ["Flights", "Insurance"],
    itinerary: [
      { day: "Day 1", details: "Arrival in Kathmandu." },
      { day: "Day 2", details: "Drive to Pokhara." },
      { day: "Day 3–10", details: "Trek to ABC and return." },
      { day: "Day 11", details: "Return to Kathmandu." },
      { day: "Day 12", details: "Departure." },
    ],
  },
  {
    id: 3,
    title: "Australia Explorer",
    image: "/new-images/trips/image-3.jpeg",
    shortDescription: "10 days of beaches, cities, and outback adventures.",
    overview:
      "Explore Sydney, the Great Barrier Reef, and Uluru with expert guides.",
    highlights: ["Sydney Opera House", "Great Barrier Reef", "Uluru"],
    inclusions: ["Accommodation", "Domestic Flights", "Guided Tours"],
    exclusions: ["International Flights", "Meals not mentioned"],
    itinerary: [
      { day: "Day 1–2", details: "Sydney sightseeing and harbour cruise." },
      { day: "Day 3–5", details: "Cairns and Great Barrier Reef tours." },
      { day: "Day 6–8", details: "Melbourne city and Phillip Island." },
      { day: "Day 9–10", details: "Outback exploration at Uluru." },
    ],
  },
];
