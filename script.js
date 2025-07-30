const farmers = [
    {
        name: "Lobster Nusantara",
        location: "Jawa Barat",
        cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        live: true,
        rating: 4.8,
        type: "Air Tawar",
        price: "mid",
        method: "Bioflok"
    },
    {
        name: "Sumatera Lobster Farm",
        location: "Sumatera Utara",
        cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        live: false,
        rating: 4.5,
        type: "Air Laut",
        price: "high",
        method: "Tradisional"
    },
    {
        name: "Sulawesi Lobster",
        location: "Sulawesi Selatan",
        cover: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        live: true,
        rating: 5.0,
        type: "Air Laut",
        price: "high",
        method: "Bioflok"
    },
    {
        name: "Laut Biru Farm",
        location: "Jawa Timur",
        cover: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
        live: false,
        rating: 4.2,
        type: "Air Tawar",
        price: "low",
        method: "Tradisional"
    },
    {
        name: "Peternak Mandiri",
        location: "Sumatera Barat",
        cover: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=400&q=80",
        live: true,
        rating: 4.7,
        type: "Air Tawar",
        price: "mid",
        method: "Bioflok"
    },
    {
        name: "Lobster Sejahtera",
        location: "Sulawesi Utara",
        cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        live: false,
        rating: 4.0,
        type: "Air Laut",
        price: "low",
        method: "Tradisional"
    }
];

// Dummy data
const farmers = [
    { name: "Lobster Nusantara", isVerified: true, isCameraLive: true, img: "peternak1.jpg" },
    { name: "Sulawesi Lobster", isVerified: false, isCameraLive: false, img: "peternak2.jpg" }
];

