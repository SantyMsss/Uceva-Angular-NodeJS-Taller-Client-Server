/**
 * Interfaz que representa una tienda.
 */
export interface Store {
  /** Identificador único de la tienda */
  id: number;

  /** Nombre de la tienda */
  name: string;

  /** Dirección de la tienda */
  address: string;

  /** Ciudad donde se ubica la tienda */
  city: string;
}
