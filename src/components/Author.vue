<template>
    <small>{{ author.firstName }} {{ author.lastName }}</small>
</template>

<script>
export default {
    data() {
        return {
            author: {
                firstName: 'Mike',
                lastName: 'Bonawitt'
            }
        }
    }
}
</script>