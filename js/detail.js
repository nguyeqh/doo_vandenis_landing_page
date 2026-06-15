
    // ─── DỮ LIỆU TÁC PHẨM ───
  import {books} from "./data.js";
  
const params = new URLSearchParams(window.location.search);
const id = params.get('id');


window.scrollTo({ top: 0, behavior: 'smooth' });
showDetail(id);


 document.querySelector('.detail-back').addEventListener('click', showHome);


  // ─── ĐIỀU HƯỚNG TRANG ───
  function showHome() {
    window.history.back();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


//==== FUNCTION ======

function showDetail(id) {
    const book = books[id];
    if (!book) return;
     // Cover
    document.getElementById('detail-cover').style.background = book.cover;
    document.getElementById('cover-img').src = book.cover;

    // Label & Title
    document.getElementById('detail-label').textContent = book.status === 'published' ? 'Đã xuất bản' : 
      book.status === 'draft' ? 'Chưa xuất bản' : 'Dự án đã tham gia';
    document.getElementById('detail-title').innerHTML = `<em>${book.title}</em>`;

    //Read online
    const readOnline = document.getElementById('read-online');
    if (book.onlineLink.length > 0) {
      const linksHtml = book.onlineLink.map(link =>
        `<a href="${link.url}" class="buy-btn${link.primary ? ' buy-btn-primary' : ''}" target="_blank">
         <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"><path d="M4 6.633c.14-.056.308-.118.503-.181A9.77 9.77 0 0 1 7.5 6a9.77 9.77 0 0 1 2.997.452c.195.063.363.125.503.181v10.88A11.817 11.817 0 0 0 7.5 17c-1.46 0-2.649.248-3.5.513V6.633zm8-1.748a9.257 9.257 0 0 0-.888-.337A11.769 11.769 0 0 0 7.5 4c-1.526 0-2.755.271-3.612.548a8.889 8.889 0 0 0-1.001.389 5.905 5.905 0 0 0-.357.18l-.025.014-.009.005-.003.002h-.001c-.002.002-.247.147-.002.002A1 1 0 0 0 2 6v13a1 1 0 0 0 1.51.86l-.005.003h.001l.002-.001.001-.001.037-.02c.037-.02.098-.05.182-.09.17-.078.43-.188.775-.3A9.77 9.77 0 0 1 7.5 19a9.77 9.77 0 0 1 2.997.451 6.9 6.9 0 0 1 .775.3 3.976 3.976 0 0 1 .223.112m0 0h-.001l-.002-.001-.001-.001c.314.185.704.185 1.018 0l.037-.02c.037-.02.098-.05.182-.09a6.9 6.9 0 0 1 .775-.3A9.77 9.77 0 0 1 16.5 19a9.77 9.77 0 0 1 2.997.451 6.9 6.9 0 0 1 .775.3 3.976 3.976 0 0 1 .219.11A1 1 0 0 0 22 19V6a1 1 0 0 0-.49-.86l-.002-.001h-.001l-.003-.003-.01-.005-.024-.014a5.883 5.883 0 0 0-.357-.18 8.897 8.897 0 0 0-1-.389A11.769 11.769 0 0 0 16.5 4c-1.525 0-2.755.271-3.612.548a9.112 9.112 0 0 0-.888.337m8 1.748v10.88A11.817 11.817 0 0 0 16.5 17c-1.46 0-2.649.248-3.5.513V6.633c.14-.056.308-.118.503-.181A9.77 9.77 0 0 1 16.5 6a9.77 9.77 0 0 1 2.997.452c.195.063.363.125.503.181zm.49.228l.005.002h-.001l-.003-.002zm0 13l.004.002-.002-.002""/></svg>
         Đọc online tại ${link.name}
        </a>`
      ).join('');
      readOnline.innerHTML = `
        <div class="buy-section-title">Đọc online</div>  
        <div class="buy-grid">${linksHtml}</div>
      `;
    } else {
      readOnline.innerHTML = `
        <p style="font-family:var(--font-display);font-style:italic;color:var(--cream-muted);font-size:1.1rem;">
          Tác phẩm này không có bản online.
        </p>
      `;
    }

    // Meta
    const metaEl = document.getElementById('detail-meta');
    metaEl.innerHTML = `
      <div class="detail-meta-item">
        <span class="detail-meta-label">Năm</span>
        <span class="detail-meta-value">${book.year}</span>
      </div>
      <div class="detail-meta-item">
        <span class="detail-meta-label">Thể loại</span>
        <span class="detail-meta-value">${book.genre}</span>
      </div>
      <div class="detail-meta-item">
        <span class="detail-meta-label">Số trang</span>
        <span class="detail-meta-value">${book.pages}</span>
      </div>
      <div class="detail-meta-item">
        <span class="detail-meta-label">NXB</span>
        <span class="detail-meta-value">${book.publisher}</span>
      </div>
    `;

    // Synopsis
    document.getElementById('detail-synopsis').textContent = book.synopsis;
    const container = document.getElementById('detail-synopsis');
    container.innerHTML = book.synopsis
    .split('\n')
    .map(p => `<p>${p.trim()}</p>`)
    .join('');

    // Buy Links
    const buyEl = document.getElementById('buy-section');
    if (book.buyLinks.length > 0) {
      const linksHtml = book.buyLinks.map(link =>
        `<a href="${link.url}" class="buy-btn${link.primary ? ' buy-btn-primary' : ''}" target="_blank">
          <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Mua tại ${link.name}
        </a>`
      ).join('');
      buyEl.innerHTML = `
        <div class="buy-section-title">Mua sách</div>
        <div class="buy-grid">${linksHtml}</div>
      `;
    } else {
      buyEl.innerHTML = `
        <p style="font-family:var(--font-display);font-style:italic;color:var(--cream-muted);font-size:1.1rem;">
          Tác phẩm này chưa được xuất bản. Hãy theo dõi trang để cập nhật sớm nhất.
        </p>
      `;
    }
    
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
