angular-native-confirm
======================

A simple module for using window confirm

```
'use strict';

angular.module('extremeChess', ['angular-native-confirm'])
  .controller('ChessUser', function(Confirm, User) {
    $scope.deleteUser = function(userId) {
      Confirm.action('Are you sure you want to delete this user?', function() {
        console.log('User clicked confirm');
        User.delete(userId);
      }, function() {
        console.log('User clicked cancel and this param is optional');
      });
    };
  });
```
