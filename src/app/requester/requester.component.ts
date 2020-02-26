import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { ActivatedRoute } from '@angular/router';
import { OpenidService } from '../service/openid.service';

export interface PeriodicElement {
  startDate: string;

  reportDate: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    startDate: "Tuesday, 24th February, 2020",
    reportDate: "Monday, 5th March, 2020",
    status: "Pending"
  },
  {
    startDate: "Monday, 17th February, 2020",
    reportDate: "Friday, 21st February, 2020",
    status: "Pending"
  },
  {
    startDate: "Tuesday, 11th January, 2020",
    reportDate: "Wednesday, 13th January, 2020",
    status: "Approved"
  },
  {
    startDate: "Wednesday, 13th December, 2019",
    reportDate: "Friday, 15th December, 2019",
    status: "Approved"
  },
  {
    startDate: "Thursday, 1st September, 2019",
    reportDate: "Wednesday, 7th September, 2019",
    status: "Declined"
  },
  {
    startDate: "Friday, 25th August, 2019",
    reportDate: "Thursday, 1st September, 2019",
    status: "Declined"
  },
  {
    startDate: "Thursday, 1st August, 2019",
    reportDate: "Monday, 5th August, 2019",
    status: "Approved"
  },
  {
    startDate: "Tuesday, 21st July, 2019",
    reportDate: "Wednesday, 22nd July, 2019",
    status: "Approved"
  },
  {
    startDate: "Friday, 10th July, 2019",
    reportDate: "Monday, 13th July, 2019",
    status: "Declined"
  },
  {
    startDate: "Tuesday, 21st June, 2019",
    reportDate: "Tuesday, 30th June, 2019",
    status: "Approved"
  }
];

@Component({
  selector: "app-requester",
  templateUrl: "./requester.component.html",
  styleUrls: ["./requester.component.css"]
})
export class RequesterComponent implements OnInit {
  idToken;
  authenticationCode;

  constructor( private openId: OpenidService,private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      this.authenticationCode = queryParam.get("code");
      console.log("********** insidopenIde auth", queryParam.get("code"));
      localStorage.setItem("authenticationCode", this.authenticationCode)
    }); 
    this.authenticateAndValidate()
  }
  authenticateAndValidate(){
    this.openId.postValidateTokeId(this.idToken).subscribe(response => {
          console.log(response)    
    });
  }

  displayedColumns: string[] = ["startDate", "reportDate", "status"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  btnColor(status: string) {
    if (status === "Declined") {
      return "btn-danger";
    } else if (status === "Approved") {
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
