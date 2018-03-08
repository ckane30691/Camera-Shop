import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CamerasComponent } from './cameras/cameras.component';
import { CameraService } from './camera.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CameraSearchComponent } from './camera-search/camera-search.component';


@NgModule({
  declarations: [
    AppComponent,
    CamerasComponent,
    CameraSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CameraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
