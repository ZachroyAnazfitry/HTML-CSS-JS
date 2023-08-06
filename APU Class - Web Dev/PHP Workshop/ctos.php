<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Assessment</title>
</head>
<body>
    <h1>CTOS PHP Assessment</h1>

    <?php 
    // 3 boxes A,B and C contains a red ball. where is the ball. use class getLocation() method
    class RedBall {
        // Properties
        private $radius;
        
        // Constructor
        public function __construct($radius) {
          $this->radius = $radius;  //use radius of the ball
        }
        
        // Methods
        public function getLocation() {
          // Determine which larger box the ball belongs to based on radius
          if ($this->radius > 10) {
            return 'Box A';
          } elseif ($this->radius > 5) {
            return 'Box B';
          } else {
            return 'Box C';
          }
        }
      }
      
      //  let user enter the radius of the ball, example r=11
      $theBall = new RedBall(11);       // Create a new instance of the RedBall class, 
      
      // Get the location of the ball
      $location = $theBall->getLocation();
      
      // Output the location
      echo "The red ball is inside $location";    
    ?>
    
</body>
</html>