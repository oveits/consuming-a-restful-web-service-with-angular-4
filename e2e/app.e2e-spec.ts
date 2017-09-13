import { MyProjectNamePage } from './app.po';

describe('my-project-name App', () => {
  let page: MyProjectNamePage;

  beforeEach(() => {
    page = new MyProjectNamePage();
  });

  it('should display title', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toContain('Angular 4 Hello World Quickstart'))
      //.then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
