import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OpenidService {
  private _tokenRequestUrl = "https://oauth2.googleapis.com/token";
  private validateTokenUrl = "http://localhost:8080/validate";

  constructor(private http: HttpClient) { }
  postAuthenticationCodForAccessAndIdToken(authenticationCode: string): Observable<any> {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    let body =
    "code=" +
    authenticationCode +
    "&client_id=859455735473-bgmqqco3q588kgaog0g2k0fmnur5qvf9.apps.googleusercontent.com&client_secret=1ivNoDawR_DQAEaVrrc90op4&redirect_uri=https://holiday-request.herokuapp.com/requester&grant_type=authorization_code&";
  return this.http.post<any>(this._tokenRequestUrl, body, { headers: headers });
  }

  postValidateTokeId(access_token: string): Observable<any>{
    let headers = new HttpHeaders(); 
   let head = headers.append("access-token", access_token);
   console.log("acess, ", access_token);
   console.log("hhhhh ... ", head.get("access-token"));
  return this.http.post<any>(this.validateTokenUrl, {headers: head});
  }
  
  getUserDetails(): Observable<any>{
return this.http.get<any>(this.validateTokenUrl) 
}
}
