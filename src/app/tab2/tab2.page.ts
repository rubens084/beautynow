import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
//pagina ara mostrar 
import {ModalInfoPage}  from '../modal-info/modal-info.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public modalController: ModalController) {}

  
   require: any;

    async openModal(){
      const modal = await this.modalController.create({
        component: ModalInfoPage,
        cssClass: 'my-custom-class'
      });
      return await modal.present();

   }
   
}
