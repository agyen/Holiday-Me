import { Component, OnInit } from "@angular/core";
import { OpenidService } from "../service/openid.service";
import { ActivatedRoute } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  authenticationCode;
  idToken;
  isValid = false;
  oidc_redirect_path = "https://google.com";

  constructor(
    private openId: OpenidService,
    private activatedRoute: ActivatedRoute,
    private cookieservice: CookieService
  ) {}
  // redirectToOIDCPage = this.oidc_redirect_path;

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      this.authenticationCode = queryParam.get("code");
      this.openId
        .postAuthenticationCodForAccessAndIdToken(this.authenticationCode)
        .subscribe();
    });
    this.oidc_redirect_path = this.cookieservice.get("oidc_redirect_url");
  }
}
