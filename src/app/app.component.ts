import { Component } from '@angular/core';

//Decorador que acompaña a la clase
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//--> la plantilla donde se carga
  styleUrls: ['./app.component.css'] //--> formato
})
//Clase 
export class AppComponent {
  title = 'my-app';
}
