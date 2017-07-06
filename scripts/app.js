 var app = angular.module('angular-isotope-demo', ['iso.directives']);

 app.controller('ctrl', function($scope){

  //Declare variables
 	$scope.usernameOrder = true;
 	$scope.twubricOrder = true;
 	$scope.friendsOrder = true;
 	$scope.influenceOrder = true;
 	$scope.chirpinessOrder = true;
 	$scope.sortby = 'username';

 	$scope.minDate = '';
 	$scope.maxDate = '';
 	$scope.startDate = '';
 	$scope.endDate = '';

 	$scope.date = {
 		'dt': new Date(),
 		'minDate':'',
 		'maxDate':'',
 		'startDate': '',
 		'endDate': ''
 	};

  // convert date to milliseconds and vice-versa since 1 jan 1970
	$scope.dateToMilli = function(date){
		var dt = new Date(date);
		return dt.getTime();
	};

	$scope.milliToDate = function(milli){
    	var dt = new Date(milli);
      var m = dt.getMonth()+1;

      var mm = dt.getMonth()+1;
      if (m<9) {
        var mm = '0'+m;
      }

    	return [m+'/'+dt.getDate()+'/'+dt.getFullYear(), dt.getFullYear()+'-'+mm+'-'+dt.getDate()];
    };

  //function to convert date format from yyyy-mm-dd to mm/dd/yyyy
  $scope.dateFormatDashToSlash = function(d){
    var arr = d.split('-')
    return arr[1]+'/'+arr[2]+'/'+arr[0]

  };

  // User data
 	$scope.users = users = [
        {
          "uid": 1,
          "username": "sampleuser1",
          "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
          "fullname": "Sample User One",
          "twubric": {
            "total": 3.5,
            "friends": 1,
            "influence": 1,
            "chirpiness": 1.5
          },
          "join_date": 1358899200
        },
        {
          "uid": 2,
          "username": "sampleuser2",
          "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
          "fullname": "Sample User Two",
          "twubric": {
            "total": 5,
            "friends": 1,
            "influence": 1,
            "chirpiness": 1.5
          },
          "join_date": 1355270400
        },
        {
          "fullname": "Sample User Three",
          "twubric": {
            "friends": 1,
            "influence": 1,
            "chirpiness": 1.5,
            "total": 7
          },
          "join_date": 1289433600,
          "uid": 3,
          "username": "sampleuser3",
          "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg"
        },
        {
          "join_date": 1300838400,
          "uid": 4,
          "username": "sampleuser4",
          "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
          "fullname": "Sample User Four",
          "twubric": {
            "influence": 3,
            "chirpiness": 4,
            "total": 9,
            "friends": 2
          }
        },
        {
          "twubric": {
            "total": 9,
            "friends": 1,
            "influence": 4,
            "chirpiness": 4
          },
          "join_date": 1230768000,
          "uid": 5,
          "username": "sampleuser5",
          "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
          "fullname": "Sample User Five"
        },
        {
          "username": "sampleuser6",
          "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
          "fullname": "Sample User Six",
          "twubric": {
            "total": 6,
            "friends": 2,
            "influence": 3,
            "chirpiness": 1
          },
          "join_date": 1252454400,
          "uid": 6
        },
        {
          "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
          "fullname": "Sample User Seven",
          "twubric": {
            "total": 8,
            "friends": 2,
            "influence": 4,
            "chirpiness": 2
          },
          "join_date": 1278201600,
          "uid": 7,
          "username": "sampleuser7"
        },
        {
          "uid": 8,
          "username": "sampleuser8",
          "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
          "fullname": "Sample User Eight",
          "twubric": {
            "friends": 2,
            "influence": 3,
            "chirpiness": 2,
            "total": 7
          },
          "join_date": 1331510400
        },
        {
          "join_date": 1367971200,
          "uid": 9,
          "username": "sampleuser9",
          "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
          "fullname": "Sample User Nine",
          "twubric": {
            "total": 8,
            "friends": 1,
            "influence": 4,
            "chirpiness": 3
          }
        },
        {
          "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg",
          "fullname": "Sample User Ten",
          "twubric": {
            "chirpiness": 3,
            "total": 5,
            "friends": 1,
            "influence": 1
          },
          "join_date": 1228953600,
          "uid": 10,
          "username": "sampleuser10"
        }
      ];

  $scope.findMinMax = function(arr, att){
  	var min = arr[0][att];
  	var max = arr[0][att];
  	for (var i = 1; i < arr.length; i++) {
  		if (arr[i][att]<min) {
  			min = arr[i][att];
  		}
  		if (arr[i][att]>max) {
  			max = arr[i][att];
  		}
  	}
  	$scope.minDate = $scope.startDate = this.dateToMilli(this.milliToDate(min)[0]);
  	$scope.maxDate = $scope.endDate = this.dateToMilli(this.milliToDate(max)[0])+86400000-1000;

  	$scope.date.minDate = $scope.date.startDate = this.milliToDate(min)[1];
  	$scope.date.maxDate = $scope.date.endDate = this.milliToDate(max)[1];

  	return [min, max];
  };

	$scope.updateStartDate = function(d){
		$scope.startDate = this.dateToMilli(this.dateFormatDashToSlash(d));
    $scope.date.startDate = d;
    if ($scope.startDate===$scope.endDate) {
      $scope.endDate = $scope.endDate+86400000-1000;
    }
	};
	$scope.updateEndDate = function(d){
		$scope.endDate = this.dateToMilli(this.dateFormatDashToSlash(d));
    $scope.endDate = $scope.endDate+86400000-1000;
	};    

  $scope.findMinMax(users, 'join_date');

 	$scope.username = function(ev){
 		this.sortby = 'username';
 		var order = ev.target.attributes['opt-ascending'].value;

 		if (order==='true') {
 			this.usernameOrder = false;
 		}
 		else {
 			this.usernameOrder = true;
 		}
 	};

 	$scope.twubric = function(ev){
 		this.sortby = 'twubric';
 		var order = ev.target.attributes['opt-ascending'].value;

 		if (order==='true') {
 			this.twubricOrder = false;
 		}
 		else {
 			this.twubricOrder = true;
 		}
 	};

 	$scope.friends = function(ev){
 		this.sortby = 'friends';
 		var order = ev.target.attributes['opt-ascending'].value;

 		if (order==='true') {
 			this.friendsOrder = false;
 		}
 		else {
 			this.friendsOrder = true;
 		}
 	};

 	$scope.influence = function(ev){
 		this.sortby = 'influence';
 		var order = ev.target.attributes['opt-ascending'].value;

 		if (order==='true') {
 			this.influenceOrder = false;
 		}
 		else {
 			this.influenceOrder = true;
 		}
 	};

 	$scope.chirpiness = function(ev){
 		this.sortby = 'chirpiness';
 		var order = ev.target.attributes['opt-ascending'].value;

 		if (order==='true') {
 			this.chirpinessOrder = false;
 		}
 		else {
 			this.chirpinessOrder = true;
 		}
 	};

  $scope.removeItem = function(id) {
    this.users.splice(id, 1);
  }
 });