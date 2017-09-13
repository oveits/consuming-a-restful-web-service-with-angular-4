import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data: any = null;
  //restURL = "https://public-api.wordpress.com/wp/v2/sites/oliverveits.wordpress.com/posts/3078";
  restURL = "https://public-api.wordpress.com/rest/v1.1/sites/oliverveits.wordpress.com/posts/3078";

  constructor(private _http: Http) { 
    this.getMyBlog();
  }

  private getMyBlog() {
    return this._http.get(this.restURL)
                .map((res: Response) => res.json())
                .subscribe(data => {
        		this.data = data;
        		console.log(this.data);
      		});
  }

}
