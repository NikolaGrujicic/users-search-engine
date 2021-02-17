export default function SplitName(fullName) {
  const result = {};

  if (fullName) {
    const nameArr = fullName.split(' ');
    result.lastName = nameArr.pop();
    result.firstName = nameArr.join(' ');
  }
  return result;
}
