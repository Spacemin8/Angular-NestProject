import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:4000/product'; // Adjust as needed

  constructor(private http: HttpClient) {}

  saveData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, { ...data, isEdit: false });
  }
  loadData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  loadDataById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { ...data, isEdit: true });
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
