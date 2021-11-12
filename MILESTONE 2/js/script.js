const app = new Vue({
   el: '#app',

   data: {
      toDoList: [
         {
            text: 'Cosa da fare 1',
            done: false,
         },
         {
            text: 'Cosa da fare 2',
            done: true,
         },
         {
            text: 'Cosa da fare 3',
            done: false,
         },
         {
            text: 'Cosa da fare 4',
            done: false,
         },
         {
            text: 'Cosa da fare 5',
            done: true,
         },
         {
            text: 'Cosa da fare 6',
            done: false,
         },
         {
            text: 'Cosa da fare 7',
            done: false,
         }
      ]
   },

   mounted() {

   },

   methods: {

      removeToDo(index) {
         
         console.log('rimosso item ', index + 1);
         this.toDoList.splice(index, 1);
      }
   }

});