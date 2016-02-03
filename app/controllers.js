app.controller('NavCtrl', function ($scope) {
  $scope.isCollapsed = true;
});

app.controller('CarouselCtrl', function ($scope) {
  $scope.interval = 0;
  $scope.noWrapSlides = false;
  var currIndex = 0;
  var slides = $scope.slides = [
  	{
  		id: 0,
  		image: "../images/screenshot1.png",
      title: "SIGN UP FOR PAIDIT",
  		text: "Sign up and log in securely and easily with your Facebook or Gmail account."
  	},
  	{
  		id: 1,
  		image: "../images/screenshot2.png",
      title: "CREATE A RECORD",
  		text: "When you're ready to record a money order, check, or cash payment, enter the details you would like recorded. Capture a picture of the front of your check or money order."
  	},
  	{
  		id: 2,
  		image: "../images/screenshot3.png",
      title: "REVIEW YOUR INFORMATION AND NOTIFY RECIPIENT",
  		text: "Make any changes to your record and choose to notify your landlord, or other recipient."
  	},
  	{
  		id: 3,
  		image: "../images/screenshot4.png",
      title: "SEND NOTICE",
  		text: "Send an email with your native service provider and add any additional notes. We'll create a timestamp on this transaction."
  	}
  ];



  // $scope.addSlide = function() {
  //   var newWidth = 600 + slides.length + 1;
  //   slides.push({
  //     image: '//lorempixel.com/' + newWidth + '/300',
  //     text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
  //     id: currIndex++
  //   });
  // };

  // $scope.randomize = function() {
  //   var indexes = generateIndexesArray();
  //   assignNewIndexesToSlides(indexes);
  // };

  // for (var i = 0; i < 4; i++) {
  //   $scope.addSlide();
  // }

  // Randomize logic below

  // function assignNewIndexesToSlides(indexes) {
  //   for (var i = 0, l = slides.length; i < l; i++) {
  //     slides[i].id = indexes.pop();
  //   }
  // }

  // function generateIndexesArray() {
  //   var indexes = [];
  //   for (var i = 0; i < currIndex; ++i) {
  //     indexes[i] = i;
  //   }
  //   return shuffle(indexes);
  // }

  // // http://stackoverflow.com/questions/962802#962890
  // function shuffle(array) {
  //   var tmp, current, top = array.length;

  //   if (top) {
  //     while (--top) {
  //       current = Math.floor(Math.random() * (top + 1));
  //       tmp = array[current];
  //       array[current] = array[top];
  //       array[top] = tmp;
  //     }
  //   }

  //   return array;
  // }
});