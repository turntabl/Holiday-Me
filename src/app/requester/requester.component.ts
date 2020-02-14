import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";

export interface PeriodicElement {
  startDate: string;
  position: number;
  reportDate: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, startDate: "Tuesday, 14", reportDate: 1.0079, status: "H" },
  { position: 2, startDate: "Helium", reportDate: 4.0026, status: "He" },
  { position: 3, startDate: "Lithium", reportDate: 6.941, status: "Li" },
  { position: 4, startDate: "Beryllium", reportDate: 9.0122, status: "Be" },
  { position: 5, startDate: "Boron", reportDate: 10.811, status: "B" },
  { position: 6, startDate: "Carbon", reportDate: 12.0107, status: "C" },
  { position: 7, startDate: "Nitrogen", reportDate: 14.0067, status: "N" },
  { position: 8, startDate: "Oxygen", reportDate: 15.9994, status: "O" },
  { position: 9, startDate: "Fluorine", reportDate: 18.9984, status: "F" },
  { position: 10, startDate: "Neon", reportDate: 20.1797, status: "Ne" }
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
