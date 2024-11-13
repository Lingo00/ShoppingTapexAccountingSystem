<html><head><base href="/" />
<meta charset="UTF-8">
<title>النظام المحاسبي شوبنق تابكس</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');

:root {
  --primary: #000000;
  --secondary: #1a1a1a;
  --accent: #ffd700;
  --light: #fffae6;
  --success: #008000;
  --warning: #ffd700;
  --danger: #ff0000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Cairo', sans-serif;
}

body {
  direction: rtl;
  background: var(--light);
}

.navbar {
  background: var(--primary);
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar {
  width: 250px;
  background: var(--secondary);
  height: calc(100vh - 60px);
  position: fixed;
  padding: 1rem;
}

.menu-item {
  color: white;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.menu-item:hover {
  background: var(--accent);
}

.menu-item.active {
  background: var(--accent);
}

.main-content {
  margin-right: 250px;
  margin-bottom: 60px;
  padding: 2rem;
}

.quick-actions {
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-button {
  background: var(--primary);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
}

.action-button:hover {
  background: var(--accent);
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.recent-transactions {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 2rem;
}

.transaction-list {
  margin-top: 1rem;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.transaction-item:last-child {
  border-bottom: none;
}

.notification-panel {
  position: fixed;
  left: 20px;
  bottom: 20px;
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 300px;
}

.button {
  background: var(--accent);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.button:hover {
  opacity: 0.9;
}

.chart-container {
  height: 300px;
  margin: 1rem 0;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.module-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.module-card:hover {
  transform: translateY(-5px);
}

.module-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--primary);
}

.module-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light);
  border-radius: 50%;
}

.module-features {
  list-style: none;
}

.module-features li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--light);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.module-features li:last-child {
  border-bottom: none;
}

.feature-icon {
  color: var(--accent);
}

.module-footer {
  margin-top: 1rem;
  text-align: left;
}

.view-more {
  color: var(--accent);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.view-more:hover {
  text-decoration: underline;
}

.security-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--accent);
}

.security-status i {
  font-size: 1.2rem;
}

.notification-error {
  background: var(--danger) !important;
}

.footer {
  background: var(--primary);
  color: white;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 0.9rem;
}

.footer a {
  color: var(--accent);
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.cost-management-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 1rem;
}

.cost-section {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.cost-type-card {
  background: var(--light);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.cost-metrics {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}

.metric {
  text-align: center;
}

.metric .value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
}

.analysis-summary ul {
  list-style: none;
  padding: 0;
}

.analysis-summary li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--light);
}

.distribution-details table {
  width: 100%;
  border-collapse: collapse;
}

.distribution-details th,
.distribution-details td {
  padding: 0.5rem;
  text-align: right;
  border-bottom: 1px solid var(--light);
}
</style>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>
<body>

<nav class="navbar">
  <h1>النظام المحاسبي شوبنق تابكس</h1>
  <div class="user-info">
    مرحباً، محمد أحمد
    <button class="button">تسجيل خروج</button>
  </div>
  <div class="security-status">
    <i class="fas fa-shield-alt"></i>
    <span id="backup-status">آخر نسخة احتياطية: قبل 2 ساعات</span>
  </div>
</nav>

<aside class="sidebar">
  <div class="menu-item active">لوحة التحكم</div>
  <div class="menu-item">العمليات المحاسبية</div>
  <div class="menu-item">إدارة الحسابات</div>
  <div class="menu-item">الفواتير والمدفوعات</div>
  <div class="menu-item">رواتب الموظفين</div>
  <div class="menu-item">المبيعات</div>
  <div class="menu-item">المشتريات</div>
  <div class="menu-item">إدارة المخزون</div>
  <div class="menu-item">الأصناف</div>
  <div class="menu-item">التقارير المالية</div>
  <div class="menu-item">إدارة الضرائب</div>
  <div class="menu-item">التحليلات المالية</div>
  <div class="menu-item">إعدادات النظام</div>
  <div class="menu-item">حساب تكلفة الإنتاج</div>
  <div class="menu-item">الأمان والصلاحيات</div>
  <div class="menu-item active">إدارة التكاليف</div>
