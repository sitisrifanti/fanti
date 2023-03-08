function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Siti',
    lastName: 'Lesawengen'
};

const element = (
    <h1>
    Apa Kabar, { formatName(user)}!
    </h1>
);
function Tiga() {
    return (
        element
    );
}

export default Tiga;