function renderFarmers(data) {
    const grid = document.getElementById('farmers-grid');
    grid.innerHTML = '';
    data.forEach(farmer => {
        const card = document.createElement('div');
        card.className = 'farmer-card';
        card.innerHTML = `
            <img class="farmer-cover" src="${farmer.cover}" alt="${farmer.name}">
            <div class="farmer-info">
                <div class="farmer-name">${farmer.name}</div>
                <div class="farmer-location">${farmer.location}</div>
                <div class="farmer-status">${farmer.live ? '🟢 Live' : '🔴 Offline'}</div>
                <div class="farmer-rating">${'★'.repeat(Math.round(farmer.rating))} <span style="color:#888;">(${farmer.rating})</span></div>
                <button onclick="alert('Menuju toko ${farmer.name}')">Lihat Toko</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render card
function renderFarmers() {
    const grid = document.querySelector('.farmers-grid');
    grid.innerHTML = '';
    // Prioritaskan kamera aktif
    farmers.sort((a, b) => b.isCameraLive - a.isCameraLive);
    farmers.forEach(farmer => {
        const card = document.createElement('div');
        card.className = 'farmer-card';
        card.innerHTML = `
            <img src="${farmer.img}" class="farmer-cover">
            <div class="farmer-info">
                <div class="farmer-name">${farmer.name}</div>
                <div class="farmer-location">Jawa Barat</div>
                <div class="farmer-status">
                    ${farmer.isVerified ? '<span class="verified-badge">✔️ Terverifikasi</span>' : ''}
                </div>
                <div class="camera-status">${farmer.isCameraLive ? '🟢 Live Kamera' : '🔴 Kamera Offline'}</div>
                <button class="wishlist-btn">❤️</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterFarmers() {
    let filtered = farmers;
    const search = document.getElementById('search').value.toLowerCase();
    const location = document.getElementById('filter-location').value;
    const type = document.getElementById('filter-type').value;
    const price = document.getElementById('filter-price').value;
    const rating = document.getElementById('filter-rating').value;
    const method = document.getElementById('filter-method').value;

    filtered = filtered.filter(farmer => {
        return (
            (!search || farmer.name.toLowerCase().includes(search)) &&
            (!location || farmer.location.includes(location)) &&
            (!type || farmer.type === type) &&
            (!price || farmer.price === price) &&
            (!rating || Math.floor(farmer.rating) >= Number(rating)) &&
            (!method || farmer.method === method)
        );
    });
    renderFarmers(filtered);
}

document.addEventListener('DOMContentLoaded', function() {
    // Tab toggle
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');
    if (tabLogin && tabRegister && formLogin && formRegister) {
        tabLogin.addEventListener('click', () => {
            tabLogin.classList.add('active');
            tabRegister.classList.remove('active');
            formLogin.style.display = 'block';
            formRegister.style.display = 'none';
        });
        tabRegister.addEventListener('click', () => {
            tabRegister.classList.add('active');
            tabLogin.classList.remove('active');
            formLogin.style.display = 'none';
            formRegister.style.display = 'block';
        });
    }

    // Register logic
    const regForm = document.getElementById('register-form');
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('reg-name').value.trim();
            const email = document.getElementById('reg-email').value.trim().toLowerCase();
            const password = document.getElementById('reg-password').value;
            if (!name || !email || !password) {
                alert('Semua field wajib diisi!');
                return;
            }
            let users = JSON.parse(localStorage.getItem('lobsterUsers')) || [];
            if (users.find(u => u.email === email)) {
                alert('Email sudah digunakan');
                return;
            }
            users.push({ name, email, password });
            localStorage.setItem('lobsterUsers', JSON.stringify(users));
            alert('Registrasi berhasil');
            window.location.href = 'login.html';
        });
    }

    // Login logic
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim().toLowerCase();
            const password = document.getElementById('login-password').value;
            if (!email || !password) {
                alert('Semua field wajib diisi!');
                return;
            }
            let users = JSON.parse(localStorage.getItem('lobsterUsers')) || [];
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                localStorage.setItem('lobsterLoggedIn', '1');
                localStorage.setItem('lobsterUser', JSON.stringify(user));
                window.location.href = 'dashboard.html';
            } else {
                alert('Email atau password salah');
            }
        });
    }

    // Dashboard: tampilkan nama user
    const dashboardNama = document.getElementById('dashboard-nama');
    if (dashboardNama) {
        const user = JSON.parse(localStorage.getItem('lobsterUser'));
        if (user) dashboardNama.textContent = user.name;
    }
    const dashboardUser = document.getElementById('dashboard-user');
    if (dashboardUser) {
        const user = JSON.parse(localStorage.getItem('lobsterUser'));
        if (user) dashboardUser.textContent = user.name;
    }
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('lobsterLoggedIn');
            window.location.href = 'index.html';
        });
    }

    // Marketplace: dummy data
    const farmers = [
        {
            name: "Lobster Nusantara",
            location: "Jawa Barat",
            cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            live: true,
            rating: 4.8,
            type: "Air Tawar"
        },
        {
            name: "Sumatera Lobster Farm",
            location: "Sumatera Utara",
            cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
            live: false,
            rating: 4.5,
            type: "Air Laut"
        }
    ];
    const farmersGrid = document.getElementById('farmers-grid');
    if (farmersGrid) {
        function renderFarmers(data) {
            farmersGrid.innerHTML = '';
            data.forEach(farmer => {
                const card = document.createElement('div');
                card.className = 'farmer-card';
                card.innerHTML = `
                    <img class="farmer-cover" src="${farmer.cover}" alt="${farmer.name}">
                    <div class="farmer-info">
                        <div class="farmer-name">${farmer.name}</div>
                        <div class="farmer-location">${farmer.location}</div>
                        <div class="farmer-status">${farmer.live ? '🟢 Live' : '🔴 Offline'}</div>
                        <div class="farmer-rating">${'★'.repeat(Math.round(farmer.rating))} <span style="color:#888;">(${farmer.rating})</span></div>
                        <button onclick="window.location.href='detail-produk.html'">Lihat Produk</button>
                    </div>
                `;
                farmersGrid.appendChild(card);
            });
        }
        renderFarmers(farmers);
        document.getElementById('search').addEventListener('input', function() {
            const val = this.value.toLowerCase();
            renderFarmers(farmers.filter(f => f.name.toLowerCase().includes(val)));
        });
        document.getElementById('filter-location').addEventListener('change', function() {
            const val = this.value;
            renderFarmers(val ? farmers.filter(f => f.location.includes(val)) : farmers);
        });
        document.getElementById('filter-type').addEventListener('change', function() {
            const val = this.value;
            renderFarmers(val ? farmers.filter(f => f.type === val) : farmers);
        });
    }

    // Detail produk: tambah ke keranjang
    const addToCartBtn = document.getElementById('add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            alert('Produk berhasil ditambahkan ke keranjang!');
        });
    }

    // Highlight kategori artikel (dummy)
    const kategoriLinks = document.querySelectorAll('.news-sidebar ul li a');
    kategoriLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            kategoriLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    document.getElementById('negara-ekspor').addEventListener('change', function() {
        const ongkir = { singapore: 500000, japan: 800000, usa: 1200000 };
        const pajak = { singapore: 0.05, japan: 0.08, usa: 0.1 };
        const negara = this.value;
        const subtotal = 2000000; // dummy total belanja
        if (negara) {
            const biaya = ongkir[negara];
            const tax = pajak[negara] * subtotal;
            document.getElementById('ongkir-info').textContent =
                `Ongkir: Rp ${biaya.toLocaleString()} + Pajak: Rp ${tax.toLocaleString()}`;
            document.getElementById('total-belanja').textContent =
                `Total: Rp ${(subtotal + biaya + tax).toLocaleString()}`;
        }
    });
});

document.addEventListener('DOMContentLoaded', renderFarmers);
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('wishlist-btn')) {
        const id = e.target.getAttribute('data-id');
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (!wishlist.includes(id)) wishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        e.target.classList.add('wishlisted');
    }
});

document.addEventListener('DOMContentLoaded', function() {
  // Logout logic
  document.getElementById("logoutBtn").addEventListener("click", function() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  });
});
