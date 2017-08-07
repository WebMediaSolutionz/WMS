import { WebmediasolutionzPage } from './app.po';

describe('webmediasolutionz App', () => {
  let page: WebmediasolutionzPage;

  beforeEach(() => {
    page = new WebmediasolutionzPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
