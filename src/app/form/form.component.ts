import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { ApplicationService } from "../service/application.service";
import { MakingRequest } from "../makingRequest";
import { DaterangepickerConfig } from "ng2-daterangepicker";
import { DaterangepickerComponent } from "ng2-daterangepicker";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  startMinDate: Date;
  startMaxDate: Date;
  reportMinDate: Date;
  reportMaxDate: Date;
  startDateSet: Boolean;

  form: FormGroup;
  inlineRange;

  requestDetails = new MakingRequest();
  userEmail = "";
  msgShow: boolean = false;
  validSelection: boolean;
  message: string;

  public daterange: any = {
    start: Date.now(),
    end: Date.now(),
    label: ""
  };

  // @ViewChild(DaterangepickerComponent)
  private picker: DaterangepickerComponent;
  // public updateDateRange() {
  //   this.picker.datePicker.setStartDate("2017-03-27");
  //   this.picker.datePicker.setEndDate("2017-04-08");
  // }

  public options: any = {
    locale: { format: "YYYY-MM-DD" },
    alwaysShowCalendars: false
  };
  public selectedDate(value: any) {
    console.log(value);
    this.daterange.start = value.start;
    this.daterange.end = value.end;
  }

  public applyDate(e: any) {
    console.log(e);
    //this.daterange.start = e.picker.startDate;
    //this.daterange.end = e.picker.endDate;
  }

  ngAfterViewInit() {
    this.picker.datePicker.setStartDate("2007-03-27");
  }
  // expected output is an object containing the event and the picker.
  // your method can be named whaterver you want.
  // you can add multiple params to the method and pass them in the template
  public calendarCanceled(e: any) {
    console.log(e);
    // e.event
    // e.picker
  }

  public calendarApplied(e: any) {
    console.log(e);
    // e.event
    // e.picker
  }

  startFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // To prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  reportFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // To prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor(
    formBuilder: FormBuilder,
    private service: ApplicationService,
    private daterangepickerOptions: DaterangepickerConfig
  ) {
    const currentYear = new Date().getFullYear();
    this.startMinDate = new Date();
    this.startMaxDate = new Date(currentYear, 11, 31);
    this.reportMinDate = new Date();
    this.reportMaxDate = new Date(currentYear, 11, 31);
    this.form = formBuilder.group({
      date: [{ begin: new Date(2018, 7, 5), end: new Date(2018, 7, 25) }]
    });

    this.daterangepickerOptions.settings = {
      locale: { format: "YYYY-MM-DD" },
      alwaysShowCalendars: false
    };
  }
  inlineRangeChange($event) {
    this.inlineRange = $event;
  }
  ngOnInit() {}

  onSubmit() {
    alert(
      "Thanks for submitting! Data: " + JSON.stringify(this.requestDetails)
    );
    console.log(JSON.stringify(this.requestDetails));
  }
}
