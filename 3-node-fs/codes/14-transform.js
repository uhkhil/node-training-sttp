const { Transform } = require("stream");

class ReplaceText extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    const transformChunk = chunk
      .toString()
      .replace(/happy/gi, ":)")
      .replace(/sad/gi, ":(");
    this.push(transformChunk);
    callback();
  }
}

const xStream = new ReplaceText();

process.stdin.pipe(xStream).pipe(process.stdout);
