export const submit = {
    methods: {
        emitSubmit() {
            
        }
    },

    created(){
        this.$eventHub.$on('changeMode', (data)=>{
            if(data === 'display') {
                this.$emit('data-from-child', this.newData);
            }
        })
    }
}