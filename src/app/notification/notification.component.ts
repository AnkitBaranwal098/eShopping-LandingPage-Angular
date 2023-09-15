import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div class="alert alert-success" [hidden]="isHidden">{{notification}}<div class="close"><button class="cancel-btn" (click)="cancelFun()">X</button></div></div>',
  styles: ["div{margin: 2px 0px; padding: 10px 20px;text-left: center;}","p{font-size: 14px;}",".close{float:right;margin-top:-15px;margin-right: -5px;}","button{background-color: var(--bs-alert-border-color);color: black;border-radius:5px;padding:1.5px 8px}"]
})
export class NotificationComponent {
  isHidden:boolean = false;
  notification = "This website uses cookies to provide better user experience."
  cancelFun(){
    this.isHidden = true;
  }
}
