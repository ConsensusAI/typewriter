const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
  if (delay === 50 * (sentence.length)) {
    setTimeout(() => {
      process.stdout.write("\n");
    }, delay);
  }
};