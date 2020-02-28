import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { ApplicationService } from "../service/application.service";
import { MakingRequest } from "../makingRequest";

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

  constructor(formBuilder: FormBuilder, private service: ApplicationService) {
    const currentYear = new Date().getFullYear();
    this.startMinDate = new Date();
    this.startMaxDate = new Date(currentYear, 11, 31);
    this.reportMinDate = new Date();
    this.reportMaxDate = new Date(currentYear, 11, 31);

    //   this.regForm = formBuilder.group({
    //     startdate: new FormControl(new Date()),
    //     reportdate: new FormControl(new Date())
    //   });
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
