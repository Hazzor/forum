import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumMainPage } from './forum-main';

@NgModule({
  declarations: [
    ForumMainPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumMainPage),
  ],
})
export class ForumMainPageModule {}
