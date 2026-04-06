/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       description: Representa una categoría
 *       required:
 *         - id
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: "Ropa"
 *         description:
 *           type: string
 *           example: "Todo tipo de ropa"
 *     Store:
 *       type: object
 *       description: Representa una tienda
 *       required:
 *         - id
 *         - name
 *         - address
 *         - city
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: "Tienda Central"
 *         address:
 *           type: string
 *           example: "Calle 123"
 *         city:
 *           type: string
 *           example: "Bogotá"
 *     Order:
 *       type: object
 *       description: Representa un pedido
 *       required:
 *         - id
 *         - userId
 *         - totalAmount
 *         - status
 *         - orderDate
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         userId:
 *           type: number
 *           example: 12
 *         totalAmount:
 *           type: number
 *           example: 54000
 *         status:
 *           type: string
 *           enum:
 *             - pending
 *             - completed
 *             - cancelled
 *           example: pending
 *         orderDate:
 *           type: string
 *           format: date-time
 *           example: "2023-11-20T10:00:00Z"
 */

export {};