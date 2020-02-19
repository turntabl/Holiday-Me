import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";

export interface PeriodicElement {
  startDate: string;
  position: number;
  reportDate: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    startDate: "Tuesday, 24th February, 2020",
    reportDate: "Monday, 5th March, 2020",
    status: "Pending"
  },
  {
    position: 2,
    startDate: "Monday, 17th February, 2020",
    reportDate: "Friday, 21st February, 2020",
    status: "Pending"
  },
  {
    position: 3,
    startDate: "Tuesday, 11th January, 2020",
    reportDate: "Wednesday, 13th January, 2020",
    status: "Approved"
  },
  {
    position: 4,
    startDate: "Wednesday, 13th December, 2019",
    reportDate: "Friday, 15th December, 2019",
    status: "Approved"
  },
  {
    position: 5,
    startDate: "Thursday, 1st September, 2019",
    reportDate: "Wednesday, 7th September, 2019",
    status: "Declined"
  },
  {
    position: 6,
    startDate: "Friday, 25th August, 2019",
    reportDate: "Thursday, 1st September, 2019",
    status: "Declined"
  },
  {
    position: 7,
    startDate: "Thursday, 1st August, 2019",
    reportDate: "Monday, 5th August, 2019",
    status: "Approved"
  },
  {
    position: 8,
    startDate: "Tuesday, 21st July, 2019",
    reportDate: "Wednesday, 22nd July, 2019",
    status: "Approved"
  },
  {
    position: 9,
    startDate: "Friday, 10th July, 2019",
    reportDate: "Monday, 13th July, 2019",
    status: "Declined"
  },
  {
    position: 10,
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
  constructor() {}

  ngOnInit() {}

  displayedColumns: string[] = [
    "position",
    "startDate",
    "reportDate",
    "status"
  ];
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
