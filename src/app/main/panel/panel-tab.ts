import { TabOptions } from './panel-types';
import { IPanelTab } from './panel-interfaces';
import { Model } from 'shared/classes/model/index';

export class PanelTab extends Model<TabOptions> implements IPanelTab {
}
