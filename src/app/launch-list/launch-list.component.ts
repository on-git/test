import { LaunchFacadeService } from "./../services/launch-facade.service";
import { Component, ChangeDetectionStrategy } from "@angular/core";

const PLACEHOLDER_IMAGE_PATH = "/assets/images/placeholder.jpg";

@Component({
  selector: "app-launch-list",
  templateUrl: "./launch-list.component.html",
  styleUrls: ["./launch-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent {
  launchesLoading: boolean;
  placeholderPath = PLACEHOLDER_IMAGE_PATH;
  loadedImages = [];

  ngOnInit() {
    this.pastLaunches$.subscribe(data => {
      this.loadedImages = data.map(() => false);
    });
    this.launchFacade.launchListLoading$.subscribe(data => {
      this.launchesLoading = data;
    });
  }
  constructor(private readonly launchFacade: LaunchFacadeService) {}
  pastLaunches$ = this.launchFacade.pastLaunchListStoreCache();

  loadSuccess(index: number) {
    this.loadedImages[index] = true;
  }
}
