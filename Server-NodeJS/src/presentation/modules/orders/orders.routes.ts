import { Router } from "express";
import { OrdersController } from "./orders.controller";

export class OrdersRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new OrdersController();

    /**
     * @openapi
     * /api/orders:
     *   get:
     *     summary: Obtener todos los pedidos
     *     description: Retorna una lista generada dinámicamente de pedidos
     *     tags:
     *       - Orders
     *     responses:
     *       200:
     *         description: Lista de pedidos
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Order'
     *   post:
     *     summary: Crear un pedido
     *     description: Simula la creación de un nuevo pedido
     *     tags:
     *       - Orders
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Order'
     *     responses:
     *       201:
     *         description: Pedido creado
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Order'
     */
    router.get("/", controller.getAllOrders);
    router.post("/", controller.createOrder);

    /**
     * @openapi
     * /api/orders/{id}:
     *   get:
     *     summary: Obtener pedido por ID
     *     tags:
     *       - Orders
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID del pedido
     *     responses:
     *       200:
     *         description: Detalles del pedido
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Order'
     *   put:
     *     summary: Actualizar un pedido
     *     tags:
     *       - Orders
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
     *             $ref: '#/components/schemas/Order'
     *     responses:
     *       200:
     *         description: Pedido actualizado
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Order'
     *   delete:
     *     summary: Eliminar un pedido
     *     tags:
     *       - Orders
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
    router.get("/:id", controller.getOrderById);
    router.put("/:id", controller.updateOrder);
    router.delete("/:id", controller.deleteOrder);

    return router;
  }
}