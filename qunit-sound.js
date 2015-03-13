// Play a sound once the tests are finished

var success = new Howl({
  urls: ['//fcarstens.github.io/qunit-sound/success.mp3']
  });

var failed = new Howl({
  urls: ['//fcarstens.github.io/qunit-sound/fail.mp3']
});

QUnit.done(function( details ) {
  if(details.failed > 0) {
    failed.play();
  } else {
    success.play();
  }
});
