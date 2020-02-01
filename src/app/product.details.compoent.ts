import { Component } from "@angular/core";
@Component({
    selector: "app-productdetails",
    template: `
    <div class="container">
      <div class="row">
      <div class="col-md-12" style="margin-top:20px">
         <div class="form-group">
         <input type="text" class="form-control" placeholder="search here"
          [(ngModel)]="user"
         >
         {{user}}
         </div>
      </div>
      <div class="col-md-4" *ngFor="let details of productdetails | details: user">
      <div class="card text-white bg-danger" style="margin:10px">
      <img class="card-img-top" src="{{details.thumbnailUrl}}" alt="{{details.id}}">
      <div class="card-body">
        <h4 class="card-title">{{details.title}}</h4>
        <p class="card-text">{{details.albumId}}</p>
      </div>
    </div>
      </div>
      </div>
      <div class="row">
      <div class="col-md-12">
      <img src="{{imgurl | imagepipe:'http://lorempixel.com/400/200/':true}}">
      </div>
      </div>
    </div>
    `
})

export class ProductDetailsComponent {
    public user: string = "";
    public imgurl: string;
    public productdetails: any[] = [
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
            "albumId": 1,
            "id": 4,
            "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            "url": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
            "albumId": 1,
            "id": 5,
            "title": "natus nisi omnis corporis facere molestiae rerum in",
            "url": "https://via.placeholder.com/600/f66b97",
            "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        },
        {
            "albumId": 1,
            "id": 6,
            "title": "accusamus ea aliquid et amet sequi nemo",
            "url": "https://via.placeholder.com/600/56a8c2",
            "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
        },
        {
            "albumId": 1,
            "id": 7,
            "title": "officia delectus consequatur vero aut veniam explicabo molestias",
            "url": "https://via.placeholder.com/600/b0f7cc",
            "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
        },
        {
            "albumId": 1,
            "id": 8,
            "title": "aut porro officiis laborum odit ea laudantium corporis",
            "url": "https://via.placeholder.com/600/54176f",
            "thumbnailUrl": "https://via.placeholder.com/150/54176f"
        },
        {
            "albumId": 1,
            "id": 9,
            "title": "qui eius qui autem sed",
            "url": "https://via.placeholder.com/600/51aa97",
            "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
        },
        {
            "albumId": 1,
            "id": 10,
            "title": "beatae et provident et ut vel",
            "url": "https://via.placeholder.com/600/810b14",
            "thumbnailUrl": "https://via.placeholder.com/150/810b14"
        }];
 constructor(){}
}