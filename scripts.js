document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const formToShow = tab.dataset.form;
        document.querySelector('.login-form').style.display = formToShow === 'login' ? 'block' : 'none';
        document.querySelector('.register-form').style.display = formToShow === 'register' ? 'block' : 'none';
    });
});

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        if (email && password) {
            if (form.classList.contains('login-form')) {
                alert('تم تسجيل الدخول بنجاح!');
            } else {
                const phone = form.querySelector('input[type="tel"]').value;
                const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;

                if (phone && password === confirmPassword) {
                    alert('تم إنشاء الحساب بنجاح!');
                } else {
                    alert('تأكد من صحة البيانات المدخلة');
                }
            }
        }
    });
});
