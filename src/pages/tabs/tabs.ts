import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ForumMainPage } from '../forum/forum-main/forum-main';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ForumMainPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
