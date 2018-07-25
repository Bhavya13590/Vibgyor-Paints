import { OrdersModule } from './orders.module';

describe('OrdersModule', () => {
  let ordersModule: OrdersModule;

  beforeEach(() => {
    ordersModule = new OrdersModule();
  });

  fit('should create an instance', () => {
    expect(ordersModule).toBeTruthy();
  });
});
