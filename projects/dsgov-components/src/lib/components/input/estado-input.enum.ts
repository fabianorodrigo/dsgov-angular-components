export type EstadoInputType = '' | 'success' | 'danger' | 'warning' | 'info';

export class EstadoInput {
  static readonly DEFAULT: EstadoInputType = '';
  static readonly SUCCESS: EstadoInputType = 'success';
  static readonly DANGER: EstadoInputType = 'danger';
  static readonly WARNING: EstadoInputType = 'warning';
  static readonly INFO: EstadoInputType = 'info';
}
