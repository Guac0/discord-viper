/**
 * Checks if user has role
 * @param msg
 * @param rolename
 * @returns {boolean}
 */
 function hasRole(msg,rolename) {

    //return msg.member.roles.some(role => role.name === name);
    //return msg.member.roles.cache.find(r => r.name === rolename)
    //return msg.member.roles.has(id)
    if (msg.member.roles.cache.some(role => role.name === rolename)) { return true } else { return false }
    //return true;

}
module.exports = hasRole;
