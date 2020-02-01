import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:"details"
})

export class Details implements PipeTransform {
    transform(val:any[], arg:any) {
        return val.filter(item => item.title.toLowerCase().includes(arg.toLowerCase()));
    }
}