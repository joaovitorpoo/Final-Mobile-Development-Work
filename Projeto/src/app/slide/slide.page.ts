import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {
  
  slides = [
    {
      img: '/assets/img/img3.jpg',
      titulo: 'Veja quais eventos de arte estão <br> ocorrendo em BH'
    },
    {
      img: '/assets/img/img2.jpg',
      titulo: 'Conheça novos artistas e trabalhos<br>'
    },
    {
      img: '/assets/img/img1.jpg',
      titulo: 'Divulgue seus eventos<br>'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
