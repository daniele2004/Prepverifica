import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cassettiera',
  templateUrl: './cassettiera.component.html',
  styleUrls: ['./cassettiera.component.css']
})
export class CassettieraComponent implements OnInit {
  nome: string[]; //Creiamo il nostro vettore di stringhe


  constructor() { 
     this.nome = ['Ari', 'Carlos', 'Felipe', 'Nate','pino','rino','gino','pietro' ,'franco','pippo']; //Riempiamo il vettore
  }



  ngOnInit(): void {
  }

}
