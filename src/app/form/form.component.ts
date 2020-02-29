import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { ApplicationService } from "../service/application.service";
import { MakingRequest } from "../makingRequest";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  [x: string]: any;
  currentyear = new Date().getFullYear();
  minFromDate = new Date();
  reportMin: Date = new Date(
    new Date().setDate(this.minFromDate.getDate() + 1)
  );
  maxToDate = new Date(this.currentyear, 11, 31);

  form: FormGroup;
  submitted = false;

  requestDetails = new MakingRequest();
  userEmail = "";
  msgShow: boolean = false;
  validSelection: boolean;
  message: string;

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

  constructor(formBuilder: FormBuilder, private service: ApplicationService) {}

  ngOnInit() {
    this.form = this.formbuilder.group({
      startdate: ["", Validators.required],
      reportdate: ["", Validators.required, daterange]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    alert(
      "Thanks for submitting! Data: " + JSON.stringify(this.requestDetails)
    );
    console.log(JSON.stringify(this.requestDetails));
  }
}

function daterange(control: AbstractControl): ValidationErrors {
  if (control.parent != undefined) {
    var startdate: string = control.parent.get("startdate").value;
    var reportdate: string = control.parent.get("reportdate").value;
    if (Date.parse(startdate) >= Date.parse(reportdate)) {
      return { rangeMatch: true };
    }
  }
  return null;
}
