

var success = new Howl({
  urls: ['success.mp3']
  });

var failed = new Howl({
  urls: ['fail.mp3']
});

QUnit.done(function( details ) {
  if(details.failed > 0){
    failed.play();
  }
  else{
    success.play();
  }
});
