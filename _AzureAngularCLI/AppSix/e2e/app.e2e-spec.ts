import { AppSixPage } from './app.po';

describe('app-six App', function() {
  let page: AppSixPage;

  beforeEach(() => {
    page = new AppSixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
