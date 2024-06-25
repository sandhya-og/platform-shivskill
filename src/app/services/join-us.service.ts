//platform/src/app/services/join-us.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinUsService {
  private apiUrl = 'http://localhost:3000/join-us'; // Backend API URL

  constructor(private http: HttpClient) { }

  submitForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
