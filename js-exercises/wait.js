function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function run() {
  console.log("Waiting...");
  await wait(1000);
  console.log("Done");
}
run();