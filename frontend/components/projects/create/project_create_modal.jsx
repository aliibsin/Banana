import React, {useState, useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from 'react-spring';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

import ProjectCreateFormContainer from './project_create_form_container';

const ProjectCreateModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(prev => !prev);
    clearErrs();
  };

  const clearErrs = () => {
    props.errors.projectErr = [];
  }

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 500
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const modalContents = () => {
    return (
      <div className="create-project-modal-background" ref={modalRef} onClick={closeModal}>
        <animated.div style={animation}>
          <div className="create-project-modal">
            <div className="close-icon-container">
              <div className="close-icon" onClick={openModal}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <ProjectCreateFormContainer showModal={showModal} setShowModal={setShowModal}/>
          </div>
        </animated.div>
      </div>
    )
  }

  const modalButton = () => {
    return (
      <li onClick={openModal} className="project-list-element" >
        <div className="project-individual" >
          <div className="project-icon">
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="home-newproject-name">  
            New Project
          </div>
        </div>
      </li>
    )
  }

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
      <div>
        {modalButton()}
        {modalContents()}
      </div>
    )
  } else {
    return (
      modalButton()
    )
  }
} 


export default ProjectCreateModal;