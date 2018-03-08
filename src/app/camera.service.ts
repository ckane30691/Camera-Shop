import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { Camera } from './camera';

@Injectable()
export class CameraService {

  private camerasUrl = 'api/cameras';

  constructor(private http: HttpClient) { }
  getCameras(): Observable<Camera[]> {
    return this.http.get<Camera[]>(this.camerasUrl).pipe(
      tap(cameras => console.log(`fetched cameras`)),
      catchError(this.handleError('getCameras', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  };
  /** GET camera by id. Will 404 if id not found */
  getCamera(id: number): Observable<Camera> {
    const url = `${this.CamerasUrl}/${id}`;
    return this.http.get<Camera>(url).pipe(
      tap(_ => console.log(`fetched camera id=${id}`)),
      catchError(this.handleError<Camera>(`getCamera id=${id}`))
    );
  }

  /* GET cameras whose name contains search term */
  searchCameras(term: string): Observable<Camera[]> {
    if (!term.trim()) {
      // if not search term, return empty camera array.
      return of([]);
    }
    return this.http.get<Camera[]>(`api/cameras/?name=${term}`).pipe(
      tap(_ => console.log(`found cameras matching "${term}"`)),
      catchError(this.handleError<Camera[]>('searchCameras', []))
    );
  }

}
