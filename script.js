// Lobster Marketplace - Main Script
// Manages all data and functionality

// Initialize default data if localStorage is empty
function initializeData() {
    // Users data
    if (!localStorage.getItem('users')) {
        const defaultUsers = [
            {
                type: 'buyer',
                name: 'Budi Santoso',
                email: 'budi@demo.com',
                password: 'password123',
                phone: '+628123456789',
                country: 'ID',
                address: 'Jakarta, Indonesia',
                createdAt: new Date().toISOString()
            },
            {
                type: 'farmer',
                name: 'Ahmad Rahman',
                email: 'ahmad@demo.com',
                password: 'password123',
                phone: '+628987654321',
                business: 'Lobster Nusantara',
                location: 'Jawa Barat',
                address: 'Bandung, Jawa Barat',
                license: 'LBS-2024-001',
                camera: 'available',
                description: 'Peternakan lobster premium dengan teknologi modern',
                rating: 4.8,
                totalSales: 120,
                followers: 450,
                createdAt: new Date().toISOString()
            },
            {
                type: 'buyer',
                name: 'Sarah Johnson',
                email: 'sarah@demo.com',
                password: 'password123',
                phone: '+1234567890',
                country: 'US',
                address: 'New York, USA',
                createdAt: new Date().toISOString()
            },
            {
                type: 'farmer',
                name: 'Siti Nurhaliza',
                email: 'siti@demo.com',
                password: 'password123',
                phone: '+628112233445',
                business: 'Sulawesi Lobster Farm',
                location: 'Sulawesi Selatan',
                address: 'Makassar, Sulawesi Selatan',
                license: 'LBS-2024-002',
                camera: 'available',
                description: 'Peternakan lobster mutiara premium',
                rating: 4.9,
                totalSales: 95,
                followers: 680,
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }

    // Products data with real lobster images
    if (!localStorage.getItem('products')) {
        const defaultProducts = [
            {
                id: 'lobster-air-tawar-1',
                name: 'Lobster Air Tawar Super',
                type: 'Air Tawar',
                size: '15-20 cm',
                weight: '300-500 gram',
                age: '8-10 bulan',
                price: 650000,
                stock: 25,
                farmerId: 'ahmad@demo.com',
                image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
                video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
                description: 'Lobster air tawar premium dengan daging tebal dan rasa lezat. Dibudidayakan dengan pakan organik dan teknologi modern.',
                rating: 4.8,
                reviews: 127,
                exportCountries: ['Singapore', 'Japan', 'USA', 'Australia'],
                shippingTime: '2-3 hari domestik, 5-7 hari ekspor',
                createdAt: new Date().toISOString()
            },
            {
                id: 'lobster-mutiara-1',
                name: 'Lobster Mutiara Premium',
                type: 'Mutiara',
                size: '18-25 cm',
                weight: '400-600 gram',
                age: '10-12 bulan',
                price: 1200000,
                stock: 15,
                farmerId: 'siti@demo.com',
                image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
                video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
                description: 'Lobster mutiara berkualitas ekspor dengan daging premium. Hasil budidaya intensif dengan monitoring 24/7.',
                rating: 4.9,
                reviews: 89,
                exportCountries: ['Singapore', 'Japan', 'USA', 'Australia'],
                shippingTime: '3-5 hari domestik, 7-10 hari ekspor',
                createdAt: new Date().toISOString()
            },
            {
                id: 'lobster-batu-1',
                name: 'Lobster Batu Ekspor',
                type: 'Batu',
                size: '20-30 cm',
                weight: '500-800 gram',
                age: '12-15 bulan',
                price: 850000,
                stock: 30,
                farmerId: 'ahmad@demo.com',
                image: 'https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=800&q=80',
                video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
                description: 'Lobster batu untuk pasar ekspor dengan kualitas terjamin. Sertifikasi halal dan aman dikonsumsi.',
                rating: 4.7,
                reviews: 156,
                exportCountries: ['Singapore', 'Japan', 'USA', 'Australia'],
                shippingTime: '2-3 hari domestik, 5-7 hari ekspor',
                createdAt: new Date().toISOString()
            },
            {
                id: 'lobster-air-laut-1',
                name: 'Lobster Air Laut Premium',
                type: 'Air Laut',
                size: '25-35 cm',
                weight: '600-1000 gram',
                age: '15-18 bulan',
                price: 1500000,
                stock: 20,
                farmerId: 'siti@demo.com',
                image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
                video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_10mb.mp4',
                description: 'Lobster air laut premium dengan ukuran besar dan daging tebal. Cocok untuk pasar premium dan ekspor.',
                rating: 4.9,
                reviews: 203,
                exportCountries: ['Singapore', 'Japan', 'USA', 'Australia', 'Europe'],
                shippingTime: '3-5 hari domestik, 7-10 hari ekspor',
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem('products', JSON.stringify(defaultProducts));
    }

    // Orders data
    if (!localStorage.getItem('orders')) {
        const defaultOrders = [
            {
                id: 'ORD-2024-001',
                buyerId: 'budi@demo.com',
                farmerId: 'ahmad@demo.com',
                productId: 'lobster-air-tawar-1',
                quantity: 2,
                totalPrice: 1300000,
                status: 'completed',
                shippingAddress: 'Jakarta, Indonesia',
                shippingCountry: 'ID',
                receiverName: 'Budi Santoso',
                receiverPhone: '+628123456789',
                receiverEmail: 'budi@demo.com',
                paymentMethod: 'Bank Transfer',
                createdAt: new Date('2024-01-15').toISOString(),
                completedAt: new Date('2024-01-17').toISOString()
            },
            {
                id: 'ORD-2024-002',
                buyerId: 'sarah@demo.com',
                farmerId: 'siti@demo.com',
                productId: 'lobster-mutiara-1',
                quantity: 1,
                totalPrice: 1200000,
                status: 'processing',
                shippingAddress: 'New York, USA',
                shippingCountry: 'US',
                receiverName: 'Sarah Johnson',
                receiverPhone: '+1234567890',
                receiverEmail: 'sarah@demo.com',
                paymentMethod: 'Credit Card',
                createdAt: new Date('2024-01-14').toISOString()
            },
            {
                id: 'ORD-2024-003',
                buyerId: 'budi@demo.com',
                farmerId: 'siti@demo.com',
                productId: 'lobster-air-laut-1',
                quantity: 1,
                totalPrice: 1500000,
                status: 'new',
                shippingAddress: 'Jakarta, Indonesia',
                shippingCountry: 'ID',
                receiverName: 'Budi Santoso',
                receiverPhone: '+628123456789',
                receiverEmail: 'budi@demo.com',
                paymentMethod: 'Bank Transfer',
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem('orders', JSON.stringify(defaultOrders));
    }

    // Reviews data
    if (!localStorage.getItem('reviews')) {
        const defaultReviews = [
            {
                id: 'REV-001',
                productId: 'lobster-air-tawar-1',
                buyerId: 'budi@demo.com',
                rating: 5,
                comment: 'Lobster sangat segar dan berkualitas tinggi. Pengiriman cepat dan packing rapi. Live camera sangat membantu untuk melihat kondisi lobster sebelum membeli.',
                createdAt: new Date('2024-01-18').toISOString()
            },
            {
                id: 'REV-002',
                productId: 'lobster-mutiara-1',
                buyerId: 'sarah@demo.com',
                rating: 5,
                comment: 'Kualitas lobster Indonesia tidak kalah dengan lobster dari negara lain. Peternak sangat ramah dan informatif.',
                createdAt: new Date('2024-01-16').toISOString()
            },
            {
                id: 'REV-003',
                productId: 'lobster-batu-1',
                buyerId: 'budi@demo.com',
                rating: 4,
                comment: 'Lobster batu ukuran besar dan daging tebal. Cocok untuk acara spesial.',
                createdAt: new Date('2024-01-10').toISOString()
            }
        ];
        localStorage.setItem('reviews', JSON.stringify(defaultReviews));
    }

    // Community posts data
    if (!localStorage.getItem('posts')) {
        const defaultPosts = [
            {
                id: 'POST-001',
                authorId: 'ahmad@demo.com',
                category: 'Teknik Budidaya',
                title: 'Tips Budidaya Lobster Air Tawar',
                content: 'Tips budidaya lobster air tawar yang efektif: Pastikan kualitas air selalu terjaga dengan pH 6.5-8.0 dan suhu optimal 24-28°C. Pakan organik memberikan hasil yang lebih baik untuk pertumbuhan lobster.',
                likes: 24,
                comments: 8,
                createdAt: new Date('2024-01-16').toISOString()
            },
            {
                id: 'POST-002',
                authorId: 'siti@demo.com',
                category: 'Pemasaran',
                title: 'Strategi Pemasaran Lobster Ekspor',
                content: 'Strategi pemasaran lobster untuk pasar ekspor: Fokus pada kualitas dan sertifikasi. Live camera membantu membangun kepercayaan pembeli internasional.',
                likes: 18,
                comments: 5,
                createdAt: new Date('2024-01-10').toISOString()
            },
            {
                id: 'POST-003',
                authorId: 'ahmad@demo.com',
                category: 'Legalitas',
                title: 'Sertifikasi Ekspor Lobster',
                content: 'Pentingnya sertifikasi untuk ekspor lobster: Pastikan memiliki sertifikasi halal, BPOM, dan karantina. Ini akan memudahkan proses ekspor.',
                likes: 32,
                comments: 12,
                createdAt: new Date('2024-01-08').toISOString()
            }
        ];
        localStorage.setItem('posts', JSON.stringify(defaultPosts));
    }

    // Cart data
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    // Wishlist data
    if (!localStorage.getItem('wishlist')) {
        localStorage.setItem('wishlist', JSON.stringify([]));
    }
}

// User management functions
function registerUser(userData) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    if (users.find(u => u.email === userData.email)) {
        throw new Error('Email sudah digunakan');
    }
    
    // Add user to storage
    userData.createdAt = new Date().toISOString();
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    return userData;
}

function loginUser(email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
    }
    
    return null;
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function logoutUser() {
    localStorage.removeItem('currentUser');
}

// Product management functions
function getAllProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
}

function getProductsByFarmer(farmerId) {
    const products = getAllProducts();
    return products.filter(p => p.farmerId === farmerId);
}

function getProductById(productId) {
    const products = getAllProducts();
    return products.find(p => p.id === productId);
}

function addProduct(productData) {
    let products = getAllProducts();
    productData.id = 'product-' + Date.now();
    productData.createdAt = new Date().toISOString();
    products.push(productData);
    localStorage.setItem('products', JSON.stringify(products));
    return productData;
}

function updateProduct(productId, updates) {
    let products = getAllProducts();
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
        products[index] = { ...products[index], ...updates };
        localStorage.setItem('products', JSON.stringify(products));
        return products[index];
    }
    return null;
}

// Order management functions
function createOrder(orderData) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orderData.id = 'ORD-' + new Date().getFullYear() + '-' + String(orders.length + 1).padStart(3, '0');
    orderData.createdAt = new Date().toISOString();
    orderData.status = 'new';
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
    return orderData;
}

function getOrdersByUser(userId, userType) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    if (userType === 'buyer') {
        return orders.filter(o => o.buyerId === userId);
    } else {
        return orders.filter(o => o.farmerId === userId);
    }
}

function updateOrderStatus(orderId, status) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = status;
        if (status === 'completed') {
            order.completedAt = new Date().toISOString();
        }
        localStorage.setItem('orders', JSON.stringify(orders));
        return order;
    }
    return null;
}

