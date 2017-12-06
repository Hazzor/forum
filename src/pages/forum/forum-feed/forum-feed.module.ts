import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumFeedPage } from './forum-feed';

@NgModule({
  declarations: [
    ForumFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumFeedPage),
  ],
})
export class ForumFeedPageModule {}
