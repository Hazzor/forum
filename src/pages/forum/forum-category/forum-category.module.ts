import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumCategoryPage } from './forum-category';

@NgModule({
  declarations: [
    ForumCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumCategoryPage),
  ],
})
export class ForumCategoryPageModule {}
