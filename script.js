document.addEventListener('DOMContentLoaded', () => {
  console.log('نظام التكاليف جاهز للعمل!');

  // إضافة وظائف تفاعلية
  document.querySelectorAll('.menu-item a').forEach(link => {
    link.addEventListener('click', () => {
      console.log(`تم النقر على ${link.textContent}`);
    });
  });
});
