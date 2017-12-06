import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
// import { ContactPage } from '../../contact/contact';
import { ForumAskPage } from '../../forum/forum-ask/forum-ask';
import { ForumIndiPostPage } from '../../forum/forum-indi-post/forum-indi-post';

/**
 * Generated class for the ForumFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum-feed',
  templateUrl: 'forum-feed.html',
})
export class ForumFeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumFeedPage');
  }

  clickedPost() {

    this.navCtrl.push(ForumAskPage);

  }

  indi_postClicked(){
    this.navCtrl.push(ForumIndiPostPage);
  }
  

}
