document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");

    // بيانات أخبار تجريبية (يمكن استبدالها بربط API لاحقًا)
    const newsData = [
        {
            title: "فوز برشلونة على ريال مدريد",
            content: "حقق برشلونة فوزًا كبيرًا على ريال مدريد في الكلاسيكو...",
            url: "news1.html"
        },
        {
            title: "محمد صلاح يسجل هدفين",
            content: "قاد محمد صلاح فريقه للفوز بعد تسجيله هدفين رائعين...",
            url: "news2.html"
        }
    ];

    // تحميل الأخبار إلى الصفحة
    newsData.forEach(news => {
        const article = document.createElement("article");
        article.innerHTML = `
            <h2>${news.title}</h2>
            <p>${news.content}</p>
            <a href="${news.url}">اقرأ المزيد</a>
        `;
        newsContainer.appendChild(article);
    });
});