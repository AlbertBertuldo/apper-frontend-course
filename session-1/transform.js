function transform(nums) {
    const squaredNums = [];
    for (const num of nums) {
      squaredNums.push(num ** 2);
    }
    squaredNums.sort((a, b) => a - b);
    return squaredNums;
}

