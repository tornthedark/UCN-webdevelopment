import { Assignment1Page } from './app.po';

describe('assignment1 App', () => {
  let page: Assignment1Page;

  beforeEach(() => {
    page = new Assignment1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
