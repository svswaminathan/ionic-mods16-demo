angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) { })

  .controller('SessionsCtrl', function ($scope, Sessions) {
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
        $scope.viewModel.sessions = firstDaySessions;
      }
      else {
        $scope.viewModel.sessions = secondDaySessions;
      }
      $scope.viewModel.isDay2Selected = !$scope.viewModel.isDay2Selected;
    }

    $scope.init = function () {
      $scope.viewModel.sessions = firstDaySessions;
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
