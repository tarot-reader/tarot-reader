import info from '../data/data-manage.js';

const form = document.getElementById('user-info');

form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);

    const userInfo = {
        name: formData.get('name'),
        birthday: formData.get('birthday'),
    };
    
    info.save('names', userInfo.name);
    info.save('birthdays', userInfo.birthday);

    window.location.assign('../reading.html');
    form.reset();
});