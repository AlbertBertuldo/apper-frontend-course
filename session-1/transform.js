function transform(nums) {
    const squaredNums = [];
    for (const num of nums) {
      squaredNums.push(num ** 2);
    }
    squaredNums.sort((a, b) => a - b);
    return squaredNums;
}

const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums) // [9,16,25,64,81]

