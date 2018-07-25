import { UserprofileModule } from './userprofile.module';

describe('UserprofileModule', () => {
  let userprofileModule: UserprofileModule;

  beforeEach(() => {
    userprofileModule = new UserprofileModule();
  });

  fit('should create an instance', () => {
    expect(userprofileModule).toBeTruthy();
  });
});
