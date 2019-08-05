const form = document.getElementById('user-info');

const userName = document.getElementById('name').value;
const birthday = document.getElementById('birthday').value;

const store = {
    storage: window.localStorage,

    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },

    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const info = {
        name: formData.get('name'),
        birthday: formData.get('birthday'),
    }

    localStorage.setItem('userNames', userName.innerHTML);
    localStorage.setItem('birthdays', birthday.innerHTML);

    form.reset();
})