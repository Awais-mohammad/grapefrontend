import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grapefrontend';

  constructor(
    private http: HttpClient
  ) {

  }

  fileChangeListener($event: any): void {
    // change the url
    this.http.post('localhost:3400', { 'img': $event.srcElement.files }).subscribe(res => {
      alert(res)

    }, (err => {
      alert(err)
    }))

  }

}
