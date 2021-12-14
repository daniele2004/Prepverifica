import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casella-posta',
  templateUrl: './casella-posta.component.html',
  styleUrls: ['./casella-posta.component.css']
})
export class CasellaPostaComponent implements OnInit {
  lettere: string[]; //Creiamo il nostro vettore di stringhe 
  constructor() { 
     this.lettere = ['lettera1', 'lettera2', 'lettera3']; //Riempiamo il vettore
  }
  ngOnInit() {
  }
}


  