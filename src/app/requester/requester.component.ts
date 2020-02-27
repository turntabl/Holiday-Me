import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { ActivatedRoute } from '@angular/router';

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
  constructor( private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      // this.authenticationCode = queryParam.get("code");
      console.log("********** insidopenIde auth", queryParam.get("code"));
     
      // this.oidService._postAuthCodForAccessAndIdToken(this._authCode);
      // this.openId.postAuthenticationCodForAccessAndIdToken(this.authenticationCode);
    });
  }

  displayedColumns: string[] = ["startDate", "reportDate", "requestStatus"];
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