</aside>

<main class="main-content">
  <div class="quick-actions">
    <button class="action-button">
      <i class="fas fa-plus"></i>
      إضافة معاملة جديدة
    </button>
    <button class="action-button">
      <i class="fas fa-users"></i>
      إدارة الموظفين
    </button>
    <button class="action-button">
      <i class="fas fa-shopping-cart"></i>
      تسجيل مبيعات
    </button>
    <button class="action-button">
      <i class="fas fa-truck"></i>
      طلب مشتريات
    </button>
    <button class="action-button">
      <i class="fas fa-boxes"></i>
      فحص المخزون
    </button>
    <button class="action-button">
      <i class="fas fa-calculator"></i>
      إدارة التكاليف
    </button>
  </div>

  <div class="stats-row">
    <div class="stat-card">
      <h3>إجمالي الرواتب</h3>
      <div class="stat-value">﷼45,000</div>
      <div class="stat-change">ثابت عن الشهر السابق</div>
    </div>
    <div class="stat-card">
      <h3>المبيعات اليومية</h3>
      <div class="stat-value">﷼12,500</div>
      <div class="stat-change">+8% عن أمس</div>
    </div>
    <div class="stat-card">
      <h3>قيمة المخزون</h3>
      <div class="stat-value">﷼230,000</div>
      <div class="stat-change">-2% عن الأسبوع السابق</div>
    </div>
    <div class="stat-card">
      <h3>المشتريات الشهرية</h3>
      <div class="stat-value">﷼85,000</div>
      <div class="stat-change">+15% عن الشهر السابق</div>
    </div>
    <div class="stat-card">
      <h3>متوسط تكلفة الإنتاج</h3>
      <div class="stat-value">﷼320/وحدة</div>
      <div class="stat-change">-5% عن الشهر السابق</div>
    </div>
    <div class="stat-card">
      <h3>متوسط التكاليف</h3>
      <div class="stat-value">﷼280/وحدة</div>
      <div class="stat-change">-3% عن الشهر السابق</div>
    </div>
  </div>

  <div class="dashboard-grid">
    <div class="card">
      <h3>إجمالي الإيرادات</h3>
      <div class="chart-container">
        <canvas id="revenueChart"></canvas>
      </div>
    </div>
    
    <div class="card">
      <h3>المصروفات الشهرية</h3>
      <div class="chart-container">
        <canvas id="expensesChart"></canvas>
      </div>
    </div>
    
    <div class="card">
      <h3>الفواتير المستحقة</h3>
      <div class="chart-container">
        <canvas id="invoicesChart"></canvas>
      </div>
    </div>
    
    <div class="card">
      <h3>تحليل تكاليف الإنتاج</h3>
      <div class="chart-container">
        <canvas id="productionCostChart"></canvas>
      </div>
    </div>
  </div>

  <h2>الوحدات الرئيسية للنظام</h2>
  
  <div class="grid-container">
    <div class="module-card">
      <div class="module-header">
        <div class="module-icon">
          <i class="fas fa-money-check-alt"></i>
        </div>
        <h3>إدارة الحسابات المالية</h3>
      </div>
      <ul class="module-features">
        <li><i class="fas fa-check feature-icon"></i> الحسابات العامة</li>
        <li><i class="fas fa-check feature-icon"></i> الحسابات المدينة والدائنة</li>
        <li><i class="fas fa-check feature-icon"></i> إدارة الفواتير</li>
      </ul>
      <div class="module-footer">
        <a href="https://example.com/accounts" class="view-more">
          عرض التفاصيل <i class="fas fa-arrow-left"></i>
        </a>
      </div>
    </div>
    
    <div class="module-card">
      <div class="module-header">
        <div class="module-icon">
          <i class="fas fa-calculator"></i>
        </div>
        <h3>إدارة التكاليف</h3>
      </div>
      <ul class="module-features">
        <li><i class="fas fa-check feature-icon"></i> تكاليف المواد الخام</li>
        <li><i class="fas fa-check feature-icon"></i> تكاليف العمالة</li>
        <li><i class="fas fa-check feature-icon"></i> التكاليف العامة</li>
      </ul>
      <div class="module-footer">
        <a href="https://example.com/costs" class="view-more">
          عرض التفاصيل <i class="fas fa-arrow-left"></i>
        </a>
      </div>
    </div>

    <div class="module-card">
      <div class="module-header">
        <div class="module-icon">
          <i class="fas fa-industry"></i>
        </div>
        <h3>حساب تكلفة الإنتاج</h3>
      </div>
      <ul class="module-features">
        <li><i class="fas fa-check feature-icon"></i> التكاليف الثابتة والمتغيرة</li>
        <li><i class="fas fa-check feature-icon"></i> العمليات الإنتاجية</li>
        <li><i class="fas fa-check feature-icon"></i> تكاليف الإنتاج النهائي</li>
      </ul>
      <div class="module-footer">
        <a href="https://example.com/production-costs" class="view-more">
          عرض التفاصيل <i class="fas fa-arrow-left"></i>
        </a>
      </div>
    </div>

    <div class="module-card">
      <div class="module-header">
        <div class="module-icon">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h3>الأمان والصلاحيات</h3>
      </div>
      <ul class="module-features">
        <li><i class="fas fa-check feature-icon"></i> إدارة المستخدمين</li>
        <li><i class="fas fa-check feature-icon"></i> الصلاحيات والأدوار</li>
        <li><i class="fas fa-check feature-icon"></i> النسخ الاحتياطي</li>
      </ul>
      <div class="module-footer">
        <a href="https://example.com/security" class="view-more">
          عرض التفاصيل <i class="fas fa-arrow-left"></i>
        </a>
      </div>
    </div>

    <div class="module-card">
      <div class="module-header">
        <div class="module-icon">
          <i class="fas fa-calculator"></i>
        </div>
        <h3>نظام التكاليف</h3>
      </div>
      <ul class="module-features">
        <li><i class="fas fa-check feature-icon"></i> تكاليف المواد المباشرة</li>
        <li><i class="fas fa-check feature-icon"></i> تكاليف العمالة المباشرة</li>
        <li><i class="fas fa-check feature-icon"></i> التكاليف الصناعية غير المباشرة</li>
        <li><i class="fas fa-check feature-icon"></i> تحليل الانحرافات</li>
        <li><i class="fas fa-check feature-icon"></i> تقارير التكاليف</li>
      </ul>
      <div class="module-footer">
        <a href="https://example.com/cost-system" class="view-more">
          عرض التفاصيل <i class="fas fa-arrow-left"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="recent-transactions">
    <h3>آخر المعاملات</h3>
    <div class="transaction-list">
      <div class="transaction-item">
        <span>فاتورة مبيعات #1234</span>
        <span>﷼5,000</span>
        <span>2024/01/15</span>
        <span class="status success">مدفوعة</span>
      </div>
      <div class="transaction-item">
        <span>مصروفات تشغيلية</span>
        <span>﷼2,500</span>
        <span>2024/01/14</span>
        <span class="status warning">معلقة</span>
      </div>
      <div class="transaction-item">
        <span>رواتب الموظفين</span>
        <span>﷼15,000</span>
        <span>2024/01/13</span>
        <span class="status success">مدفوعة</span>
      </div>
    </div>
  </div>

  <div class="recent-transactions">
    <h3>حركة المخزون الأخيرة</h3>
    <div class="transaction-list">
      <div class="transaction-item">
        <span>استلام بضاعة #458</span>
        <span>200 وحدة</span>
        <span>2024/01/15</span>
        <span class="status success">تم الاستلام</span>
      </div>
      <div class="transaction-item">
        <span>طلب شراء #789</span>
        <span>150 وحدة</span>
        <span>2024/01/14</span>
        <span class="status warning">قيد التنفيذ</span>
      </div>
      <div class="transaction-item">
        <span>جرد مخزون</span>
        <span>1500 صنف</span>
        <span>2024/01/13</span>
        <span class="status success">مكتمل</span>
      </div>
    </div>
  </div>
  
  <div id="cost-management-page" class="page-content" style="display:none">
    <h2>نظام إدارة التكاليف</h2>
    
    <div class="cost-management-grid">
      <div class="cost-section">
        <h3>تحديد أنواع التكاليف</h3>
        <div class="cost-types">
          <div class="cost-type-card">
            <h4>التكاليف المباشرة</h4>
            <ul>
              <li>المواد الخام</li>
              <li>الأجور المباشرة</li>
              <li>تكاليف التصنيع المباشرة</li>
            </ul>
          </div>
          <div class="cost-type-card">
            <h4>التكاليف غير المباشرة</h4>
            <ul>
              <li>الإيجارات</li>
              <li>الكهرباء والماء</li>
              <li>المصروفات العمومية</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="cost-section">
        <h3>تتبع التكاليف</h3>
        <div class="cost-tracking">
          <canvas id="costTrackingChart"></canvas>
          <div class="cost-metrics">
            <div class="metric">
              <h4>تكلفة الوحدة</h4>
              <span class="value">﷼320</span>
            </div>
            <div class="metric">
              <h4>إجمالي التكاليف</h4>
              <span class="value">﷼45,000</span>
            </div>
          </div>
        </div>
      </div>

      <div class="cost-section">
        <h3>تحليل التكاليف</h3>
        <div class="cost-analysis">
          <canvas id="costAnalysisChart"></canvas>
          <div class="analysis-summary">
            <h4>نقاط التحسين</h4>
            <ul>
              <li>تخفيض تكاليف المواد الخام</li>
              <li>تحسين كفاءة العمالة</li>
              <li>ترشيد استهلاك الطاقة</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="cost-section">
        <h3>توزيع التكاليف</h3>
        <div class="cost-distribution">
          <canvas id="costDistributionChart"></canvas>
          <div class="distribution-details">
            <table>
              <tr><th>القسم</th><th>النسبة</th><th>القيمة</th></tr>
              <tr><td>الإنتاج</td><td>40%</td><td>﷼18,000</td></tr>
              <tr><td>التسويق</td><td>25%</td><td>﷼11,250</td></tr>
              <tr><td>الإدارة</td><td>35%</td><td>﷼15,750</td></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<div class="notification-panel">
  <h4>التنبيهات</h4>
  <ul>
    <li>موعد صرف الرواتب بعد 3 أيام</li>
    <li>5 أصناف وصلت للحد الأدنى</li>
    <li>طلبات شراء تنتظر الموافقة</li>
    <li>تحديث كشف الرواتب مطلوب</li>
  </ul>
