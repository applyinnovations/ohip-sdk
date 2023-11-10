"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesManagersInfoToJSON = exports.SalesManagersInfoFromJSONTyped = exports.SalesManagersInfoFromJSON = exports.instanceOfSalesManagersInfo = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const SalesManagersType_1 = require("./SalesManagersType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the SalesManagersInfo interface.
 */
function instanceOfSalesManagersInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSalesManagersInfo = instanceOfSalesManagersInfo;
function SalesManagersInfoFromJSON(json) {
    return SalesManagersInfoFromJSONTyped(json, false);
}
exports.SalesManagersInfoFromJSON = SalesManagersInfoFromJSON;
function SalesManagersInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'salesManagers': !(0, runtime_1.exists)(json, 'salesManagers') ? undefined : (0, SalesManagersType_1.SalesManagersTypeFromJSON)(json['salesManagers']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.SalesManagersInfoFromJSONTyped = SalesManagersInfoFromJSONTyped;
function SalesManagersInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'salesManagers': (0, SalesManagersType_1.SalesManagersTypeToJSON)(value.salesManagers),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.SalesManagersInfoToJSON = SalesManagersInfoToJSON;
