//Homeassignment - object literal -  Object with data inside with key and values written within {}

let testExecutionSummary = {
  suiteName: 'Regression Suite',
  totalTests: 100,
  passedTests: 90,
  failedTests: 10,
  executionTime: '10 minutes'
};

//Print Values - Here Typescript understands the data type (inference)
console.log('Suite Name:', testExecutionSummary.suiteName);
console.log('Total Tests:', testExecutionSummary.totalTests);
console.log('Passed Tests:', testExecutionSummary.passedTests);
console.log('Failed Tests:', testExecutionSummary.failedTests);
console.log('Execution Time:', testExecutionSummary.executionTime);

//calculate pass percentage
const passPercentage = (testExecutionSummary.passedTests / testExecutionSummary.totalTests) * 100;
console.log('Pass Percentage:', passPercentage + '%');

//Print execution status
const executionStatus = testExecutionSummary.failedTests === 0 ? 'Passed' : 'Failed';
console.log('Execution Status:', executionStatus);

if (testExecutionSummary.failedTests === 0) {
  console.log('Execution Successful');
} else {
  console.log('Execution Completed with Failures');
}
