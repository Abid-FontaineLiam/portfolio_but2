<script setup>
import { withBase } from 'vuepress/client'
</script>
<script>
export default {
  props: {
    src: String,
    caption: String,
    width: [String, Number],
    align: {
      type: String,
      default: 'left' // 'left', 'right', ou 'center'
    },
    bgColor: {
      type: String,
      default: 'transparent' 
    }
  },
  computed: {
    imagesrc() {
      return withBase('/assets/' + this.src)
    },
    // Génère le style dynamique pour le fond lorsque l'image est centrée
    containerStyle() {
      if (this.align === 'center') {
        return { backgroundColor: this.bgColor };
      }
      return {};
    }
  }
}
</script>

<template>
  <div :class="['media-component', `align-${align}`]" :style="containerStyle">
    
    <figure :style="{ width: width }">
      <img :src="imagesrc" alt="" />
      <figcaption v-if="caption">Légende: {{ caption }}</figcaption>
    </figure>

    <div class="media-text" v-if="$slots.default">
      <slot></slot>
    </div>

  </div>
</template>

<style scoped>
.media-component {
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  transition: all 0.3s ease;
}

.align-left {
  flex-direction: row;
}

.align-right {
  flex-direction: row-reverse;
}

.align-center {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw; 
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 40px 0;
}

figure {
  margin: 0;
  max-width: 100%;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

figcaption {
  margin-top: 8px;
  font-size: 0.9em;
  color: #666;
  text-align: center;
}

.media-text {
  flex: 1;
}

.align-center .media-text {
  max-width: 800px;
  text-align: justify;
  padding: 0 20px;
}
</style>