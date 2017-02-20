import { CONFIG } from './panel-config';
import { Helper } from 'shared/classes/helper';
import { PanelTabsCollection } from './panel-tabs-collection';
import { PanelTab } from './panel-tab';

let panelTabsCollectionFactory = (): PanelTabsCollection => {
  return new PanelTabsCollection(PanelTab, CONFIG.tabs);
}

export let panelTabsCollectionProvider = {
  provide: PanelTabsCollection,
  useFactory: panelTabsCollectionFactory,
}
