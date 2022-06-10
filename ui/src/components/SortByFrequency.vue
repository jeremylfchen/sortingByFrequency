<template>
  <div class="container">
    <div class="col" id="input">
      <textarea v-model="input" rows="4" cols="50" />
      <button @click="onClick">Submit</button>
    </div>
    <div class="col" id="display">
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
          this.input = '';
          this.output = response.data;
        } catch (e) {
          console.error(e);
        }
      }
    }
  }
}
</script>
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-content: center;
  }
  #display {
    min-height: 100px;
    max-height: 500px;
    max-width: 400px;
    overflow: auto;
  }
  li {
    text-align: left;
  }
</style>