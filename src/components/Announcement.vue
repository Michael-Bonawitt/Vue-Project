<template>
    <div class="alert alert-info">{{ announcement }}</div>
</template>

<script>
export default {
    data() {
        return {
            announcement: 'This site will go down for maintenance soon!'
        }
    }
}
</script>