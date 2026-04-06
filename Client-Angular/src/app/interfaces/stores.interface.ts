/**
 * Interfaz que representa una tienda en el sistema.
 * 
 * Contiene la información requerida sobre la tienda física o digital.
 */
export interface Store {
  /** Identificador único de la tienda. */
  id: number;
  /** Nombre de la tienda. */
  name: string;
  /** Dirección física de la tienda. */
  address: string;
  /** Ciudad donde se ubica la tienda. */
  city: string;
}
