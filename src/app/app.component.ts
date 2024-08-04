import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;
  

  increaseBy(valor: number):void{
    this.counter += valor;
  }

  reset(){
    this.counter=10;
  }
}
