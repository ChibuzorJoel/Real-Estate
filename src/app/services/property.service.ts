// property.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  images: string[];
  status: 'sale' | 'rent';
  summary: string;
  beds: number;
  baths: number;
  size: number;
  agentName: string;
  agentPhone: string;
  isFavorite: boolean;
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
 private properties: Property[] = [
  {
    id: 1,
    title: 'Luxury Apartment in Lekki',
    location: 'Lekki Phase 1, Lagos',
    price: 95000000,
    image: 'assets/img/apartment.jpg',
    images: [
      'assets/img/apartment.jpg',
      'assets/img/apartment2.jpg',
      'assets/img/apartment3.jpg',
    ],
    status: 'sale',
    summary: 'Luxury 4-bedroom apartment with sea view.',
    beds: 4,
    baths: 3,
    size: 2200,
    agentName: 'Chuka Nwosu',
    agentPhone: '08123456789',
    isFavorite: false,
    lat: 6.4421,
    lng: 3.4216,
  },
  {
    id: 2,
    title: 'Modern Duplex in Ikeja',
    location: 'GRA Ikeja, Lagos',
    price: 120000000,
    image: 'assets/img/duplex.jpg',
    images: [
      'assets/img/duplex.jpg',
      'assets/img/duplex2.jpg',
      'assets/img/duplex3.jpg',
    ],
    status: 'sale',
    summary: 'Spacious 5-bedroom duplex with a private garden.',
    beds: 5,
    baths: 4,
    size: 3500,
    agentName: 'Ngozi Okafor',
    agentPhone: '08034567890',
    isFavorite: false,
    lat: 6.6018,
    lng: 3.3515,
  },
  {
    id: 3,
    title: 'Cozy Studio in Yaba',
    location: 'Alagomeji, Yaba, Lagos',
    price: 1500000,
    image: 'assets/img/studio.jpg',
    images: [
      'assets/img/studio.jpg',
      'assets/img/studio2.jpg',
      'assets/img/studio3.jpg',
    ],
    status: 'rent',
    summary: 'Furnished studio apartment, perfect for students.',
    beds: 1,
    baths: 1,
    size: 450,
    agentName: 'John Adewale',
    agentPhone: '09012345678',
    isFavorite: false,
    lat: 6.5152,
    lng: 3.3869,
  },
  {
    id: 4,
    title: 'Waterfront Villa in Banana Island',
    location: 'Banana Island, Ikoyi, Lagos',
    price: 350000000,
    image: 'assets/img/villa.jpg',
    images: [
      'assets/img/villa.jpg',
      'assets/img/villa2.jpg',
      'assets/img/villa3.jpg',
    ],
    status: 'sale',
    summary: '6-bedroom waterfront villa with a swimming pool.',
    beds: 6,
    baths: 6,
    size: 5000,
    agentName: 'Funke Williams',
    agentPhone: '07087654321',
    isFavorite: false,
    lat: 6.4474,
    lng: 3.4281,
  },
  {
    id: 5,
    title: 'Affordable 2-Bedroom in Festac',
    location: 'Festac Town, Lagos',
    price: 2500000,
    image: 'assets/img/festac.jpg',
    images: [
      'assets/img/festac.jpg',
      'assets/img/festac2.jpg',
      'assets/img/festac3.jpg',
    ],
    status: 'rent',
    summary: 'Affordable and clean 2-bedroom flat in Festac.',
    beds: 2,
    baths: 2,
    size: 1000,
    agentName: 'Tunde Balogun',
    agentPhone: '08198765432',
    isFavorite: false,
    lat: 6.4609,
    lng: 3.2904,
  },
  {
    id: 6,
    title: 'Newly Built Bungalow',
    location: 'Port Harcourt',
    price: 47000000,
    image: 'assets/img/Newly Built Bungalow.jpg',
    images: [
      'assets/img/Newly Built Bungalow.jpg',
      'assets/img/Newly Built Bungalow2.jpg',
      'assets/img/Newly Built Bungalow3.jpg',
    ],
    status: 'sale',
    summary: 'Newly constructed 3-bedroom bungalow with modern features.',
    beds: 3,
    baths: 2,
    size: 1600,
    agentName: 'Emeka Okafor',
    agentPhone: '08124567891',
    isFavorite: false,
    lat: 4.8242,
    lng: 7.0336,
  },
  {
    id: 7,
    title: 'Serviced Apartment in Ikoyi',
    location: 'Ikoyi, Lagos',
    price: 9500000,
    image: 'assets/img/Serviced Apartment.jpg',
    images: [
      'assets/img/Serviced Apartment.jpg',
      'assets/img/Serviced Apartment2.jpg',
      'assets/img/Serviced Apartment3.jpg',
    ],
    status: 'rent',
    summary: 'Fully serviced apartment with concierge, gym, and pool.',
    beds: 4,
    baths: 3,
    size: 2300,
    agentName: 'Fatima Musa',
    agentPhone: '08033445566',
    isFavorite: false,
    lat: 6.4483,
    lng: 3.4305,
  },
  {
    id: 8,
    title: '2-Bedroom Flat in Enugu',
    location: 'Independence Layout, Enugu',
    price: 31000000,
    image: 'assets/img/2-Bedroom Flat.jpg',
    images: [
      'assets/img/2-Bedroom Flat.jpg',
      'assets/img/2-Bedroom Flat2.jpg',
      'assets/img/2-Bedroom Flat3.jpg',
    ],
    status: 'sale',
    summary: 'Comfortable and quiet flat in a family-friendly estate.',
    beds: 2,
    baths: 2,
    size: 1200,
    agentName: 'Uche Nnaji',
    agentPhone: '07099887766',
    isFavorite: false,
    lat: 6.4597,
    lng: 7.5464,
  },
  {
    id: 9,
    title: '4-Bedroom Terrace in Asokoro',
    location: 'Asokoro, Abuja',
    price: 110000000,
    image: 'assets/img/4-Bedroom Terrace.jpg',
    images: [
      'assets/img/4-Bedroom Terrace.jpg',
      'assets/img/4-Bedroom Terrace2.jpg',
      'assets/img/4-Bedroom Terrace3.jpg',
    ],
    status: 'sale',
    summary: 'Elegant terrace duplex in a secure government area.',
    beds: 4,
    baths: 4,
    size: 2500,
    agentName: 'Bashir Lawal',
    agentPhone: '08087654321',
    isFavorite: false,
    lat: 9.0457,
    lng: 7.5000,
  }
];



  getAllProperties(): Observable<Property[]> {
    return of(this.properties);
  }

  getPropertyById(id: number): Observable<Property | undefined> {
    const found = this.properties.find((p) => p.id === id);
    return of(found);
  }

  getRelatedProperties(id: number): Observable<Property[]> {
    const current = this.properties.find((p) => p.id === id);
    if (!current) return of([]);

    const related = this.properties
      .filter((p) => p.id !== id && p.status === current.status)
      .slice(0, 4);

    return of(related);
  }

  toggleFavorite(id: number): void {
    const property = this.properties.find((p) => p.id === id);
    if (property) property.isFavorite = !property.isFavorite;
  }
}
