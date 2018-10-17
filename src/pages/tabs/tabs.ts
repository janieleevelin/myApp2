import { Component } from '@angular/core';
import { CardapioPage } from '../cardapio/cardapio';
import { LojasPage } from '../lojas/lojas';
import { ContatoPage } from '../contato/contato';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CardapioPage;
  tab2Root = LojasPage;
  tab3Root = ContatoPage;

  constructor() {

  }
}
