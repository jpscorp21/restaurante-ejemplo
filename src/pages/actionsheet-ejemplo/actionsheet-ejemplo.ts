import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'page-actionsheet-ejemplo',
  templateUrl: 'actionsheet-ejemplo.html',
})
export class ActionsheetEjemploPage {

  constructor(public actionsheetCtrl: ActionSheetController) {
  }

  openAction() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          handler: () => {
            console.log("Favorite clicked");
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
    actionSheet.present();
  }

}
 