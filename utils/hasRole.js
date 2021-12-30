/**
 * Checks if user has role
 * @param msg
 * @param rolename
 * @returns {boolean}
 */
function hasRole(msg,id) {

    //return msg.member.roles.some(role => role.name === name);
    //return msg.member.roles.cache.find(r => r.name === name)
    return msg.member.roles.has(id)
    //return true;

}
module.exports = hasRole;
