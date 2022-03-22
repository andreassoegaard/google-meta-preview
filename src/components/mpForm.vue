<template>
  <div class="mp-form">
    <div class="mp-form__group">
      <label for="mp-form-title-input">Titel  ({{ $store.state.title.length }}/{{ $store.state.maxChars.title }})</label>
      <input type="text" id="mp-form-title-input" name="mp-form-title-input" v-model="title">
    </div>
    <div class="mp-form__group">
      <label for="mp-form-description-input">Beskrivelse  ({{ $store.state.description.length }}/{{ $store.state.maxChars.description }})</label>
      <textarea type="text" id="mp-form-description-input" name="mp-form-description-input" v-model="description" rows="5" />
    </div>
    <div class="mp-form__group">
      <label for="mp-form-url-input">URL</label>
      <input type="text" id="mp-form-url-input" name="mp-form-url-input" v-model="url">
    </div>
  </div>
</template>

<script>
export default {
  name: 'mpForm',
  computed: {
    title: {
      get () {
        return this.$store.state.title
      },
      set (value) {
        this.$store.commit('SET_TITLE', value)
      }
    },
    description: {
      get () {
        return this.$store.state.description
      },
      set (value) {
        this.$store.commit('SET_DESCRIPTION', value)
      }
    },
    url: {
      get () {
        return this.$store.state.url
      },
      set (value) {
        this.$store.commit('SET_URL', value)
      }
    }
  }
}
</script>

<style lang="css">
.mp-form__group {
  margin-bottom: 10px;
}
.mp-form__group label,
.mp-form__group input,
.mp-form__group textarea {
  display: block;
  width: 100%;
  font-family: arial, sans-serif;
  font-weight: 400;
}
.mp-form__group label {
  font-size: 14px;
  color: #333;
  font-weight: 600;
  margin-bottom: 5px;
}
.mp-form__group input,
.mp-form__group textarea {
  padding: 12px 14px;
  box-sizing: border-box;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
}
</style>
