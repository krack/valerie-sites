import { FestyrepasduloupPage } from './app.po';

describe('festyrepasduloup App', () => {
  let page: FestyrepasduloupPage;

  beforeEach(() => {
    page = new FestyrepasduloupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
