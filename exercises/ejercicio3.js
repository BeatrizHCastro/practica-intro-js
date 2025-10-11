// 3.1 Inputs exercise

const input1 = ['Downloads', 'Videos', 'capture', 'mp4'];
const input2 = ['CodinGame', 'python', 'py'];
const input3 = ['programming', 'languages', 'easy', 'beginner', 'useful', 'pythonstuff', 'py'];

// 3.1 Create here your function

const buildFilePath = (segments) => {

  const segmentsCopy = structuredClone(segments);

  const extension = segmentsCopy.at(-1);

  const allButLast = segmentsCopy.slice(0, -1);
  
  const pathWithoutExtension = allButLast.join('/');

  const fullPath = pathWithoutExtension + '.' + extension;
  
  return fullPath;                                        
};

buildFilePath(input1); // 'Downloads/Videos/capture.mp4'
buildFilePath(input2); // 'CodinGame/python.py'
buildFilePath(input3); // 'programming/languages/easy/beginner/useful/pythonstuff.py'

// console.log(buildFilePath(input3))



// 3.2 Inputs exercise

const numberInput1 = 10;
const numberInput2 = 1;
const numberInput3 = 11234;

// 3.2 Create here your function

const formatNumberWithDashes = (numberValue) => {
  
  const textDigits = '' + numberValue;

  const digitsArray = textDigits.split('');

  const digitsCopy = structuredClone(digitsArray);

  const dashedText = digitsCopy.join('-');

  return dashedText;
};

formatNumberWithDashes(numberInput1); // 1-0
formatNumberWithDashes(numberInput2); // 1
formatNumberWithDashes(numberInput3); // 1-1-2-3-4

// console.log(formatNumberWithDashes(numberInput3))