<script setup>
import { computed, ref } from 'vue'
import { useDevice } from '../composables/useDevice'
import Logo from './Logo.vue'

const menu = ref([
  {
    key: 'feature',
    label: '白頭翁的特性',
  },
  {
    key: 'story',
    label: '白頭翁的故事',
  },
  {
    key: 'photos',
    label: '白頭翁的美照',
  },
  {
    key: 'danger',
    label: '白頭翁的危機',
  },
])

const isActive = ref('')
const handleClick = (key) => {
  isActive.value = key
}

const { isMobile, isPc } = useDevice()
const isShow = ref(false)
const toggleShow = () => (isShow.value = !isShow.value)
const icon = computed(() => {
  const hamburger = new URL('@/assets/icons/hamburgur.svg', import.meta.url)
  const close = new URL('@/assets/icons/close.svg', import.meta.url)

  return isShow.value ? close : hamburger
})
</script>

<template>
  <div class="nav-container">
    <div class="nav">
      <div v-if="isMobile" class="hamburger" @click="toggleShow">
        <img :src="icon" alt="選單圖示" />
      </div>
      <div class="title">白頭翁不吃小米</div>
      <div class="logo">
        <Logo />
      </div>
    </div>

    <div v-if="isPc || (isMobile && isShow)" class="menu">
      <div
        v-for="item in menu"
        :key="item.key"
        class="item"
        :class="{ active: item.key === isActive }"
        @click="handleClick(item.key)"
      >
        <div>{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-container {
  position: relative;
  box-shadow: 0px 4px 4px 0px #00000040;
  width: 100%;
  height: 100%;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-block: 76px;

  .title {
    font-weight: 700;
    line-height: 40.86px;
    font-size: 30px;
    text-align: center;
    white-space: nowrap;
  }

  .hamburger {
    cursor: pointer;
  }

  .logo {
    z-index: 10;
    position: absolute;
    right: -40px;
    width: 60px;
    height: 60px;
    background-color: white;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 100%;
    padding: 12px;
  }
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  background-color: white;
  z-index: 10;

  .item {
    font-size: 18px;
    line-height: 24.52px;
    cursor: pointer;

    &:hover {
      color: #aa6666;
      text-underline-offset: 2px;
      text-decoration: underline;
    }

    &.active {
      color: #aa6666;
      font-weight: 700;
      text-underline-offset: 2px;
      text-decoration: underline;
    }
  }
}

@media (max-width: 1024px) {
  .nav-container {
    height: auto;
    box-shadow: none;
  }

  .nav {
    padding-block: 30px;
    padding-inline: 26px;
    margin: 0;

    .title {
      font-size: 20px;
      line-height: 27px;
    }

    .logo {
      cursor: pointer;
      top: 12px;
      right: 30px;
      width: 40px;
      height: 40px;
    }

    .hamburger {
      position: absolute;
      top: 32px;
      left: 30px;
    }
  }

  .menu {
    position: absolute;
    top: 87px;
    left: 50%;
    width: 100%;
    transform: translate(-50%, 0);
    box-shadow: 0px 4px 4px 0px #00000040;
    padding-bottom: 30px;
  }
}

@media (max-width: 1200px) {
  .nav .logo {
    width: 50px;
    height: 50px;
    padding: 6px;
  }
}
</style>
