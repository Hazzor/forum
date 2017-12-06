import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumUnansweredPage } from './forum-unanswered';

@NgModule({
  declarations: [
    ForumUnansweredPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumUnansweredPage),
  ],
})
export class ForumUnansweredPageModule {}
