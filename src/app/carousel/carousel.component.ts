import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  @Input() launchImages: [];
  @Input() launchName: string;

  displayedImage: any;
  imageArr: any[] = [];
  tempArr = [];
  placeholderPath = "";

  constructor() {}

  ngOnInit() {
    this.imageArr = this.launchImages;
    this.tempArr = this.imageArr.slice(0, 3);
    this.placeholderPath = "/assets/images/placeholder.jpg";
  }

  displayImage(pic: any) {
    this.displayedImage = pic;
  }

  goLeft() {
    let leftIndex = this.imageArr.indexOf(this.tempArr[0]);
    if (leftIndex > 0) {
      this.tempArr = this.imageArr.slice(leftIndex - 3, leftIndex);
    }
  }

  goRight() {
    let rightIndex = this.imageArr.indexOf(
      this.tempArr[this.tempArr.length - 1]
    );
    if (rightIndex < this.imageArr.length - 1) {
      this.tempArr = this.imageArr.slice(rightIndex + 1, rightIndex + 4);
    }
  }
}
