import { IUser } from "@esri/arcgis-rest-auth";
import { hasAllPrivileges } from "./has-all-privileges";
import { GROUP_ACCESS_PRIVS } from "./group-access-privs";
import { AGOAccess } from "../types";

/**
 * Returns the allowed group access based on a user's privileges
 * @param {String} requestedAccess public || org || private
 * @param {Object} user User object w/ privileges array
 */
export function getAllowedGroupAccess(
  requestedAccess: AGOAccess,
  user: IUser
): AGOAccess {
  // figure out what they can create...
  const canCreatePublic = hasAllPrivileges(user, GROUP_ACCESS_PRIVS.public);
  const canCreateOrg = hasAllPrivileges(user, GROUP_ACCESS_PRIVS.org);
  // default to the requested access...
  let result = requestedAccess;
  // if they requested public, but can't make public...
  if (requestedAccess === "public" && !canCreatePublic) {
    // step down to org...
    result = "org";
    // but if they can't do that...
    if (!canCreateOrg) {
      // then do private
      result = "private";
    }
  } else {
    // if the requsted access was not public, it's either org or private
    // and if they can't create do org...
    if (requestedAccess === "org" && !canCreateOrg) {
      // must be private
      result = "private";
    }
  }
  return result;
}
