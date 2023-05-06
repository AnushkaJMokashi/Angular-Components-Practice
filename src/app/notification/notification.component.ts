import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success"> 
    <p>This website Uses cookies to provide better user experience</p>
    </div>`,
    //you can use alert-danger or warnings
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; background-color: orange; text-align: center;}","p{font-size: 14px;}"]
})
export class NotificationComponent {

}
