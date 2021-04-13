import React, {useState, useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from 'react-spring';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



const ProjectDeleteModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const deleteProj = () => {
    props.deleteProject(props.projectId);
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
          <div className="delete-project-modal">
            <div className="close-icon-container">
              <div className="close-icon" onClick={openModal}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <Link to="/home">
              <div className="dd-list-item" onClick={() => deleteProj()}>
                <div>
                  Delete Project
                </div>
              </div>
            </Link>
          </div>
        </animated.div>
      </div>
    )
  }

  const modalButton = () => {
    return (
      <li onClick={openModal} >
        <div>
          Delete Project
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


export default ProjectDeleteModal;