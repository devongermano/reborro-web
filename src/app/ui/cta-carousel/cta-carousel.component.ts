import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";
import SwiperCore, { Mousewheel, Pagination } from "swiper";

SwiperCore.use([Mousewheel, Pagination]);

@Component({
  selector: 'ui-cta-carousel',
  templateUrl: './cta-carousel.component.html',
  styleUrls: ['./cta-carousel.component.scss']
})
export class CtaCarouselComponent implements OnInit {

  config: SwiperOptions = {
    spaceBetween: 18,
    mousewheel: true,
    slidesPerView: "auto",
    pagination: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
}