</div>

<footer class="footer">
  جميع الحقوق محفوظة © 2024 - النظام المحاسبي شوبنق تابكس | تطوير: عزام <a href="tel:+967777007199">00967777007199</a>
</footer>

<script>
// Add this function to the existing script section, near the top of the script
function showNotification(message, type = 'info') {
  // Create notification element
  const notificationPanel = document.querySelector('.notification-panel');
  const notificationList = notificationPanel.querySelector('ul') || document.createElement('ul');
  
  // Create new notification list item
  const notificationItem = document.createElement('li');
  notificationItem.textContent = message;
  
  // Add type-based styling
  notificationItem.className = type === 'error' ? 'notification-error' : '';
  
  // Add to list and panel
  notificationList.appendChild(notificationItem);
  
  // If list is not already in panel, add it
  if (!notificationPanel.contains(notificationList)) {
    notificationPanel.appendChild(notificationList);
  }
  
  // Auto-remove notification after 5 seconds
  setTimeout(() => {
    notificationItem.remove();
  }, 5000);
}

// Unified Security Module with Enhanced Permissions and Logging
const securityModule = {
  // Core Permission Management
  checkPermission: function(action) {
    // Always return true to grant full access
    return true;
  },

  // Comprehensive Backup System
  createBackup: function() {
    const timestamp = new Date().toISOString();
    const data = {
      transactions: {
        revenue: charts.revenue.data,
        expenses: charts.expenses.data
      },
      inventory: document.querySelector('.stat-card:nth-child(3) .stat-value').textContent,
      timestamp: timestamp
    };
    localStorage.setItem(`backup_${timestamp}`, JSON.stringify(data));
    showNotification('تم إنشاء نسخة احتياطية بنجاح');
  },

  // Automatic Backup Initialization
  initAutoBackup: function() {
    // More frequent backups with full access
    setInterval(this.createBackup, 2 * 60 * 60 * 1000); // Every 2 hours
  },

  // Comprehensive Action Logging
  logAction: function(action, details) {
    const actionLog = {
      timestamp: new Date().toISOString(),
      action: action,
      details: details,
      userRole: 'admin'
    };
    console.log('System Action Log:', actionLog);
  },

  // Full System Access Configuration
  initFullAccess: function() {
    // Set global admin role
    localStorage.setItem('userRole', 'admin');

    // Override permission checks for all buttons
    document.querySelectorAll('.action-button, .menu-item').forEach(element => {
      element.addEventListener('click', (e) => {
        this.logAction('user_interaction', element.textContent);
        showNotification('تم تنفيذ العملية بكامل الصلاحيات');
      });
    });
  }
};

