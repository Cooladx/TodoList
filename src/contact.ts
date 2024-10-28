export default contactLoad;
export { contactbtn };

const contactbtn = document.querySelector<HTMLElement>('#about-us');

// Loads the DOM elements for the contents of the contact page for the restaurant.
function contactLoad() {
    const content = document.querySelector<HTMLElement>('#content');
    if (content) {
        content.textContent = '';
    } else {
        console.error('menuBtn not found:', contactbtn);
    }

    const contact: HTMLElement = document.createElement('h2');
    content?.appendChild(contact);
    contact.classList.add('contact-us');
    contact.textContent = 'Contact Us';

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('people');
    content?.appendChild(contactContainer);

    type Contact = {
        name: string;
        position: string;
        phonenumber: string;
        email: string;
    };

    const chefInfo: Contact = {
        name: 'Amy Velazquez',
        position: 'Chef',
        phonenumber: '555-123-9999',
        email: 'totallyRealEmail@notFake.com',
    };

    const managerInfo: Contact = {
        name: 'Micheal Khors',
        position: 'Manager',
        phonenumber: '444-123-6666',
        email: 'totallyRealEmail@notFake.com',
    };

    const serverInfo: Contact = {
        name: 'Paulina Leblanc',
        position: 'Server',
        phonenumber: '999-123-5555',
        email: 'totallyRealEmail@notFake.com',
    };

    const contactInfo: Contact[] = [chefInfo, managerInfo, serverInfo];
    createContacts(contactInfo, contactContainer);

    function createContacts(contactInfo: Contact[], contactContainer: HTMLElement) {
        contactInfo.forEach((person) => {
            const div = document.createElement('div');
            div.classList.add('contact');
            const name = document.createElement('p');
            const position = document.createElement('p');
            const phonenumber = document.createElement('p');
            const email = document.createElement('p');
            div.appendChild(name);
            div.appendChild(position);
            div.appendChild(phonenumber);
            div.appendChild(email);
            name.textContent = person.name;
            position.textContent = person.position;
            phonenumber.textContent = person.phonenumber;
            email.textContent = person.email;

            contactContainer.appendChild(div);
        });
    }
}
