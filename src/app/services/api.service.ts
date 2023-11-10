import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  results: any;
  constructor(
    public http: HttpClient
  ) { }
  get(): Observable<any> {
    return this.http.get("https://1.api.fy23ey05.careers.ifelsecloud.com/");
  }
  // get() {
  //   this.http.get("https://1.api.fy23ey05.careers.ifelsecloud.com/").subscribe((res) => {
  //     this.results = res;
  //   })
  // }
}

