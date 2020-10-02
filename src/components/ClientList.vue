<template>
    <div>
    <div class="actions">
        <button class="btn btn-primary" @click="newClient">
            <span class="glyphicon glyphicon-plus">Novo Cliente</span>
        </button>
            
    </div>
    <div class="filters row">
        <div class="form-group col-sm-6">
            <label for="search-element">Pesquisar por nome</label>
            <input v-model="searchKey" class="form-control" id="search-element" requred />
        </div>
    </div>
    <table class="table b-table">
        <thead>
        <tr>
            <th>Nome</th>
            <!--
            <th>colunas dos outros campos</th>
            -->
            <th class="col-sm-2">Ações</th>

            <th class="col-sm-2">1</th>
            <th class="col-sm-2">1</th>
            <th class="col-sm-2">1</th>
            <th class="col-sm-2">1</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(client, key) in filteredClients" :key="key">
            <td>
                {{ client.data.nomeCliente }}
            </td>
            <!--
            <td>
                {{ outros campos }}
            </td>
            -->
            <td>
                <div class="d-inline-flex">
                    <div class="pr-1">
                        <button class="btn btn-warning btn-xs" @click="edit(client)">Edit</button>
                    </div>
                    <div>
                        <button class="btn btn-danger btn-xs" @click="deleteClient(client)">Delete</button>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
</template>

<script>

import { db } from "../firebase/init";
export default {

    data(){
        return {            
            searchKey:"",
            resultListFirebase: []            
        }
    },

    methods:{

        edit(client){
            if (!client.data.excluido)
                client.data.excluido = false

            this.$router.push({ name: 'ClientEdit', params: {client} })
        },

        deleteClient(client){

            let clientUpdate = {
                nomeCliente: client.data.nomeCliente,
                excluido: true
            }

            db.ref("Cliente/" + client.key).set(clientUpdate).then( (response) => {                                
                this.reloadData()
            } );
        },

        newClient(){
            this.$router.push({ name: 'ClientEdit'})
        },

        reloadData(){
            this.resultListFirebase.splice(0)

            db.ref("Cliente/")                
                .orderByChild('excluido')                
                .equalTo(false)
                .on("child_added", (snapshot) => { 

                let key = snapshot.key

                let value = snapshot.val()            

                this.resultListFirebase.push({key, data:value})
            });
        },
    },

    computed:{

        filteredClients() {
            var self = this;
            
            if(!self.searchKey) {
                return this.resultListFirebase
            }
            return this.resultListFirebase.filter((client) => {
                return client.data.nomeCliente.indexOf(self.searchKey) !== -1
            })
        }
    },

    mounted(){
        this.reloadData()
    }
    

}
</script>

<style>

</style>