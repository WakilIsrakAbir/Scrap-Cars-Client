// Site-wide constants for Scrap Car Buyer Dubai

export const SITE_INFO = {
  name: "ScrapCars Dubai",
  phone: "+971 50 123 4567",
  phoneRaw: "+971501234567",
  whatsapp: "971501234567",
  email: "info@scrapcarsdubai.ae",
  address: "Al Quoz Industrial Area 3, Dubai, UAE",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Submit Your Car",
    desc: "Fill in your car details, upload photos, and drop your pickup location.",
  },
  {
    step: "02",
    title: "Get Cash Offer",
    desc: "Our team reviews and sends you a guaranteed cash offer via WhatsApp.",
  },
  {
    step: "03",
    title: "Accept & Sign",
    desc: "Accept the offer and sign the digital agreement from your phone.",
  },
  {
    step: "04",
    title: "Free Pickup & Pay",
    desc: "We tow your car for free and pay you instant cash on the spot.",
  },
];

export const CAR_BRANDS = [
  "Toyota", "Nissan", "Honda", "Mercedes-Benz", "BMW", "Lexus",
  "Ford", "Hyundai", "Kia", "Audi", "Land Rover", "Mitsubishi",
  "Volkswagen", "Chevrolet", "Porsche", "Jeep", "GMC", "Dodge",
  "Infiniti", "Other",
];

export const CAR_CONDITIONS = [
  { id: "scrap", label: "Complete Scrap / Total Loss" },
  { id: "damaged", label: "Accident Damaged" },
  { id: "engine_dead", label: "Engine / Transmission Dead" },
  { id: "rta_failed", label: "Failed RTA / Expired Registration" },
  { id: "running_old", label: "Old but Running" },
  { id: "flood", label: "Flood / Water Damaged" },
];

export const POST_STATUSES = {
  PENDING: { label: "Pending Review", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
  UNDER_REVIEW: { label: "Under Review", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30" },
  OFFER_SENT: { label: "Offer Sent", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/30" },
  ACCEPTED: { label: "Accepted", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" },
  PICKUP_SCHEDULED: { label: "Pickup Scheduled", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30" },
  COMPLETED: { label: "Completed", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/30" },
  CANCELLED: { label: "Cancelled", color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/30" },
};

// Backend API base URL
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
