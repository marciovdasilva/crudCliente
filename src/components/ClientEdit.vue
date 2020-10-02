<template>

    <div>
        <h2>Edit client</h2>
            <div class="form-group">
            <label for="edit-name">Name</label>
            <input class="form-control" id="edit-name" v-model="client.name" required />
            </div>
            <div class="form-group">
            <label for="edit-description">Description</label>
            <textarea
                class="form-control"
                id="edit-description"
                rows="3"
                v-model="client.description"
            ></textarea>
            </div>
            <div class="form-group">
            <label for="edit-price">
                Price,
                <span class="glyphicon glyphicon-euro"></span>
            </label>
            <input type="number" class="form-control" id="edit-price" v-model="client.price" />
            </div>
            <button class="btn btn-primary" @click="save">Save</button>
            <router-link to="/" class="btn btn-default">Cancel</router-link>
    </div>

  
</template>

<script>
export default {

    data(){
        return {

        }
    },
    
    props:{
        client
    }

}
</script>

<style>

</style>