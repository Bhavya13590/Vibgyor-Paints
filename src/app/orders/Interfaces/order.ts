import { Cart } from '../../shared/interfaces/CartList';
import { Address } from '../../shared/services/address';

export class Order {
    'id': number;
    'name': string;
   'orderId': string;
    'item': Cart[];
    'address': Address;
}
