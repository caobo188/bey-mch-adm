<template>
  <div class="uploader-frame">
    <div class="uploader-thum-container">
      <ul class="filelist clearfix">
        <li v-show="showUpBtn">
          <div class="uploader-picker-wrap" :id="pickerId">
            <img class="uploader-placeholder" :src="tipsImg" width="110" height="110">
          </div>
        </li>
        <li v-for="(file, idx) in fileList" :key="idx">
          <div class="imgWrap">
            <div class="upload-remove"><span @click="onDel(idx)">x</span></div>
            <img :src="file.path" width="110" height="110">
            <div class="upload-tips" v-show="file.state">{{file.state}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'upload',
  props: ['id', 'type', 'name', 'tag', 'src', 'grpid', 'multi', 'tips'],
  data () {
    return {
      // 是否允许上传多张
      // multi: false,
      // 是否显示上传按钮(默认显示)
      showUpBtn: true,
      // 按钮图片
      tipsImg: '',
      // 图片列表
      fileList: [],
      // 图片路径
      path: '',
      // 分组ID
      group: '',
      // 上传按钮ID
      pickerId: 'filePicker'
    }
  },
  beforeCreate () {
  },
  created () {
    // 属性初始化
    this.pickerId = this.id || ('upload_' + this.$http.id())
    this.tipsImg = this.tips || '/static/img/upload.jpg'
    this.path = this.src
    // src与path处理
    this.pathToFileList(true)
    this.$watch('src', (n, o) => {
      this.path = this.src
      this.pathToFileList(false)
    })
    // grpid分组处理
    this.group = this.grpid
    this.getFileList()
    this.$watch('grpid', (n, o) => {
      this.group = this.grpid
      this.getFileList()
    })
    // Upload初始化与注册
    this.initUpload.tick()
    this.register()
  },
  methods: {
    initUpload () {
      this.$http.createUploader(this)
      this.getFileList()
    },
    register () {
      let addUploader = this.$parent.addUploader
      if (addUploader) {
        addUploader.call(this.$parent, this)
      }
    },
    getGroupId () {
      if (this.grpid) {
        return this.grpid
      }
      if (this.multi) {
        this.$http.creGroupId(rst => {
          this.group = rst.data || ''
        })
      }
    },
    getResult () {
      return {
        id: this.id,
        type: this.type,
        grpid: this.group,
        path: this.path,
        tag: this.tag,
        files: this.fileList
      }
    },
    pathToFileList (init) {
      // 单张模式时直接添加，多张模式时第一张添加(主要由getFileList获取多张，并覆盖)
      let added = this.path && (!this.multi || (this.multi && this.fileList.length === 0))
      if (added) {
        this.fileList = []
        this.fileList.push({
          path: this.path,
          state: '已上传'
        })
        // 单张模式时，需要关闭
        if (!this.multi) {
          this.showUpBtn = false
        }
      }
    },
    getFileList () {
      if (this.multi) {
        this.$http.grpFile({grpId: this.grpId}, rst => {
          this.fileList = rst.data || []
        })
      }
    },
    onDel (idx) {
      let file = this.fileList[idx]
      this.path = ''
      if (file) {
        this.fileList.splice(idx, 1)
        if (file.$file) {
          this.$uploader.removeFile(file.$file)
        }
        if (!this.multi) {
          this.showUpBtn = true
        }
      }
    },
    onQueued (file) {
      let uploader = this.$uploader
      this.fileList.notExists(file.id, 'id', '文件已重复', () => {
        uploader.thumb(file, 100, 100, wrap => {
          if (!this.multi) {
            this.showUpBtn = false
          }
          this.fileList.push(wrap)
        })
      })
    },
    onBefore (block, data) {
      data.grpId = this.group
    },
    onProgress (file, percentage) {
      this.showMask = true
      let f = this.fileList.findOne(file.id, 'id')
      f.state = (percentage * 100).toFixed(0) + '%'
    },
    onError (file) {
      let f = this.fileList.findOne(file.id, 'id')
      f.state = '上传失败'
    },
    onComplete (file) {
    },
    onSuccess (file, response) {
      if (response.code === 700) {
        this.$toast('请重新登陆')
      } else if (response.code !== 200) {
        this.$toast(response.msg)
      } else {
        var f = this.fileList.findOne(file.id, 'id')
        var path = response.data
        f.path = path
        f.state = '上传成功'
        // 图片ID与图组ID
        this.path = path
      }
    },
    onFinished () {
      let onUploaded = this.$parent.onUploaded
      let data = this.getResult()
      if (onUploaded) {
        onUploaded.call(this.$parent, data)
      }
      if (this.$doneCb) {
        this.$doneCb(data)
      }
    },
    doUpload (doneCb) {
      this.$doneCb = doneCb
      this.$uploader.upload()
    }
  }
}
</script>
<style lang="less" scoped>
.uploader-placeholder {
  text-align: center;
  color: rgb(204, 204, 204);
  font-size: 18px;
  position: relative;
  border-width: 2px;
  border-color: rgb(230, 230, 230);
  border-image: initial;
}
.uploader-frame{
  display: inline-block;
}
.uploader-thum-container li {
  float: left;
  margin-right: 20px;
  width: 110px;
  height: 110px;
}
.uploader-picker-wrap{
  position: relative;
}
.uploader-picker-wrap input{
  opacity: 0 !important;
}
.imgWrap{
  position: relative;
  height: 110px;
}
.upload-remove{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height: 0;
  transition: height .5s;
  -moz-transition: height .5s;
  -webkit-transition: height .5s;
  -o-transition: height .5s;
  margin: 0;
  text-align: right;
  box-sizing: border-box;
  background-color: rgba(0,0,0,.7);
  padding:0 6px;
  overflow: hidden;
}
.imgWrap:hover .upload-remove{
  height: 22px;
  transition: height .5s;
  -moz-transition: height .5s;
  -webkit-transition: height .5s;
  -o-transition: height .5s;
}
.upload-remove span {
  color:#FFFFFF;
  font-weight: bold;
  font-size:16px;
  cursor: pointer;
  display: inline-block;
  height: 22px;
  width:20px;
  line-height: 22px;
  text-align: center;
}
.upload-tips{
  background-color: rgba(0,0,0,.7);
  color: #fff;
  width:100%;
  position: absolute;
  bottom:0;
  left:0;
  text-align: center;
  font-size: 12px;
  height: 22px;
  line-height: 22px;
}
</style>
