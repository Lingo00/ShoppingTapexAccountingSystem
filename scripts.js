// إدارة المستخدمين
const userModule = {
    users: [
        { name: 'محمد أحمد', email: 'mohammed@example.com', role: 'مدير' },
        { name: 'أحمد علي', email: 'ahmed@example.com', role: 'موظف' },
    ],
    displayUsers: function () {
        const userList = document.getElementById('user-list');
        userList.innerHTML = '';
        this.users.forEach((user, index) => {
            userList.innerHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.role}</td>
                    <td>
                        <button onclick="userModule.editUser(${index})">تعديل</button>
                        <button onclick="userModule.deleteUser(${index})">حذف</button>
                    </td>
                </tr>
            `;
        });
    },
    addUser: function () {
        const name = prompt('أدخل اسم المستخدم:');
        const email = prompt('أدخل البريد الإلكتروني:');
        const role = prompt('أدخل الصلاحية:');
        if (name && email && role) {
            this.users.push({ name, email, role });
            this.displayUsers();
        }
    },
    editUser: function (index) {
        const user = this.users[index];
        const name = prompt('أدخل اسم المستخدم:', user.name);
        const email = prompt('أدخل البريد الإلكتروني:', user.email);
        const role = prompt('أدخل الصلاحية:', user.role);
        if (name && email && role) {
            this.users[index] = { name, email, role };
            this.displayUsers();
        }
    },
    deleteUser: function (index) {
        if (confirm('هل تريد حذف المستخدم؟')) {
            this.users.splice(index, 1);
            this.displayUsers();
        }
    },
};

// تبديل الوضع الليلي
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// عرض وإخفاء الصفحات
function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// رسم الرسم البياني
const ctx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو'],
        datasets: [{
            label: 'الإيرادات الشهرية',
            data: [12000, 15000, 13000, 17000, 19000],
            backgroundColor: 'rgba(255, 215, 0, 0.2)',
            borderColor: 'rgba(255, 215, 0, 1)',
            borderWidth: 2,
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        },
    },
});

// عرض المستخدمين عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    userModule.displayUsers();
});
