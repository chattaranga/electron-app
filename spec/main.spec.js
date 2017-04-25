const chai = require('chai');
// const expect = chai.expect;
// const assert = chai.assert;
const Application = require('spectron').Application;
const chaiAsPromised = require('chai-as-promised');
const path = require('path');

const electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');
const appPath = path.join(__dirname, '..');

global.before(() => {
  chai.should();
  chai.use(chaiAsPromised);
});

describe('App', () => {
  let app;

  before(() => {
    app = new Application({
      path: electronPath,
      env: {SPECTRON: true},
      args: [appPath]
    });
    return app.start();
  });

  after(done => {
    done();
    return app.stop();
  });

  it ('Opens a window', () => {
    return app.client
      .waitUntilWindowLoaded()
      .getWindowCount()
      .should.eventually.equal(1);
  });

  it ('Has the correct title', () => {
    return app.client
      .waitUntilWindowLoaded()
      .getTitle()
      .should.eventually.equal('Chattaranga!');
  });
});
