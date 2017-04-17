import { S219s17GomezGaldosP3Page } from './app.po';

describe('s219s17-gomez-galdos-p3 App', function() {
  let page: S219s17GomezGaldosP3Page;

  beforeEach(() => {
    page = new S219s17GomezGaldosP3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
