//Alex Drizos
//Twitter Bot Test2

console.log('The replier bot is starting');

var Twit = require('twit'); // import statement for Twit package
var config = require('./config');
//var T = new Twit(config);	//make a new Twit object
var T = new Twit(config); //make a new Twit object for replies

// var stream = T.stream('user');	//setting up a user stream for follows
// stream.on('follow', followed);	//anytime someone follows me

var stream = T.stream('user'); //setting up a user stream for replies
stream.on('tweet', tweetEvent); //anytime someone tweets at me

function tweetEvent(eventMsg) {
    // var fs = require('fs');
    // 	var json = JSON.stringify(tweet, null, 2);
    // 	fs.writeFile("tweet.json", json);
    var replyto = eventMsg.in_reply_to_screen_name;
    var text = eventMsg.text;
    var from = eventMsg.user.screen_name;

    console.log(replyto + ' ' + from);

    if (replyto === 'roastmyboard' && from === 'matthewfuchs') {


        //var newtweet = '@' + from + 'parking pass?  ¯\_(ツ)_/¯ '
        var newtweet = '@' + from + ' Good job hanging out at 3:00pm and fixing your amp. - P.S. Im a robot'
        tweetIt(newtweet);
				console.log('1');
    }

		else if (replyto === 'roastmyboard' && from === 'corymuro') {


				//var newtweet = '@' + from + 'parking pass?  ¯\_(ツ)_/¯ '
				var newtweet = '@' + from + ' Q: what do hot tubs and boss pedals have in common? A: @matthewfuchs- P.S. Im a robot'
				tweetIt(newtweet);
				console.log('2');
		}

		else if (replyto === 'roastmyboard' && from === 'indieGUITARdemo') {


				//var newtweet = '@' + from + 'parking pass?  ¯\_(ツ)_/¯ '
				var newtweet = '@' + from + ' Why no Strymon reviews yet? - P.S. Im a robot'
				tweetIt(newtweet);
				console.log('3');
		}

		else if (replyto === 'roastmyboard' && from === 'joshbakaitus') {


				//var newtweet = '@' + from + 'parking pass?  ¯\_(ツ)_/¯ '
				var newtweet = '@' + from + ' Wish you cared about gear as much as LaCroix products. - P.S. Im a robot'
				tweetIt(newtweet);
				console.log('4');
		}

		else if (replyto === 'roastmyboard') {


				//var newtweet = '@' + from + 'parking pass?  ¯\_(ツ)_/¯ '
				var newtweet = '@' + from + 'PRS guitars supply the 1% with the ability to make false art. - P.S. Im a robot'
				tweetIt(newtweet);
				console.log('4');
		}



}



// function followed(eventMsg)
// {
// 	console.log("Follow event!");
// 	var name = eventMsg.source.name;
// 	var screenName = eventMsg.source.screen_name;
// 	tweetIt('.@' + screenName + ' truebypass vs buffered effects?");
// }

function tweetIt(txt) {
    var tweet = {
        status: txt
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err) {
            console.log("Something went wrong!");
        } else {
            console.log("It worked!");
        }
    }
}
