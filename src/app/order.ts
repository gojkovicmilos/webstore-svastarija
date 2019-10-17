import { Product } from './product';

export class Order {
    id: string;
    customerName: string;
    customerAddress: string;
    customerEmail: string;
    customerPhone: string;
    customerNote: string;
    date: Date;
    price: number;
    products: Product[];
    title: string;
}