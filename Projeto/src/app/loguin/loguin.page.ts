import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.page.html',
  styleUrls: ['./loguin.page.scss'],
})
export class LoguinPage implements OnInit {

  constructor(private a:AppComponent) { }

  ngOnInit() {
    this.a.selectedIndex = 2;
  }

}
