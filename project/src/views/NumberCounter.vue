<template>
  <div>
    <br />
    <h1>NUMBER COUNTER</h1>
    <br /><br />
    <div class="carre">
      <h2>{{ count }}</h2>
      <br />
      <button @click="Decrem" class="btnMoins">-</button>
      <button @click="Increm" class="btnPlus">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    Increm() {
      this.count++;
    },
    Decrem() {
      this.count--;
    },
  },
};
</script>

<style lang="scss">
h2 {
  margin-top: 20px;
}
.carre {
  margin: auto;
  width: 200px;
  height: 200px;
  border: 2px solid brown;
}
.btnMoins {
  margin-right: 100px;
  margin-top: 50px;
}
</style>
