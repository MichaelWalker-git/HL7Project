import { HL7ProjectPage } from './app.po';

describe('hl7-project App', function() {
  let page: HL7ProjectPage;

  beforeEach(() => {
    page = new HL7ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
