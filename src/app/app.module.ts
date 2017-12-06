import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//Forum
import { ForumFeedPage } from '../pages/forum/forum-feed/forum-feed';
import { ForumFeedContentPage } from '../pages/forum/forum-feed-content/forum-feed-content';
import { ForumAskPage } from '../pages/forum/forum-ask/forum-ask';
import { ForumCategoryPage } from '../pages/forum/forum-category/forum-category';
import { ForumIndiPostPage } from '../pages/forum/forum-indi-post/forum-indi-post';
import { ForumMainPage } from '../pages/forum/forum-main/forum-main';
import { ForumUnansweredPage } from '../pages/forum/forum-unanswered/forum-unanswered';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ForumFeedPage,
    ForumFeedContentPage,
    ForumAskPage,
    ForumCategoryPage,
    ForumIndiPostPage,
    ForumMainPage,
    ForumUnansweredPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ForumFeedPage,
    ForumFeedContentPage,
    ForumAskPage,
    ForumCategoryPage,
    ForumIndiPostPage,
    ForumMainPage,
    ForumUnansweredPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
