function splittingAssignments(ranges) {
    console.log(ranges.split(" "))
    return ranges.split(" ")
}

function fullyContain(ranges) {
    let splitting = ranges.split(" ")
    let range1 = splitting[0];
    let range2 = splitting[1];

    let range1Splitting = range1.split("-");
    let min1 = Number(range1Splitting[0]);
    let max1 = Number(range1Splitting[1]);

    let range2Splitting = range2.split("-");
    let min2 = Number(range2Splitting[0]);
    let max2 = Number(range2Splitting[1]);
    console.log(range1Splitting, range2Splitting)

    if(min1 >= min2 && max1 <= max2) {
        return true;
    } else if(min2 >= min1 && max2 <= max1) {
        return true;
    } else {
        return false;
    }

}

module.exports = {splittingAssignments, fullyContain}
