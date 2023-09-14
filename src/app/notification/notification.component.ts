import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div class="alert alert-success" [hidden]="isHidden">{{notification}}</div>',
  styles: ["div{margin: 2px 0px; padding: 10px 20px;text-align: center;}","p{font-size: 14px;}"]
})
export class NotificationComponent {
  isHidden:boolean = false;
  notification = "This website uses cookies to provide better user experience."
}
