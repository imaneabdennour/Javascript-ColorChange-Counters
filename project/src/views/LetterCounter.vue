<template>
  <div>
    <br />
    <h1>LETTER COUNTER</h1>
    <br /><br />

    <div>
      <input
        type="text"
        placeholder="Type some text"
        v-model="word1"
        @input="length1"
      />
      Letter Count : {{ count1 }}
    </div>

    <br /><br />
    <div>
      <input
        type="text"
        placeholder="Type some text"
        v-model="word2"
        @input="length2"
        :maxlength="maxLength"
      />
      Letters left : {{ count2 }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count1: 0,
      word1: "",

      count2: "",
      word2: "",

      maxLength: 13,
    };
  },
  created() {
    this.count2 = this.maxLength;
  },
  methods: {
    length1() {
      this.count1 = this.word1.length;
    },

    length2() {
      this.count2 = this.maxLength - this.word2.length;
    },
  },
};
</script>
