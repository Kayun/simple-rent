export type TabOptions = {
  label: string,
  type: string,
  isActive: boolean,
  isFloat: boolean
}

export type PanelConfig = {
  tabs: TabOptions[],
  isActive: boolean
}
