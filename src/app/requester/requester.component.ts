import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { OpenidService } from "../service/openid.service";
import { validateHorizontalPosition } from "@angular/cdk/overlay";

export interface PeriodicElement {
  startDate: string;

  reportDate: string;
  requestStatus: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    startDate: "Tuesday, 24th February, 2020",
    reportDate: "Monday, 5th March, 2020",
    requestStatus: "Pending"
  },
  {
    startDate: "Monday, 17th February, 2020",
    reportDate: "Friday, 21st February, 2020",
    requestStatus: "Pending"
  },
  {
    startDate: "Tuesday, 11th January, 2020",
    reportDate: "Wednesday, 13th January, 2020",
    requestStatus: "Approved"
  },
  {
    startDate: "Wednesday, 13th December, 2019",
    reportDate: "Friday, 15th December, 2019",
    requestStatus: "Approved"
  },
  {
    startDate: "Thursday, 1st September, 2019",
    reportDate: "Wednesday, 7th September, 2019",
    requestStatus: "Declined"
  },
  {
    startDate: "Friday, 25th August, 2019",
    reportDate: "Thursday, 1st September, 2019",
    requestStatus: "Declined"
  },
  {
    startDate: "Thursday, 1st August, 2019",
    reportDate: "Monday, 5th August, 2019",
    requestStatus: "Approved"
  },
  {
    startDate: "Tuesday, 21st July, 2019",
    reportDate: "Wednesday, 22nd July, 2019",
    requestStatus: "Approved"
  },
  {
    startDate: "Friday, 10th July, 2019",
    reportDate: "Monday, 13th July, 2019",
    requestStatus: "Declined"
  },
  {
    startDate: "Tuesday, 21st June, 2019",
    reportDate: "Tuesday, 30th June, 2019",
    requestStatus: "Approved"
  }
];

@Component({
  selector: "app-requester",
  templateUrl: "./requester.component.html",
  styleUrls: ["./requester.component.css"]
})
export class RequesterComponent implements OnInit {
  idToken;

  constructor(
    private openId: OpenidService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      // this.authenticationCode = queryParam.get("code");
      console.log("********** insidopenIde auth", queryParam.get("code"));
      this.openId
        .postAuthenticationCodForAccessAndIdToken(queryParam.get("code"))
        .subscribe(response => {
          console.log("token", response);
          this.idToken = response.id_token;
          //this.val()
          this.openId.postValidateTokeId(this.idToken).subscribe(res => {
            console.log(res);
            localStorage.setItem("userEmail", res.decoded_token.email);
            localStorage.setItem("l_name", res.decoded_token.family_name);
            localStorage.setItem("f_name", res.decoded_token.given_name);

            this.openId
              .checkEmployeePresence(res.decoded_token.email)
              .subscribe(response => {
                if (response.response.length == 0) {
                  let requestData = {
                    employee_email: localStorage.getItem("userEmail"),
                    employee_firstname: localStorage.getItem("f_name"),
                    employee_lastname: localStorage.getItem("l_name")
                  };
                  console.log("This user is not found..entring data");

                  this.openId.addEmployee(requestData).subscribe(response_ => {
                    console.log(response_);
                  });
                } else {
                  console.log("user found", response);
                }
              });
          });
        });
    });
  }

  displayedColumns: string[] = ["startDate", "reportDate", "status"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  btnColor(requestStatus: string) {
    if (requestStatus === "Declined") {
      return "btn-danger";
    } else if (requestStatus === "Approved") {
      return "btn-success";
    } else {
      return "btn-lemon";
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
