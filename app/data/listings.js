export const phone = "5493790000000";

export const waLink = (text) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

export const mapsLink = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const listings = [
  {
    id: "san-luis-1473",
    slug: "alquiler-1473",
    title: "San Luis 1473",
    eyebrow: "Alquiler temporal",
    location: "San Luis 1473, Corrientes",
    neighborhood: "Centro",
    summary:
      "Departamento cálido para dos personas a pasos del centro correntino. Pensado para llegar, soltar la valija y disfrutar.",
    short: "Alquiler temporal para 2 huéspedes en San Luis 1473.",
    coverImage: "/assets/refugio-camba/living.jpg",
    heroImage: "/assets/refugio-camba/airbnb/airbnb-dining-square.jpeg",
    capacity: { guests: 2, bedrooms: 1, bathrooms: 1, beds: 1 },
    facts: ["2 huéspedes", "1 dormitorio", "1 baño", "Balcón"],
    amenities: [
      { icon: "wifi", label: "Wi-Fi rápido" },
      { icon: "ac", label: "Aire acondicionado" },
      { icon: "kitchen", label: "Cocina equipada" },
      { icon: "tv", label: "Smart TV" },
      { icon: "balcony", label: "Balcón con vista" },
      { icon: "laundry", label: "Lavarropas" },
      { icon: "parking", label: "Estacionamiento cercano" },
      { icon: "security", label: "Edificio seguro" },
    ],
    waText: "Hola, quiero consultar disponibilidad por San Luis 1473",
    mapQuery: "San Luis 1473 Corrientes Argentina",
    available: true,
    spaces: [
      {
        id: "living",
        title: "Living",
        icon: "living",
        photos: ["/assets/refugio-camba/living.jpg"],
      },
      {
        id: "comedor",
        title: "Comedor",
        icon: "dining",
        photos: [
          "/assets/refugio-camba/comedor-1.jpg",
          "/assets/refugio-camba/comedor-2.jpg",
          "/assets/refugio-camba/adicional-2.jpg",
          "/assets/refugio-camba/adicional-3.jpg",
        ],
      },
      {
        id: "cocina",
        title: "Cocina",
        icon: "kitchen",
        photos: [
          "/assets/refugio-camba/cocina-1.jpg",
          "/assets/refugio-camba/cocina-2.jpg",
        ],
      },
      {
        id: "dormitorio",
        title: "Dormitorio",
        icon: "bed",
        photos: [
          "/assets/refugio-camba/dormitorio-1.jpg",
          "/assets/refugio-camba/dormitorio-2.jpg",
          "/assets/refugio-camba/dormitorio-3.jpg",
          "/assets/refugio-camba/dormitorio-4.jpg",
        ],
      },
      {
        id: "bano",
        title: "Baño",
        icon: "bath",
        photos: [
          "/assets/refugio-camba/bano-1.jpg",
          "/assets/refugio-camba/bano-2.jpg",
        ],
      },
      {
        id: "balcon",
        title: "Balcón",
        icon: "balcony",
        photos: ["/assets/refugio-camba/balcon.jpg"],
      },
      {
        id: "lavadero",
        title: "Lavadero",
        icon: "laundry",
        photos: ["/assets/refugio-camba/lavadero.jpg"],
      },
      {
        id: "edificio",
        title: "Edificio",
        icon: "building",
        photos: ["/assets/refugio-camba/edificio.jpg"],
      },
    ],
  },
];

export const upcomingListings = [
  { city: "Corrientes", neighborhood: "Costanera", note: "Próximamente" },
  { city: "Corrientes", neighborhood: "Centro histórico", note: "En preparación" },
];

export const findListing = (slug) =>
  listings.find((item) => item.slug === slug || item.id === slug);
