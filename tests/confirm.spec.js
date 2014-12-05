'use strict';
// THIS DOESN'T DO ANYTHING YET
describe('Service: confirm', function () {

  // load the service's module
  beforeEach(module('angular-native-confirm'));

  // instantiate service
  var Confirm;
  beforeEach(inject(function (_Confirm_) {
    Confirm = _Confirm_;
  }));

  it('should do something', function () {
    expect(!!Confirm).toBe(true);
  });

});
