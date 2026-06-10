function launchBrowser() {
let browserName = "chrome";
  if (browserName === "chrome") {
    console.log("run tests");
  } else {
    console.log("dont run tests");
  }
}

launchBrowser();

function runTests() {
let testType = "smoke";
  switch (testType) {
    case "smoke":
      console.log("run smoke tests");
      break;
    case "sanity":
      console.log("run sanity tests");
      break;
    case "regression":
      console.log("run regression tests");
      break;
    default:
      console.log("run smoke tests");
  }
}

runTests();
    