import { Request, Response } from "express";
import { OrdersService } from "./orders.service";

/**
 * Controlador de pedidos.
 */
export class OrdersController {

  private readonly ordersService = new OrdersService();

  getAllOrders = (req: Request, res: Response): void => {
    this.ordersService
      .getAllOrders()
      .then((data) => {
        res.status(200).json(data);
      });
  };

  getOrderById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id as string, 10);
    this.ordersService
      .getOrderById(id)
      .then((data) => {
        res.status(200).json(data);
      });
  };

  createOrder = (req: Request, res: Response): void => {
    const body = req.body;
    this.ordersService
      .createOrder(body)
      .then((data) => {
        res.status(201).json(data);
      });
  };

  updateOrder = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id as string, 10);
    const body = req.body;
    this.ordersService
      .updateOrder(id, body)
      .then((data) => {
        res.status(200).json(data);
      });
  };

  deleteOrder = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id as string, 10);
    this.ordersService
      .deleteOrder(id)
      .then((data) => {
        res.status(200).json(data);
      });
  };
}