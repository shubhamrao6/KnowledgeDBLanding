/* KnowledgeDB API Documentation - Shared JavaScript */

const API_BASE = 'https://fgbpqt2pq6.execute-api.us-east-1.amazonaws.com/prod';
const WS_BASE = 'wss://p417pa2mu2.execute-api.us-east-1.amazonaws.com/prod';

// ===== SIDEBAR BUILDER =====
const LOGO_SVG = '<svg viewBox="0 0 32 32" fill="none"><defs><linearGradient id="lg1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#e74c3c"/><stop offset="100%" stop-color="#ff6b6b"/></linearGradient><linearGradient id="lg2" x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#2c3e50"/><stop offset="100%" stop-color="#e74c3c"/></linearGradient><linearGradient id="lg3" x1="16" y1="2" x2="16" y2="14" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#ff6b6b"/><stop offset="100%" stop-color="#e74c3c" stop-opacity="0.3"/></linearGradient></defs><ellipse cx="16" cy="18" rx="9" ry="3.2" stroke="url(#lg1)" stroke-width="1.6"/><path d="M7 18v7.5c0 1.77 4 3.2 9 3.2s9-1.43 9-3.2V18" stroke="url(#lg1)" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="16" cy="25.5" rx="9" ry="3.2" stroke="url(#lg1)" stroke-width="1.6"/><path d="M7 21.8c0 1.77 4 3.2 9 3.2s9-1.43 9-3.2" stroke="url(#lg2)" stroke-width="1" stroke-linecap="round" opacity="0.45"/><path d="M16 14.8 L16 6" stroke="url(#lg3)" stroke-width="1.5" stroke-linecap="round"/><path d="M16 11.5 L11 7.5" stroke="url(#lg3)" stroke-width="1.2" stroke-linecap="round"/><circle cx="10" cy="6.8" r="1.5" fill="url(#lg1)" opacity="0.85"/><path d="M16 11.5 L21 7.5" stroke="url(#lg3)" stroke-width="1.2" stroke-linecap="round"/><circle cx="22" cy="6.8" r="1.5" fill="url(#lg1)" opacity="0.85"/><circle cx="16" cy="4.5" r="2" fill="url(#lg1)"/><path d="M10 6.8 L6.5 4" stroke="url(#lg2)" stroke-width="0.9" stroke-linecap="round" opacity="0.5"/><circle cx="5.8" cy="3.3" r="1" fill="url(#lg2)" opacity="0.55"/><path d="M22 6.8 L25.5 4" stroke="url(#lg2)" stroke-width="0.9" stroke-linecap="round" opacity="0.5"/><circle cx="26.2" cy="3.3" r="1" fill="url(#lg2)" opacity="0.55"/><circle cx="12.5" cy="18" r="1" fill="#ff6b6b" opacity="0.7"/><circle cx="19.5" cy="18" r="1" fill="#e74c3c" opacity="0.7"/></svg>';

function buildSidebarHeader() {
  document.querySelectorAll('.sidebar-header').forEach(el => {
    el.innerHTML = `
      <a href="index.html" class="sidebar-logo">
        <div class="logo-icon">${LOGO_SVG}</div>
        <span class="logo-text">KnowledgeDB</span>
        <span class="logo-badge">API</span>
      </a>
    `;
  });
}

function buildTopBar() {
  document.querySelectorAll('.top-bar').forEach(el => {
    const pageTitle = el.getAttribute('data-title') || el.querySelector('.top-bar-title')?.textContent || '';
    const isHome = pageTitle === 'API Reference';
    el.innerHTML = `
      <div class="top-bar-left">
        <div class="top-bar-breadcrumb">
          <a href="index.html">Docs</a>
          ${!isHome ? `<span class="breadcrumb-sep">/</span><span class="breadcrumb-current">${pageTitle}</span>` : '<span class="breadcrumb-sep">/</span><span class="breadcrumb-current">Overview</span>'}
        </div>
      </div>
      <div class="top-bar-right">
        <a href="index.html" class="top-bar-link"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><span>API Ref</span></a>
        <a href="https://knowledgedb.dev" target="_blank" class="top-bar-link"><svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span>KnowledgeDB.dev</span></a>
        <div class="top-bar-divider"></div>
        <button class="theme-toggle" onclick="toggleTheme()" title="Toggle light/dark mode" id="theme-toggle-btn">
          <svg viewBox="0 0 24 24" id="theme-icon-sun" style="display:none"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg viewBox="0 0 24 24" id="theme-icon-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <span id="auth-indicator" class="auth-indicator logged-out"><span class="auth-dot"></span>Not logged in</span>
      </div>
    `;
  });
}

