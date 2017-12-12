  <template>

  <div class="container">

   <div v-if="!this.$store.state.user.displayName"> 
  
    <form  id="register" @submit.prevent="Validate" method="post" action='/users'>


    <div align="left" class="form-group">          
      <label for="isOfficialVisitId">Official Visit</label>
      <input type="checkbox"  v-model="isOfficialVisit" name="isOfficialVisit" id="isOfficialVisitId" >
      </label>       
    </div>  

        <div align="left" class="form-group">      
        <label for="isEscortRequiredId">Escort Required </label>
        <input type="checkbox" id="isEscortRequiredId" v-model="isEscortRequired" name="isEscortRequired" >      
      </div>     
   
      <div align="left" class="form-group">    
        <label for="nameId">Name</label>
        <input v-model="name" name="name" v-validate="'required'" type="text" class="form-control"  placeholder="Name" id="nameId">
       <p class="text-danger" align="left" v-if="errors.has('name')">{{ errors.first('name') }}</p>
      </div>      
     <div align="left" class="form-group">
       <label for="emailId">Email</label>
          <input v-model="email" name="email" v-validate="'required|email'" data-vv-delay="5" type="text" data-vv-as="email address" placeholder="Email" class="form-control" id="emailId">
          <p class="text-danger" align="left" v-if="errors.has('email')">{{ errors.first('email') }}</p>
    </div>
    <div align="left" class="form-group">      
      <label for="phoneId">Telephone</label>
      <input v-model="phone" name="phone" mask="\+\1 (111) 111-1111" type="text" class="form-control" v-validate="'required'" placeholder="Telephone" id="phoneId">
       <p class="text-danger" align="left" v-if="errors.has('phone')">{{ errors.first('phone') }}</p>
    </div>
     <div align="left" class="form-group">
       <label for="companyId">Company</label>
          <input v-model="company" name="company" v-validate="'required'"  type="text" placeholder="Company" class="form-control" id="companyId">
          <p class="text-danger" align="left" v-if="errors.has('company')">{{ errors.first('company') }}</p>
    </div>


        <div align="left" v-if="isEscortRequired" class="form-group">
          <label for="escortNameId">Escort Name</label>
          <input v-model="escortName" name="escortName" type="text"  id="escortNameId" class="form-control"> 
        </div>
   

    <button class="btn btn-success" type="submit" >Register</button>
    </form>
   </div>

 
  <div v-else>    
    <h2>ADMIN is logged in</h2><br>
    <ul>
     <li>ADMIN cannot log in as Visitor</li>
     <li>ADMIN must log out first before visior can register.</li>
    </ul>
  </div>

  </div>
  </template>

<style scoped>
.question {
  border: 0;
  -background: #444;
  color: black;
  text-align: left;  
}
.btn-github:hover {
  background: #2B2B2B;
  color: white;
}
</style>

<script>
export default {
  name: 'Register',  
  data() {
    return {
      email: '',
      password: '',
      name: '',
      body: '',      
      email: '',
      phone: '',
      company: '',
      isOfficialVisit: false,
      isEscortRequired: false
    };
  },
  methods: {
    Validate(e) {
      e.preventDefault();
      this.$validator.validateAll().then((result) => {
        if (result){          
         const newUser = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            company: this.company,
            isOfficialVisit: this.isOfficialVisit,
            isEscortRequired: this.isEscortRequired,
            escortName: this.escortName,
            createdOn: new Date
          }
          
          this.$store.dispatch('registerVisitor', newUser)
          .then(res => {
             if (res.status == 200) {
              alert('Registration successful!')
              this.$router.push('/')
            }
          }, err => {
            alert('Registration failed!')
            this.$router.push('/')
          })
          return
        }
      })        
    },
    
  },
  mounted(){
  }
}
</script>