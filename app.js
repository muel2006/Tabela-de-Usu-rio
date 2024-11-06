new Vue({
    el: '#app',
    data: {
        isEditing: false,
        profile: {
            name: 'João Lennon',
            age: 21,
            occupation: 'Músico'
        }
    },
    methods: {
        toggleEdit() {
            this.isEditing = !this.isEditing;
        },
        saveProfile() {
            this.isEditing = false;
        }
    }
});