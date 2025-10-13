// toast.js（改进版）---------------------------------------------
(function () {
  let container = null;

  /** 确保容器和占位符存在；若不存在就现造一个 **/
  function ensureContainer() {
    if (container) return; // 已经准备好
    let placeholder = document.getElementById('toast-placeholder');

    // 如果作者忘写占位符，就自动创建到 <body> 末尾
    if (!placeholder) {
      placeholder = document.createElement('div');
      placeholder.id = 'toast-placeholder';
      document.body.appendChild(placeholder);
    }

    container = placeholder.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      placeholder.appendChild(container);
    }
  }

  /** 全局函数：随时 showToast */
  window.showToast = function (message, duration = 3000) {
    ensureContainer();               // *** 关键：延迟检查 ***
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<div class="toast-content">
                          <span class="toast-message">${message}</span>
                        </div>`;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hide');
      toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, duration);
  };
})();