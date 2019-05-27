<template>
  <div>
    <div :id="elmId"></div>
  </div>
</template>
<script>
import Editor from 'wangeditor'
export default {
  name: 'editor',
  props: {
    content: ''
  },
  data () {
    return {
      editorContent: this.content,
      elmId: ''
    }
  },
  created () {
    this.elmId = 'editor' + window.ID++
  },
  methods: {
    getContent () {
      this.$emit('getContent', this.editorContent)
    }
  },
  mounted () {
    var editor = new Editor('#' + this.elmId)
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
    editor.txt.html(this.editorContent)
  }
}
</script>
<style>
</style>
