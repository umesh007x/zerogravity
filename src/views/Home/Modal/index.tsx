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
      onCancel={handleOnCancel}
      onClose={handleOnCancel}
      title="Create Project">
      <CreateProjectForm />
    </Modal>
  );
};

export default CreatProjectModal;
