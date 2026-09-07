import { VEHICLE_CATEGORIES } from "@/lib/vehicleCategoriesData";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = VEHICLE_CATEGORIES[resolvedParams?.slug];
  return {
    title: category ? category.title : "Vehicle Details",
    description: category ? category.tagline || category.intro : "Dubai scrap car buyers",
  };
}

export default function DetailsSlugLayout({ children }) {
  return children;
}
