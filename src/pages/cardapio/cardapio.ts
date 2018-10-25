import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-carapio',
  templateUrl: 'cardapio.html'
})
export class CardapioPage {

  constructor(public navCtrl: NavController) {
    this.horarios = {
      'SEG 10h-22h',
      'TER 10h-22h',
      'QUA 10h-22h',
      'QUI 10h-22h',
      'SEX 09h-00h',
      'SAB 09h-00h',
      'DOM 15h-21h'
    }
  }

}
