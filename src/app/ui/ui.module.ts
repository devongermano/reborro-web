import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SwiperModule } from "swiper/angular";
import { CarouselComponent } from './carousel/carousel.component';
import { CtaCarouselComponent } from './cta-carousel/cta-carousel.component';



@NgModule({
  declarations: [
    SearchComponent,
    CarouselComponent,
    CtaCarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
  ],
  exports: [
    SearchComponent,
    CarouselComponent,
    CtaCarouselComponent,
  ],
})
export class UiModule { }
