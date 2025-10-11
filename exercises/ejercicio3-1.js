// Inputs exercise

const input1 = ['Downloads', 'Videos', 'capture', 'mp4'];
const input2 = ['CodinGame', 'python', 'py'];
const input3 = ['programming', 'languages', 'easy', 'beginner', 'useful', 'pythonstuff', 'py'];

// Create here your function

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

// console.log(buildFilePath(input1))
// console.log(buildFilePath(input2))
// console.log(buildFilePath(input3))
