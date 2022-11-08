<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2>Update User</h2>
        <form @submit.prevent="updateUser">
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              placeholder="username"
              v-model="userInfo.username"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="email"
              v-model="userInfo.email"
            />
          </div>

          <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import userCollection from "@/firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      selectedUser: {},
      userId: null,
      docRef: null,
      userInfo: {
        username: null,
        email: null,
      },
    };
  },
  methods: {
    async getUser() {
      let userRef = doc(userCollection, this.userId);
      this.docRef = userRef;
      let user = await getDoc(this.docRef);
      let userData = user.data();

      this.userInfo.username = userData.username;
      this.userInfo.email = userData.email;
    },
    async updateUser() {
      await setDoc(this.docRef, this.userInfo);
      alert(`user ID : ${this.userId} berhasil di Update!`);
      this.$router.push("/");
    },
  },
  created() {
    let userId = this.$route.params.userId;
    this.userId = userId;
    this.getUser();
  },
};
</script>