// Cart management functions
function addToCart(productId, quantity = 1) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        const product = getProductById(productId);
        if (product) {
            cart.push({
                productId: productId,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity,
                farmerId: product.farmerId
            });
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function updateCartItem(productId, quantity) {
    let cart = getCart();
    const item = cart.find(item => item.productId === productId);
    
    if (item) {
        if (quantity <= 0) {
            cart = cart.filter(item => item.productId !== productId);
        } else {
            item.quantity = quantity;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    return cart;
}

function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
}

// Review management functions
function addReview(reviewData) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviewData.id = 'REV-' + Date.now();
    reviewData.createdAt = new Date().toISOString();
    reviews.push(reviewData);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    return reviewData;
}

function getReviewsByProduct(productId) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    return reviews.filter(r => r.productId === productId);
}

// Community post functions
function createPost(postData) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    postData.id = 'POST-' + Date.now();
    postData.createdAt = new Date().toISOString();
    postData.likes = 0;
    postData.comments = 0;
    posts.push(postData);
    localStorage.setItem('posts', JSON.stringify(posts));
    return postData;
}

function getAllPosts() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

function getPostsByUser(userId) {
    let posts = getAllPosts();
    return posts.filter(p => p.authorId === userId);
}

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(price);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 hari yang lalu';
    if (diffDays < 7) return `${diffDays} hari yang lalu`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu yang lalu`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} bulan yang lalu`;
    return `${Math.floor(diffDays / 365)} tahun yang lalu`;
}

function calculateShippingCost(country) {
    const shippingRates = {
        'ID': 50000,
        'SG': 250000,
        'MY': 200000,
        'JP': 350000,
        'US': 450000,
        'AU': 400000,
        'NL': 500000
    };
    return shippingRates[country] || 0;
}

// Initialize data when script loads
document.addEventListener('DOMContentLoaded', function() {
    initializeData();
});

// Export functions for use in other files
window.LobsterMarketplace = {
    registerUser,
    loginUser,
    getCurrentUser,
    logoutUser,
    getAllProducts,
    getProductsByFarmer,
    getProductById,
    addProduct,
    updateProduct,
    createOrder,
    getOrdersByUser,
    updateOrderStatus,
    addToCart,
    getCart,
    updateCartItem,
    clearCart,
    addReview,
    getReviewsByProduct,
    createPost,
    getAllPosts,
    getPostsByUser,
    formatPrice,
    formatDate,
    calculateShippingCost
};
