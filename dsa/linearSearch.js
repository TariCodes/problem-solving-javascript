function linearSearch(array, n) {
    for (var i = 0; i < array.length; i++){
        if (array[i] == n) {
            return true;
        }
    }
    return false;
}
linearSearch([1,2,3,4,5,6,7,8,9], 7);
linearSearch([1, 2, 3, 4, 5, 6, 7], 11);