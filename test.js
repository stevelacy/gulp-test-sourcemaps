function main() {
  var o = {
    stringify: stringify,
    parse: parse
  };
  return o;
}


function stringify() {
  return JSON.stringify;
}

function parse() {
  return JSON.parse;
}

console.log(main().stringify()({test: 'that'}));
