import { merge } from '../src/merge';

describe('merge function', () => {
    test('should sort asc order for merged of 3 array', () => {
        const collection1 = [1, 4, 7]
        const collection2= [8, 5, 2]
        const collection3 = [3, 6, 9]
        // const collection3 = [3, 9, 6]

        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test('should return empty array if all 3 array are empty', () => {
        const collection1: number[] = [];
        const collection2: number[] = [];
        const collection3: number[] = [];

        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([]);
    });
});
