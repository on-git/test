import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { LaunchFacadeService } from "../services/launch-facade.service";

const PLACEHOLDER_IMAGE_PATH = "/assets/images/placeholder.jpg";

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent {
  placeholderPath = PLACEHOLDER_IMAGE_PATH;
  constructor(
    public router: Router,
    private readonly route: ActivatedRoute,
    private launchDetailFacadeService: LaunchFacadeService
  ) {}

  ngOnInit() {}

  launchDetails$ = this.route.paramMap.pipe(
    map(params => params.get("id") as string),
    switchMap(id =>
      this.launchDetailFacadeService.pastLaunchDetailStoreCache(id)
    )
  );
}
