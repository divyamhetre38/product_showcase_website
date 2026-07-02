const modal = document.getElementById('custom-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalBackdrop = modal.querySelector('.modal-backdrop');
// Add event to open modal as needed
// Example: document.getElementById('openModalBtn').addEventListener('click', openModal);

function openModal() {
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
});
