export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const mergedArray: number[] = [...collection1, ...collection2, ...collection3];
    return mergeSortRecursive(mergedArray);
}

// [1, 4, 7, 8] [5, 2, 3, 6, 9]

// [1, 4, 7, 8]
// = [1, 4] [7, 8]
// = [1][4] [7, 8]
// = [1][4] [7][8]
// = [1, 4] [7, 8]
// = [1, 4, 7, 8]

// [5, 2, 3, 6, 9]  
// = [5, 2] [3, 6, 9]
// = [2][5] [3, 6, 9]
// = [2][5] [3] [6, 9] 
// = [2][5] [3] [6][9]
// = [2, 5] [3, 6, 9]
// = [2, 3, 5, 6, 9]

function mergeSortRecursive(array: number[]): number[] {
    if (array.length <= 1) return array;
    const midIndex = Math.floor(array.length / 2);
    const frontArr = array.slice(0, midIndex);
    const rearArr = array.slice(midIndex);

    return mergeSortedArrays(mergeSortRecursive(frontArr), mergeSortRecursive(rearArr)); 
}


function mergeSortedArrays(frontArr: number[], rearArr: number[]): number[] {
    let result: number[] = [];
    let frontIndex = 0;
    let rearIndex = 0;

    while (frontIndex < frontArr.length && rearIndex < rearArr.length) { //  [ 1, 4, 7, 8 ] [ 2, 3, 5, 6, 9 ] =  1(f0r0) 2(f1r0) 3(f1r1) 4(f2r1) 5(f2r2) 6(f2r3) 7(f3r3) 8(f3r4) end then concat 9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        if (frontArr[frontIndex] < rearArr[rearIndex]) {
            result.push(frontArr[frontIndex]);
            frontIndex++;
        } else {
            result.push(rearArr[rearIndex]);
            rearIndex++;
        }
    }
    return result.concat(frontArr.slice(frontIndex)).concat(rearArr.slice(rearIndex));
}