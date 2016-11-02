import { Angular2GSAPPage } from './app.po';

describe('angular2-gsap App', function() {
  let page: Angular2GSAPPage;

  beforeEach(() => {
    page = new Angular2GSAPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
