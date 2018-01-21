import { Component } from '@angular/core';


@Component({
  selector: 'page-listaline',
  templateUrl: 'listaline.html',
})
export class ListalinePage {

  items = [
    'Pokemon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ]

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
