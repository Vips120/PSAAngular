import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({providedIn:"root"})
export class UserServices {
    private POST_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
    constructor(private http: HttpClient) { }
    
    getPost() {
        return this.http.get(this.POST_ENDPOINT);
    }
}