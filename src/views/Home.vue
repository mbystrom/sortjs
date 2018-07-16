<template>
  <div class="home">
    <img src="../assets/logo.png">
    <p>Filters: </p>
    <input type="checkbox" name="americas" value="Americas" v-model="americas">Americas<br>
    <input type="checkbox" name="europe" value="Europe" v-model="europe">Europe
    <table>
      <tr>
        <th>Name</th>
        <th>Nationality</th>
      </tr>
      <tr v-for="(person, index) in Sorted(people)" :key="index">
          <td v-if="person.region == 'Europe' && europe || person.region == 'South America' && americas || person.region == 'North America' && americas">
            {{ person }}
          </td>
          <td v-if="person.region == 'Europe' && europe || person.region == 'South America' && americas || person.region == 'North America' && americas">
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
      americas: true,
      europe: true
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

    Sort(arr) {
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

    SortByName(arr) {
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
    }
  },

  computed: {
    
  }
}
</script>
