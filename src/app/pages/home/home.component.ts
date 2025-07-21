import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featuredProperties = [
    {
      title: 'Luxury Apartment in Lekki',
      location: 'Lekki Phase 1, Lagos',
      price: 95000000,
      image: 'assets/img/apartment.jpg'
    },
    {
      title: '3-Bedroom Duplex',
      location: 'Gwarinpa, Abuja',
      price: 75000000,
      image: 'assets/img/duplex.jpg'
    },
    {
      title: 'Studio Flat',
      location: 'Yaba, Lagos',
      price: 35000000,
      image: 'assets/img/studio.jpg'
    },
    {
      title: 'Modern Condo in VI',
      location: 'Victoria Island, Lagos',
      price: 120000000,
      image: 'assets/img/Modern Condo in VI.jpg'
    },
    {
      title: '4-Bedroom Terrace',
      location: 'Asokoro, Abuja',
      price: 110000000,
      image: 'assets/img/4-Bedroom Terrace.jpg'
    },
    {
      title: 'Affordable Mini Flat',
      location: 'Ikeja, Lagos',
      price: 28000000,
      image: 'assets/img/Affordable Mini Flat.jpg'
    },
    {
      title: 'Newly Built Bungalow',
      location: 'Port Harcourt',
      price: 47000000,
      image: 'assets/img/Newly Built Bungalow.jpg'
    },
    {
      title: 'Serviced Apartment',
      location: 'Ikoyi, Lagos',
      price: 145000000,
      image: 'assets/img/Serviced Apartment.jpg'
    },
    {
      title: '2-Bedroom Flat',
      location: 'Enugu',
      price: 31000000,
      image: 'assets/img/2-Bedroom Flat.jpg'
    }
  ];

  // Property selected for modal display
  selectedProperty: any = null;

  // Open modal with selected property
  openModal(property: any): void {
    this.selectedProperty = property;
  }

  // Close the modal
  closeModal(): void {
    this.selectedProperty = null;
  }
}
