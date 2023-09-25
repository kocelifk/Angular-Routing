import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  templateUrl: './lists-home.component.html',
  styleUrls: ['./lists-home.component.css']
})
export class ListsHomeComponent implements OnInit {

  numbers = [
    { value: 50, label: 'Müşteri' },
    { value: '3500 TL', label: 'Ciro' },
    { value: 65, label: 'Yorumlar' }
  ];
  images =[
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Şifonyer',
      description: 'Her türlü eşyanızı koyabileceğiniz şifonyer'
    },
    {
      image: '/assets/images/couch.jpeg',
      title: 'Kanepe',
      description: 'Oturması muhteşem rahat koltuk'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
