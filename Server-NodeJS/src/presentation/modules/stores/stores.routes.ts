import { Router } from "express";
import { StoresController } from "./stores.controller";

export class StoresRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new StoresController();

    /**
     * @openapi
     * /api/stores:
     *   get:
     *     summary: Obtener todas las tiendas
     *     description: Retorna una lista generada dinámicamente de tiendas
     *     tags:
     *       - Stores
     *     responses:
     *       200:
     *         description: Lista de tiendas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Store'
     *   post:
     *     summary: Crear una tienda
     *     description: Simula la creación de una nueva tienda
     *     tags:
     *       - Stores
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Store'
     *     responses:
     *       201:
     *         description: Tienda creada
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Store'
     */
    router.get("/", controller.getAllStores);
    router.post("/", controller.createStore);

    /**
     * @openapi
     * /api/stores/{id}:
     *   get:
     *     summary: Obtener tienda por ID
     *     tags:
     *       - Stores
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID de la tienda
     *     responses:
     *       200:
     *         description: Detalles de la tienda
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Store'
     *   put:
     *     summary: Actualizar una tienda
     *     tags:
     *       - Stores
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Store'
     *     responses:
     *       200:
     *         description: Tienda actualizada
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Store'
     *   delete:
     *     summary: Eliminar una tienda
     *     tags:
     *       - Stores
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Mensaje de confirmación
     */
    router.get("/:id", controller.getStoreById);
    router.put("/:id", controller.updateStore);
    router.delete("/:id", controller.deleteStore);

    return router;
  }
}