import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 featuredProperties = [
  {
    id: 1,
    title: 'Luxury Apartment in Lekki',
    location: 'Lekki Phase 1, Lagos',
    price: 95000000,
    image: 'assets/img/apartment.jpg',
    status: 'sale',
    summary: 'Luxury 4-bedroom apartment with modern finishes and sea view.',
    beds: 4,
    baths: 3,
    size: 2200,
    agentName: 'Chuka Nwosu',
    agentPhone: '08123456789',
    isFavorite: false
  },
  {
    id: 2,
    title: '3-Bedroom Duplex',
    location: 'Gwarinpa, Abuja',
    price: 3500000,
    image: 'assets/img/duplex.jpg',
    status: 'rent',
    summary: 'Spacious duplex with ample parking and a private backyard.',
    beds: 3,
    baths: 3,
    size: 2000,
    agentName: 'Amina Bello',
    agentPhone: '08098765432',
    isFavorite: false
  },
  {
    id: 3,
    title: 'Studio Flat',
    location: 'Yaba, Lagos',
    price: 1800000,
    image: 'assets/img/studio.jpg',
    status: 'rent',
    summary: 'Affordable and compact studio flat, ideal for students and singles.',
    beds: 1,
    baths: 1,
    size: 600,
    agentName: 'Tunde Johnson',
    agentPhone: '07034567890',
    isFavorite: false
  },
  {
    id: 4,
    title: 'Modern Condo in VI',
    location: 'Victoria Island, Lagos',
    price: 120000000,
    image: 'assets/img/Modern Condo in VI.jpg',
    status: 'sale',
    summary: 'Modern condo with skyline views and 24/7 security.',
    beds: 3,
    baths: 2,
    size: 1800,
    agentName: 'Adaeze Umeh',
    agentPhone: '08123400000',
    isFavorite: false
  },
  {
    id: 5,
    title: '4-Bedroom Terrace',
    location: 'Asokoro, Abuja',
    price: 110000000,
    image: 'assets/img/4-Bedroom Terrace.jpg',
    status: 'sale',
    summary: 'Elegant terrace duplex in a secure government area.',
    beds: 4,
    baths: 4,
    size: 2500,
    agentName: 'Bashir Lawal',
    agentPhone: '08087654321',
    isFavorite: false
  },
  {
    id: 6,
    title: 'Affordable Mini Flat',
    location: 'Ikeja, Lagos',
    price: 1200000,
    image: 'assets/img/Affordable Mini Flat.jpg',
    status: 'rent',
    summary: 'Budget-friendly mini flat close to shopping malls and transport.',
    beds: 1,
    baths: 1,
    size: 800,
    agentName: 'Ngozi Eze',
    agentPhone: '07011223344',
    isFavorite: false
  },
  {
    id: 7,
    title: 'Newly Built Bungalow',
    location: 'Port Harcourt',
    price: 47000000,
    image: 'assets/img/Newly Built Bungalow.jpg',
    status: 'sale',
    summary: 'Newly constructed 3-bedroom bungalow with modern features.',
    beds: 3,
    baths: 2,
    size: 1600,
    agentName: 'Emeka Okafor',
    agentPhone: '08124567891',
    isFavorite: false
  },
  {
    id: 8,
    title: 'Serviced Apartment',
    location: 'Ikoyi, Lagos',
    price: 9500000,
    image: 'assets/img/Serviced Apartment.jpg',
    status: 'rent',
    summary: 'Fully serviced apartment with concierge, gym, and pool.',
    beds: 4,
    baths: 3,
    size: 2300,
    agentName: 'Fatima Musa',
    agentPhone: '08033445566',
    isFavorite: false
  },
  {
    id: 9,
    title: '2-Bedroom Flat',
    location: 'Enugu',
    price: 31000000,
    image: 'assets/img/2-Bedroom Flat.jpg',
    status: 'sale',
    summary: 'Comfortable and quiet flat in a family-friendly estate.',
    beds: 2,
    baths: 2,
    size: 1200,
    agentName: 'Uche Nnaji',
    agentPhone: '07099887766',
    isFavorite: false
  }
];




  // Property selected for modal display
  selectedProperty: any = null;

  // Open modal with selected property
  

  // Close the modal
  
  toggleFavorite(property: any): void {
  property.isFavorite = !property.isFavorite;
}
}
