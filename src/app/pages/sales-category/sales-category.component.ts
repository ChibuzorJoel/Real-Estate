import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Property {
  name: string;
  image: string;
  location: string;
  bedrooms: number;
  type: string;
  price: number;
  status: string;
}

@Component({
  selector: 'app-sales-category',
  templateUrl: './sales-category.component.html',
  styleUrls: ['./sales-category.component.scss']
})
export class SalesCategoryComponent implements OnInit {
  properties: Property[] = [];
  filteredProperties: Property[] = [];
  selectedCategory: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
   this.properties = [
  // Apartments
  {
    name: 'Modern Studio in Lekki',
    image: 'assets/img/apartment.jpg',
    location: 'Lekki, Lagos',
    bedrooms: 1,
    type: 'Apartment',
    price: 18000000,
    status: 'available'
  },
  {
    name: '2 Bedroom Flat – Surulere',
    image: 'assets/img/2-Bedroom Flat.jpg',
    location: 'Surulere, Lagos',
    bedrooms: 2,
    type: 'Apartment',
    price: 26000000,
    status: 'available'
  },
  {
    name: 'Sold – 2 Bedroom Apartment in Ibadan',
    image: 'assets/img/Serviced Apartment.jpg',
    location: 'Ibadan, Oyo',
    bedrooms: 2,
    type: 'Apartment',
    price: 19000000,
    status: 'sold'
  },
  {
    name: 'Cozy Apartment – Enugu',
    image: 'assets/img/Newly Built Bungalow.jpg',
    location: 'Enugu, Enugu',
    bedrooms: 2,
    type: 'Apartment',
    price: 23000000,
    status: 'available'
  },
  {
    name: '3 Bedroom Apartment – Port Harcourt',
    image: 'assets/img/Affordable Mini Flat.jpg',
    location: 'Port Harcourt, Rivers',
    bedrooms: 3,
    type: 'Apartment',
    price: 28000000,
    status: 'available'
  },

  // Penthouses
  {
    name: 'Luxury Penthouse – Victoria Island',
    image: 'assets/img/4-Bedroom Terrace.jpg',
    location: 'Victoria Island, Lagos',
    bedrooms: 4,
    type: 'Penthouse',
    price: 85000000,
    status: 'available'
  },
  {
    name: 'Beachfront Penthouse – Eko Atlantic',
    image: 'assets/img/Modern Condo in VI.jpg',
    location: 'Eko Atlantic, Lagos',
    bedrooms: 4,
    type: 'Penthouse',
    price: 95000000,
    status: 'available'
  },
  {
    name: 'Executive Penthouse – Asokoro',
    image: 'assets/img/apartment.jpg',
    location: 'Asokoro, Abuja',
    bedrooms: 5,
    type: 'Penthouse',
    price: 100000000,
    status: 'available'
  },
  {
    name: 'Luxury Penthouse – Maitama',
    image: 'assets/img/duplex.jpg',
    location: 'Maitama, Abuja',
    bedrooms: 5,
    type: 'Penthouse',
    price: 92000000,
    status: 'available'
  },
  {
    name: 'Sold – Rooftop Penthouse – Banana Island',
    image: 'assets/img/Modern Condo in VI.jpg',
    location: 'Banana Island, Lagos',
    bedrooms: 4,
    type: 'Penthouse',
    price: 99000000,
    status: 'sold'
  },

  // Duplexes
  {
    name: '3 Bedroom Duplex – Gwarinpa',
    image: 'assets/img/studio.jpg',
    location: 'Gwarinpa, Abuja',
    bedrooms: 3,
    type: 'Duplex',
    price: 46000000,
    status: 'available'
  },
  {
    name: 'Spacious Duplex – Lekki Phase 2',
    image: 'assets/img/2-Bedroom Flat.jpg',
    location: 'Lekki Phase 2, Lagos',
    bedrooms: 4,
    type: 'Duplex',
    price: 55000000,
    status: 'available'
  },
  {
    name: 'Luxury Duplex – Magodo',
    image: 'assets/img/Serviced Apartment.jpg',
    location: 'Magodo, Lagos',
    bedrooms: 4,
    type: 'Duplex',
    price: 60000000,
    status: 'available'
  },
  {
    name: 'Sold – 3 Bedroom Duplex – Ibadan',
    image: 'assets/img/Newly Built Bungalow.jpg',
    location: 'Ibadan, Oyo',
    bedrooms: 3,
    type: 'Duplex',
    price: 40000000,
    status: 'sold'
  },
  {
    name: '4 Bedroom Duplex – Owerri',
    image: 'assets/img/Affordable Mini Flat.jpg',
    location: 'Owerri, Imo',
    bedrooms: 4,
    type: 'Duplex',
    price: 47000000,
    status: 'available'
  },

  // Studios
  {
    name: 'Studio Apartment – Yaba',
    image: 'assets/img/4-Bedroom Terrace.jpg',
    location: 'Yaba, Lagos',
    bedrooms: 1,
    type: 'Studio',
    price: 15000000,
    status: 'available'
  },
  {
    name: 'Studio Loft – Ajah',
    image: 'assets/img/Modern Condo in VI.jpg',
    location: 'Ajah, Lagos',
    bedrooms: 1,
    type: 'Studio',
    price: 17000000,
    status: 'available'
  },
  {
    name: 'Compact Studio – Ikeja',
    image: 'assets/img/apartment.jpg',
    location: 'Ikeja, Lagos',
    bedrooms: 1,
    type: 'Studio',
    price: 16000000,
    status: 'available'
  },
  {
    name: 'Sold – Studio Apartment – Ibadan',
    image: 'assets/img/duplex.jpg',
    location: 'Ibadan, Oyo',
    bedrooms: 1,
    type: 'Studio',
    price: 14000000,
    status: 'sold'
  },
  {
    name: 'Affordable Studio – Kubwa',
    image: 'assets/img/Modern Condo in VI.jpg',
    location: 'Kubwa, Abuja',
    bedrooms: 1,
    type: 'Studio',
    price: 13500000,
    status: 'available'
  },

  // Mini Flats
  {
    name: 'Mini Flat – Ojota',
    image: 'assets/img/studio.jpg',
    location: 'Ojota, Lagos',
    bedrooms: 1,
    type: 'Mini Flat',
    price: 12000000,
    status: 'available'
  },
  {
    name: 'Mini Flat – Ikorodu',
    image: 'assets/img/2-Bedroom Flat.jpg',
    location: 'Ikorodu, Lagos',
    bedrooms: 1,
    type: 'Mini Flat',
    price: 10000000,
    status: 'available'
  },
  {
    name: 'Mini Flat – Asaba',
    image: 'assets/img/Serviced Apartment.jpg',
    location: 'Asaba, Delta',
    bedrooms: 1,
    type: 'Mini Flat',
    price: 11000000,
    status: 'available'
  },
  {
    name: 'Sold – Mini Flat – Abeokuta',
    image: 'assets/img/Newly Built Bungalow.jpg',
    location: 'Abeokuta, Ogun',
    bedrooms: 1,
    type: 'Mini Flat',
    price: 9500000,
    status: 'sold'
  },
  {
    name: 'Mini Flat – Uyo',
    image: 'assets/img/Affordable Mini Flat.jpg',
    location: 'Uyo, Akwa Ibom',
    bedrooms: 1,
    type: 'Mini Flat',
    price: 11500000,
    status: 'available'
  }
];


