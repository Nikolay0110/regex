export default class Validator {
    validateUsername(name) {
        this.name = name;
        const nameRegex = /^(?![-_0-9])(?!.*[-_]{2,})(?!.*[0-9]{4,})[a-zA-Z0-9_-]+(?<![-_0-9])$/;
        return nameRegex.test(name);
    }
}
