import { Component, OnInit, Inject } from '@angular/core';
import { LangService, OverlayService, AuthService } from 'shared/services';
import { PANEL_CONFIG, CONFIG } from './panel-config';
import { inject } from '@angular/core/testing';
import { PanelConfig } from './panel-types';
import { Helper } from '../../shared/classes/helper';

import { panelTabsCollectionProvider } from './pabel-tabs-collection-provider';
import { PanelTabsCollection } from './panel-tabs-collection';

@Component({
  selector: 'sr-main-panel',
  template: require('./panel.component.pug'),
  styles: [ require('./panel.component.styl') ],
  providers: [
    {
      provide: PANEL_CONFIG,
      useValue: CONFIG
    },
    panelTabsCollectionProvider
  ]
})
export class MainPanelComponent implements OnInit {

  public isActive: boolean;

  public currentType: string

  constructor(@Inject(PANEL_CONFIG) private config: PanelConfig, private tabs: PanelTabsCollection) {
    this.isActive = config.isActive;
    this.currentType = tabs.getCurrentType();
  }

  ngOnInit() {
  }
}
