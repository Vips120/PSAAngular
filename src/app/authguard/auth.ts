import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
    constructor(private router: Router){}
    canActivate() {
        let token = localStorage.getItem("currentuser");
        if (!token) {
            alert("login first");
            this.router.navigateByUrl("/contact");
        } else {
            return true;
        }
 }
}
