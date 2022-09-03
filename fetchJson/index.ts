import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Defines Variable Types
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(function (response) {
  const todo = response.data;
  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);
});
