import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListalinePage } from './listaline';

@NgModule({
  declarations: [
    ListalinePage,
  ],
  imports: [
    IonicPageModule.forChild(ListalinePage),
  ],
})
export class ListalinePageModule {}
