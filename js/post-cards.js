// 文章卡片交互脚本
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有文章卡片
  const cards = document.querySelectorAll('.post-card');
  
  // 为每个卡片添加交互效果
  cards.forEach((card, index) => {
    // 确保卡片有正确的数据索引
    if (!card.hasAttribute('data-index')) {
      card.setAttribute('data-index', index);
    }
    
    // 添加鼠标进入效果
    card.addEventListener('mouseenter', function() {
      this.classList.add('hovered');
      
      // 显示卡片的网格背景和边框
      const pattern = this.querySelector('.card-pattern');
      const border = this.querySelector('.card-border');
      
      if (pattern) pattern.style.opacity = '0.8';
      if (border) border.style.opacity = '1';
      
      // 添加标题悬停效果
      const title = this.querySelector('.post-title');
      if (title) {
        title.style.color = getIconColor(index);
      }
      
      // 添加标签悬停效果
      const tags = this.querySelectorAll('.card-tag');
      const color = getIconColor(index);
      tags.forEach(tag => {
        tag.style.color = color;
      });
      
      // 添加图标悬停效果
      const icon = this.querySelector('.icon-wrapper i');
      if (icon) {
        icon.style.transform = 'scale(1.1)';
      }
    });
    
    // 添加鼠标离开效果
    card.addEventListener('mouseleave', function() {
      this.classList.remove('hovered');
      
      // 隐藏卡片的网格背景和边框
      const pattern = this.querySelector('.card-pattern');
      const border = this.querySelector('.card-border');
      
      if (pattern) pattern.style.opacity = '0';
      if (border) border.style.opacity = '0';
      
      // 恢复标题颜色
      const title = this.querySelector('.post-title');
      if (title) {
        title.style.color = '';
      }
      
      // 恢复标签颜色
      const tags = this.querySelectorAll('.card-tag');
      tags.forEach(tag => {
        tag.style.color = '';
      });
      
      // 恢复图标效果
      const icon = this.querySelector('.icon-wrapper i');
      if (icon) {
        icon.style.transform = '';
      }
    });
  });
  
  // 根据索引获取图标颜色
  function getIconColor(index) {
    const colors = [
      '#3b82f6', // 蓝色
      '#ec4899', // 粉色
      '#10b981', // 绿色
      '#f59e0b', // 橙色
      '#8b5cf6', // 紫色
      '#ef4444', // 红色
      '#6366f1'  // 靛蓝色
    ];
    
    return colors[index % colors.length];
  }
  
  // 添加滚动显示动画
  function revealOnScroll() {
    const elements = document.querySelectorAll('.bento-grid .card');
    const windowHeight = window.innerHeight;
    
    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const delay = index * 100; // 每个卡片延迟100毫秒显示
      
      if (elementTop < windowHeight - 100) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, delay);
      }
    });
  }
  
  // 初始设置卡片为隐藏状态
  const allCards = document.querySelectorAll('.bento-grid .card');
  allCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // 初始检查
  setTimeout(revealOnScroll, 100);
  
  // 滚动时检查
  window.addEventListener('scroll', revealOnScroll);
  
  // 处理图标显示问题
  function fixIcons() {
    // 尝试加载Boxicons
    if (!document.querySelector('link[href*="boxicons"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
      document.head.appendChild(link);
    }
    
    // 修复图标显示
    const icons = document.querySelectorAll('.bx, .fas');
    icons.forEach(icon => {
      icon.style.display = 'inline-block';
      icon.style.visibility = 'visible';
    });
  }
  
  // 运行图标修复
  fixIcons();
  setTimeout(fixIcons, 500);
}); 