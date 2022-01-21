<template>
    <div>
        <h3>Share {{ article.title }} with your friends</h3>
        <button class="btn btn-primary" @click="share('Facebook')">Share on Facebook</button> &nbsp;
        <button class="btn btn-primary" @click="share('Twitter')">Share on Twitter</button>

    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    methods: {
        share(media) {
            eventBus.$emit('articleWasShared', {
                article: this.article,
                media: media
            });
            this.$emit('articleWasShared', {
                media: media
            });
        }
    },
    props: {
        article: {
            type: Object,
            required: true
        }
    }
}
</script>