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

    var groupSessionsByTime = function(sessions){
     return  _.chain(sessions)
              .groupBy('time')	
              .toPairs()
              .map(function (pair) 
              { 
                return _.zipObject(['time', 'sessions'], pair); 
              })
              .value();
    }

    $scope.init();
  })
  .controller('SpeakersCtrl', function ($scope, Speakers) {
    $scope.viewModel = {};
    $scope.viewModel.speakers = Speakers.AllSpeakers();
  })
  .controller('SpeakerDetailCtrl', function ($scope, $stateParams, Speakers) {
    $scope.viewModel = {};
    $scope.viewModel.speaker = Speakers.getSpeaker($stateParams.speakerId);
  })
  .controller('SponsorsCtrl', function ($scope) {
    $scope.viewModel = {};
    $scope.viewModel.sponsors = [];
    $scope.viewModel.sponsors.push('img/IBM_Logo.jpg');
    $scope.viewModel.sponsors.push('img/AWSLogo.jpg');
    $scope.viewModel.sponsors.push('img/GoogleLogo.jpg');
    $scope.viewModel.sponsors.push('img/AkamaiLogo.jpg');

    $scope.viewModel.goldSponsors = [];
    $scope.viewModel.goldSponsors.push('img/Intel.jpg');
    $scope.viewModel.goldSponsors.push('img/MicrosoftLogo.jpg');

    $scope.viewModel.devSponsors = [];
    $scope.viewModel.devSponsors.push('img/NestAway.jpg');
    $scope.viewModel.devSponsors.push('img/EyeZen.jpg');
    $scope.viewModel.devSponsors.push('img/ProgressLogo.jpg');
    $scope.viewModel.devSponsors.push('img/MobignosisLogo.jpg');
    $scope.viewModel.devSponsors.push('img/TalkativeParentsLogo.jpg');
    $scope.viewModel.devSponsors.push('img/GreyNubo.jpg');
  });
