import { CartModule } from './cart.module';

describe('CartModule', () => {
  let cartModule: CartModule;

  beforeEach(() => {
    cartModule = new CartModule();
  });

  fit('should create an instance', () => {
    expect(cartModule).toBeTruthy();
  });
});
