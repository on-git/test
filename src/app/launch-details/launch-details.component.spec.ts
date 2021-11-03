import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { RouterTestingModule } from "@angular/router/testing";
import { ApolloModule } from "apollo-angular";
import { CarouselComponent } from "../carousel/carousel.component";

import { LaunchDetailsComponent } from "./launch-details.component";

describe("LaunchDetailsComponent", () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchDetailsComponent, CarouselComponent],
      imports: [MatCardModule, RouterTestingModule, ApolloModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
