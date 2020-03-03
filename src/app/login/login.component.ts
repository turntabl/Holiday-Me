import { Component, OnInit } from '@angular/core';
import { OpenidService } from '../service/openid.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authenticationCode;
  idToken;
  isValid = false;

  constructor(private openId: OpenidService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      this.authenticationCode = queryParam.get("code");
      this.openId.postAuthenticationCodForAccessAndIdToken(this.authenticationCode).subscribe()
    });
  } 
}
