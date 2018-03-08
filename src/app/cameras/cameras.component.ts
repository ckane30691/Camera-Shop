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

  sort(): void {
    this.cameras = this.sortAtoZ(this.cameras);
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

}
