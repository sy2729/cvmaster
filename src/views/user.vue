<template>
    <div>
        <div class="nav">
            <h1>CV MASTER</h1>
            <v-nav :user = user></v-nav>
        </div>
        <cv-panel :user = user @add-template="addTemplate"></cv-panel>
    </div>
</template>

<script>
// leancloud
let AV = require('leancloud-storage');
import { checkUser } from '@/components/mixins/checkUser';
import vNav from '@/components/vNav.vue';
import cvPanel from '@/components/panels/cv-panel.vue';

export default {
    name: 'user',
    mixins: [checkUser],
    components: {
        vNav,
        cvPanel,
    },
    data(){
        return {
            user: {},
        }
    },
    methods: {
        getAllTemplates(){
             var query = new AV.Query('UserTemplates');
             query.equalTo('userId', this.user.id);
              query.find().then((data)=>{
                if(data) {
                    let templates = [];
                    for(let i = 0; i < data.length; i++) {
                        let templatesData = {...data[i].attributes, id: data[i].id};
                        templates.push(templatesData);
                        // this.$set(this.user.templates, i, {...data[i].attributes, id: data[i].id});
                        //  this.user.templates[i] = {...data[i].attributes, id: data[i].id};
                    }
                    this.$set(this.user, 'templates', templates)
                }
            });
        },
        addTemplate(value){
            if(!this.user.templates) {
                    this.user.templates = [];
                    this.user.templates.push(value);
                }else {
                    this.user.templates.push(value);
            }
        }

        // getAllTemplates
    },
    created(){
        this.getUser();
        if(this.user) {
            this.getAllTemplates();
        }else {
            this.$router.push('/');
        };
        this.changeBackground();
    }
}
</script>

<style lang="scss">
  body {
    &.home {
      background: #fff !important;
      height: unset !important;
    }

  }
    .nav {
        color: #f4f4f4;
        background: $defaultTheme;
        h1 {padding: 10px 0;}
        position: relative;
        z-index: 4;

        nav {
            position: absolute; right: 55px; top: 50%; transform: translateY(-50%); 
            .menu {
                margin: unset !important;
            }

            .menu-content {
                position: absolute;
            }
        }
    }
    
</style>
