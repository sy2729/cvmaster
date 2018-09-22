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
        }
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