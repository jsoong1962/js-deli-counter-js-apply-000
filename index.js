let katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number &(katzDeliLine[katzDeliLine.length]) in line.`;
}


function nowServing() {
  if (katzDeliLine.length === 0) return 'There is nobody waiting to be served';
  else return `Currently serving ${katzDeliLine.shift()}`;
}

function currentLine() {
  let string = 'The line is currently: ';
  for (let i = 0; i < katzDeliLine.length; i++) {
    string += `$(i + 1). ${katzDeliLine[i]} `;
  }
  return string.slice(0, string[string.length - 2]);
}