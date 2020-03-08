import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iregister, Ilogin } from '../model/user.register';
import { BehaviorSubject } from "rxjs";
import { map} from "rxjs/operators";
@Injectable({ providedIn: "root" })
export class UserRegisterServices {
    private REGISTER_ENDPOINT = "http://mobile.test.acorsociety.com/ideators/api/users/userregistrationasync";
    private Login_ENDPOINT = "http://mobile.test.acorsociety.com/ideators/api/users/userloginasync";
    public userInfo = new BehaviorSubject(JSON.parse(localStorage.getItem("currentuser")));
    public loggedUserData = this.userInfo.asObservable();
    public headers: HttpHeaders;
    constructor(private http: HttpClient) { 
        this.headers = new HttpHeaders({ "Content-Type": "application/json" });
    }
    
    UserRegistration(item: Iregister) {
       return this.http.post(this.REGISTER_ENDPOINT, JSON.stringify(item), {headers: this.headers})
    } 
    UserLoginDetails(item: Ilogin) {
        return this.http.post(this.Login_ENDPOINT, JSON.stringify(item), { headers: this.headers }).pipe(map((item: any) => {
            if (item && item.UserLogin.JwtToken) {
                localStorage.setItem("currentuser", JSON.stringify(item));
                this.userInfo.next(item);
                return item;
            } else {
    return item;
            }
        }))
    };

    Logout() {
        localStorage.removeItem("currentuser");
        this.userInfo.next(null);
    }
}