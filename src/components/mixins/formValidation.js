export const validate = {
    methods: {
        checkName(data){
            return data.indexOf('@') === -1
        },
        checkPasswordConsistency(data1, data2) {
            return data1 === data2;
        },

        checkPassword(data) {
            return data.length > 6 && data[0] === data[0].toUpperCase();
        }
    }
}