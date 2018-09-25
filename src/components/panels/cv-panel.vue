<template>
    <div>
        <!-- <div class="full-size flex flex-justify-center flex-align-center" v-if='!user.templates'>
            <v-button class='create-when-null' button-type='primary' button-text="There is no record yet, creat your first one +" @click=createRecord></v-button>
        </div> -->
        <div class="full-size template-choose-panel flex flex-wrap templates-display">
                <div class="each-template" v-for="(i, index) in user.templates" :key='i.id' @click='choseTemplate(i, index)'>
                    <div class="bottom-bar">
                        <span>{{i.name}}</span>
                        <a :href="i.link" >{{i.author}}</a>
                    </div>
                </div>  
                <div class="each-template add-template-in-display" @click=createRecord>
                        <font-awesome-icon icon="times" class="center-box"/>
                </div>
        </div>
        
        <transition name='prompt'>
            <div class="full-size template-choose-panel flex flex-wrap" v-if='templateChoosePanel'>
                <font-awesome-icon icon="times" @click='templateChoosePanel = false'/>
                <div class="each-template" v-for="(i, index) in availableTemplates" :key='i.name' @click='choseTemplate(i, index)'>
                    
                    <div class="bottom-bar">
                        <span>{{i.name}}</span>
                        <a :href="i.link" >{{i.author}}</a>
                    </div>
                </div>  
            </div>
        </transition>

    </div>
</template>

<script>

import vButton from '@/components/basic/button.vue';
// leancloud
let AV = require('leancloud-storage');

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faTimes)

export default {
    name: 'cvPanel',
    props: ['user'],
    methods: {
        createRecord() {
            this.templateChoosePanel = true;
        },
        stop(){},
        choseTemplate(data, index) {
            
            // create template instance for user in database
            var UserTemplates = AV.Object.extend('UserTemplates');
            // 新建对象
            var userTemplates = new UserTemplates();
            // 设置名称
            userTemplates.set({
                defaultName: `template${index+1}`,
                name: data.name,
                username: this.$props.user.username,
                userId: this.$props.user.id,
                author: data.author,
                link: data.link,
                preview: data.preview,
            });
            userTemplates.save().then((i)=>{
                let templateData = {...i.attributes, id: i.id};
                // console.log(templateData)
                this.$emit('add-template', templateData);

                this.templateChoosePanel = false;
            });



            // // connect user with the template
            // var userTemplateMap = new AV.Object('UserTemplateMap');

            // userTemplateMap.set('userId', this.$props.user.id);
            // userTemplateMap.set('template', 'template');

            // userTemplateMap.save().then(
            //     ()=>{
            //         console.log('ssssssssssss')
            //         // route to the template1
            //         this.$router.push({path: `/user/template${index+1}`, query: { id: this.$props.user.id }})
            //     }
            // );
        }
    },
    data(){
        return {
            templateChoosePanel: false,
            availableTemplates: [
                {
                    name: "Michael's resume",
                    author: 'Michael',
                    link: 'www.dribbble.com',
                    preview: '',
                }
            ],
            // user: {}
        }
    },
    created(){
        // this.user = this.$props.user;
    },
    components: {
        vButton,
    },
    // watch:{
    //     user: function(newVal, oldVal) { // watch it
    //       console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    .full-size {
        position: absolute;
        left: 0;
        top: 0;
        min-height: 100vh;
        width: 100%;
        
        button.create-when-null {
            width: unset;
            padding: 5px 10px;
        }
    }

    .template-choose-panel {
        z-index: 4;
        background: #f4f4f4;
        padding: 40px 20px;


        .fa-times {
            position: absolute;
            font-size: 2em;
            right: 20px;
            top: 20px;
            cursor: pointer;
        }

        .each-template {
            width: 250px;
            height: 300px;
            background: #fff;
            box-shadow: 2px 2px 10px 0 rgba(50, 50, 50, 0.4);
            position: relative;
            cursor: pointer;

            .bottom-bar {
                position: absolute;
                height: 40px;
                width: 100%;
                bottom: 0;
                left: 0;
                background: $defaultTheme;
                color: #f4f4f4;
            }
        }
    }

    .templates-display {
        z-index: unset;
        padding-top: 100px;
        
        .each-template {
            margin-right: 50px;
            margin-top: 20px;
        }

        .add-template-in-display {
            .fa-times {
                top: 50%;
                font-size: 2.2em;
                transform: translate(-50%, -50%) rotate(45deg);
                border: none;
            }
        }
    }
</style>
