/**
 * Interfaz que representa una categoría en el sistema.
 * 
 * Contiene la información necesaria sobre una categoría específica.
 */
export interface Category {
  /** Identificador único de la categoría. */
  id: number;
  /** Nombre de la categoría. */
  name: string;
  /** Descripción de la categoría. */
  description: string;
}
