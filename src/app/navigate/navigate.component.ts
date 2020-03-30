import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { OpenIdService } from "../service/openId.service";

@Component({
  selector: "app-navigate",
  templateUrl: "./navigate.component.html",
  styleUrls: ["./navigate.component.css"]
})
export class NavigateComponent implements OnInit {
  authenticationCode;
  idToken;
  isValid = false;
  oidc_redirect_paths;
  isLoading = false;

  constructor(
    private openId: OpenIdService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      this.authenticationCode = queryParam.get("code");
      this.isLoading=true;
      this.oidc_redirect_paths = this.openId.redirect_page_to_oidc;
      this.router.navigate(["/"]).then(result => {
        window.location.href = this.oidc_redirect_paths;
      });
    });
  }
}
