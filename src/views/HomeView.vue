<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <ol class="list-group list-group-numbered">
          <li
            v-for="user in users"
            :key="user.id"
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ user.username }}</div>
              {{ user.email }}
            </div>
            <span class="badge badge-pill">
              <router-link
                :to="{ path: `/users/${user.id}` }"
                class="btn btn-primary me-2"
                >Edit</router-link
              >
              <a href="#" class="btn btn-danger" @click="deleteUser(user.id)"
                >Delete</a
              >
            </span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import userCollection from "@/firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      users: [],
      selectedDoc: null,
    };
  },
  methods: {
    async fetchUsers() {
      let usersGet = await getDocs(userCollection);
      let users = [];
      usersGet.forEach((user) => {
        let userData = user.data();
        userData.id = user.id;
        users.push(userData);
      });
      console.log(users);
      this.users = users;
    },
    async deleteUser(userId) {
      let userRef = doc(userCollection, userId);
      await deleteDoc(userRef);
      alert(`Berhasil di Delete`);
      this.$router.go();
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
