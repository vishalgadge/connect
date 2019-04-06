import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public static isLoading: boolean = false;
  private loader: HTMLIonLoadingElement;

  constructor(public toastController: ToastController, public loadingController: LoadingController) { }

  makeToast(text: string) {
    this.forToast(text)
  }
  async forToast(text: string) {
    let addtodoToast = await this.toastController.create({
      message: text,
      duration: 1000
    });
    addtodoToast.present();
  }
  async showLoader() {
    if (!this.loader) {
      this.loader = await this.loadingController.create({ message: 'Loading' });
    }
    await this.loader.present();
  }
  async hideLoader() {
    if (this.loader) {
      await this.loader.dismiss();
      this.loader = null;
    }
  }
}
 