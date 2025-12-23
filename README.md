

# React User API 

یک پروژه ساده React برای نمایش **لیست کاربران** و مشاهده جزئیات آن‌ها با استفاده از **API عمومی JSONPlaceholder**.

## ویژگی‌ها

* نمایش لیست کاربران با نام و ایمیل
* مشاهده جزئیات هر کاربر در صفحه جداگانه (آدرس، تلفن، شرکت و وب‌سایت)
* مدیریت وضعیت Loading و Error
* طراحی ساده با **Tailwind CSS**
* ساختار تمیز و قابل گسترش برای اضافه کردن امکانات دیگر مثل جستجو یا فیلتر

## پیش‌نیازها

* Node.js و npm نصب شده

## نحوه اجرا (لوکال)

1. پروژه را کلون کنید:

```bash
git clone https://github.com/USERNAME/react-user-api-demo.git
cd react-user-api-demo
```

2. نصب وابستگی‌ها:

```bash
npm install
```

3. اجرای پروژه:

```bash
npm run dev
```

4. باز کردن در مرورگر:

```
http://localhost:5173
```

---

## ساختار پروژه

```
react-user-api-demo/
├─ src/
│  ├─ components/
│  │  ├─ UserList.jsx      # نمایش لیست کاربران
│  │  └─ UserDetails.jsx   # نمایش جزئیات کاربر
│  ├─ App.jsx              # تعریف مسیرها و کامپوننت‌ها
│  ├─ main.jsx             # ورود به برنامه
│  └─ index.css            # استایل‌های Tailwind
├─ .gitignore
├─ package.json
├─ index.html
├─ postcss.config.js
├─ tailwind.config.js
├─ README.md
└─ vite.config.js
```

---

## مسیرها (Routes)

### `/`

نمایش **لیست کاربران**.

* کلیک روی هر کاربر به صفحه جزئیات هدایت می‌کند.

### `/user/:id`

نمایش **جزئیات کاربر** با استفاده از `id`.

* اطلاعات: نام، ایمیل، تلفن، وب‌سایت، شرکت و آدرس.
* دکمه بازگشت به لیست کاربران.

---

## نکات فنی

* **React Router DOM** برای مدیریت مسیرها
* **useEffect و useState** برای دریافت اطلاعات از API و مدیریت Loading/Error
* **Tailwind CSS** برای طراحی ساده و ریسپانسیو
---
## ScreenShots
<img width="1920" height="1080" alt="usersLists" src="https://github.com/user-attachments/assets/a618ce55-ee16-47ac-8767-3a21a0d5f40f" />
<img width="1920" height="1080" alt="details" src="https://github.com/user-attachments/assets/78633934-3fbe-468b-885f-267d44cc57de" />



