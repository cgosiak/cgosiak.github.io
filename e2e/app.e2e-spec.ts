import { CgosiakHomePagPage } from './app.po';

describe('cgosiak-home-pag App', () => {
  let page: CgosiakHomePagPage;

  beforeEach(() => {
    page = new CgosiakHomePagPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
