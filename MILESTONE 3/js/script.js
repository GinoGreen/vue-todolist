const app = new Vue({
   el: '#app',

   data: {
      toDoList: [
         {
            text: 'Gettare la pattumiera',
            done: false,
         },
         {
            text: 'Studiare Vue',
            done: true,
         },
         {
            text: 'Amare Vue!',
            done: false,
         },
         {
            text: 'Studiare React',
            done: false,
         },
         {
            text: 'Decidere chi amare',
            done: true,
         },
         {
            text: 'Diventare Full Stack Web Developer',
            done: false,
         },
         {
            text: 'Meditare',
            done: false,
         }
      ],
      newTextToDo: '',
      errorMsg: false
   },

   methods: {

      removeToDo(index) {
         
         console.log('rimosso item ', index + 1);
         this.toDoList.splice(index, 1);
      },

      addToDo() {
         
         if (this.newTextToDo.length < 3) {
            
            this.errorMsg = true;

            setTimeout(() => {

               this.errorMsg = false;
            }, 3000);

         } else {

            const newItem = {
               text: this.newTextToDo,
               done: false
            };

            this.toDoList.push(newItem);

            this.newTextToDo = '';
         }
      }
   }

});