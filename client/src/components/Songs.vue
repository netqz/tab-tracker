<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn @click="navigateTo({name: 'CreateSong'})" slot="action" light medium absolute right middle fab class="cyan accent-2">
          <v-icon>add</v-icon>
        </v-btn>
        <div class="song" v-for="song in songs" :key="song.id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{ song.title }}
              </div>
              <div class="song-artist">
                {{ song.artist }}
              </div>
              <div class="song-genre">
                {{ song.genre }}
              </div>
              <v-btn @click="navigateTo({name:'ViewSong', params: {songId: song.id}})" class="cyan" dark>View</v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" />
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 100%;
  margin: 0 auto;
}

</style>
