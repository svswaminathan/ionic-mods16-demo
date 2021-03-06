angular.module('starter.controllers', [])

  .controller('FavoritesCtrl', function ($scope, Sessions) {
    $scope.viewModel = {};
    $scope.init = function () {
      $scope.viewModel.favoriteSessions = Sessions.Favorites;
      $scope.viewModel.showDeleteButton = false;
    }
    $scope.showDeleteButton = function () {
      $scope.viewModel.showDeleteButton = !$scope.viewModel.showDeleteButton;
    }
    $scope.showReorderButton = function () {
      $scope.viewModel.showReorderButton = !$scope.viewModel.showReorderButton;
    }

    $scope.moveItem = function (item, fromIndex, toIndex) {
      $scope.viewModel.favoriteSessions.splice(fromIndex, 1);
      $scope.viewModel.favoriteSessions.splice(toIndex, 0, item);
    };
    $scope.init();
  })

  .controller('SessionsCtrl', function ($scope, $ionicListDelegate, Sessions) {
    $scope.viewModel = {
      isDay1Selected: true,
      isDay2Selected: false,
      sessions: []
    };
    var firstDaySessions = Sessions.FirstDaySessions();
    var secondDaySessions = Sessions.SecondDaySessions();

    $scope.toggleDay = function () {
      $scope.viewModel.isDay1Selected = !$scope.viewModel.isDay1Selected;
      if ($scope.viewModel.isDay1Selected) {
        $scope.viewModel.sessions = groupSessionsByTime(firstDaySessions);
      }
      else {
        $scope.viewModel.sessions = groupSessionsByTime(secondDaySessions);
      }
      $scope.viewModel.isDay2Selected = !$scope.viewModel.isDay2Selected;
    }
    $scope.markFavorite = function (session) {
      Sessions.Favorites.push(session);
      $ionicListDelegate.closeOptionButtons();
    }

    $scope.init = function () {
      var firstDaySessionsByTime = groupSessionsByTime(firstDaySessions);
      $scope.viewModel.sessions = firstDaySessionsByTime;
      // console.log(firstDaySessionsByTime);
    }

    var groupSessionsByTime = function (sessions) {
      return _.chain(sessions)
        .groupBy('time')
        .toPairs()
        .map(function (pair) {
          return _.zipObject(['time', 'sessions'], pair);
        })
        .value();
    }

    $scope.init();
  })
  .controller('SpeakersCtrl', function ($scope, $ionicPopup, Speakers) {
    $scope.viewModel = {};
    $scope.viewModel.searchText = "";
    $scope.viewModel.speakers = Speakers.AllSpeakers();
    $scope.refreshSpeakers = function () {
      var alertPopup = $ionicPopup.alert({
        title: 'Refresh Complete',
        template: 'No new speakers added...'
      });
      $scope.$broadcast('scroll.refreshComplete');
    }
    $scope.clearSearch = function () {
      $scope.viewModel.searchText = "";
    }
  })
  .controller('SpeakerDetailCtrl', function ($scope, $stateParams, Speakers) {
    $scope.viewModel = {};
    $scope.viewModel.speaker = Speakers.getSpeaker($stateParams.speakerId);
  })
  .controller('SponsorsCtrl', function ($scope, Sponsors) {
    $scope.viewModel = {};
    $scope.viewModel.sponsors = Sponsors.All;
  });
