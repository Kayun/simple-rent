import { TabOptions } from './panel-types';
import { IModel } from 'shared/classes/model/model-interface';
import { ICollection } from 'shared/classes/collection/collection-interface';

export interface IPanelTab extends IModel<TabOptions> {

}

export interface IPanelTabsCollection extends ICollection<TabOptions, IPanelTab> {
  switchTab(tab: IPanelTab): void;
  disabledAll(): void
}
