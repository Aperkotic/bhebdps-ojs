const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => {
        if (!response.ok) throw new Error('Issues with Network');
        return response.json();
    })
    .then(data => {
        items.innerHTML = '';
        const valutes = data.response.Valute;

        for (const key in valutes) {
            const valute = valutes[key];

            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <div class="item__code">${valute.CharCode}</div>
                <div class="item__value">${valute.Value}</div>
                <div class="item__currency">руб.</div>
            `;

            items.appendChild(item);
        }

        loader.classList.remove('loader_active');
    })
    .catch(error => {
        console.error('Error with getting data:', error);
        loader.classList.remove('loader_active');
    })
