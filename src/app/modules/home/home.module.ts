import { DigitalTwinCardModule } from './../../../../projects/digital-twin-card/src/lib/digital-twin-card.module';
import { DigitalTwinSideNavModule } from './../../../../projects/digital-twin-side-nav/src/lib/digital-twin-side-nav.module';

import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    DigitalTwinSideNavModule,
    DigitalTwinCardModule,
  ],
})
export class HomeModule {}
