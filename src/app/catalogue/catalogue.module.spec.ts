import { CatalogueModule } from './catalogue.module';

describe('CatalogueModule', () => {
  let catalogueModule: CatalogueModule;

  beforeEach(() => {
    catalogueModule = new CatalogueModule();
  });

  fit('should create an instance', () => {
    expect(catalogueModule).toBeTruthy();
  });
});
