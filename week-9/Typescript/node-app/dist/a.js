"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegal({
    firstName: "deep",
    lastName: "Deep",
    age: 20
});
