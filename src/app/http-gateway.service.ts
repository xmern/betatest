import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpGatewayService {

  private domain : string | undefined
  constructor(private httpclient : HttpClient){//, private authService: AuthServiceService) {
    this.domain = environment.apiUrl;
  }
  // private getAuthHeaders(): HttpHeaders {
  //   const token = this.authService.getUser().jwt;
  //   let headers = new HttpHeaders();
  //   if (token) {
  //     headers = headers.set('Authorization', `Bearer ${token}`);
  //   }
  //   return headers;
  // }
  get<T>(endpoint : string){
    return this.httpclient.get<T>(`${this.domain}${endpoint}`, {
      // headers: this.getAuthHeaders()
    });
  }
  post<T>(endpoint : string, data:any){
    return this.httpclient.post<T>(`${this.domain}${endpoint}`,data, {
      // headers: this.getAuthHeaders()
    });
  }
}
