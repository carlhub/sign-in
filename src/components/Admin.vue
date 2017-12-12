<template>
  <div class="container" v-if="this.$store.state.user.displayName">      
    <hr>
    <h4>[ADMIN] Welcome {{this.$store.state.user.displayName}}! To Signin Dashboard</h4>    
    
    <br>
    <!--
    <form id="addPost" @submit.prevent="Validate" method="post" action='/posts/create'>
    <div class="form-group">
      <input v-model="title" type="text" class="form-control" id="title" name="title" placeholder="Title" data-vv-as="title" data-vv-delay="500" v-validate="'required'">
      <p class="text-danger" align="left" v-if="errors.has('title')">{{ errors.first('title') }}</p>
    </div>
    <div class="form-group">
      <textarea v-model="body" class="form-control" id="body" rows="5"  name="body" placeholder="Write your thoughts here..." data-vv-as="body"  data-vv-delay="500" v-validate="'required'">
      </textarea>
      <p class="text-danger" align="left" v-if="errors.has('body')">{{ errors.first('body') }}</p>
    </div class="form-group" >
    <div >
    </div>
       <button class="btn btn-primary" type="submit" >admin-Post!</button>
    </form>
    -->
    <hr>

    <center>


    <div class="columns">
      <postcard></postcard>
      <h3>DATABASE</h3>

      <div v-for="post in list">
        <div  class="container2">
        <div class="content">
          <div class="title1">NAME: {{post.name}}</div>
          <div>EMAIL: {{post.email}}</div>
          <div>PHONE: {{post.phone}}</div>
          <div>COMPANY: {{post.company}}</div>
          <div>OFFICIAL VISIT: {{post.isOfficialVisit}}</div>
          <div>ESCORT REQUIRE: {{post.isEscortRequired}}</div>
          </div>
          <div>
            <div class="postedOn">CREATD ON: {{post.createdOn}}</div>
          </div>
        </div>
        <br>
      </div>  
<p>-- END FEED --</p>

     <infinite-loading @infinite="infiniteHandler"  ></infinite-loading>

  </div> <!-- div -->
  <div class="container" v-else>
<h1>Admin</h1>
    <h4>You must login to access Toro Net!</h4>
    <img src="https://qph.ec.quoracdn.net/main-qimg-0102f6e770d2ce1f45bd7066524b8f70" alt="Avatar" style="width:20% height=20%" class="w3-circle w3-margin-top">
  </div>
  
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container2 {  
  background-color: lightgrey;
  padding: 10px;
  margin: auto;
}
.content {
  padding-bottom: 10px;
  color: black;
  font-size: 1.0em;
}
.postedBy {
  text-align: left;
  color: blue;
}
.postedOn {
  text-align: right;
  color: red;
}
.title1 {
  text-align: center;
  font-size: 1.0em;
}
</style>
<script>


import axios from 'axios';
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: "Home",
  data() {
    return {
      //User: [],
      //title: "",
      //body: ".",
      //posts: [],
      list: [],
      visitors: []
    };
  },  
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        const temp = [];
        //counter =0;        
          for (let i = this.list.length + 1; i <= this.list.length + 5; ) {
          if(i>this.visitors.length){
            break;
          }
          else{
            temp.push(this.visitors[i-1]); 
            i++   
          }      
        }
        this.list = this.list.concat(temp);
        $state.loaded();
       // }
         }, 1000);       
    },    
    Validate(e) {
      e.preventDefault();
      this.$validator.validateAll().then(result => {
        if (result) {
          const newPost = {
            userId: this.$store.state.user.username,
            title: this.title,
            body: this.body,
            createdOn: new Date()
          };
          console.log(newPost);          
          this.$store.dispatch("addPost", newPost);
          this.title="";
          this.body="";          
          this.$router.push("/");
          return;
        }
      });
    }
  },
  components: {
    InfiniteLoading,
  },
  
  mounted() {
    axios.get('/admin/visitors')
      .then((response) => {
      console.log(response.data);
      this.visitors = response.data;
      this.visitors=this.visitors.reverse();
      })
      .catch((error) => {
        console.log(error);
      });
  },  

  updated(){
    axios.get('/admin/visitors')
      .then((response) => {
      console.log(response.data);
      this.visitors = response.data;
      this.visitors=this.visitors.reverse();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

}
</script>