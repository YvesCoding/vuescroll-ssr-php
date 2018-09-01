<template>
    <div id="app" style="width:100px;height:100px;">
      <vue-scroll>
        <div style="width:200px;height:200px;">
             {{ message }}
        </div>
      </vue-scroll>
    </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World'
    };
  }
};
</script>