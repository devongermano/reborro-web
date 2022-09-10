import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaCarouselComponent } from './cta-carousel.component';

describe('CtaCarouselComponent', () => {
  let component: CtaCarouselComponent;
  let fixture: ComponentFixture<CtaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
