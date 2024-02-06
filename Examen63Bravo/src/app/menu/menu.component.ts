import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  paginas = [
    {titulo: 'Cliente', path: 'paginas/cliente'},
    {titulo: 'Recarga', path: 'paginas/recarga'},
    {titulo: 'Recargas', path: 'paginas/hechas'},
  ]
}
