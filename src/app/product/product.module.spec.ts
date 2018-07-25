import { ProductModule } from './product.module';

describe('ProductModule', () => {
  let productModule: ProductModule;

  beforeEach(() => {
    productModule = new ProductModule();
  });

  fit('should create an instance', () => {
    expect(productModule).toBeTruthy();
  });
});
