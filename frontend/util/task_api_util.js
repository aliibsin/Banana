
export const fetchTasks = () => {
  return (
    $.ajax({
      method: "GET",
      url:  "api/tasks"
    })
  );
};

export const fetchTask = taskId => {
  return (
    $.ajax({
      method: "GET",
      url: `api/tasks/${taskId}`
    })
  );
};

export const createTask = task => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/tasks',
      data: {task}
    })
  );
};

export const updateTask = task => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `/api/tasks/${task.id}`,
      data: {task}
    })
  );
};

export const deleteTask = taskId => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/tasks/${taskId}`
    })
  );
};