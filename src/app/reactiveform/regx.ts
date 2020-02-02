export class RegulserExpression {
    static FirstName(control) {
        let regx = /^[a-zA-Z\-]+$/;
        let valid = regx.test(control.value);
        return valid ? null : {firstname:true}
    }
    static LastName(control) {
        let regx = /^[a-zA-Z\-]+$/;
        let valid = regx.test(control.value);
        return valid ? null : {lastname:true}
    }
    static Address(control) {
        let regx = /^[a-zA-Z0-9]+$/;
        let valid = regx.test(control.value);
        return valid ? null : {address:true}
    }
    static MobileNo(control) {
        let regx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let valid = regx.test(control.value);
        return valid ? null : {mobile:true}
    }
    static UserId(control) {
        let regx = /^[a-zA-Z0-9]+$/;
        let valid = regx.test(control.value);
        return valid ? null : {UserId:true}
    }
    static Password(control) {
        let regx =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        let valid = regx.test(control.value);
        return valid ? null : {Password:true}
    }
}