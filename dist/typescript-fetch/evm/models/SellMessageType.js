"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellMessageTypeToJSON = exports.SellMessageTypeFromJSONTyped = exports.SellMessageTypeFromJSON = exports.instanceOfSellMessageType = void 0;
const runtime_1 = require("../runtime");
const UsedInModuleType_1 = require("./UsedInModuleType");
/**
 * Check if a given object implements the SellMessageType interface.
 */
function instanceOfSellMessageType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSellMessageType = instanceOfSellMessageType;
function SellMessageTypeFromJSON(json) {
    return SellMessageTypeFromJSONTyped(json, false);
}
exports.SellMessageTypeFromJSON = SellMessageTypeFromJSON;
function SellMessageTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'beginDate': !(0, runtime_1.exists)(json, 'beginDate') ? undefined : json['beginDate'],
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'croCode': !(0, runtime_1.exists)(json, 'croCode') ? undefined : json['croCode'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idContext': !(0, runtime_1.exists)(json, 'idContext') ? undefined : json['idContext'],
        'instance': !(0, runtime_1.exists)(json, 'instance') ? undefined : json['instance'],
        'languageCode': !(0, runtime_1.exists)(json, 'languageCode') ? undefined : json['languageCode'],
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'stickyFlagYn': !(0, runtime_1.exists)(json, 'stickyFlagYn') ? undefined : json['stickyFlagYn'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'usedInModule': !(0, runtime_1.exists)(json, 'usedInModule') ? undefined : (0, UsedInModuleType_1.UsedInModuleTypeFromJSON)(json['usedInModule']),
    };
}
exports.SellMessageTypeFromJSONTyped = SellMessageTypeFromJSONTyped;
function SellMessageTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'beginDate': value.beginDate,
        'chainCode': value.chainCode,
        'croCode': value.croCode,
        'hotelId': value.hotelId,
        'id': value.id,
        'idContext': value.idContext,
        'instance': value.instance,
        'languageCode': value.languageCode,
        'message': value.message,
        'ratePlanCode': value.ratePlanCode,
        'roomType': value.roomType,
        'stickyFlagYn': value.stickyFlagYn,
        'type': value.type,
        'usedInModule': (0, UsedInModuleType_1.UsedInModuleTypeToJSON)(value.usedInModule),
    };
}
exports.SellMessageTypeToJSON = SellMessageTypeToJSON;
