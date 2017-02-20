import { OpaqueToken } from '@angular/core';
import { PanelConfig } from './panel-types';

export const PANEL_CONFIG = new OpaqueToken('panel-config');

export const CONFIG: PanelConfig = {
  tabs: [
    { label: 'Новости', type: 'news', isActive: true, isFloat: false },
    { label: 'Расширенный поиск', type: 'filter', isActive: false, isFloat: true },
    { label: 'Популярные объявления', type: 'popular', isActive: false, isFloat: false }
  ],
  isActive: true
}
