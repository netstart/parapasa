import { AppPage } from './app.po';

describe('parapasa App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

 xit('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
