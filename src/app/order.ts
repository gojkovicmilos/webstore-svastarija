import { Product } from './product';

export class Order {
    id: string;
    customerFirstName: string;
    customerLastName: string;
    customerAddress: string;
    customerCity: string;
    customerState: string;
    customerPostalCode: string;
    customerEmail: string;
    customerEmail2: string;
    customerPhone: string;
    customerPhone2: string;
    customerNote: string;
    date: Date;
    price: number;
    products: string[];
    title: string;
    delivered: boolean = false;
    productsO:Product[];
}