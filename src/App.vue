<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12"></div>
        <announcement></announcement>
        <app-article>
        </app-article>
        <hr>
        <app-contact>
          <p slot="top">Contact us and one of our reprsentatives will get back to you as soon as possible</p>
          <p slot="bottom">Please do not submit any sensitive information!</p>
        </app-contact>
    </div>
  </div>
</template>

<script>
import Announcement from './components/Announcement.vue'

export default {
  components: { Announcement },

  
}
</script>

