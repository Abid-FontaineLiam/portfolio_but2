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
      default: 'transparent' // Couleur de fond si aligné au centre
    }
  },
  computed: {
    imagesrc() {
      return './assets/' + this.src
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
/* Conteneur principal */
.media-component {
  display: flex;
  gap: 20px; /* Espace entre l'image et le texte */
  align-items: center; /* Aligne verticalement au centre */
  width: 100%;
  transition: all 0.3s ease;
}

/* Image à gauche (par défaut) */
.align-left {
  flex-direction: row;
}

/* Image à droite */
.align-right {
  flex-direction: row-reverse;
}

/* Image au centre (Prend toute la largeur, texte en dessous) */
.align-center {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw; /* Prend toute la largeur de l'écran */
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 40px 0; /* Un peu d'espace pour que la couleur de fond respire */
}

/* Ajustements pour l'image */
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

/* Ajustement du texte */
.media-text {
  flex: 1; /* Permet au texte d'occuper l'espace restant */
}

.align-center .media-text {
  max-width: 800px; /* Optionnel : Évite que le texte soit trop large au centre */
  text-align: justify;
  padding: 0 20px;
}
</style>