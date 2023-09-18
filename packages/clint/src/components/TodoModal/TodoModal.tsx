import { Form, Input, Modal } from "antd";

type Props = {
  open: boolean;
  workMode: WORK_MODE;
  onSubmit: (formValue: Todo) => void;
  onClose: () => void;
};

export type Todo = {
  content: string;
};

export enum WORK_MODE {
  CREATE = "CREATE",
  EDIT = "EDIT",
}

export const TodoModal = (props: Props) => {
  const { open, workMode, onSubmit, onClose } = props;

  const [form] = Form.useForm<Todo>();

  const onFinish = async () => {
    let hasError = false;
    try {
      await form.validateFields();
    } catch {
      hasError = true;
    }
    if (hasError) return;
    onSubmit(form.getFieldsValue());
  };

  const title = `${workMode === WORK_MODE.CREATE ? "新增" : "编辑"}todo`;

  return (
    <Form form={form} onFinish={onFinish}>
      <Modal
        open={open}
        title={title}
        footer={<></>}
        onCancel={onClose}
        getContainer={false}
      >
        <Form.Item
          style={{
            marginTop: 20,
          }}
          name="name"
          rules={[{ required: true, message: "请输入代办事项" }]}
        >
          <Input placeholder="输入代办事项 " />
        </Form.Item>
      </Modal>
    </Form>
  );
};
