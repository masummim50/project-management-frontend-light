
import TodoForm from "./TodoForm";
import TodoContainer from "./TodoContainer";
import useDocumentTitle from "../../../UseDocumentTitle";

const Todos = () => {
  
  useDocumentTitle({title:'Todos'})
  return (
    <div>
      <TodoForm />
      <TodoContainer />
    </div>
  );
};

export default Todos;
