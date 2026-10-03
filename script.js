const fileInput = document.querySelector('#file-input');
const modal = document.querySelector('#connect-modal');
const toast = document.querySelector('.toast');
const toastMessage = document.querySelector('#toast-message');

document.querySelectorAll('.js-upload').forEach((button) => {
  button.addEventListener('click', () => {
    modal.hidden = true;
    document.body.style.overflow = '';
    fileInput.click();
  });
});

document.querySelector('.js-connect').addEventListener('click', () => {
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
});

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
  document.querySelector('.js-connect').focus();
}

modal.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', closeModal));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
});

fileInput.addEventListener('change', () => {
  const count = fileInput.files.length;
  if (!count) return;
  toastMessage.textContent = `${count} photo${count === 1 ? '' : 's'} added from this device.`;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 4000);
});
