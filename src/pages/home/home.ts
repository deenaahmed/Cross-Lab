import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { Socket } from 'ng-socket-io';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    nickname='';
  constructor(public navCtrl: NavController , private socket: Socket) {
    
  }
  openPage(): void {
    this. navCtrl.push(SettingPage);   
  }
  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
  }
}
