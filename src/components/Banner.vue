<script setup></script>

<template>
  <div class="banner-container">
    <img src="@/assets/images/banner.png" alt="版圖" class="banner" />

    <div class="content">
      <div class="title">白頭翁 (Chinese bulbul)</div>
      <p class="describe">
        又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner-container {
  position: relative;
  width: 100%;
  height: 634px;
  overflow: hidden;
}

.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
  scale: 1.3;
}

.content {
  position: absolute;
  bottom: 0;
  right: 44px;
  color: white;
  text-align: right;

  .title {
    font-size: 48px;
    font-weight: 700;
  }

  .describe {
    font-size: 18px;
    margin: 0;
    padding-top: 4px;
    padding-bottom: 36px;
  }
}

@media (max-width: 1024px) {
  .banner-container {
    object-position: left;
    height: 312px;
    overflow: hidden;
  }

  .banner {
    scale: 1.5;
    object-position: center;
  }

  .content {
    right: 22px;

    .describe {
      padding-top: 9px;
      padding-bottom: 24px;
    }
  }
}
</style>
