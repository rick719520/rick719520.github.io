// 确保Boxicons图标正确显示的修复脚本
(function() {
  // 检查是否已加载Boxicons
  function checkBoxicons() {
    if (!document.querySelector('link[href*="boxicons"]')) {
      // 如果没有加载，则添加Boxicons样式表
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
      document.head.appendChild(link);
    }
  }
  
  // 修复图标显示问题
  function fixIcons() {
    const icons = document.querySelectorAll('.bx');
    icons.forEach(icon => {
      // 确保图标可见
      icon.style.display = 'inline-block';
      icon.style.visibility = 'visible';
      icon.style.fontFamily = 'boxicons';
    });
  }
  
  // 在DOM加载后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      checkBoxicons();
      fixIcons();
    });
  } else {
    checkBoxicons();
    fixIcons();
  }
  
  // 在页面完全加载后再次执行，确保所有图标都正确显示
  window.addEventListener('load', function() {
    fixIcons();
    // 延迟执行，处理可能的延迟加载内容
    setTimeout(fixIcons, 500);
  });
})(); 