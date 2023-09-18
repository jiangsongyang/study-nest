import { useState } from "react";
import { Button, Card, Table } from "antd";
import { TodoModal, WORK_MODE } from "./components";
import type { Todo } from "./components";
import type { Columns } from "./shared";

type State = {
  open: boolean;
  workMode: WORK_MODE;
};

const App: React.FC = () => {
  const [state, setState] = useState<State>({
    open: false,
    workMode: WORK_MODE.CREATE,
  });

  const handleSubmit = (value: Todo) => {
    console.log(value);
  };

  const columns: Columns<Todo> = [
    {
      title: "",
      dataIndex: "",
    },
  ];

  return (
    <>
      <Card
        title="todo list"
        extra={
          <>
            <Button
              onClick={() =>
                setState({
                  ...state,
                  open: true,
                })
              }
            >
              create Todo
            </Button>
          </>
        }
      >
        <Table columns={columns} dataSource={[]} pagination={false} />
      </Card>
      <TodoModal
        open={state.open}
        workMode={state.workMode}
        onSubmit={handleSubmit}
        onClose={() =>
          setState({
            ...state,
            open: false,
          })
        }
      />
    </>
  );
};

export default App;
