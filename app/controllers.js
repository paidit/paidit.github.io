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
  		text: "Text for the first slide"
  	},
  	{
  		id: 1,
  		image: "../images/screenshot2.png",
  		text: "Text for the second slide"
  	},
  	{
  		id: 2,
  		image: "../images/screenshot3.png",
  		text: "Text for the third slide"
  	},
  	{
  		id: 3,
  		image: "../images/screenshot4.png",
  		text: "Text for the fourth slide"
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