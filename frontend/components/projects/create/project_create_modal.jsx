import React, {useState, useRef, useEffect, useCallback} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProjectCreateModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(prev => !prev)
  };

  if (showModal) {
    return (
      <div className="create-project-modal-background">
        <div className="create-project-modal">
          <div className="close-icon" onClick={openModal}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={openModal}>
          Create Project
        </button>
      </div>
    )
  }


} 


export default ProjectCreateModal;