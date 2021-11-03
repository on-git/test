import { TestBed } from "@angular/core/testing";
import { StoreModule } from "@ngrx/store";
import { ApolloModule } from "apollo-angular";
import { launchReducers } from "../store/reducers";

import { LaunchFacadeService } from "./launch-facade.service";

describe("LaunchFacadeService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [ApolloModule, StoreModule.forRoot(launchReducers)]
    })
  );

  it("should be created", () => {
    const service: LaunchFacadeService = TestBed.get(LaunchFacadeService);
    expect(service).toBeTruthy();
  });
});
