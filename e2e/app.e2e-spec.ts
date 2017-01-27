import { TMDbApiFunPage } from './app.po';

describe('tmdb-api-fun App', function() {
  let page: TMDbApiFunPage;

  beforeEach(() => {
    page = new TMDbApiFunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
