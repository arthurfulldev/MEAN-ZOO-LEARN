import { AdminRouterModule } from '../../admin/admin-router.module';

describe('RouterModule', () => {
  let routerModule: AdminRouterModule;

  beforeEach(() => {
    routerModule = new AdminRouterModule();
  });

  it('should create an instance', () => {
    expect(routerModule).toBeTruthy();
  });
});
