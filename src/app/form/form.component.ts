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
  // see original project for full list of options
  // can also be setup using the config service to apply to multiple pickers
  // public options: any = {
  //   locale: { format: "YYYY-MM-DD" },
  //   alwaysShowCalendars: false
  // };

  // public selectedDate(value: any, datepicker?: any) {
  // this is the date  selected
  // console.log(value);

  // any object can be passed to the selected event and it will be passed back here
  // datepicker.start = value.start;
  // datepicker.end = value.end;

  // use passed valuable to update state
  //   this.daterange.start = value.start;
  //   this.daterange.end = value.end;
  //   this.daterange.label = value.label;
  // }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    // if (type === "start") {
    //   this.regForm.get("startdate").setValue(event.value);
    //   start: Date = this.regForm.get("startdate").value;
    //   report: Date = this.regForm.get("startdate").value;
    //   console.log(
    //     `${type}: ${event.value} -> ${this.regForm.get("startdate").value}`
    //   );
    //   console.log(` ${this.regForm.get("reportdate").value}`);
    // } else if (type === "report") {
    //   this.regForm.get("reportdate").setValue(event.value);
    //   console.log(
    //     `${type}: ${event.value} -> ${this.regForm.get("reportdate").value}`
    //   );
    // }
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

  // dateSort = "";
  // time_range = new FormGroup({});
  // private regForm: FormGroup;

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

    //   this.regForm = formBuilder.group({
    //     startdate: new FormControl(new Date()),
    //     reportdate: new FormControl(new Date())
    //   });
    this.daterangepickerOptions.settings = {
      locale: { format: "YYYY-MM-DD" },
      alwaysShowCalendars: false
    };
  }

  ngOnInit() {}
  // public onDate(event): void {
  //   this.roomsFilter.date = event;
  //   this.getData(this.roomsFilter.date);
  // }
  // getData(date: any) {
  //   throw new Error("Method not implemented.");
  // }

  onSubmit() {
    alert(
      "Thanks for submitting! Data: " + JSON.stringify(this.requestDetails)
    );
    console.log(JSON.stringify(this.requestDetails));
  }
}
