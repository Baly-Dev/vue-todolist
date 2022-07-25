let app = new Vue({
    el: '#app',
    data: {
        toDoItem: '',
        validationString: '',
        toDoList: [
            {
                activity: 'Code algorithm',
                status: false
            },
            {
                activity: 'Code development',
                status: false
            },
            {
                activity: 'Code refactoring',
                status: false
            },
            {
                activity: 'Code GitHub push',
                status: true
            }
        ]
    },
    methods: {
        // add toDo
        addItem: function(){
            if (this.toDoItem == ''){
                this.validationString = '*Enter a valid text'
            }else{
                this.toDoList.push({
                        activity: this.toDoItem.trim(),
                        status: false
                    })
                this.validationString = ''
                this.toDoItem = ''
            }
        },
        // remove toDo
        removeItem: function(i){
            this.toDoList.splice(i, 1)
        },
        // mark toDo as complete
        changeStatus: function(i){
            if (this.toDoList[i].status == false){
                this.toDoList[i].status = true
            }else{
                this.toDoList[i].status = false
            }
            
        }
    }
})