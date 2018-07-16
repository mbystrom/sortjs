<template>
  <div class="home">
    <img src="../assets/logo.png">
    <p>Filters: </p>
    <input type="checkbox" name="nam" value="nam" v-on:click="ToggleRegion('North America')" v-bind:checked="regions.indexOf('North America') > -1">North America<br>
    <input type="checkbox" name="sam" value="sam" v-on:click="ToggleRegion('South America')" v-bind:checked="regions.indexOf('South America') > -1">South America<br>
    <input type="checkbox" name="eu" value="eu" v-on:click="ToggleRegion('Europe')" v-bind:checked="regions.indexOf('Europe') > -1">Europe
    <table class="center">
      <tr>
        <th>Name</th>
        <th>Nationality</th>
      </tr>
      <tr v-for="(person, index) in Sorted(people)" :key="index">
          <td v-if="regions.indexOf(person.region) > -1">
            {{ person }}
          </td>
          <td v-if="regions.indexOf(person.region) > -1">
            {{ person.nationality }}
          </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      people: [
        { name: 'Jane', nationality: 'Germany', region: 'Europe' },
        { name: 'Helen', nationality: 'Brazil', region: 'South America' },
        { name: 'Mike', nationality: 'USA', region: 'North America' },
        { name: 'Anja', nationality: 'Netherlands', region: 'Europe' },
        { name: 'Franz', nationality: 'Germany', region: 'Europe' },
        { name: 'Victoria', nationality: 'Canada', region: 'North America' },
        { name: 'Phoenix', nationality: 'USA', region: 'North America' },
        { name: 'Jan', nationality: 'Netherlands', region: 'Europe' },
        { name: 'Chuck', nationality: 'Canada', region: 'North America' },
        { name: 'Anita', nationality: 'Brazil', region: 'South America' }
      ],
      regions: [
        "Europe",
        "North America",
        "South America"
      ]
    }
  },

  methods: {
    Sorted () {
      var nationalities = {}
      for (var i = 0; i < this.people.length; i++) {
        nationalities[this.people[i].nationality] = []
      }
      for (i = 0; i < this.people.length; i++) {
        nationalities[this.people[i].nationality].push(this.people[i])
      }
      var listOfNat = []
      var sorted = []
      for (var k in nationalities) { listOfNat.push(k) }
      listOfNat = this.Sort(listOfNat)
      for (var j = 0; j < listOfNat.length; j++) {
        // console.log(nationalities[listOfNat[j]])
        sorted.push.apply(sorted, this.SortByName(nationalities[listOfNat[j]]))
      }
      // console.log(sorted)
      return sorted
    },

    // very simple insertion sort O(n^2)
    // chosen for simplicity and because this is a very small data set
    // with very large data sets, it may be better to replace one or both of the search algorithms with merge- or quicksort
    Sort (arr) {
      console.log(arr)
      for (var i = 1; i < arr.length; i++) {
        var value = arr[i]
        var test = i - 1
        while (test > -1 && arr[test] > value) {
          arr[test + 1] = arr[test]
          test = test - 1
        }
        arr[test + 1] = value
      }
      console.log(arr)
      return arr
    },

    // the same insertion sort, by sub-property "name" this time
    SortByName (arr) {
      console.log(arr)
      for (var i = 0; i < arr.length; i++) {
        var value = arr[i].name
        var test = i - 1
        while (test > -1 && arr[test].name > value) {
          arr[test + 1].name = arr[test].name
          test -= 1
        }
        arr[test + 1].name = value
      }
      console.log(arr)
      return arr
    },

    ToggleRegion (regionName) {
      if (this.regions.indexOf(regionName) > -1) {
        this.regions.splice(regionName, 1)
        console.log("splicing " + regionName + " from regions")
      }
      else {
        this.regions.push(regionName)
        console.log("pushing " + regionName + " to regions")
      }
      console.log(this.regions)
    }
  },

  computed: {
    
  }
}
</script>

<style>
  table.center {
    margin: auto;
  }
</style>
