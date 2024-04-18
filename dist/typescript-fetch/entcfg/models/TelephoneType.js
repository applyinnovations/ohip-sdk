"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelephoneTypeToJSON = exports.TelephoneTypeFromJSONTyped = exports.TelephoneTypeFromJSON = exports.instanceOfTelephoneType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TelephoneType interface.
 */
function instanceOfTelephoneType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTelephoneType = instanceOfTelephoneType;
function TelephoneTypeFromJSON(json) {
    return TelephoneTypeFromJSONTyped(json, false);
}
exports.TelephoneTypeFromJSON = TelephoneTypeFromJSON;
function TelephoneTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'phoneTechType': !(0, runtime_1.exists)(json, 'phoneTechType') ? undefined : json['phoneTechType'],
        'phoneUseType': !(0, runtime_1.exists)(json, 'phoneUseType') ? undefined : json['phoneUseType'],
        'phoneUseTypeDescription': !(0, runtime_1.exists)(json, 'phoneUseTypeDescription') ? undefined : json['phoneUseTypeDescription'],
        'phoneNumber': !(0, runtime_1.exists)(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'extension': !(0, runtime_1.exists)(json, 'extension') ? undefined : json['extension'],
        'primaryInd': !(0, runtime_1.exists)(json, 'primaryInd') ? undefined : json['primaryInd'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : json['purgeDate'],
    };
}
exports.TelephoneTypeFromJSONTyped = TelephoneTypeFromJSONTyped;
function TelephoneTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'phoneTechType': value.phoneTechType,
        'phoneUseType': value.phoneUseType,
        'phoneUseTypeDescription': value.phoneUseTypeDescription,
        'phoneNumber': value.phoneNumber,
        'extension': value.extension,
        'primaryInd': value.primaryInd,
        'orderSequence': value.orderSequence,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastModifierId': value.lastModifierId,
        'purgeDate': value.purgeDate,
    };
}
exports.TelephoneTypeToJSON = TelephoneTypeToJSON;