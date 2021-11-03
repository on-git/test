import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from "@ngrx/store";
import { ApolloModule } from "apollo-angular";
import { RelativeTimePipe } from "../core/helpers/pipes/relative-time/relative-time.pipe";
import { launchReducers } from "../store/reducers";

import { LaunchListComponent } from "./launch-list.component";

describe("LaunchListComponent", () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchListComponent, RelativeTimePipe],
      imports: [
        MatCardModule,
        MatProgressSpinnerModule,
        RouterTestingModule,
        ApolloModule,
        StoreModule.forRoot(launchReducers)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
