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
    fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
    component = fixture.componentInstance;
  });

  it("should create", async () => {
    expect(component).toBeTruthy();
  });
});
