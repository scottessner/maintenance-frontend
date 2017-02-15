import { MaintenancePage } from './app.po';

describe('maintenance App', function() {
  let page: MaintenancePage;

  beforeEach(() => {
    page = new MaintenancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
