import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
   name:"imagepipe"
})


export class Imagepipe implements PipeTransform {
    transform(val:any,arg:any,httpType:boolean = false) {
        let image = "";
        if (val) {
            image = val;
        } else {
            image = arg;
        }
        if (httpType) {
            if (image.indexOf("https") == -1) {
                image = image.replace("http", "https");
               }
           }
        return image;
    }
}