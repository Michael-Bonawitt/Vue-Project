<template>
    <div class="article">
        <h1>{{ title }}</h1>
        <p>Publised on {{ published | moment }}</p>
        <p>Shares: {{ shares }}</p>
        <p class="lead">{{ content }}</p>
        <app-author :author="author"></app-author>

        <br><br>
        <app-social-sharing @articleWasShared="shared('Hello!', $event)"></app-social-sharing>
    </div>
</template>

<script>
import moment from 'moment'
import Author from './Author.vue'
import Social from './Social.vue'

export default {
    data() {
        return {
            title: 'Why Vue.js is Awesome',
            published: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            author: {
                firstName: 'Mike',
                lastName: 'Bonawitt'
            },
            shares: 0
        }
    },
    filters: {
        moment: function(value) {
            return moment(value).format('MMMM Do YYYY');
        }
    },
    methods: {
        shared: function(message, event) {
            this.shares++,
            console.log(message)
            console.log(event)
        }
    },
    components: {
        appAuthor: Author,
        appSocialSharing: Social
    }
}
</script>