import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from "swiper";
import SwiperCore, { Mousewheel, Pagination } from "swiper";

SwiperCore.use([Mousewheel, Pagination]);

@Component({
  selector: 'ui-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  config: SwiperOptions = {
    mousewheel: true,
    slidesPerView: "auto",
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
