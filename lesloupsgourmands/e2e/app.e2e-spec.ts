import { LesloupsgourmandsPage } from './app.po';

describe('lesloupsgourmands App', () => {
  let page: LesloupsgourmandsPage;

  beforeEach(() => {
    page = new LesloupsgourmandsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
