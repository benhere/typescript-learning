// Index properties in TS

interface ErrorContainer {
    [props: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not valid email!',
    username: 'Must start with a capital character!'
};