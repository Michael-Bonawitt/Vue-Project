<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12"></div>
        <announcement></announcement>
        <app-article></app-article>
    </div>
  </div>
</template>

<script>
import Announcement from './components/Announcement.vue'

export default {
  components: { Announcement },

  
}
</script>

