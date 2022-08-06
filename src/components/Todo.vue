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
  </div>
</template>
30:55
<script>
export default {

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

@media (max-width: 500px) {
    .todos {
        grid-template-columns: 1fr;
    }
}
</style>