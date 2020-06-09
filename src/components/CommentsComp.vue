<template>
  <div class="col-12 comment">
    <div class="card m-3">
      <div class="card-body">
        <h4 class="card-title">{{comments.body}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["comment"]
};
</script>

<style>
</style>