// Initialize Full System Access
securityModule.initFullAccess();
securityModule.initAutoBackup();


// تهيئة الرسوم البيانية
const charts = {
  revenue: new Chart(document.getElementById('revenueChart'), {
    type: 'line',
    data: {
      labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
      datasets: [{
        label: 'المبيعات',
        data: [120000, 190000, 150000, 250000, 220000, 300000],
        borderColor: '#2ecc71',
        tension: 0.1
      }, {
        label: 'المشتريات',
        data: [80000, 120000, 90000, 150000, 130000, 180000],
        borderColor: '#e74c3c',
        tension: 0.1
      }]
    }
  }),

  expenses: new Chart(document.getElementById('expensesChart'), {
    type: 'bar',
    data: {
      labels: ['رواتب', 'مشتريات', 'مصاريف تشغيلية', 'صيانة', 'إيجارات', 'أخرى'],
      datasets: [{
        label: 'المصروفات',
        data: [45000, 85000, 25000, 15000, 30000, 10000],
        backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6', '#95a5a6']
      }]
    }
  }),

  invoices: new Chart(document.getElementById('invoicesChart'), {
    type: 'doughnut',
    data: {
      labels: ['متوفر', 'الحد الأدنى', 'نفذت'],
      datasets: [{
        data: [70, 20, 10],
        backgroundColor: ['#2ecc71', '#f1c40f', '#e74c3c']
      }]
    }
  }),

  productionCost: new Chart(document.getElementById('productionCostChart'), {
    type: 'bar',
    data: {
      labels: ['مواد خام', 'عمالة', 'طاقة', 'صيانة', 'نقل', 'تكاليف ثابتة'],
      datasets: [{
        label: 'تكاليف الإنتاج',
        data: [12000, 8000, 4000, 3000, 2000, 6000],
        backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6', '#95a5a6']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'توزيع تكاليف الإنتاج'
        }
      }
    }
  })
};

