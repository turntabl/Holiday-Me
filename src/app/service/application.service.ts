// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { CookieService } from "ngx-cookie-service";

// const httpOptions = {
//   headers: new HttpHeaders({
//     "Content-Type": "application/json"
//   })
// };

// @Injectable({
//   providedIn: "root"
// })
// export class ApplicationService {
//   private requestsURL: string;

//   constructor(
//     private httpClient: HttpClient,
//     private cookieService: CookieService
//   ) {
//     this.requestsURL = this.cookieService.get("backend_url");
//   }

//   getRequests(): Observable<Request[]> {
//     return this.httpClient.get<Request[]>(this.requestsURL + "requests");
//   }

//   postRequest(newRequest: NewRequest): Observable<NewRequest> {
//     return this.httpClient.post<NewRequest>(
//       this.requestsURL + "send",
//       newRequest,
//       httpOptions
//     );
//   }
// }
