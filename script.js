// Elemen untuk pencarian dan filter produk
const searchInput = document.getElementById('searchInput');
const bikeFilter = document.getElementById('bikeFilter');

// Fungsi untuk memfilter produk berdasarkan input pencarian dan filter motor
function filterProducts() {
  const query = searchInput.value.toLowerCase();
  const selectedBike = bikeFilter.value;

  document.querySelectorAll('.product-card').forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const matchesQuery = title.includes(query);
    const matchesBike = selectedBike === '' || card.dataset.bike === selectedBike;

    card.style.display = matchesQuery && matchesBike ? 'block' : 'none';
  });
}

// Event listener untuk pencarian dan filter
searchInput.addEventListener('input', filterProducts);
bikeFilter.addEventListener('change', filterProducts);

// Toggle chatbot
const chatbotContainer = document.getElementById('chatbot-container');
const toggleButton = document.getElementById('chat-toggle'); // Menggunakan nama variabel yang sesuai dengan HTML

toggleButton.addEventListener('click', () => {
  const isHidden = chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '';
  chatbotContainer.style.display = isHidden ? 'flex' : 'none';
});

var modal = document.getElementById("buyModal");

var buyButtons = document.querySelectorAll(".buy-button");

var span = document.getElementsByClassName("close-button")[0];

var modalProductImage = document.getElementById("modal-product-image");
var modalProductTitle = document.getElementById("modal-product-title");
var modalProductDescription = document.getElementById("modal-product-description");

buyButtons.forEach(button => {
    button.onclick = function() {

        var card = button.closest('.product-card');
        var imageUrl = card.querySelector('img').src;
        var title = card.querySelector('.info h3').innerText;
        var description = card.querySelector('.info p').innerText;

        // Populate modal with product info
        modalProductImage.src = imageUrl;
        modalProductTitle.innerText = title;
        modalProductDescription.innerText = description;

        modal.style.display = "flex"; // Menggunakan 'flex' sesuai CSS terbaru
        document.body.classList.add('modal-open'); // Tambahkan kelas untuk mematikan scroll
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove('modal-open'); // Hapus kelas untuk mengaktifkan scroll
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove('modal-open'); // Hapus kelas untuk mengaktifkan scroll
    }
}

const heroSection = document.querySelector('.hero-section');
const transitionInterval = 3000;

if (heroSection) {
    setInterval(() => {
        heroSection.classList.toggle('show-second');
    }, transitionInterval);
}



// Chatbot messages & logic (kode yang sudah ada)
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');

const responses = {
  "halo": "Halo! Ada yang bisa saya bantu?",
  "produk": "Kami menyediakan: <br> - <a href='#cdi'>CDI ECU</a><br> - <a href='#cylinder'>Cylinder Kit</a>",
  "harga": "Klik tombol 'Beli Sekarang' di produk yang Anda pilih.",
  "kontak": "Hubungi kami di info@astrotech.com",
  "cdi": "Lihat <a href='#cdi'>CDI ECU Genio 110</a>",
  "cylinder": "Lihat <a href='#cylinder'>Cylinder Kit 62mm</a>",
  "default": "Maaf, saya belum mengerti. Coba pertanyaan lain ya."
};

// Fungsi untuk menambahkan pesan ke chatbot
function addMessage(sender, text) {
  const msg = document.createElement('div');
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatbotMessages.appendChild(msg);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Event listener input chatbot
chatbotInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const userText = chatbotInput.value.trim();
    if (userText === '') return;

    addMessage('Anda', userText);
    chatbotInput.value = '';

    const response = responses[userText.toLowerCase()] || responses['default'];
    setTimeout(() => addMessage('AstroBot', response), 600);
  }
}); // Penutup event listener keypress yang benar