function buildSidebar() {
  const el = document.getElementById('sidebar-nav');
  if (!el) return;

  const sections = [
    { title: 'Getting Started', links: [
      { href: 'index.html', icon: 'book', label: 'Overview' },
      { href: 'index.html#health', icon: 'checkCircle', label: 'Health Check', method: 'get' },
    ]},
    { title: 'Authentication', links: [
      { href: 'auth.html', icon: 'lock', label: 'Auth Overview' },
      { href: 'auth.html#signup', icon: 'userPlus', label: 'Sign Up', method: 'post' },
      { href: 'auth.html#login', icon: 'logIn', label: 'Login', method: 'post' },
      { href: 'auth.html#refresh', icon: 'rotateCw', label: 'Refresh Token', method: 'post' },
      { href: 'auth.html#logout', icon: 'logOut', label: 'Logout', method: 'post' },
    ]},
    { title: 'Knowledge Bases', links: [
      { href: 'knowledgedbs.html', icon: 'database', label: 'KnowledgeDBs Overview' },
      { href: 'knowledgedbs.html#create', icon: 'filePlus', label: 'Create', method: 'post' },
      { href: 'knowledgedbs.html#list', icon: 'list', label: 'List', method: 'get' },
      { href: 'knowledgedbs.html#delete', icon: 'trash', label: 'Delete', method: 'delete' },
    ]},
    { title: 'Documents', links: [
      { href: 'documents.html', icon: 'file', label: 'Documents Overview' },
      { href: 'documents.html#upload', icon: 'upload', label: 'Upload', method: 'post' },
      { href: 'documents.html#generate', icon: 'sparkles', label: 'Generate', method: 'post' },
      { href: 'documents.html#list', icon: 'list', label: 'List', method: 'get' },
      { href: 'documents.html#get', icon: 'eye', label: 'Get Document', method: 'get' },
      { href: 'documents.html#delete', icon: 'trash', label: 'Delete', method: 'delete' },
      { href: 'documents.html#reindex', icon: 'refresh', label: 'Reindex', method: 'post' },
    ]},
    { title: 'Search', links: [
      { href: 'search.html', icon: 'search', label: 'RAG Search', method: 'post' },
    ]},
    { title: 'Images', links: [
      { href: 'images.html', icon: 'image', label: 'Images Overview' },
      { href: 'images.html#generate', icon: 'sparkles', label: 'Generate', method: 'post' },
      { href: 'images.html#upload', icon: 'upload', label: 'Upload', method: 'post' },
      { href: 'images.html#list', icon: 'list', label: 'List', method: 'get' },
      { href: 'images.html#get', icon: 'eye', label: 'Get Image', method: 'get' },
      { href: 'images.html#delete', icon: 'trash', label: 'Delete', method: 'delete' },
      { href: 'images.html#reindex', icon: 'refresh', label: 'Reindex', method: 'post' },
    ]},
    { title: 'WebSocket', links: [
      { href: 'websocket.html', icon: 'messageCircle', label: 'Chat (WebSocket)' },
    ]},
  ];

  let html = '';
  for (const section of sections) {
    html += `<div class="nav-section"><div class="nav-section-title">${section.title}</div>`;
    for (const link of section.links) {
      const methodBadge = link.method
        ? `<span class="nav-method ${link.method}">${link.method === 'delete' ? 'DEL' : link.method.toUpperCase()}</span>`
        : '';
      html += `<a href="${link.href}" class="nav-link"><span class="nav-icon">${icon(link.icon)}</span> ${link.label} ${methodBadge}</a>`;
    }
    html += '</div>';
  }
  el.innerHTML = html;
}

