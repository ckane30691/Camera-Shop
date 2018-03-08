import { Component, OnInit } from '@angular/core';
import { CameraService } from '../camera.service';
import { Camera } from '../camera';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {
  cameras: Camera[];

  constructor(private cameraService: CameraService) { }
  ngOnInit() {
    this.getCameras()
  }

  getCameras(): void {
    this.cameraService.getCameras()
        .subscribe(cameras => this.cameras = cameras);
  }

  sort(type): void {
    if (type !== "sku") {
      this.cameras = this.sortAtoZ(this.cameras);
    } else {
      this.cameras = this.sortBySKU(this.cameras);
    }
  }

  sortAtoZ(cameras): array {
    if (cameras.length < 2) {
      return cameras;
    }
    let pivot = cameras[0];
    let left = [];
    let right = [];
    for (let i = 1; i < cameras.length; i++) {
      if (pivot.name > cameras[i].name) {
        left.push(cameras[i])
      } else {
        right.push(cameras[i])
      }
    }
    // console.log(this.sortAtoZ(left).concat(pivot, this.sortAtoZ(right)))
    return (this.sortAtoZ(left).concat(pivot, this.sortAtoZ(right)))
  }

  sortBySKU(cameras): array {
    if (cameras.length < 2) {
      return cameras;
    }
    let pivot = cameras[0];
    let left = [];
    let right = [];
    for (let i = 1; i < cameras.length; i++) {
      if (pivot.id > cameras[i].id) {
        left.push(cameras[i])
      } else {
        right.push(cameras[i])
      }
    }
    // console.log(this.sortAtoZ(left).concat(pivot, this.sortAtoZ(right)))
    return (this.sortBySKU(left).concat(pivot, this.sortBySKU(right)))
  }

}
