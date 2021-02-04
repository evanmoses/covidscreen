const casper = require('casper').create();

casper.start('http://google.com/', function () {
  this.echo(this.getTitle(), 'INFO');
});

casper.run();
