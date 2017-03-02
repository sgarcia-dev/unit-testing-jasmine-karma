module.exports = heavyWork;

function heavyWork() {
    const USER = {
        name: 'John Doe',
        age: 47
    };
    const EMAIL_TEST_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

    this.getUserData = getUserData;
    this.isEmail = isEmail;
    this.saveNewUser = saveNewUser;
    this.dependency = dependency;
    this.callDependency = callDependency;
    this.dependency = dependency;

    function getUserData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(USER);
            }, 500);
        });
    }

    function isEmail(email) {
        if (typeof email !== 'string')
            return false;
        else
            return EMAIL_TEST_REGEX.test(email);
    }

    function saveNewUser(name, age) {
         return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!name || !age)
                    reject(new Error('Please insert valid user data'));
                else if (typeof name !== 'string')
                    reject(new Error('Please insert valid user data'));
                else if (typeof age !== 'number')
                    reject(new Error('Please insert valid user data'));
                else
                    resolve(true);
            }, 500);
        });
    }

    function callDependency() {
        return this.dependency();
    }
    
    function dependency() {
        return true;
    }
}