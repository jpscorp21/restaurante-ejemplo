import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { FormGroup,
         FormControl,
         Validators } from '@angular/forms';

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  public form;

  constructor(public alertCtrl: AlertController) {
    this.form = new FormGroup({
      id: new FormControl("", Validators.required),
      nombre: new FormControl("", Validators.required),
      apellido: new FormControl("", Validators.required),
      telefono: new FormControl("", Validators.required)            
    })
  }

  processForm() {
    let alert = this.alertCtrl.create({
      title: "Mensaje del Sistema",
      message: "Cuenta creada por: " + this.form.value.nombre + " " + this.form.value.apellido,
      buttons: ["Aceptar"]
    })

    alert.present();

    
  }


}
