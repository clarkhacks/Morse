function morse(input, inputType) {
  // input -> Morse Code or Alpha
  // inputType -> "morse"(1) or "alpha"(2)
  var letters = [
    ["A", ".-"],
    ["B", "-..."],
    ["C", "-.-."],
    ["D", "-.."],
    ["E", "."],
    ["F", "..-."],
    ["G", "--."],
    ["H", "...."],
    ["I", ".."],
    ["J", ".---"],
    ["K", "-.-"],
    ["L", ".-.."],
    ["M", "--"],
    ["N", "-."],
    ["O", "---"],
    ["P", ".--."],
    ["Q", "--.-"],
    ["R", ".-."],
    ["S", "..."],
    ["U", "..-"],
    ["T", "-"],
    ["V", "...-"],
    ["W", ".--"],
    ["X", "-..-"],
    ["Y", "-.--"],
    ["Z", "--.."],
    ["1", ".----"],
    ["2", "..---"],
    ["3", "...--"],
    ["4", "....-"],
    ["5", "....."],
    ["6", "-...."],
    ["7", "--..."],
    ["8", "---.."],
    ["9", "----."],
    ["0", "----"],
    ["?", "..--.."],
    [",", "--..--"],
    [".", ".-.-.-"],
    ["@", ".--.-."],
    ["/", "-..-."],
    ["FINISH", ".-.-."],
    ["CALL", "-.-.-"],
    ["FAILED TO UNDERSTAND", "-....-."],
    ["UNDERSTOOD", "...-."],
    ["WAIT", "-.."]
  ];
  if (!inputType && input.match(/([.\-])/)) inputType = 1;
  if (!inputType && input.match(/([a-zA-Z0-9])/)) inputType = 2;
  if (inputType == "morse") inputType = 1;
  if (inputType == "alpha") inputType = 2;
  if (inputType == 1) {
    for (var i in letters) {
      if (letters[i][1] == input) {
        return letters[i][0].toLowerCase();
      }
    }
  }
  if (inputType == 2) {
    for (var i in letters) {
      if (letters[i][0] == input.toString().toUpperCase()) {
        return letters[i][1];
      }
    }
  }
};
