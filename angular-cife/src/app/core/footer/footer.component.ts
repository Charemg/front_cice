import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor: string;
  fecha: Date;
  empresa: string;

  constructor() { 
    

  }

  ngOnInit() {
    
    this.autor = 'Chare Muñoz';
    this.fecha = new Date();
    this.empresa = ' CIFE - Fuenlabrada';
    this.fecha.toLocaleDateString()
  }

}
