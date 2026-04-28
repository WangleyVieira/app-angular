import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  meuBooleano = true;

  atualizarBooleano(valor: boolean) {
    this.meuBooleano = valor;
  }
}
