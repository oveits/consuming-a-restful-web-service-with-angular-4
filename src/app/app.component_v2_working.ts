import { Component, OnInit, Injectable } from '@angular/core';
//import { Injectable } from '@angular/core';
//import { Configuration } from '../config';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [Http]
  //imports: [HttpModule]
})

//export class AppComponent  {
export class AppComponent implements OnInit {
  public myBlogHtml;
  title = 'app';
  blog: String;
  data: any = null;

  //constructor() { }
  constructor(private _http: Http) { 
  this.myBlogHtml = this.getMyBlog();
  }

  ngOnInit() {
    this.getMyBlog();
  }

  private getMyBlog() {
    return this._http.get('https://public-api.wordpress.com/rest/v1.1/sites/oliverveits.wordpress.com/posts/3078')
                .map((res: Response) => res.json())
                 .subscribe(data => {
        		this.data = data;
        		this.title = data.teststring;
        		console.log(this.data);
      		});
                //.subscribe((blog: String) => this.blog = ID);
    //console.log(this.myBlogHtml);
  }
//    private actionUrl: string;
//    private headers: Headers;
//    constructor(private _http: Http, private _configuration: Configuration){
//        actionUrl = "actionUrl";
//        return actionUrl;
//    }

//    @ViewChild('dataContainer') dataContainer: ElementRef;
//
//    loadData(data) {
//        this.dataContainer.nativeElement.innerHTML = data.content;
//    }

}
