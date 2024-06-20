import React, { FC } from "react";

import { Modal } from "antd";
import CreateProjectForm from "../form";

interface CreatProjectModalProps {
  isOpen: boolean;
  handleOnCancel: () => void;
}

const CreatProjectModal: FC<CreatProjectModalProps> = ({ isOpen, handleOnCancel }) => {
  
  return (
    <Modal
      centered
      open={isOpen}
      footer={null}
      onCancel={handleOnCancel}
      onClose={handleOnCancel}
      title="Create Project">
      <CreateProjectForm handleOnCancel={handleOnCancel} />
    </Modal>
  );
};

export default CreatProjectModal;
