<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="item-container">
    <div class="title">
      <span>{{ props.title }}</span>
    </div>
    <div class="content">{{ props.content }}</div>
  </div>
</template>

<style lang="scss" scoped>
.item-container {
  display: flex;
  justify-content: center;
  gap: 37px;

  .title {
    position: relative;
    width: auto;
    font-size: 36px;
    font-weight: 700;

    span {
      position: relative;

      &::after {
        display: block;
        content: '';
        position: absolute;
        bottom: -10px;
        right: -18px;
        width: 8px;
        height: 8px;
        color: #dcccbc;
        border: 9px solid #aa6666;
        border-radius: 50%;
        opacity: 0.6;
      }
    }
  }
}
</style>
