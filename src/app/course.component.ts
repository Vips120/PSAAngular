import { Component } from "@angular/core";
import { Course } from  "./course";
@Component({
    selector: "app-course",
    template: `
    <h2>
     {{courseName}}
    </h2>
    <ul *ngFor="let course of courses">
<li>{{course}}</li>
    </ul>
<hr/>
<ul *ngFor="let product of products">
<li>{{product}}</li>
    </ul>

    `,
    styles: [``]
})

export class CourseComponent {
    public courseName: string = "MASTER IN ANGULAR";
    // public courses: string[] = ["Reactjs", "Nodejs", "Mongodb", "Angular"];
    public courses: string[];
    public products: string[];
    constructor(private course:Course) {
        //never ever use tight coupling
        // let course = new Course();
        // this.courses = course.getCourse();
        this.courses = this.course.getCourse();
        this.products = this.course.getproduct();
    }

}