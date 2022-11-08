<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2>Add User</h2>
        <form @submit.prevent="createUser">
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              placeholder="username"
              v-model="username"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="email"
              v-model="email"
            />
          </div>

          <button type="submit" class="btn btn-primary">Create User</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import userCollection from "@/firebase";
import { addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      username: null,
      email: null,
    };
  },
  methods: {
    async createUser() {
      console.log("create document");
      const addedDoc = await addDoc(userCollection, this.$data);
      alert("Documents Added Created SuccessFully!");
      console.log(addedDoc);
      this.$router.push("/");
    },
  },
};
</script>
