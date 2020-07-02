import { Component , ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'demo-root',
  templateUrl: './demo-root.component.html',
  styleUrls: ['./demo-root.component.scss']
})
export class DemoRootComponent {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
   isExpanded = true;
   showSubmenu: boolean = false;
   isShowing = false;
   showSubSubMenu: boolean = false;

   mouseenter() {
     if (!this.isExpanded) {
       this.isShowing = true;
     }
   }

   mouseleave() {
     if (!this.isExpanded) {
       this.isShowing = false;
     }
   }
}
