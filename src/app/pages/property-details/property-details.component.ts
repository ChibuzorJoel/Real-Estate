// property-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property, PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  property!: Property;
  relatedProperties: Property[] = [];

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.propertyService.getPropertyById(id).subscribe((prop: Property | undefined) => {
      if (prop) {
        this.property = prop;

        this.propertyService.getRelatedProperties(id).subscribe((related: Property[]) => {
          this.relatedProperties = related;
        });
      }
    });
  }

 getMapUrl(location: string): string {
  return 'https://www.google.com/maps?q=' + encodeURIComponent(location) + '&output=embed';
}
}
