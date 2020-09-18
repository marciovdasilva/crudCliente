<template>
  <div class="container">

    <!--
    <template id="client-list">
      <div>
        <div class="actions">
          <router-link class="btn btn-default" :to="{path: '/add-client'}">
            <span class="glyphicon glyphicon-plus"></span>
            Add client
          </router-link>
        </div>
        <div class="filters row">
          <div class="form-group col-sm-3">
            <label for="search-element">client name</label>
            <input v-model="searchKey" class="form-control" id="search-element" requred />
          </div>
        </div>
        <table class="table b-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th class="col-sm-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(client, key) in filteredclients" :key="key">
              <td>
                <router-link
                  :to="{name: 'client', params: {client_id: client.id}}"
                >{{ client.name }}</router-link>
              </td>
              <td>{{ client.description }}</td>
              <td>
                {{ client.price }}
                <span class="glyphicon glyphicon-euro" aria-hidden="true"></span>
              </td>
              <td>
                <router-link
                  class="btn btn-warning btn-xs"
                  :to="{name: 'client-edit', params: {client_id: client.id}}"
                >Edit</router-link>
                <router-link
                  class="btn btn-danger btn-xs"
                  :to="{name: 'client-delete', params: {client_id: client.id}}"
                >Delete</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <template id="add-client">
      <div>
        <h2>Add new client</h2>
        <form v-on:submit="createclient">
          <div class="form-group">
            <label for="add-name">Name</label>
            <input class="form-control" id="add-name" v-model="client.name" required />
          </div>
          <div class="form-group">
            <label for="add-description">Description</label>
            <textarea
              class="form-control"
              id="add-description"
              rows="10"
              v-model="client.description"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="add-price">
              Price,
              <span class="glyphicon glyphicon-euro"></span>
            </label>
            <input type="number" class="form-control" id="add-price" v-model="client.price" />
          </div>
          <button type="submit" class="btn btn-primary">Create</button>
          <router-link class="btn btn-default" :to="{name: 'root'}">Cancel</router-link>
        </form>
      </div>
    </template>
    
    <template id="client">
      <div>
        <h2>{{ client.name }}</h2>
        <b>Description:</b>
        <div>{{ client.description }}</div>
        <b>Price:</b>
        <div>
          {{ client.price }}
          <span class="glyphicon glyphicon-euro"></span>
        </div>
        <br />
        <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
        <router-link to="/">Back to client list</router-link>
      </div>
    </template>

    <template id="client-edit">
      <div>
        <h2>Edit client</h2>
        <form v-on:submit="updateclient">
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
          <button type="submit" class="btn btn-primary">Save</button>
          <router-link to="/" class="btn btn-default">Cancel</router-link>
        </form>
      </div>
    </template>

 
    <template id="client-delete">
      <div>
        <h2>Delete client {{ client.name }}</h2>
        <form v-on:submit="deleteclient">
          <p>The action cannot be undone.</p>
          <button type="submit" class="btn btn-danger">Delete</button>
          <router-link to="'/'" class="btn btn-default">Cancel</router-link>
        </form>
      </div>
    </template>

    -->
    <!--+++++++++++++++++++++++++++++++++++++++++++++++++-->
    <h1>Crud de cliente</h1>

    <input type="text" v-model="nomeCliente" />

    <button @click="adicionarCliente">Adicionar</button>

    <div>
      <ul>
        <li v-for="(nomesDeClientes, key) in nomesDeClientes" :key="key">
          {{nomesDeClientes.nomeCliente}}
          <input type="text" v-model="editForm[key]" />
          <button @click="editCliente(key)">Editar</button>
          <button @click="removerCliente(key)">Remover</button>
        </li>
      </ul>
    </div>
  <!--+++++++++++++++++++++++++++++++++++++++++++++++++-->
  </div>
</template>

<script>
import { db } from "../firebase/init";

export default {
  data() {
    return {
      nomeCliente: "Marcio",
      nomesDeClientes: [],
      editForm: [],
    };
  },
  mounted() {
    db.ref("Cliente/").on("value", (snapshot) => {
      this.nomesDeClientes = snapshot.val();
    });
  },
  methods: {
    adicionarCliente() {
      db.ref("Cliente/")
        .push({ nomeCliente: this.nomeCliente })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editCliente(key) {
      db.ref("Cliente/" + key).set({
        nomeCliente: this.editForm[key],
      });
    },
    removerCliente(key) {
      db.ref("Cliente/" + key).remove();
    },
  },
  created() {
    console.log("Dashboard criado");
  },
};
</script>