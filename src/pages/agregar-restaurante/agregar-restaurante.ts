import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { NgForm } from '@angular/forms';
import { RestauranteService } from '../../servicios/restaurante.service';
/**
 * Generated class for the AgregarRestaurantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-restaurante',
  templateUrl: 'agregar-restaurante.html',
})
export class AgregarRestaurantePage {

  //Ubicacion
  ubicacion = {
    lat: 0,
    lng: 0
  }

  ubicacionlista = false;

  imagenes: string[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public geolocation: Geolocation,
              public toastCtrl: ToastController,
              public camera: Camera,
              public restauranteService: RestauranteService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarRestaurantePage');
  }

  localizar(){
    //Recuperar una ubincacion
    this.geolocation.getCurrentPosition({timeout:6000})
              .then( info => {
                this.ubicacion.lat = info.coords.latitude;
                this.ubicacion.lng = info.coords.longitude;
                this.ubicacionlista = true;
              })
              .catch(error => {
                let toast = this.toastCtrl.create({
                  message: 'No se pudo encontrar la ubicacion',
                  duration: 2000
                })
                toast.present();
              })
  }


  tomarFoto(){
    this.camera.getPicture({
      correctOrientation: true
    })
               .then( imagenInfo => {
                this.imagenes.push(imagenInfo);
               })
               .catch(error => {

               })
  }


  agregarRestaurante(formulario: NgForm){
    this.restauranteService.agregarRestaurante(formulario.value.nombre,
                                               this.imagenes,
                                               formulario.value.rating,
                                               this.ubicacion);
  }

}
