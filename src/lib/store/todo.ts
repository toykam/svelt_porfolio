import { writable } from "svelte/store";

export type Todo = {
    title: string;
    isDone: boolean
}



 const createTodoStore = () => {
    const { subscribe, set, update } = writable<Todo[]>([])

    return {
        subscribe,
        addTodo: (todo: Todo) => {
            update((todos: Todo[]) => [todo, ...todos])
        },
        removeTodo: (todo: Todo) => {
            update((todos: Todo[]) => todos.filter((t) => t != todo))
        },
        clearTodo: () => set([])
    }
}

export const todoStore = createTodoStore();
export const todos = todoStore;