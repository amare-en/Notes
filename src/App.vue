<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import {ref} from "vue"//import state to use state in this project
const showModal=ref(false);//define the state
const NewNotes=ref("")//intial the state
const errorMessage = ref("")
const notes=ref([])
function getRandomColor() {
return "hsl(" + Math.random() * 360 + ", 100%, 75%)";}
const addNote = () =>{
  if(NewNotes.value.length < 10)
  {
  return  errorMessage.value="note needs to be 10 characters or more"
  }
    notes.value.push({
    id:Math.floor(Math.random() * 1000000),
    text:NewNotes,
    date:new Date(),
    backgroundColor: getRandomColor()
  })
  showModal.value=false;
  errorMessage.value=""
  NewNotes.value
}
</script>
<template>
<main>
<div v-if="showModal" class="overlay" >
    <div class="modal">
     <textarea name="note" id="note"  cols="30" rows="10" v-model.trim="NewNotes">
     </textarea>
     <p>{{ errorMessage }}</p>
     <button @click="addNote">Add Note</button>
     <button class="close" @click="showModal=false">close</button>
     </div>
</div>
<div class="container">
          <header>
          <hl class="head">Notes</hl>
          <button @click="showModal=true" class="btn">+</button>
          </header>
          <div class="cards-container">
          <div class="card" v-for="note in notes" :key="note.id" :style="{backgroundColor:note.backgroundColor}">
            <p class="main-text">
               {{ note.text }}
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
  background-color: rgb(198, 226, 140);
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
.head{
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
font-size: 30px;
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
  display: justify;
  padding: 100px;

}
.cards-container{
  display: flex;
  flex-wrap: wrap;
  }
  .overlay{
  position: absolute;
  width: 100%;
  height:100%;
 
  z-index: 1px;
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
  btn{
    size: 60px;
  }
    </style>