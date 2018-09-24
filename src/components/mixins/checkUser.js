export const checkUser = {
    methods: {
        getUser() {
            var currentUser = this.AV.User.current();
            if(currentUser){this.user = {...currentUser.attributes, id: currentUser.id}};
        },
        changeBackground(){
            if(this.$router.currentRoute.name === 'home'){
                document.body.classList.add('home');
            }
        },
    },
    created(){
        this.AV = require('leancloud-storage');
    }

}