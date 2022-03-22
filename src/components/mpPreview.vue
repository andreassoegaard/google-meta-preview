<template>
  <div id="app">
    <div class="mp-preview" :class="previewStyle ? 'mp-preview--' + previewStyle : ''">
      <div class="mp-preview-url">
        <span v-for="(urlElement, urlElementIndex) in urlArray" :key="urlElementIndex" :class="urlElementIndex === 0 ? 'mp-preview-url__element' : 'mp-preview-url__subelement'">
          {{ urlElement }}
          <span v-if="urlElementIndex !== urlArray.length - 1" class="mp-preview-url__arrow">
            ›
          </span>
        </span>
      </div>
      <div class="mp-preview__title">
        {{ titleComputed }}
      </div>
      <div class="mp-preview__description">
        {{ descriptionComputed }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mpPreview',
  props: {
    titleChars: {
      type: Number,
      default: 65
    },
    descChars: {
      type: Number,
      default: 160
    },
    urlChars: {
      type: Number,
      default: 40
    },
    previewStyle: {
      type: String,
      default: 'light'
    }
  },  
  created () {
    this.$store.commit('SET_MAX_CHARS', { title: this.titleChars, description: this.descChars })
  },
  methods: {
    shorten (str, maxLen, separator = ' ') {
      if (str.length <= maxLen) return str;
      return str.substr(0, str.lastIndexOf(separator, maxLen)) + ' ...';
    }
  },
  computed: {
    titleComputed () {
      return this.shorten(this.$store.state.title, this.titleChars)
    },
    descriptionComputed () {
      return this.shorten(this.$store.state.description, this.descChars)
    },
    urlArray () {
      let protocol
      let url = this.$store.state.url
      if (url.length > this.urlChars) {
        url = this.$store.state.url.substr(0, this.urlChars) + '...'
      }
      if (url.includes('https://')) {
        url = url.replace('https://', '')
        protocol = 'https://'
      } else if (url.includes('http://')) {
        url = url.replace('http://', '')
        protocol = 'http://'
      }
      const split = url.split('/')
      split[0] = protocol + split[0]
      // let strings = []
      // split.forEach((element, elementIndex) => {
      //   if (elementIndex === 0) {
      //     strings.push(`<span class="mp-preview-url__element">${element}</span>`)
      //   } else if (elementIndex !== split.length - 1) {
      //     strings.push(`<span class="mp-preview-url__subelement">${element}<span v-if="urlElementIndex !== urlArray.length - 1" class="mp-preview-url__arrow">›</span></span>`)
      //   }
      // });
      return split
    }
  }
}
</script>

<style lang="css">
#app {
  font-family: arial, sans-serif;
  font-weight: 400;
  box-sizing: border-box;
}
.mp-preview {
  width: 652px;
  padding: 15px 25px 20px;
  border-radius: 10px;
  margin-bottom: 1rem;
}
.mp-preview--light {
  background-color: #fff;
}
.mp-preview--dark {
  background-color: #202124;
}
.mp-preview__title {
  font-size: 20px;
  line-height: 26px;
  cursor: pointer;
  margin-bottom: 3px;
  padding-top: 5px;
}
.mp-preview__description {
  font-size: 14px;
  line-height: 22.12px;
}
.mp-preview-url {
  font-size: 14px;
  line-height: 1.3;
}

.mp-preview--light .mp-preview__description {
  color: rgb(77, 81, 86);
}
.mp-preview--light .mp-preview__title {
  color: rgb(26, 13, 171);
}
.mp-preview--light .mp-preview-url__arrow,
.mp-preview--light .mp-preview-url__subelement {
  color: #5f6368;
}
.mp-preview--light .mp-preview-url {
  color: #202124;
}
.mp-preview--dark .mp-preview-url__arrow,
.mp-preview--dark .mp-preview-url__subelement {
  color: #969ba1;
}
.mp-preview--dark .mp-preview-url {
  color: #bdc1c6;
}
.mp-preview--dark .mp-preview__description {
  color: rgb(189, 193, 198);
}
.mp-preview--dark .mp-preview__title {
  color: rgb(138, 180, 248);
}
</style>
