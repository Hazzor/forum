import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumAskPage } from './forum-ask';

@NgModule({
  declarations: [
    ForumAskPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumAskPage),
  ],
})
export class ForumAskPageModule {}
