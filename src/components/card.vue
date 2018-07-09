<template>
  <div>
    <!-- <p class="card">
      {{text}}
    </p> -->
    <open-data type="userNickName" class="card"></open-data>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
