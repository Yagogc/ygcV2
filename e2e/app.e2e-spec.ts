import { Ygcv2Page } from './app.po';

describe('ygcv2 App', function() {
  let page: Ygcv2Page;

  beforeEach(() => {
    page = new Ygcv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
