import { AdminModule } from './admin.module';

describe('AdminModule', () => {
  let adminModule: AdminModule;

  beforeEach(() => {
    adminModule = new AdminModule();
  });

  fit('should create an instance', () => {
    expect(adminModule).toBeTruthy();
  });
});
