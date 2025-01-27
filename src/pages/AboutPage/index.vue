<template>
  <div class="about">
    <div class="useConstant">{{ DemoConstants.DEMO_CON }}</div>
    <h1>{{ t('demo.username') }}</h1>
    <h1>{{ t('demo02.username') }}</h1>
    <button @click="changeLan('en')">切换英文</button>
    <button @click="changeLan('zh')">切换中文</button>
    <button @click="sendRequest">发送请求</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DemoConstants from '@/constants/DemoConstants'
import { changeLang } from '@/i18n/langUtil'
import { demoBaiduApi } from '@/api/demoApi'
const { t } = useI18n()

const changeLan = (locale: any) => {
  changeLang(locale)
}

const sendRequest = () => {
  // 使用api包下的方法发送请求，不能直接用axios或者request工具类发请求
  demoBaiduApi().then((res) => {
    console.log(res)
  })
}
</script>

<style scoped lang="scss">
.about {
  .useConstant {
    color: red;
  }
}
</style>
