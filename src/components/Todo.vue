<template>
  <div>
    <h3>Todos</h3>
    <span class="legend">Doble click para marcar como completado.</span>
    
    <span>
        <span class="incomplete-box"></span> = No completado
    </span>

    <span>
        <span class="complete-box"></span> = Completado
    </span>

    <div class="todos">
        <div 
            class="todo" 
            v-for="todo in allTodos"
            :key="todo.id"
            @dblclick="onDoubleClick(todo)"
            v-bind:class="{'is-complete':todo.completed}">
            {{ todo.title }}
            <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Todos',

    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),

        onDoubleClick(currentTodo){
            const updatedTodo = {
                id: currentTodo.id,
                title: currentTodo.title,
                completed: !currentTodo.completed
            }
            this.updateTodo(updatedTodo);
        }
    },

    computed: {
        ...mapGetters(['allTodos',])
    },

    created(){
        this.fetchTodos();
    }
}
</script>

<style>
.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
}

.todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 16px;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}

i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
}

.legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 16px;
}

.complete-box {
    display:inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
}

.incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b882;
}

.is-complete {
    background: #35495e;
    color: #fff;
}

@media (max-width: 500px) {
    .todos {
        grid-template-columns: 1fr;
    }
}
</style>