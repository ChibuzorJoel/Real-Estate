import { Component } from '@angular/core';

@Component({
  selector: 'app-all-listings',
  templateUrl: './all-listings.component.html',
  styleUrls: ['./all-listings.component.scss']
})
export class AllListingsComponent {
allProperties = [
  // Apartments
  {
    name: 'Modern 2-Bedroom Apartment',
    image: 'assets/img/2-Bedroom Flat.jpg',
    location: 'Lekki, Lagos',
    bedrooms: 2,
    type: 'Apartment',
    price: 35000000,
    status: 'For Sale',
  },
  {
    name: 'Stylish 3-Bedroom Apartment',
    image: 'assets/img/Serviced Apartment.jpg',
    location: 'Wuse, Abuja',
    bedrooms: 3,
    type: 'Apartment',
    price: 45000000,
    status: 'For Sale',
  },
  {
    name: 'Luxury Apartment with Pool',
    image: 'assets/img/Modern Condo in VI.jpg',
    location: 'GRA, Port Harcourt',
    bedrooms: 3,
    type: 'Apartment',
    price: 60000000,
    status: 'For Sale',
  },
  {
    name: '1-Bedroom Compact Apartment',
    image: 'assets/img/apartment.jpg',
    location: 'Ikeja, Lagos',
    bedrooms: 1,
    type: 'Apartment',
    price: 22000000,
    status: 'For Sale',
  },
  {
    name: 'Furnished 2-Bedroom Apartment',
    image: 'assets/img/Serviced Apartment.jpg',
    location: 'Asokoro, Abuja',
    bedrooms: 2,
    type: 'Apartment',
    price: 38000000,
    status: 'For Sale',
  },

  // Penthouses
  {
    name: 'Sea View Penthouse',
    image: 'assets/img/Modern Condo in VI.jpg',
    location: 'Victoria Island, Lagos',
    bedrooms: 4,
    type: 'Penthouse',
    price: 120000000,
    status: 'For Sale',
  },
  {
    name: 'Executive Penthouse Suite',
    image: 'assets/img/Serviced Apartment.jpg',
    location: 'Maitama, Abuja',
    bedrooms: 5,
    type: 'Penthouse',
    price: 135000000,
    status: 'For Sale',
  },
  {
    name: 'Skyline Luxury Penthouse',
    image: 'assets/img/Modern Condo in VI.jpg',
    location: 'Banana Island, Lagos',
    bedrooms: 5,
    type: 'Penthouse',
    price: 180000000,
    status: 'For Sale',
  },
  {
    name: 'Minimalist Urban Penthouse',
    image: 'assets/img/Serviced Apartment.jpg',
    location: 'Ikoyi, Lagos',
    bedrooms: 4,
    type: 'Penthouse',
    price: 150000000,
    status: 'For Sale',
  },
  {
    name: 'Panoramic View Penthouse',
    image: 'assets/img/Modern Condo in VI.jpg',
    location: 'Guzape, Abuja',
    bedrooms: 4,
    type: 'Penthouse',
    price: 110000000,
    status: 'For Sale',
  },

  // Duplexes
  {
    name: 'Classic 4-Bedroom Duplex',
    image: 'assets/img/duplex.jpg',
    location: 'Enugu Town, Enugu',
    bedrooms: 4,
    type: 'Duplex',
    price: 50000000,
    status: 'For Sale',
  },
  {
    name: 'Modern Duplex with BQ',
    image: 'assets/img/Newly Built Bungalow.jpg',
    location: 'Abeokuta, Ogun',
    bedrooms: 4,
    type: 'Duplex',
    price: 47000000,
    status: 'For Sale',
  },
  {
    name: 'Furnished Family Duplex',
    image: 'assets/img/duplex.jpg',
    location: 'Festac, Lagos',
    bedrooms: 5,
    type: 'Duplex',
    price: 65000000,
    status: 'For Sale',
  },
  {
    name: 'Luxury Duplex in Estate',
    image: 'assets/img/4-Bedroom Terrace.jpg',
    location: 'Ajah, Lagos',
    bedrooms: 4,
    type: 'Duplex',
    price: 56000000,
    status: 'For Sale',
  },
  {
    name: 'Brand New 5-Bedroom Duplex',
    image: 'assets/img/duplex.jpg',
    location: 'Gwarinpa, Abuja',
    bedrooms: 5,
    type: 'Duplex',
    price: 70000000,
    status: 'For Sale',
  },

  // Studios
  {
    name: 'Affordable Studio Apartment',
    image: 'assets/img/studio.jpg',
    location: 'Surulere, Lagos',
    bedrooms: 1,
    type: 'Studio',
    price: 15000000,
    status: 'For Sale',
  },
  {
    name: 'Stylish Studio in City Center',
    image: 'assets/img/Affordable Mini Flat.jpg',
    location: 'Yaba, Lagos',
    bedrooms: 1,
    type: 'Studio',
    price: 17000000,
    status: 'For Sale',
  },
  {
    name: 'Compact Studio with Balcony',
    image: 'assets/img/studio.jpg',
    location: 'Utako, Abuja',
    bedrooms: 1,
    type: 'Studio',
    price: 16000000,
    status: 'For Sale',
  },
  {
    name: 'Furnished Studio Unit',
    image: 'assets/img/Serviced Apartment.jpg',
    location: 'Lekki Phase 1, Lagos',
    bedrooms: 1,
    type: 'Studio',
    price: 19000000,
    status: 'For Sale',
  },
  {
    name: 'Budget-Friendly Studio',
    image: 'assets/img/Affordable Mini Flat.jpg',
    location: 'Abule Egba, Lagos',
    bedrooms: 1,
    type: 'Studio',
    price: 14000000,
    status: 'For Sale',
  },

  // Detached Houses
  {
    name: 'Detached 5-Bedroom Mansion',
    image: 'assets/img/Newly Built Bungalow.jpg',
    location: 'Asaba, Delta',
    bedrooms: 5,
    type: 'Detached',
    price: 80000000,
    status: 'For Sale',
  },
  {
    name: 'Elegant Detached Duplex',
    image: 'assets/img/duplex.jpg',
    location: 'Owerri, Imo',
    bedrooms: 4,
    type: 'Detached',
    price: 75000000,
    status: 'For Sale',
  },
  {
    name: 'Fully Detached Home with Garden',
    image: 'assets/img/Newly Built Bungalow.jpg',
    location: 'Ikeja GRA, Lagos',
    bedrooms: 6,
    type: 'Detached',
    price: 90000000,
    status: 'For Sale',
  },
  {
    name: 'Contemporary Detached House',
    image: 'assets/img/duplex.jpg',
    location: 'New GRA, Port Harcourt',
    bedrooms: 5,
    type: 'Detached',
    price: 85000000,
    status: 'For Sale',
  },
  {
    name: 'Luxury Detached Bungalow',
    image: 'assets/img/Newly Built Bungalow.jpg',
    location: 'Ilorin, Kwara',
    bedrooms: 4,
    type: 'Detached',
    price: 72000000,
    status: 'For Sale',
  }
];

 selectedType = '';
selectedLocation = '';
currentPage = 1;
itemsPerPage = 6;

get uniqueTypes() {
  return [...new Set(this.allProperties.map(p => p.type))];
}

get uniqueLocations() {
  return [...new Set(this.allProperties.map(p => p.location))];
}

filteredProperties() {
  return this.allProperties.filter(p => {
    return (!this.selectedType || p.type === this.selectedType) &&
           (!this.selectedLocation || p.location === this.selectedLocation);
  });
}

paginatedProperties() {
  const start = (this.currentPage - 1) * this.itemsPerPage;
  return this.filteredProperties().slice(start, start + this.itemsPerPage);
}

get totalPages() {
  return Math.ceil(this.filteredProperties().length / this.itemsPerPage);
}

prevPage() {
  if (this.currentPage > 1) this.currentPage--;
}

nextPage() {
  if (this.currentPage < this.totalPages) this.currentPage++;
}

goToPage(page: number) {
  this.currentPage = page;
}

generateWhatsAppLink(property: any) {
  const msg = encodeURIComponent(`Hello, I'm interested in your ${property.name} listed at ${property.location}.`);
  return `https://wa.me/2349012345678?text=${msg}`;
}

}
