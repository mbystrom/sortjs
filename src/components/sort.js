export const sort = {
  methods: {
    DeepSort (array, firstSort, secondSort, reverse) {
      reverse = reverse || false
      var firstSortObject = {}
      for (var i = 0; i < array.length; i++) {
        firstSortObject[array[i][firstSort]] = []
      }
      for (i = 0; i < array.length; i++) {
        firstSortObject[array[i][firstSort]].push(array[i])
      }
      var listOfFirst = []
      var sorted = []
      for (var k in firstSortObject) { listOfFirst.push(k) }
      listOfFirst = this.Sort(listOfFirst, reverse)
      for (var j = 0; j < listOfFirst.length; j++) {
        // console.log(firstSortObject[listOfFirst[j]])
        sorted.push.apply(sorted, this.SortByAttribute(firstSortObject[listOfFirst[j]], secondSort, reverse))
      }
      // console.log(sorted)
      return sorted
    },

    // very simple insertion sort O(n^2)
    // chosen for simplicity and because this is a very small data set
    // with very large data sets, it may be better to replace one or both of the search algorithms with merge- or quicksort
    Sort (arr, reverse) {
      reverse = reverse || false
      console.log(arr)
      for (var i = 1; i < arr.length; i++) {
        var value = arr[i]
        var test = i - 1
        if (reverse) {
          while (test > -1 && arr[test] < value) {
            arr[test + 1] = arr[test]
            test = test - 1
          }
        }
        else {
          while (test > -1 && arr[test] > value) {
            arr[test + 1] = arr[test]
            test = test - 1
          }
        }
        arr[test + 1] = value
      }
      console.log(arr)
      return arr
    },

    // the same insertion sort, by sub-property "name" this time
    SortByAttribute (arr, attribute, reverse) {
      reverse = reverse || false
      console.log(arr)
      for (var i = 0; i < arr.length; i++) {
        var value = arr[i][attribute]
        var test = i - 1
        if (reverse) {
          while (test > -1 && arr[test][attribute] < value) {
            arr[test + 1][attribute] = arr[test][attribute]
            test -= 1
          }
        }
        else {
          while (test > -1 && arr[test][attribute] > value) {
            arr[test + 1][attribute] = arr[test][attribute]
            test -= 1
          }
        }
        arr[test + 1][attribute] = value
      }
      console.log(arr)
      return arr
    },

  }
}