// إضافة التفاعلية للقائمة
const costManagementMenuItem = Array.from(document.querySelectorAll('.menu-item'))
  .find(item => item.textContent.trim() === 'إدارة التكاليف');

if (costManagementMenuItem) {
  costManagementMenuItem.addEventListener('click', () => {
    // Hide main content and show cost management page
    document.querySelector('.main-content').style.display = 'none';
    
    // Ensure the cost management page is visible and fully populated
    const costManagementPage = document.getElementById('cost-management-page');
    costManagementPage.style.display = 'block';
    
    // Initialize charts and content for each section
    initializeCostManagementSections();
  });
}

// Function to initialize all cost management sections
function initializeCostManagementSections() {
  // 1. Cost Types Section
  initializeCostTypesSection();
  
  // 2. Cost Tracking Section
  initializeCostTrackingSection();
  
  // 3. Cost Analysis Section
  initializeCostAnalysisSection();
  
  // 4. Cost Distribution Section
  initializeCostDistributionSection();
}

// Detailed initialization for each section
function initializeCostTypesSection() {
  const costTypesContainer = document.querySelector('#cost-management-page .cost-types');
  costTypesContainer.innerHTML = `
    <div class="cost-type-card">
      <h4>التكاليف الثابتة</h4>
      <ul>
        <li>الإيجار</li>
        <li>التأمين</li>
        <li>الرواتب الأساسية</li>
        <li>الصيانة الدورية</li>
      </ul>
    </div>
    <div class="cost-type-card">
      <h4>التكاليف المتغيرة</h4>
      <ul>
        <li>المواد الخام</li>
        <li>الأجور المباشرة</li>
        <li>استهلاك الطاقة</li>
        <li>مصاريف النقل</li>
      </ul>
    </div>
  `;
}

