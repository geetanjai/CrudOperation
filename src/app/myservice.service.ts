import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(public httpclient:HttpClient) { 

  }

  getData():Observable<any>{
    return this.httpclient.get('https://reqres.in/api/users?page=2')
  };

  create(postData:any): Observable<any> {
    return this.httpclient.post('https://reqres.in/api/users',postData);    
};
Delete(id: number): Observable<any> {
  return this.httpclient.delete(`https://reqres.in/api/users/${id}`);
};
getuserbyId(id: number): Observable<any> {
  return this.httpclient.get(`https://reqres.in/api/users/${id}`);
};
}
