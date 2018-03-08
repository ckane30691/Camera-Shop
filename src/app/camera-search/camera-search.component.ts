import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Camera } from '../camera';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-camera-search',
  templateUrl: './camera-search.component.html',
  styleUrls: ['./camera-search.component.css']
})
export class CameraSearchComponent implements OnInit {
  cameras$: Observable<Camera[]>;
  private searchTerms = new Subject<string>();

  constructor(private cameraService: CameraService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.cameras$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.cameraService.searchCameras(term)),
    );
  }
}
