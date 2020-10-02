<template>
    <div>
        <h2>{{crudOperation}} Cliente</h2>
        <div class="form-group">
            <label for="edit-name">Name</label>
            <input class="form-control" id="edit-name" v-model="client.data.nomeCliente" required />
        </div>
        <!--
        <div class="form-group">
            <label for="edit-description"Outro campos</label>
            <textarea
                class="form-control"
                id="edit-description"
                rows="3"
                v-model="client.description">
            </textarea>
        </div>
        -->
        <button class="btn btn-primary" @click="save">Save</button>
        <button class="btn btn-default" @click="cancel">Cancel</button>
    </div>
</template>

<script>

import { db } from "../../firebase/init";
export default {

    data(){
        return {}
    },
    
    props:{
        client: {
            type: Object,
            default: () => ({ data: {}})
        },
    },

    methods:{
        async save(){
            try {
                let response = await this.saveOrEditOnFirebase(this.client)
            } catch (error) {
                console.error(error)
            }
            this.redirectToDashboard()    
        },

        isEdit(){
            return this.client.key
        },
        
        cancel(){
            this.redirectToDashboard()
        },

        redirectToDashboard(){            
            this.$router.replace('/dashboard')
        },

        saveOrEditOnFirebase(client){
            if (this.isEdit())
                return this.editClientOnDatabase(client)
            return this.addClientOnDatabase(client)
        },

        addClientOnDatabase(client) {
            return db.ref("Cliente/").push({ nomeCliente: client.data.nomeCliente, excluido: false })
        },

        editClientOnDatabase(client) {            
            return db.ref("Cliente/" + client.key).set({nomeCliente: client.data.nomeCliente, excluido: client.data.excluido});
        },
    },

    computed: {

        crudOperation(){
            if (this.isEdit())
                return 'Editar'
            return 'Novo'
        }
    }

}
</script>

<style>

</style>