// Token management
function getToken() { return localStorage.getItem('kdb_id_token') || ''; }
function getAccessToken() { return localStorage.getItem('kdb_access_token') || ''; }
function getRefreshToken() { return localStorage.getItem('kdb_refresh_token') || ''; }

function setTokens(data) {
  if (data.idToken) localStorage.setItem('kdb_id_token', data.idToken);
  if (data.accessToken) localStorage.setItem('kdb_access_token', data.accessToken);
  if (data.refreshToken) localStorage.setItem('kdb_refresh_token', data.refreshToken);
  if (data.user) localStorage.setItem('kdb_user', JSON.stringify(data.user));
}

function clearTokens() {
  localStorage.removeItem('kdb_id_token');
  localStorage.removeItem('kdb_access_token');
  localStorage.removeItem('kdb_refresh_token');
  localStorage.removeItem('kdb_user');
}

function isLoggedIn() { return !!getToken(); }

// Code tab switching
function initCodeTabs() {
  document.querySelectorAll('.code-tabs').forEach(tabGroup => {
    const tabs = tabGroup.querySelectorAll('.code-tab');
    const container = tabGroup.parentElement;
    const panels = container.querySelectorAll('.code-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const target = container.querySelector(`#${tab.dataset.target}`);
        if (target) target.classList.add('active');
      });
    });
  });
}

// API request helper
async function apiRequest(method, path, body = null, useAuth = true, isFormData = false) {
  const headers = {};
  if (useAuth) headers['Authorization'] = `Bearer ${getToken()}`;
  if (!isFormData) headers['Content-Type'] = 'application/json';

  const opts = { method, headers };
  if (body) {
    opts.body = isFormData ? body : JSON.stringify(body);
  }

  const res = await fetch(`${API_BASE}${path}`, opts);
  const data = await res.json();
  return { status: res.status, data };
}

// Render response in test panel
function renderResponse(containerId, status, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const isSuccess = status >= 200 && status < 300;
  container.innerHTML = `
    <div class="test-response-header">
      <span class="status-dot ${isSuccess ? 'success' : 'error'}"></span>
      <span style="color: ${isSuccess ? 'var(--green)' : 'var(--red)'}">${status}</span>
      <span style="color: var(--text-muted)">${isSuccess ? 'OK' : 'Error'}</span>
    </div>
    <pre>${syntaxHighlight(JSON.stringify(data, null, 2))}</pre>
  `;
}

function showLoading(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="test-response-header">
      <span class="status-dot loading"></span>
      <span style="color: var(--orange)">Sending request...</span>
    </div>
  `;
}

// JSON syntax highlighting
function syntaxHighlight(json) {
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, match => {
    let cls = 'number';
    if (/^"/.test(match)) {
      cls = /:$/.test(match) ? 'key' : 'string';
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return `<span class="${cls}">${match}</span>`;
  });
}

// Active nav highlighting
function initActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Auth state indicator in top bar
function updateAuthIndicator() {
  const container = document.getElementById('auth-indicator');
  if (!container) return;
  if (isLoggedIn()) {
    const user = JSON.parse(localStorage.getItem('kdb_user') || '{}');
    const name = user.firstName || user.email || 'User';
    container.className = 'auth-indicator logged-in';
    container.innerHTML = `<span class="auth-dot"></span>${name}`;
  } else {
    container.className = 'auth-indicator logged-out';
    container.innerHTML = '<span class="auth-dot"></span>Not logged in';
  }
}

// ===== THEME TOGGLE =====
function getTheme() {
  return localStorage.getItem('kdb_theme') || 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const sun = document.getElementById('theme-icon-sun');
  const moon = document.getElementById('theme-icon-moon');
  if (sun && moon) {
    sun.style.display = theme === 'light' ? 'block' : 'none';
    moon.style.display = theme === 'dark' ? 'block' : 'none';
  }
}

function toggleTheme() {
  const current = getTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('kdb_theme', next);
  applyTheme(next);
}

// Apply saved theme immediately (before DOMContentLoaded to avoid flash)
applyTheme(getTheme());

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  buildSidebarHeader();
  buildTopBar();
  buildSidebar();
  initCodeTabs();
  initActiveNav();
  updateAuthIndicator();
  applyTheme(getTheme());
});
