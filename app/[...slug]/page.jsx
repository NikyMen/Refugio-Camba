import { notFound, redirect } from "next/navigation";
import PropertyDetail from "../components/PropertyDetail";
import { findListing, listings } from "../data/listings";

function getSlug(params) {
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  if (!slug) return "";

  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

export function generateStaticParams() {
  return listings.map((item) => ({ slug: [item.slug] }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = getSlug(resolvedParams);
  if (slug === "reseñas") {
    return {
      title: "Reseñas | Refugio Camba",
      description: "Opiniones de huéspedes sobre Refugio Camba y San Luis 1473.",
    };
  }

  const listing = findListing(slug);
  if (!listing) return { title: "No encontrado | Refugio Camba" };
  return {
    title: `${listing.title} | Refugio Camba`,
    description: listing.short,
  };
}

export default async function PropertyPage({ params }) {
  const resolvedParams = await params;
  const slug = getSlug(resolvedParams);
  if (slug === "reseñas") redirect("/resenas");

  const listing = findListing(slug);
  if (!listing) notFound();
  return <PropertyDetail listing={listing} />;
}
