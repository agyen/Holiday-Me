import { Component, OnInit } from '@angular/core';
import { OpenidService } from '../service/openid.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authenticationCode;
  idToken;
  isValid = false;
  oidc_redirect_path: any;

  private redirectToOIDCPage = this.oidc_redirect_path;

  constructor(private openId: OpenidService, 
              private activatedRoute: ActivatedRoute,
              private cookieservice: CookieService) { 
                this.oidc_redirect_path = this.cookieservice.get("oidc_redirect_url")
              }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      this.authenticationCode = queryParam.get("code");
      this.openId.postAuthenticationCodForAccessAndIdToken(this.authenticationCode).subscribe()
    });
  } 
}
