import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ForumFeedPage } from '.././forum-feed/forum-feed';

/**
 * Generated class for the ForumMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum-main',
  templateUrl: 'forum-main.html',
})
export class ForumMainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }
  clickedLocalForum() {

    this.navCtrl.push(ForumFeedPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumMainPage');
  }

}
