<template>
  <div>
    <div>
      <input v-model="input">
      <button @click="onClick">Submit</button>
    </div>
    <div>
      <ul v-for="tuple in output" :key="tuple[0]" style="list-style-type:none;">
        <li>
          {{`${tuple[0]} ${tuple[1]}`}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SortByFrequency',
  data () {
    return {
      input: '',
      output: []
    }
  },
  methods: {
    async onClick () {
      if (this.input !== '') {
        try {
          const response = await axios.post('/sortByFrequency', {
            input: this.input
          });
          this.output = response.data;
        } catch (e) {
          console.error(e);
        }
      }
    }
  }
}
</script>