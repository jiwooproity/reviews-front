var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 0] = "USER";
})(Roles || (Roles = {}));
var account = {
    nickname: "matti",
    age: 24,
    role: Roles.ADMIN,
};
console.log(account);
export {};
