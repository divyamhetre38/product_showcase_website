// Modal functionality for Contact Us "Your query sent successfully"
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contactus-form');
  const modal = document.getElementById('successModal');
  const closeBtn = document.getElementById('closeSuccessModal');
  const backdrop = modal.querySelector('.modal-backdrop');

  function openModal() {
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Show modal on form submit
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    openModal();
    contactForm.reset();
  });

  // Close modal events
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });
});
