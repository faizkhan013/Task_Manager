$(document).ready(function() {
    let tasks = [];
  
    // Add Task
    $('#add-task-btn').click(function() {
      const taskName = $('#task-name').val();
      const taskPriority = $('#task-priority').val();
      const taskDeadline = $('#task-deadline').val();
  
      if (taskName) {
        const task = {
          id: Date.now(),
          name: taskName,
          priority: taskPriority,
          deadline: taskDeadline,
          isCompleted: false
        };
        tasks.push(task);
        renderTasks();
        updateAnalytics();
      }
    });
  
    // Mark Task as Complete
    $('#tasks').on('click', '.complete-btn', function() {
      const taskId = $(this).data('id');
      tasks = tasks.map(task =>
        task.id === taskId ? { ...task, isCompleted: true } : task
      );
      renderTasks();
      updateAnalytics();
    });
  
    // Delete Task
    $('#tasks').on('click', '.delete-btn', function() {
      const taskId = $(this).data('id');
      tasks = tasks.filter(task => task.id !== taskId);
      renderTasks();
      updateAnalytics();
    });
  
    // Render Tasks
    function renderTasks() {
      $('#tasks').empty();
      tasks.forEach(task => {
        const taskItem = `<li class="task-item ${task.isCompleted ? 'completed' : ''}">
          <span>${task.name} - ${task.priority} - ${task.deadline}</span>
          <button class="complete-btn" data-id="${task.id}">Complete</button>
          <button class="delete-btn" data-id="${task.id}">Delete</button>
        </li>`;
        $('#tasks').append(taskItem);
      });
    }
  
    // Update Analytics
    function updateAnalytics() {
      const completedCount = tasks.filter(task => task.isCompleted).length;
      const pendingCount = tasks.length - completedCount;
      $('#completed-count').text(completedCount);
      $('#pending-count').text(pendingCount);
    }
  });
  