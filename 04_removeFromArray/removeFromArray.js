const removeFromArray = function(arr, ...nums) {
    let size = arr.length;
    let newArr = []

    arr.forEach((item) => {

        if (!nums.includes(item)) {
            newArr.push(item);

            }
        });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;