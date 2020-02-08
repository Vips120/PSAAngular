import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public InfoLink = [{
    id: 1,
    name: "about1"
  }, {
    id: 2,
    name: "about2"
    },
    {
      id: 3,
      name: "about3",

    }
  ];
  public productService: any[] = [
    {
      id: 1,
      name: "services1",

    },
    {
      id: 2,
      name: "services2",

    },
    {
      id: 3,
      name: "services3",

    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
