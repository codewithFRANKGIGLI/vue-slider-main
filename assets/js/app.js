

const {
  createApp
} = Vue;
createApp({

  data() {
    return {
      movie: {
        images: [
          'https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg',
          'https://www.themoviedb.org/t/p/w500/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg',
          'https://www.themoviedb.org/t/p/w500/d4Ja9AMFoWEtTPKFrzQac0ReYb.jpg',
          'https://www.themoviedb.org/t/p/w500/p6erCET4fvzQiGz0wgwGFvEIdcb.jpg',
          'https://www.themoviedb.org/t/p/w500/pWBgjkG8ASvYnrql3tbjMo0d8tk.jpg'
        ],
        title: 'The Mandalorian',
        category: 'Action',
        length: '120',
      },
      activeImage: 0,
      autoScroll: null
    }
  },
  methods: {
    // Show next image
    showNextImage: function() {
      if(this.activeImage < this.movie.images.length - 1) {
        this.activeImage++;
      } else {
        this.activeImage = 0;
      }
    },
    // Show previous image
    showPreviousImage: function() {
      if(this.activeImage > 0) {
        this.activeImage--;
      } else {
        this.activeImage = this.movie.images.length - 1;
      }
    },
    // Rende attiva un'immagine specifica
    activateImage: function(clickedIndex) {
      this.activeImage = clickedIndex;
    },
    startAutoplay() {
      this.autoScroll = setInterval(this.showNextImage, 3000);
    },
    stopAutoplay() {
      clearInterval(this.autoScroll);
      this.autoScroll = null;
    }
  },
  mounted() {
    this.startAutoplay();
  }
}).mount('#app')