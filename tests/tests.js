var fs = require("fs");
var assert = require("assert");

var bio = fs.readFileSync('bio.md').toString();

describe('doge', function(){

	it('should mention doge name is doge', function(){
		assert.equal(true, bio.indexOf('doge') >= 0);
	});

	it('should mention doge work at internets movieplace siteweb', function(){
		assert.equal(true, bio.indexOf('internets movieplace siteweb') >= 0);
	});

});
