<template>
  {{ $t('HomeView.hello') }}

  {{ counter.count }}
  <button @click="counter.increment">Increment counter</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
</script>

<style scoped></style>
