const form = document.getElementById('user-info');

// const userName = document.getElementById('name').value;
// const birthday = document.getElementById('birthday').value;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // const formData = new FormData(form);

    // const info = {
    //     name: formData.get('name'),
    //     birthday: formData.get('birthday'),
    // };

    form.reset();
});