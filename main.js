var userName = "jane";
console.log(userName ? `Hello ${userName}!` : "Hello");
var userQuestion = `Will i get a job working from home?`;
console.log(userQuestion);
var randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
/*Math.random() generates a decimal between 0 (inclusive) and 1 (exclusive).

Multiplying by 8 gives a range from 0 up to but not including 8 (i.e., 0 to 7.999...).

Math.floor() rounds it down to the nearest whole number, giving you an integer from 0 to*/ //7;

let eightBall = '';
// Use switch to assign a response based on randomNumber
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain.';
    break;
  case 1:
    eightBall = 'Without a doubt.';
    break;
  case 2:
    eightBall = 'Reply hazy, try again.';
    break;
  case 3:
    eightBall = 'Cannot predict now.';
    break;
  case 4:
    eightBall = 'Don’t count on it.';
    break;
  case 5:
    eightBall = 'My sources say no.';
    break;
  case 6:
    eightBall = 'Outlook not so good.';
    break;
  case 7:
    eightBall = 'Signs point to yes.';
    break;
  default:
    eightBall = 'Hmm... ask again later.';
}
