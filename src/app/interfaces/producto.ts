import { Marca } from './marca';
import { Rubro } from './rubro';
export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  cantidadEnStock: number;
  precio: number;
  marca: Marca;
  rubro: Rubro;
}
