import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User, UserResponse } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private http: HttpClient) {}

  fetchData() {
    return this.http
      .get<UserResponse[]>('https://gorest.co.in/public/v2/todos')
      .pipe(map((res) => res.map((value) => new User(value))));
  }
}
