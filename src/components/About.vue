<template>
  <div class="bg">
    <div class="img">
      <div class="overlay">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
};
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 1000px
}

.img {
  transform: translateX(100%);
  width: 50%;
  height: 1000px;
  background-image: url('https://previews.123rf.com/images/rido/rido1106/rido110600038/9677667-Happy-smiling-young-man-standing-full-length-isolated-on-white-background-Stock-Photo.jpg');
}

.overlay {
  transform: translateX(132%);
  width: 50%;
  height: 1000px;
  background-color: #3e78bb;
  opacity: 0.75;
}

@supports (mix-blend-mode: multiply) {
  .overlay {
    mix-blend-mode: multiply;
    opacity: 1;
  }  
}

</style>

