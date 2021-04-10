import React, {useState, useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from 'react-spring';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import ProjectCreateFormContainer from './project_create_form_container';

const ProjectCreateModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(prev => !prev)
  };

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 500
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    };
  };

  const keyPress = useCallback(e => {
    if (e.key === 'Escape' && showModal ) {
      setShowModal(false);
    }
  }, [setShowModal, showModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  if (showModal) {
    return (
      <div className="create-project-modal-background" ref={modalRef} onClick={closeModal}>
        <animated.div style={animation}>
          <div className="create-project-modal">
            <div>
              <div className="close-icon" onClick={openModal}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <ProjectCreateFormContainer />
          </div>
        </animated.div>
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