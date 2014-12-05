angular-native-confirm
======================

A simple module for using window confirm

```
Confirm('Are you sure you want to delete this user?', function() {
  console.log('User clicked confirm');
  // $scope.deleteUser(1);
}, function() {
  console.log('User clicked cancel and this param is optional');
});
```