function initializeCostTrackingSection() {
  // Create a new chart for cost tracking
  const costTrackingChart = new Chart(document.getElementById('costTrackingChart'), {
    type: 'line',
    data: {
      labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
      datasets: [{
        label: 'التكاليف الثابتة',
        data: [50000, 50000, 50000, 50000, 50000, 50000],
        borderColor: '#3498db',
        fill: false
      }, {
        label: 'التكاليف المتغيرة',
        data: [30000, 35000, 32000, 38000, 36000, 40000],
        borderColor: '#e74c3c',
        fill: false
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'تتبع التكاليف الشهرية'
      }
    }
  });
}

function initializeCostAnalysisSection() {
  // Create a chart for cost analysis
  const costAnalysisChart = new Chart(document.getElementById('costAnalysisChart'), {
    type: 'radar',
    data: {
      labels: ['المواد الخام', 'القوى العاملة', 'الطاقة', 'الصيانة', 'النقل'],
      datasets: [{
        label: 'التكلفة الحالية',
        data: [40, 30, 15, 10, 5],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: '#3498db',
        pointBackgroundColor: '#3498db'
      }, {
        label: 'التكلفة المستهدفة',
        data: [35, 25, 12, 8, 4],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#e74c3c',
        pointBackgroundColor: '#e74c3c'
      }]
    },
    options: {
      title: {
        display: true,
        text: 'تحليل التكاليف التفصيلي'
      }
    }
  });

  // Update analysis summary
  const analysisSummary = document.querySelector('.analysis-summary ul');
  analysisSummary.innerHTML = `
    <li>تخفيض تكلفة المواد الخام بنسبة 12%</li>
    <li>تحسين كفاءة القوى العاملة</li>
    <li>ترشيد استهلاك الطاقة</li>
    <li>تقليل تكاليف الصيانة</li>
  `;
}

function initializeCostDistributionSection() {
  // Create a pie chart for cost distribution
  const costDistributionChart = new Chart(document.getElementById('costDistributionChart'), {
    type: 'pie',
    data: {
      labels: ['الإنتاج', 'التسويق', 'الإدارة', 'البحث والتطوير'],
      datasets: [{
        data: [45, 20, 25, 10],
        backgroundColor: [
          '#3498db',  // Production
          '#e74c3c',  // Marketing
          '#2ecc71',  // Administration
          '#f1c40f'   // R&D
        ]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'توزيع التكاليف حسب الأقسام'
      }
    }
  });

  // Update distribution details table
  const distributionTable = document.querySelector('.distribution-details table');
  distributionTable.innerHTML = `
    <tr><th>القسم</th><th>النسبة</th><th>القيمة</th></tr>
    <tr><td>الإنتاج</td><td>45%</td><td>﷼22,500</td></tr>
    <tr><td>التسويق</td><td>20%</td><td>﷼10,000</td></tr>
    <tr><td>الإدارة</td><td>25%</td><td>﷼12,500</td></tr>
    <tr><td>البحث والتطوير</td><td>10%</td><td>﷼5,000</td></tr>
  `;
}
</script>
</body></html>
