<template>
  <div id="profile-page">
    <p class="mb-4"><a href="javascript:;" rel="nofollow">云客</a> 个人博客编辑平台</p>
    <mavon-editor
        ref="md"
        placeholder="请输入文章内容..."
        :boxShadow="false"
        style="z-index: 1; border: 1px solid #d9d9d9; height: 70vh;"
        v-model="doc"
        :external-link="externalLink"
        :toolbars="toolbars"
        code-style="atom-one-dark"
        @save="activePrompt = true"
    >
    </mavon-editor>
    <vs-prompt
        @vs-cancel="clearValMultiple"
        @vs-accept="acceptAlert"
        @vs-close="close"
        :vs-is-valid="validName"
        :vs-active.sync="activePrompt"
        vs-title="保存博客"
        vsAcceptText="保存"
        vsCancelText="取消">
      <div class="con-exemple-prompt">
        请你输入标题和标签 <b>继续</b>.
        <vs-input placeholder="标题" v-model="valMultipe.value1" class="mt-4 mb-2 w-full" />
        <vs-input placeholder="标签" v-model="valMultipe.value2" class="w-full" />

        <vs-alert :active="!validName" color="danger" vs-icon="new_releases" class="mt-4" >
          字段不能为空，请输入数据
        </vs-alert>
      </div>
    </vs-prompt>
  </div>
</template>

<script>
  import Button from "../components/vuesax/button/Button";
  export default {
    name: "Markdown",
    components: {Button},
    data() {
      return {
        doc: "",
        activePrompt:false,
        valMultipe:{
          value1:'',
          value2:''
        },
        externalLink: {
          hljs_js: () => '/md/highlightjs/highlight.min.js',
          hljs_css: (css) => '/md/highlightjs/styles/' + css + '.min.css',
          hljs_lang: (lang) => '/md/highlightjs/languages/' + lang + '.min.js',
          katex_css: () => '/md/katex/katex.min.css',
          katex_js: () => '/md/katex/katex.min.js',
          markdown_css: () => '/md/markdown/github-markdown.min.css'
        },
        //参数
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: false, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: true, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true // 预览
        }
      }
    },
    computed:{
      validName(){
        return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)
      }
    },
    methods:{
      acceptAlert(){
        this.clearValMultiple();
        this.$vs.notify({
          color:'success',
          title:'保存成功',
          text:'文章已经成功保存到数据库中'
        })
      },
      close(){
        this.$vs.notify({
          color:'danger',
          title:'关闭',
          text:'你关闭了弹窗'
        })
      },
      clearValMultiple() {
        this.valMultipe.value1 = "";
        this.valMultipe.value2 = "";
      }
    }
  }
</script>

<style>
  ins {
    text-decoration: underline;
  }
  s {
    text-decoration: line-through;
  }
</style>