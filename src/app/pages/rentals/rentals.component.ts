import { Component } from '@angular/core';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent {
properties = [
   {
    id: 1,
    title: '2-Bedroom Apartment',
    location: 'Festac Town, Lagos',
    price: 450000,
    category: 'Apartment',
    image: 'assets/img/2-Bedroom Flat.jpg',
    features: ['2 Beds', '2 Baths', 'Parking'],
    whatsapp: '+2348012345678'
  },
  {
    id: 2,
    title: 'Mini Flat – POP Ceiling',
    location: 'Isolo, Lagos',
    price: 280000,
    category: 'Mini Flat',
    image: 'assets/img/Serviced Apartment.jpg',
    features: ['1 Bed', 'Pop Ceiling', 'Tiled Floor'],
    whatsapp: '+2348077773333'
  },
  {
    id: 3,
    title: 'Self-Contain with Balcony',
    location: 'Wuse, Abuja',
    price: 300000,
    category: 'Self-Contain',
    image: 'assets/img/Affordable Mini Flat.jpg',
    features: ['1 Room', 'Balcony', 'Toilet'],
    whatsapp: '+2348012345672'
  },
  {
    id: 4,
    title: '2 Bedroom Flat – Enugu GRA',
    location: 'GRA, Enugu',
    price: 450000,
    category: '2 Bedroom',
    image: 'assets/img/2-Bedroom Flat.jpg',
    features: ['2 Beds', '2 Baths'],
    whatsapp: '+2348012345673'
  },
  {
    id: 5,
    title: 'Self-Contain – Nyanya',
    location: 'Nyanya, Abuja',
    price: 280000,
    category: 'Self-Contain',
    image: 'assets/img/apartment.jpg',
    features: ['1 Room', 'Kitchenette'],
    whatsapp: '+2348012345674'
  },
  {
    id: 6,
    title: 'Mini Flat – Bodija',
    location: 'Bodija, Ibadan',
    price: 320000,
    category: 'Mini Flat',
    image: 'assets/img/Modern Condo in VI.jpg',
    features: ['1 Bed', '1 Bath'],
    whatsapp: '+2348012345675'
  },
  {
    id: 7,
    title: '2 Bedroom Flat – Benin City',
    location: 'Sapele Road, Benin City',
    price: 400000,
    category: '2 Bedroom',
    image: 'assets/img/4-Bedroom Terrace.jpg',
    features: ['2 Beds', '2 Baths'],
    whatsapp: '+2348012345676'
  },
  {
    id: 8,
    title: 'Self-Contain – Rumuokoro',
    location: 'Rumuokoro, Port Harcourt',
    price: 290000,
    category: 'Self-Contain',
    image: 'assets/img/Serviced Apartment.jpg',
    features: ['1 Room', 'Kitchenette'],
    whatsapp: '+2348012345677'
  },
  {
    id: 9,
    title: 'Mini Flat – Jabi',
    location: 'Jabi, Abuja',
    price: 370000,
    category: 'Mini Flat',
    image: 'assets/img/apartment.jpg',
    features: ['1 Bed', 'Fenced Compound'],
    whatsapp: '+2348012345678'
  },
  {
    id: 10,
    title: '2 Bedroom – Trans Amadi',
    location: 'Trans Amadi, Port Harcourt',
    price: 480000,
    category: '2 Bedroom',
    image: 'assets/img/2-Bedroom Flat.jpg',
    features: ['2 Beds', 'Parking', 'Borehole'],
    whatsapp: '+2348012345679'
  },
  {
    id: 11,
    title: 'Luxury Duplex – Lekki Phase 1',
    location: 'Lekki Phase 1, Lagos',
    price: 1800000,
    category: 'Duplex',
    image: 'assets/img/duplex.jpg',
    features: ['4 Beds', 'Boys Quarters', 'Security'],
    whatsapp: '+2348012345680'
  },
  {
    id: 12,
    title: 'Self-Contain – Surulere',
    location: 'Surulere, Lagos',
    price: 130000,
    category: 'Self-Contain',
    image: 'assets/img/Affordable Mini Flat.jpg',
    features: ['1 Room', 'Tiled Floor'],
    whatsapp: '+2348090001111'
  },
  {
    id: 13,
    title: '3-Bedroom Flat – Yaba',
    location: 'Yaba, Lagos',
    price: 600000,
    category: 'Apartment',
    image: 'assets/img/4-Bedroom Terrace.jpg',
    features: ['3 Beds', '2 Baths'],
    whatsapp: '+2348099992222'
  },
  {
    id: 14,
    title: 'Mini Flat – Amuwo Odofin',
    location: 'Amuwo Odofin, Lagos',
    price: 260000,
    category: 'Mini Flat',
    image: 'assets/img/Serviced Apartment.jpg',
    features: ['1 Bed', '1 Bath'],
    whatsapp: '+2348012345678'
  },
  {
    id: 15,
    title: 'Duplex – Gwarinpa',
    location: 'Gwarinpa, Abuja',
    price: 2200000,
    category: 'Duplex',
    image: 'assets/img/duplex.jpg',
    features: ['5 Beds', '4 Baths', 'Security'],
    whatsapp: '+2348012345682'
  },
  {
    id: 16,
    title: 'Luxury Duplex with Pool – Maitama',
    location: 'Maitama, Abuja',
    price: 3500000,
    category: 'Luxury',
    image: 'assets/img/studio.jpg',
    features: ['5 Beds', '5 Baths', 'Private Pool', 'CCTV', 'Parking'],
    whatsapp: '+2348011112233'
  },
  {
    id: 17,
    title: '4-Bedroom Duplex – Banana Island',
    location: 'Banana Island, Lagos',
    price: 6000000,
    category: 'Duplex',
    image: 'assets/img/Modern Condo in VI.jpg',
    features: ['4 Beds', '4 Baths', 'Boys Quarters', 'Sea View'],
    whatsapp: '+2348011112244'
  },
  {
    id: 18,
    title: 'Luxury Penthouse – GRA Port Harcourt',
    location: 'GRA Phase 2, Port Harcourt',
    price: 2800000,
    category: 'Luxury',
    image: 'assets/img/duplex.jpg',
    features: ['4 Beds', 'Balcony', 'Modern Kitchen', 'Security'],
    whatsapp: '+2348011112255'
  },
  {
    id: 19,
    title: 'Executive Duplex – Independence Layout',
    location: 'Independence Layout, Enugu',
    price: 1900000,
    category: 'Duplex',
    image: 'assets/img/studio.jpg',
    features: ['4 Beds', '3 Baths', 'Parking', 'Spacious Compound'],
    whatsapp: '+2348011112266'
  },
  {
    id: 20,
    title: 'Luxury Furnished Duplex – Asokoro',
    location: 'Asokoro, Abuja',
    price: 4000000,
    category: 'Luxury',
    image: 'assets/img/Newly Built Bungalow.jpg',
    features: ['5 Beds', 'AC Units', 'All Rooms Ensuite', 'Furnished'],
    whatsapp: '+2348011112277'
  }
  
];


  searchLocation = '';
  minPrice = 0;
  maxPrice = 15000000;
  selectedCategory: string = 'All';

  categories = ['All', 'Apartment', 'Mini Flat', 'Self-Contain', 'Luxury', 'Duplex'];

  get filteredProperties() {
    return this.properties.filter(p =>
      p.location.toLowerCase().includes(this.searchLocation.toLowerCase()) &&
      p.price >= this.minPrice &&
      p.price <= this.maxPrice &&
      (this.selectedCategory === 'All' || p.category === this.selectedCategory)
    );
  }

  generateWhatsAppLink(property: any): string {
    const message = `Hello, I'm interested in the ${property.title} at ${property.location} for ₦${property.price.toLocaleString()}. Please provide more details.`;
    return `https://wa.me/${property.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
  }
}
