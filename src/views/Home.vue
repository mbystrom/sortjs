<template>
  <div class="home">
    <img src="../assets/logo.png">
    <p>Filters: </p>
    <input type="checkbox" name="nam" value="nam" v-on:click="ToggleRegion('North America')" v-bind:checked="regions.indexOf('North America') > -1">North America<br>
    <input type="checkbox" name="sam" value="sam" v-on:click="ToggleRegion('South America')" v-bind:checked="regions.indexOf('South America') > -1">South America<br>
    <input type="checkbox" name="eu" value="eu" v-on:click="ToggleRegion('Europe')" v-bind:checked="regions.indexOf('Europe') > -1">Europe
    <table class="center">
      <thead>
      <tr>
        <th>Name</th>
        <th>Nationality</th>
      </tr>
      </thead>

      <tbody v-for="(person, index) in DeepSort(people,'nationality','name')" :key="index">
      <tr v-if="regions.indexOf(person.region) > -1">
          <td>
            {{ person.name }}
          </td>
          <td>
            {{ person.nationality }}
          </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {sort} from '@/components/sort.js'

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

  mixins: [sort],

  methods: {
    ToggleRegion (regionName) {
      var index = this.regions.indexOf(regionName)
      if (index > -1) {
        this.regions.splice(index, 1)
        console.log("splicing " + regionName + " from regions")
      }
      else {
        this.regions.push(regionName)
        console.log("pushing " + regionName + " to regions")
      }
      console.log(this.regions)
    }
  },
}
</script>

<style>
  table.center {
    margin: auto;
  }
</style>
