import { Collection } from 'shared/classes/collection/index';
import { IPanelTab } from './panel-interfaces';
import { TabOptions } from './panel-types';

export class PanelTabsCollection extends Collection<TabOptions, IPanelTab> {
  switchTab(tab: IPanelTab): void {
    this.disabledAll();
    this.findById(tab.id).set('isActive', true);
  }

  disabledAll(): void {
    this.collection.forEach(model => model.set('isActive', false));
  }

  getCurrentType(): string {
    let index = this.findIndexByAttribute('isActive', true);
    return this.findByIndex(index).get('type');
  }
}
