document.querySelectorAll('.drink').forEach(item => {
    item.addEventListener('click', () => {
        const id = item.getAttribute('id');
        window.location.href = `product/product.html?id=${id}`;
    });
});