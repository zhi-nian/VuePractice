<template>
  <div>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>

  export default {
      name:'my-ul',
      data () {
          return {

          }
      }
  }

</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
</style>
