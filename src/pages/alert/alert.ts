import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { AlertPageModule } from './alert.module';


@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  public texto: string;

  constructor(public alertCtrl: AlertController) {
  }

  openAlert() {
    let alert = this.alertCtrl.create({
      title: "Mensaje",
      subTitle: "Mensaje de error",
      message: "El mensaje contiene errores",
      buttons: ['Aceptar']
    })
    alert.present();
  }

  openAlertPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      message: 'Ingrese un nombre para este nuevo album',
      inputs: [{
        name: 'title',
        placeholder: 'Title'
      }],
      buttons: [{
        text: 'Save',
        handler: data => {
          console.log('Saved clicked');
        }

      },
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicker');
        }
      }]
    })
    alert.present();
  }
  
  openConfirmAlert() {
    let alert = this.alertCtrl.create({
      title: 'El lenguaje lua',
      message: 'Estas de acuerdo en usar el lenguaje lua',
      buttons: [
        {
          text: 'No acepto',
          handler: () => {
            console.log('No acepto clicked');
          }
        },
        {
          text: 'Acepto',
          handler: () => {
            console.log('Acepto clicked');
          }
        }
      ]
    })
    alert.present();
  }

  openRadioAlert() {
    let alert = this.alertCtrl.create({
      title: 'Paises',
      message: 'Escoja un Pais',
      inputs: [

        {
          type: 'radio',
          label: 'Paraguay',
          value: 'par',
          checked: true
        },
        {
          type: 'radio',
          label: 'Uruguay',
          value: 'uru'
        },
        {
          type: 'radio',
          label: 'Brazil',
          value: 'bra',          
        }
      ],

      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log("aceptar clicker");
          }
        }
      ]
    });
    alert.present();
  }

  openCheckboxAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle("Libros de Harry Potter");
    alert.setMessage("Que libros de harry potter leiste?");
    alert.addInput({
      type: 'checkbox',
      label: 'Prisionero de Azkaban',
      value: 'azkaban',
      checked: true
    })

    alert.addInput({
      type: 'checkbox',
      label: 'El caliz de fuego',
      value: 'caliz'
    })

    alert.addInput({
      type: 'checkbox',
      label: 'La reliquia de la muerte',
      value: 'reliquia'
    })

    alert.addButton('Cancel');

    alert.addButton({
      text: 'Aceptar',
      handler: (data) => {
        console.log("Checkbox data: ", data);
        
      }
    })
    alert.present();
  }
}
