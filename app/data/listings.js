export const phone = "5493794781906";
export const displayPhone = "+54 9 3794 78-1906";

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
    coverImage: "/assets/refugio-camba/dormitorio-1.jpg",
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
      { icon: "waterfront", label: "Cerca de la costanera" },
      { icon: "beach", label: "Cerca de la playa" },
      { icon: "dining", label: "Desayuno" },
      { icon: "security", label: "Edificio seguro" },
    ],
    waText: "Hola, quiero consultar por San Luis 1473",
    airbnbUrl: "https://www.airbnb.com.ar/rooms/1674699382362407455",
    mapQuery: "San Luis 1473 Corrientes Argentina",
    nearbyPlaces: [
      {
        title: "Costanera General San Martín",
        tag: "Atardecer sobre el Paraná",
        description: "El paseo ribereño clásico para caminar, tomar algo y ver bajar el sol frente al río.",
        image: "https://visitcorrientes.tur.ar/wp-content/uploads/2023/10/rio.jpg",
        mapQuery: "Costanera General San Martín Corrientes",
      },
      {
        title: "Parque Cambá Cuá",
        tag: "Verde, murales y cultura",
        description: "Uno de los parques más grandes y tradicionales, cerca de la costanera y con mucha vida local.",
        image: "https://visitcorrientes.tur.ar/wp-content/uploads/2018/07/camba-cua-16.jpg",
        mapQuery: "Parque Camba Cua Corrientes",
      },
      {
        title: "Plaza 25 de Mayo",
        tag: "Centro histórico",
        description: "La plaza principal, rodeada por edificios cívicos, La Merced y postales patrimoniales.",
        image: "https://visitcorrientes.tur.ar/wp-content/uploads/2018/07/plaza.jpg",
        mapQuery: "Plaza 25 de Mayo Corrientes",
      },
      {
        title: "Teatro Oficial Juan de Vera",
        tag: "Belle Époque correntina",
        description: "Una sala de 1913, reconocida por su arquitectura y su acústica en pleno centro.",
        image: "https://visitcorrientes.tur.ar/wp-content/uploads/2018/07/T9A6256-Edit.jpg",
        mapQuery: "Teatro Oficial Juan de Vera Corrientes",
      },
      {
        title: "Punta Arazaty y Puente Belgrano",
        tag: "Playas, murales y puente",
        description: "Un punto fuerte para playa, arte urbano y vistas al puente que une Corrientes con Chaco.",
        image: "https://visitcorrientes.tur.ar/wp-content/uploads/2018/07/paseo-de-los-murales-paseo-arazaty-2-1.jpg",
        mapQuery: "Punta Arazaty Puente General Belgrano Corrientes",
      },
    ],
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
  {
    id: "bolivar-625",
    slug: "alquiler-bolivar-625",
    title: "Bolívar 625",
    eyebrow: "Alquiler temporal",
    location: "Bolívar 625, Corrientes",
    neighborhood: "Centro",
    summary:
      "Monoambiente moderno y luminoso en un edificio nuevo del centro correntino. Cama queen, cocina full equipada y galería con vista a la ciudad. Llegás, soltás la valija y disfrutás.",
    short: "Monoambiente temporal para 2 huéspedes en Bolívar 625.",
    coverImage: "/assets/refugio-camba/depto-bolivar/dormitorio-1.jpg",
    heroImage: "/assets/refugio-camba/depto-bolivar/ambiente-1.jpg",
    capacity: { guests: 2, bedrooms: 1, bathrooms: 1, beds: 1 },
    facts: ["2 huéspedes", "Monoambiente", "1 baño", "Galería"],
    amenities: [
      { icon: "wifi", label: "Wi-Fi rápido" },
      { icon: "ac", label: "Aire acondicionado" },
      { icon: "kitchen", label: "Cocina equipada" },
      { icon: "tv", label: "Smart TV" },
      { icon: "laundry", label: "Lavarropas" },
      { icon: "balcony", label: "Galería con vista" },
      { icon: "parking", label: "Cochera en el edificio" },
      { icon: "waterfront", label: "Cerca de la costanera" },
      { icon: "dining", label: "Desayuno" },
      { icon: "security", label: "Edificio seguro" },
    ],
    waText: "Hola, quiero consultar por Bolívar 625",
    airbnbUrl:
      "https://www.airbnb.com.ar/rooms/1697841099291884884?unique_share_id=61f8c682-7f9b-4400-a427-2a151fce0557&viralityEntryPoint=1&s=76",
    mapQuery: "Bolívar 625 Corrientes Argentina",
    nearbyPlaces: [
      {
        title: "Costanera General San Martín",
        tag: "Atardecer sobre el Paraná",
        description: "El paseo ribereño clásico para caminar, tomar algo y ver bajar el sol frente al río.",
        image: "https://visitcorrientes.tur.ar/wp-content/uploads/2023/10/rio.jpg",
        mapQuery: "Costanera General San Martín Corrientes",
      },
      {
        title: "Parque Cambá Cuá",
        tag: "Verde, murales y cultura",
        description: "Uno de los parques más grandes y tradicionales, cerca de la costanera y con mucha vida local.",
        image: "https://visitcorrientes.tur.ar/wp-content/uploads/2018/07/camba-cua-16.jpg",
        mapQuery: "Parque Camba Cua Corrientes",
      },
      {
        title: "Plaza 25 de Mayo",
        tag: "Centro histórico",
        description: "La plaza principal, rodeada por edificios cívicos, La Merced y postales patrimoniales.",
        image: "https://visitcorrientes.tur.ar/wp-content/uploads/2018/07/plaza.jpg",
        mapQuery: "Plaza 25 de Mayo Corrientes",
      },
      {
        title: "Teatro Oficial Juan de Vera",
        tag: "Belle Époque correntina",
        description: "Una sala de 1913, reconocida por su arquitectura y su acústica en pleno centro.",
        image: "https://visitcorrientes.tur.ar/wp-content/uploads/2018/07/T9A6256-Edit.jpg",
        mapQuery: "Teatro Oficial Juan de Vera Corrientes",
      },
      {
        title: "Punta Arazaty y Puente Belgrano",
        tag: "Playas, murales y puente",
        description: "Un punto fuerte para playa, arte urbano y vistas al puente que une Corrientes con Chaco.",
        image: "https://visitcorrientes.tur.ar/wp-content/uploads/2018/07/paseo-de-los-murales-paseo-arazaty-2-1.jpg",
        mapQuery: "Punta Arazaty Puente General Belgrano Corrientes",
      },
    ],
    spaces: [
      {
        id: "ambiente",
        title: "Ambiente",
        icon: "living",
        photos: [
          "/assets/refugio-camba/depto-bolivar/ambiente-1.jpg",
          "/assets/refugio-camba/depto-bolivar/ambiente-2.jpg",
        ],
      },
      {
        id: "dormitorio",
        title: "Dormitorio",
        icon: "bed",
        photos: [
          "/assets/refugio-camba/depto-bolivar/dormitorio-1.jpg",
          "/assets/refugio-camba/depto-bolivar/dormitorio-2.jpg",
          "/assets/refugio-camba/depto-bolivar/dormitorio-3.jpg",
          "/assets/refugio-camba/depto-bolivar/dormitorio-4.jpg",
          "/assets/refugio-camba/depto-bolivar/dormitorio-5.jpg",
          "/assets/refugio-camba/depto-bolivar/dormitorio-6.jpg",
        ],
      },
      {
        id: "cocina",
        title: "Cocina",
        icon: "kitchen",
        photos: [
          "/assets/refugio-camba/depto-bolivar/cocina-1.jpg",
          "/assets/refugio-camba/depto-bolivar/cocina-2.jpg",
          "/assets/refugio-camba/depto-bolivar/cocina-3.jpg",
          "/assets/refugio-camba/depto-bolivar/cocina-4.jpg",
        ],
      },
      {
        id: "comedor",
        title: "Comedor",
        icon: "dining",
        photos: [
          "/assets/refugio-camba/depto-bolivar/comedor-1.jpg",
          "/assets/refugio-camba/depto-bolivar/comedor-2.jpg",
          "/assets/refugio-camba/depto-bolivar/comedor-3.jpg",
        ],
      },
      {
        id: "bano",
        title: "Baño",
        icon: "bath",
        photos: [
          "/assets/refugio-camba/depto-bolivar/bano-1.jpg",
          "/assets/refugio-camba/depto-bolivar/bano-2.jpg",
          "/assets/refugio-camba/depto-bolivar/bano-3.jpg",
          "/assets/refugio-camba/depto-bolivar/bano-4.jpg",
        ],
      },
      {
        id: "galeria",
        title: "Galería",
        icon: "laundry",
        photos: [
          "/assets/refugio-camba/depto-bolivar/galeria-1.jpg",
          "/assets/refugio-camba/depto-bolivar/galeria-2.jpg",
          "/assets/refugio-camba/depto-bolivar/galeria-3.jpg",
        ],
      },
      {
        id: "edificio",
        title: "Edificio",
        icon: "building",
        photos: [
          "/assets/refugio-camba/depto-bolivar/edificio-1.jpg",
          "/assets/refugio-camba/depto-bolivar/edificio-2.jpg",
        ],
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
