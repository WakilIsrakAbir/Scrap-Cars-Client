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
  "Abarth", "Acura", "Aiways", "Alfa Romeo", "Alpine", "Aston Martin", "Audi", 
  "Austin", "Autobianchi", "BAIC", "Baojun", "Bentley", "BMW", "Borgward", 
  "Brilliance", "Bugatti", "Buick", "BYD", "Cadillac", "Changan", "Chery", 
  "Chevrolet", "Chrysler", "Citroen", "Cupra", "Dacia", "Daewoo", "Daihatsu", 
  "Datsun", "De Tomaso", "Dodge", "Dongfeng", "DS Automobiles", "Eagle", "Exeed", 
  "FAW", "Ferrari", "Fiat", "Fisker", "Force", "Ford", "Foton", "GAC", "Geely", 
  "Genesis", "Geo", "GMC", "Great Wall", "Haval", "Hino", "Holden", "Honda", 
  "Hongqi", "Hummer", "Hyundai", "Infiniti", "Ineos", "Innocenti", "Isuzu", 
  "Iveco", "JAC", "Jaecoo", "Jaguar", "Jeep", "Jetour", "JMC", "Karma", "Kia", 
  "Koenigsegg", "KTM", "Lada", "Lamborghini", "Lancia", "Land Rover", "Lexus", 
  "Lifan", "Lincoln", "Lotus", "Lucid", "Lynk & Co", "Mahindra", "Marcos", 
  "Maserati", "Maxus", "Maybach", "Mazda", "McLaren", "Mercedes-Benz", "Mercury", 
  "MG", "Mini", "Mitsubishi", "Mitsuoka", "Morgan", "Morris", "Nio", "Nissan", 
  "Noble", "Oldsmobile", "Omoda", "Opel", "Pagani", "Panoz", "Peugeot", "Plymouth", 
  "Polestar", "Pontiac", "Porsche", "Proton", "Qoros", "Ram", "Range Rover", 
  "Ravon", "Renault", "Rimac", "Rivian", "Roewe", "Rolls-Royce", "Rover", "Saab", 
  "Saleen", "Saturn", "Scion", "Seat", "Seres", "Shelby", "Skoda", "Smart", 
  "Spyker", "SsangYong", "Subaru", "Suzuki", "Talbot", "Tank", "Tata", "Tesla", 
  "Think", "Toyota", "Triumph", "TVR", "Vauxhall", "Vector", "Venturi", 
  "VinFast", "Volkswagen", "Volvo", "VPG", "Wiesmann", "Wuling", "Xpeng", 
  "Yugo", "Zeekr", "Zotye", "Other"
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
  PENDING: {
    label: "Pending Review",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30",
  },
  UNDER_REVIEW: {
    label: "Under Review",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
  },
  CONTACTED: {
    label: "Contacted / Accepted",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
  },
  ACCEPTED: {
    label: "Accepted",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
  },
  PICKUP_SCHEDULED: {
    label: "Pickup Scheduled",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
  },
  COMPLETED: {
    label: "Completed",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/30",
  },
  REJECTED: {
    label: "Declined",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/30",
  },
  CANCELLED: {
    label: "Cancelled",
    color: "text-slate-400",
    bg: "bg-slate-400/10",
    border: "border-slate-400/30",
  },
  OFFER_SENT: {
    label: "Reviewed",
    color: "text-amber-300",
    bg: "bg-amber-300/10",
    border: "border-amber-300/30",
  },
};

// Backend API base URL
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
