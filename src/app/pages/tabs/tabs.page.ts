import { Component, ViewChild } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonIcon, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar],
})

  export class TabsPage {
    @ViewChild('tabs') tabs!: IonTabs;
  
    constructor() {
      /**
       * Any icons you want to use in your application
       * can be registered in app.component.ts and then
       * referenced by name anywhere in your application.
       */
      addIcons({ library, playCircle, radio, search });
    }
  
    selectRadio() {
      this.tabs.select('radio');
    }
  }