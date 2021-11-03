import { SimpleChange } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CarouselComponent } from "./carousel.component";

describe("CarouselComponent", () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    component.ngOnChanges({
      launchImages: new SimpleChange(null, [], false),
      launchName: new SimpleChange(null, "", false)
    });
    fixture.detectChanges();
  });

  /*it("should create", () => {
    expect(component).toBeTruthy();
  });*/
});
