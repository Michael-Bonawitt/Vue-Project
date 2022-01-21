<template>
    <div class="article">
        <h1>{{ title }}</h1>
        <p>Publised on {{ published | moment }}</p>
        <p class="lead">{{ content }}</p>
        <app-author></app-author>
    </div>
</template>

<script>
import moment from 'moment'
import Author from './Author.vue'

export default {
    data() {
        return {
            title: 'Why Vue.js is Awesome',
            published: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    },
    filters: {
        moment: function(value) {
            return moment(value).format('MMMM Do YYYY');
        }
    },
    components: {
        appAuthor: Author
    }
}
</script>