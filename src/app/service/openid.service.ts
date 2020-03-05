import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Requester } from '../form/requester';

@Injectable({
  providedIn: 'root'
})
export class OpenidService {
  private _tokenRequestUrl = "https://oauth2.googleapis.com/token";
  private validateTokenUrl = "https://services-1305979961.us-east-2.elb.amazonaws.com/holiday/api/v1/validate"
  private addUnavailableEmployeeUrl = "https://services-1305979961.us-east-2.elb.amazonaws.com/holiday/api/v1/addemployee"
  private checkEmail = "https://services-1305979961.us-east-2.elb.amazonaws.com/holiday/api/v1/verifymail/";
  private getRequestsForEmployeeUrl = "https://services-1305979961.us-east-2.elb.amazonaws.com/holiday/api/v1/request/requester/";
  private makeRequestLink = "https://services-1305979961.us-east-2.elb.amazonaws.com/holiday/api/v1/request"


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
  return this.http.post<any>(this.validateTokenUrl, new Object(), {headers: head});
  }
  
  getUserDetails(access_token:string): Observable<any>{
    let headers = new HttpHeaders();
    let head = headers.append("access-token", access_token);
    return this.http.get<any>(this.validateTokenUrl,
      {
        headers: head
      }); 
}


addEmployee(requestBody: any): Observable<any> {
  let body = JSON.stringify(requestBody);
  let headers = new HttpHeaders({ "Content-Type": "application/json" });

  return this.http.post<any>(this.addUnavailableEmployeeUrl, body, {
    headers: headers
  });
}

checkEmployeePresence(employeeEmail:String, access_token:string):Observable<any> {
  let headers = new HttpHeaders();
  let head = headers.append("access-token", access_token);
  return this.http.get(this.checkEmail + employeeEmail,
    {
      headers: head
    });
}

getAllRequestForEmployee(employee_id: any, access_token:string):Observable<any>{
  let headers = new HttpHeaders();
  let head = headers.append("access-token", access_token);
  return this.http.get(this.getRequestsForEmployeeUrl + employee_id,
    {
      headers: head
    });
  }

makeAholidayRequest(employeInfo: any, access_token):Observable<any>{
  let headers = new HttpHeaders();
  let head = headers.append("access-token", access_token);
  return this.http.post(this.makeRequestLink, employeInfo,
    {
      headers: head
    });
}
}
