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

  constructor(private openId: OpenidService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      this.authenticationCode = queryParam.get("code");
      console.log("********** insidopenIde auth", this.authenticationCode);
     
      // this.oidService._postAuthCodForAccessAndIdToken(this._authCode);
      this.openId.postAuthenticationCodForAccessAndIdToken(this.authenticationCode).subscribe(response => {
        console.log(response)
        this.idToken = response.id_token
      })
    });

    this.openId.postValidateTokeId(this.idToken).subscribe(response => {
      console.log(response)
    })
  } 
}
