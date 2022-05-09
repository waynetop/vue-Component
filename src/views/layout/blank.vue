<template>
  <div class="vue-body">
    <div class="sun-view-wrap">
      <transition>
        <router-view class="sun-view-section"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blank',
  data() {
    return {};
  }
};
</script>

