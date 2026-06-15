
  document.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.id;
      window.location.href = 'book_detail.html?id='+id;
    });
  });
  

  document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      switchTab(tab);
    });
  });


  // ─── ĐIỀU HƯỚNG TRANG ───
  function showHome() {
    window.location.href = 'home.html';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ─── TABS ───
  function switchTab(which) {
    const panels = { 
      published: 'tab-published', 
      draft: 'tab-draft',
      project: 'tab-project'
     };

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

    // document.getElementById(panels[which]).classList.add('active');

    // const buttons = document.querySelectorAll('.tab-btn');
    // const idx = which === 'published' ? 0 : 1;
    // buttons[idx].classList.add('active');

     // active panel
    const panel = document.getElementById(panels[which]);
    if (panel) panel.classList.add('active');

    // active button (không dùng index)
    document.querySelectorAll('.tab-btn').forEach(btn => {
      if (btn.dataset.tab === which) {
        btn.classList.add('active');
      }
    });
  }