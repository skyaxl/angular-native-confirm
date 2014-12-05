'use strict';

describe('Service: confirm', function () {

  // load the service's module
  beforeEach(module('angular-native-confirm'));

  // instantiate service
  var Confirm, window;
  beforeEach(inject(function (_Confirm_, $window) {
    Confirm = _Confirm_;
    window = $window;

    spyOn(window, 'confirm');
  }));

  it('should do something', inject(function (Confirm) {
    Confirm.action('Delete this user?');
    expect(window.confirm).toHaveBeenCalled();
  }));

});
