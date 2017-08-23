import { BuildCalcPage } from './app.po';

describe('build-calc App', () => {
  let page: BuildCalcPage;

  beforeEach(() => {
    page = new BuildCalcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
