<template>
  <Panel title="Lyrics">
    <textarea readonly v-model="song.lyrics" />
  </Panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
