import { OpePage } from './app.po';

describe('ope App', () => {
  let page: OpePage;

  beforeEach(() => {
    page = new OpePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
