const name = function (){
  /* taken and modified from 
  https://codehandbook.org/generate-random-string-characters-in-javascript/
  */
  let stringLength = 3;
  let stringOut = '';
  let randomASCII;
  let asciiMin = 65;
  let asciiLow = 90
  for(let i = 0; i < stringLength; i++) {
      randomASCII = Math.floor((Math.random() * (asciiLow - asciiMin)) + asciiMin);
      stringOut += String.fromCharCode(randomASCII)
  }
  return stringOut;
}
module.exports = name;