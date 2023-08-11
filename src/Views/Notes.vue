<script>
import {ref} from "vue";
const showModal=ref(false);
const newNote=ref("") 
const notes =ref([]);
const errorMessage = ref("")
function getRandomColor() {
return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
       } 
const addNote=()=>{
  if(newNote.value.length>10){
    return  errorMessage.value="note needs to be 10 characters or more"
  }
    notes.value.push({
    id:Math.floor(Math.random() * 1000000),
    text:newNote.value,
    date:new Date(),
    backgroundColor: getRandomColor()
    });
    showModal.value=false;
    newNote.value=""
    errorMessage.value=""
   }

</script>
<template>
 
    
<main>

<div class="overlay" v-if="showModal">
<div class="modal" >
  {{ newNote }}
 <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"><!--v-modal directive used state change two way binding-->
 </textarea>
 <button @click="addNote">Add Note</button>
 <button class="close" @click="showModal=false"> Close</button>
 </div>
 </div>
 <div class="container" >
  {{ newNote }}
 <header>
          <h1>
          Notes{{ showModal }}
          </h1>
<button @click="showModal=true">
    +
</button>
</header>
<div class="cards-container"> 
<div v-for="note in notes" 
    :key="note.id"
    class="card" 
    :style="{backgroundColor:note.backgroundColor}">
    <p class="main-text">
       {{note.text }}
    <p class="date">
      {{note.date.toLocaleDateString("en-US")}}
    </p>
    </p>
</div>
</div>
</div>
</main>
</template> 
<style scoped>
 main{
  width: 100vw;
  height: 100vh;
  background-color: rgb(235, 235, 235);
 }
 
.container{
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}
header{
  display: flex;
  justify-content:space-between;
  align-items: center;
    }
h1{
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}
button{
border:none;
padding:10px;
width: 50px;
height: 50px;
cursor: pointer;
background-color: rgb(244, 49, 49);
border-radius: 100%;
color:white;
font-size: 20px;
}
.card{
  width: 225px;
  height: 225px;
  background-color: orange;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
}
.date{
  font-size: 12.5px;
  font-weight: 17px;
  padding-top: 10px;

}
.cards-container{
  display: flex;
  flex-wrap: wrap;
  }
  .overlay{
  position: absolute;
  width: 100%;
  height:100%;
  background-color:rgb(197, 177, 177);
  z-index: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  .modal{
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
   .modal button{
      padding:10px 20px ;
      font-size: 20px;
      width: 100%;
      background-color: blueviolet;
      margin-top: 15px;
      border: none;
      border-radius: 15px;
      color:white;
      cursor: pointer;
    }
  .modal button.close{
    background-color: red;
    margin-top: 30px;
    border-radius: 10px;
  }
  .modal p{
  color: red;
  } 

</style>