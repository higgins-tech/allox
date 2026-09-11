document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- Mobile hamburger menu ---------------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  function closeMenu(){
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.classList.toggle('open', isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeMenu();
  });

  /* ---------------- Hero widget amount selector ---------------- */
  const amountRow = document.getElementById('amount-row');
  const userBubble = document.getElementById('user-bubble');
  const chatStatus = document.getElementById('chat-status');

  if (amountRow) {
    amountRow.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        amountRow.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const amount = btn.dataset.amount;
        userBubble.textContent = `Mid Cap, ${amount}`;
        chatStatus.textContent = 'Processing…';
        setTimeout(() => { chatStatus.textContent = 'Ready to assist'; }, 900);
      });
    });
  }

  /* ---------------- Partner logo grid ---------------- */
  const partners = [
    { name: 'BNB Chain', color: '#F0B90B', img: 'img/bnb.png' },
    { name: 'Base', color: '#0052FF', img: 'img/basewallet.png' },
    { name: 'Binance Wallet', color: '#181A20', img: 'img/binance.png' },
    { name: 'TrustWallet', color: '#3375BB', img: 'img/trustwallet.png' },
    { name: 'Gate Wallet', color: '#17B3A0', img: 'img/gate.png' },
    { name: 'Zerra Ventures', color: '#111318', img: 'img/zerra.png' },
    { name: 'XPIN Network', color: '#6D4AFF', img: 'img/xpin.png' },
    { name: 'SWFT Blockchain', color: '#2B8BF2', img: 'img/swft.png' },
    { name: 'Bridgers', color: '#1E3A8A', img: 'img/bridgers.png' },
    { name: 'OKX Wallet', color: '#111318', img: 'img/okx.png' },
    { name: 'PancakeSwap', color: '#3AC38A', img: 'img/pancake.png' },
    { name: 'Simplicity Group', color: '#8C8C8C', img: 'img/simplicity.png' },
    { name: 'ChainGPT', color: '#1F2937', img: 'img/chaingpt.png' },
    { name: 'Oortech', color: '#111318', img: 'img/oortech.png' },
    { name: 'iMe', color: '#2E6BF2', img: 'img/ime.png' },
    { name: 'MoonWhale', color: '#0B1220', img: 'img/moonwhale.png' },
    { name: 'World Mobile', color: '#F2C230', img: 'img/worldmobile.png' },
    { name: 'World of Dypians', color: '#6D4AFF', img: 'img/dypian.png' },
    { name: 'Mansory', color: '#9CA3AF', img: 'img/mansory.png' },
    { name: '4AI', color: '#F0B90B', img: 'img/4ai.png' },
    { name: 'Syndicate', color: '#22C55E', img: 'img/syndicate.png' },
    { name: 'Gate DEX', color: '#2E6BF2', img: 'img/gate.png' }
  ];

  const grid = document.getElementById('logo-grid');
  if (grid) {
    grid.innerHTML = partners.map(p => `
      <div class="logo-item connect-button">
        <div class="logo-icon" style="background:${p.color}">
          <img src="${p.img}" alt="${p.name} logo">
        </div>
        <span>${p.name}</span>
      </div>
    `).join('');
  }

});
