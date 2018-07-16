# Multi Level Sort

A fairly simple project that sorts some hard-coded data first by one attribute, then by another. Also allows filtering by attributes  
Intended as a helpful module for others.

In the components folder, you will find sort.js. This is where the magic happens.  
To use this in your own project, import sort.js into your own components folder.  

In your vuejs component:
```javascript
<script>
// import from components folder
import {sort} from '@/components/sort.js'

data () { ... },

// use 'sort' mixin
mixins: [sort],

methods: { ... }

```

In the `<template>` section, sorting functions can now be called.  

Sort: Perform an insertion sort on an array.  
Usage example: `<span v-for="item in Sort(items)">`

SortByAttribute: Perform an insertion sort on an array of objects by a specific attribute of that object. The name of the attribute MUST be in single quotes.  
Usage example: `<span v-for="item in SortByAttribute(items, 'attribute')">`

DeepSort: Sort an array of objects by two attributes. The first attribute called is the first item sorted by. The names of the attributes MUST be in single quotes.  
Usage example: `<span v-for="item in DeepSort(array, 'attribute1', 'attribute2')">`

All sort functions have the optional argument "reverse", which reverses the direction of the sort. This can be called either as `Sort(array, true)` or as `Sort(array, reverse)`