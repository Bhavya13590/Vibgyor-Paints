import { HomeModule } from './home.module';

describe('HomeModule', () => {
  let homeModule: HomeModule;

  beforeEach(() => {
    homeModule = new HomeModule();
  });

  fit('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});
