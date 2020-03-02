import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { NewRequest } from "../new-request";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class ApplicationService {
  private holidayRequestURL: string;

  constructor(private httpClient: HttpClient) {
    this.holidayRequestURL = "http://localhost:8080/api/v1/request";
  }

  postRequest(newRequest: NewRequest): Observable<NewRequest> {
    return this.httpClient.post<NewRequest>(
      this.holidayRequestURL,
      newRequest,
      httpOptions
    );
  }
}
