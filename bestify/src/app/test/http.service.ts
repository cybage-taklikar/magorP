import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) {


  }

  getUsers(): Observable<any> {
    return this.http.get("http://localhost:8080/api/user");
  }

  postUsers() {
    return this.http.post("http://localhost:8080/api/user", {

      username: "ajit",
      password: "aa@123",
    });
  }
  
  getQuizScore(): Observable<any> {
    return this.http.get('http://localhost:8080/api/quizscore');
  }

  
  getGameScore(): Observable<any> {
    return this.http.get('http://localhost:8080/api/gameScore');
  }

}
