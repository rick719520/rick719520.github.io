document.addEventListener('DOMContentLoaded', function() {
  // 为卡片添加鼠标悬停效果
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    // 为每个卡片添加数据索引，用于自定义样式
    card.setAttribute('data-index', index);
    
    // 添加鼠标进入效果
    card.addEventListener('mouseenter', function() {
      this.classList.add('hovered');
    });
    
    // 添加鼠标离开效果
    card.addEventListener('mouseleave', function() {
      this.classList.remove('hovered');
    });
  });
  
  // 修复图标显示问题
  function fixIcons() {
    const icons = document.querySelectorAll('.bx');
    icons.forEach(icon => {
      icon.style.display = 'inline-block';
      icon.style.visibility = 'visible';
    });
  }
  
  // 运行图标修复
  fixIcons();
  setTimeout(fixIcons, 500);
  
  // 添加滚动动画效果
  function revealOnScroll() {
    const elements = document.querySelectorAll('.bento-grid .card');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        element.classList.add('revealed');
      }
    });
  }
  
  // 初始检查
  revealOnScroll();
  
  // 滚动时检查
  window.addEventListener('scroll', revealOnScroll);
}); 