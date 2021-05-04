const sentence = "Hi!, I am a developer!";
let time = 0;
for (let i = 0; i < sentence.length; i++) {
  time += 50;
  setTimeout(() => {
    if (i === sentence.length - 1) {
      process.stdout.write("\n")
    } else {
      process.stdout.write(sentence[i]);
    }
  }, time);
}
// console.log(time);
// setTimeout(() => {
//   process.stdout.write("\n")
// }, time);