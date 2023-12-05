import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, RouterOutlet],
  template: `
  <ng-container>
    This is container area..
  </ng-container>
    <!-- <ul>   
      <span *ngFor="let product of products">
        <li *ngIf="product.avaliable">{{product.productName}} </li>
      </span>
    </ul>   -->

    <ul>
      <ng-container *ngFor = "let product of products">
        <li *ngIf = "product.avaliable">{{product.productName}}</li>
      </ng-container>
    </ul>
  
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ng-container';
  products: any[] = [
    {productName:"KTP700 HMI", avaliable:true},
    {productName:"Logo PLC", avaliable:true},
    {productName:"S7 - 1200", avaliable:false},
    {productName:"PowerSupply", avaliable:false},
    {productName:"Inverter", avaliable:true},
    {productName:"DC Relay", avaliable:false}
  ]
}
