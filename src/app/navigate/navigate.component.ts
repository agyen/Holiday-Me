import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { OpenIdService } from "../service/openId.service";
import { CookieService } from "ngx-cookie-service/cookie-service/cookie.service";

@Component({
  selector: "app-navigate",
  templateUrl: "./navigate.component.html",
  styleUrls: ["./navigate.component.css"]
})
export class NavigateComponent implements OnInit {
  authenticationCode;
  isValid = false;
  oidc_redirect_path;

  constructor(
    private openId: OpenIdService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      this.authenticationCode = queryParam.get("code");
      this.oidc_redirect_path = this.openId.redirect_page_to_oidc;
    });
    this.router.navigate(["/"]).then(result => {
      window.location.href = this.oidc_redirect_path;
    });
  }
}
