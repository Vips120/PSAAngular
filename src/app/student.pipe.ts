import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:"pcontent"
})

export class StudentPipe implements PipeTransform {
    transform(val,arg) {
        if (!arg) { return val; }
        if (val.length >= arg) {
            return val.substring(0, arg) + "....";
        }
    }
}