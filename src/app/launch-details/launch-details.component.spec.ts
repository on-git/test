import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from "@ngrx/store";
import { ApolloModule } from "apollo-angular";
import { CarouselComponent } from "../carousel/carousel.component";
import { launchReducers } from "../store/reducers";

import { LaunchDetailsComponent } from "./launch-details.component";

describe("LaunchDetailsComponent", () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchDetailsComponent, CarouselComponent],
      imports: [
        MatCardModule,
        RouterTestingModule,
        ApolloModule,
        StoreModule.forRoot(launchReducers)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
    component = fixture.componentInstance;
  });

  it("should create", async () => {
    expect(component).toBeTruthy();
  });
});
