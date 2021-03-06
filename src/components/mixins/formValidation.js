export const validate = {
    methods: {
        checkNull(data) {
            return data === '';
        },
        checkName(data){
            return data.indexOf('@') === -1
        },
        checkPasswordConsistency(data1, data2) {
            return data1 === data2;
        },

        checkPassword(data) {
            return data.length > 6 && data[0] === data[0].toUpperCase() && /[a-z]\d/.test(data);
        },

        changeBackground(obj){
            if(obj.$router.currentRoute.name !== 'home'){
                document.body.classList.remove('home');
            }
        },
        getUser() {
            var currentUser = this.AV.User.current();
            if(currentUser){
                this.user = {...currentUser.attributes, id: currentUser.id}
                this.$router.push({ path: '/user', query: { id: this.user.id }})
            };
        },
    },

    created(){
        this.AV = require('leancloud-storage');
        // var TestObject = AV.Object.extend('TestObject');
        // var testObject = new TestObject();
        // testObject.save({
        // words: 'Hello World!'
        // }).then(function(object) {
        // alert('LeanCloud Rocks!');
        // })
    }
}