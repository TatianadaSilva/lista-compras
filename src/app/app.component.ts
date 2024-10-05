import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComprasComponent } from "./lista-compras/lista-compras.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaComprasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-compras';
}
