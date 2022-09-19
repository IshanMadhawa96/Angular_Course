import { Component } from '@angular/core';

@Component({
  selector: 'hniv-root',
  //template:'Hello world from Inline Template',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'Admin';
}
