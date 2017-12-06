import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumFeedContentPage } from './forum-feed-content';

@NgModule({
  declarations: [
    ForumFeedContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumFeedContentPage),
  ],
})
export class ForumFeedContentPageModule {}