    this.route.paramMap.subscribe(params => {
      const type = params.get('type');
      this.selectedCategory = type ?? 'all';
      this.applyFilter();
    });
  }

  applyFilter(): void {
    switch (this.selectedCategory) {
      case 'studios':
        this.filteredProperties = this.properties.filter(p => p.bedrooms <= 1 && p.status !== 'sold');
        break;
      case 'two-bedrooms':
        this.filteredProperties = this.properties.filter(p => p.bedrooms === 2 && p.status !== 'sold');
        break;
      case 'three-plus':
        this.filteredProperties = this.properties.filter(p => p.bedrooms >= 3 && p.status !== 'sold' && p.type.toLowerCase() !== 'penthouse');
        break;
      case 'penthouses':
        this.filteredProperties = this.properties.filter(p => p.type.toLowerCase() === 'penthouse' && p.status !== 'sold');
        break;
      case 'sold':
        this.filteredProperties = this.properties.filter(p => p.status === 'sold');
        break;
      default:
        this.filteredProperties = this.properties.filter(p => p.status !== 'sold');
    }
  }

  generateWhatsAppLink(property: Property): string {
    const message = `Hello, I'm interested in the ${property.name} located at ${property.location}. Is it still available?`;
    return `https://wa.me/2348012345678?text=${encodeURIComponent(message)}`;
  }
}
