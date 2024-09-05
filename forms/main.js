const form = document.getElementById('form_test1');

const formTest1 = document.forms.form_test1;

const preview  = document.forms.form_test1.preview;
document.forms.form_test1.image_file.addEventListener('change', e => {
  const uploadFile = e.target.files[0];

  const reader = new FileReader();

  reader.addEventListener('load', () => {
    preview.src = reader.result;
  })

  reader.readAsDataURL(uploadFile);
})