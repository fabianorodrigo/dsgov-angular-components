export type EstadoTooltipType = '' | 'success' | 'error' | 'warning' | 'info';

export class EstadoTooltip {
  static readonly SUCCESS: EstadoTooltipType = 'success';
  static readonly ERROR: EstadoTooltipType = 'error';
  static readonly WARNING: EstadoTooltipType = 'warning';
  static readonly INFO: EstadoTooltipType = 'info';
}
