"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUserHistoryTypeToJSON = exports.WebUserHistoryTypeFromJSONTyped = exports.WebUserHistoryTypeFromJSON = exports.instanceOfWebUserHistoryType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the WebUserHistoryType interface.
 */
function instanceOfWebUserHistoryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfWebUserHistoryType = instanceOfWebUserHistoryType;
function WebUserHistoryTypeFromJSON(json) {
    return WebUserHistoryTypeFromJSONTyped(json, false);
}
exports.WebUserHistoryTypeFromJSON = WebUserHistoryTypeFromJSON;
function WebUserHistoryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'inactiveDate': !(0, runtime_1.exists)(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'lastLogin': !(0, runtime_1.exists)(json, 'lastLogin') ? undefined : json['lastLogin'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastPasswordChange': !(0, runtime_1.exists)(json, 'lastPasswordChange') ? undefined : json['lastPasswordChange'],
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : json['purgeDate'],
    };
}
exports.WebUserHistoryTypeFromJSONTyped = WebUserHistoryTypeFromJSONTyped;
function WebUserHistoryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'inactiveDate': value.inactiveDate,
        'lastLogin': value.lastLogin,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastPasswordChange': value.lastPasswordChange,
        'purgeDate': value.purgeDate,
    };
}
exports.WebUserHistoryTypeToJSON = WebUserHistoryTypeToJSON;
