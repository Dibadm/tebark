import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

export type Property = {
  slug: string;
  title: string;
  location: string;
  type: "sale" | "installment";
  price: string;
  beds: number;
  baths: number;
  sqm: number;
  image: string;
};

export const properties: Property[] = [
  {
    slug: "haile-garment-1br",
    title: "1 Bedroom Apartment | Haile Garment Tower",
    location: "Haile Garment, Nifas Silk-Lafto",
    type: "sale",
    price: "ETB 6,500,000",
    beds: 1,
    baths: 1,
    sqm: 62,
    image: p1,
  },
  {
    slug: "meskelegna-2br-family",
    title: "2 Bedroom Family Residence | Meskelegna",
    location: "Meskelegna, Nifas Silk-Lafto",
    type: "installment",
    price: "From ETB 9,800,000",
    beds: 2,
    baths: 2,
    sqm: 92,
    image: p2,
  },
  {
    slug: "tebarek-tower-3br",
    title: "3 Bedroom | Tebarek Tower III",
    location: "Haile Garment Roundabout",
    type: "sale",
    price: "ETB 14,200,000",
    beds: 3,
    baths: 2,
    sqm: 128,
    image: p3,
  },
  {
    slug: "nifas-silk-1br-starter",
    title: "1 Bedroom Starter Home",
    location: "Nifas Silk-Lafto Sub-City",
    type: "installment",
    price: "From ETB 5,900,000",
    beds: 1,
    baths: 1,
    sqm: 58,
    image: p4,
  },
  {
    slug: "tebarek-tower-2br-sky",
    title: "2 Bedroom Sky Apartment",
    location: "Tebarek Tower III, Addis Ababa",
    type: "sale",
    price: "ETB 10,500,000",
    beds: 2,
    baths: 2,
    sqm: 98,
    image: p5,
  },
  {
    slug: "penthouse-3br-city-view",
    title: "3 Bedroom Penthouse | City View",
    location: "Haile Garment, Addis Ababa",
    type: "sale",
    price: "ETB 18,750,000",
    beds: 3,
    baths: 3,
    sqm: 156,
    image: p6,
  },
];