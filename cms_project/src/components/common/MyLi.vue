<template>
  <div>
    <li>
      <slot></slot>
    </li>

  </div>
</template>

<script>

  export default {
      name:'my-li',
      data () {
          return {

          }
      }
  }

</script>

<style scoped>
  li {
    /*list-style: none;*/
    float: left;
    width: 33.333333%;
    text-align: center;
  }
</style>
