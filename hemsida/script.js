  const btn = document.getElementById('dark-mode-btn');
  // Check localStorage on page load
  if (localStorage.getItem('darkMode') === 'on') {
    document.body.classList.add('dark-mode-btn');
  }

  btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode-btn');
    // Save the state in localStorage
    if (document.body.classList.contains('dark-mode-btn')) {
      localStorage.setItem('darkMode', 'on');
    } else {
      localStorage.setItem('darkMode', 'off');
    }
  });