"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyRevenueTypeMappingListTypeToJSON = exports.CopyRevenueTypeMappingListTypeFromJSONTyped = exports.CopyRevenueTypeMappingListTypeFromJSON = exports.instanceOfCopyRevenueTypeMappingListType = void 0;
const runtime_1 = require("../runtime");
const CateringOnlyType_1 = require("./CateringOnlyType");
const CodeListType_1 = require("./CodeListType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the CopyRevenueTypeMappingListType interface.
 */
function instanceOfCopyRevenueTypeMappingListType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyRevenueTypeMappingListType = instanceOfCopyRevenueTypeMappingListType;
function CopyRevenueTypeMappingListTypeFromJSON(json) {
    return CopyRevenueTypeMappingListTypeFromJSONTyped(json, false);
}
exports.CopyRevenueTypeMappingListTypeFromJSON = CopyRevenueTypeMappingListTypeFromJSON;
function CopyRevenueTypeMappingListTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cateringOnly': !(0, runtime_1.exists)(json, 'cateringOnly') ? undefined : (0, CateringOnlyType_1.CateringOnlyTypeFromJSON)(json['cateringOnly']),
        'eventList': !(0, runtime_1.exists)(json, 'eventList') ? undefined : (0, CodeListType_1.CodeListTypeFromJSON)(json['eventList']),
        'eventType': !(0, runtime_1.exists)(json, 'eventType') ? undefined : json['eventType'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'isCateringOnly': !(0, runtime_1.exists)(json, 'isCateringOnly') ? undefined : json['isCateringOnly'],
        'isEventType': !(0, runtime_1.exists)(json, 'isEventType') ? undefined : json['isEventType'],
        'isSpace': !(0, runtime_1.exists)(json, 'isSpace') ? undefined : json['isSpace'],
        'revenueType': !(0, runtime_1.exists)(json, 'revenueType') ? undefined : json['revenueType'],
        'revenueTypeMappingId': !(0, runtime_1.exists)(json, 'revenueTypeMappingId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['revenueTypeMappingId']),
        'serviceCharge': !(0, runtime_1.exists)(json, 'serviceCharge') ? undefined : json['serviceCharge'],
        'serviceChargeCalulationMethod': !(0, runtime_1.exists)(json, 'serviceChargeCalulationMethod') ? undefined : json['serviceChargeCalulationMethod'],
        'serviceChargeTrxCode': !(0, runtime_1.exists)(json, 'serviceChargeTrxCode') ? undefined : json['serviceChargeTrxCode'],
        'space': !(0, runtime_1.exists)(json, 'space') ? undefined : json['space'],
        'spaceList': !(0, runtime_1.exists)(json, 'spaceList') ? undefined : (0, CodeListType_1.CodeListTypeFromJSON)(json['spaceList']),
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : json['transactionCode'],
    };
}
exports.CopyRevenueTypeMappingListTypeFromJSONTyped = CopyRevenueTypeMappingListTypeFromJSONTyped;
function CopyRevenueTypeMappingListTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cateringOnly': (0, CateringOnlyType_1.CateringOnlyTypeToJSON)(value.cateringOnly),
        'eventList': (0, CodeListType_1.CodeListTypeToJSON)(value.eventList),
        'eventType': value.eventType,
        'hotelId': value.hotelId,
        'isCateringOnly': value.isCateringOnly,
        'isEventType': value.isEventType,
        'isSpace': value.isSpace,
        'revenueType': value.revenueType,
        'revenueTypeMappingId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.revenueTypeMappingId),
        'serviceCharge': value.serviceCharge,
        'serviceChargeCalulationMethod': value.serviceChargeCalulationMethod,
        'serviceChargeTrxCode': value.serviceChargeTrxCode,
        'space': value.space,
        'spaceList': (0, CodeListType_1.CodeListTypeToJSON)(value.spaceList),
        'transactionCode': value.transactionCode,
    };
}
exports.CopyRevenueTypeMappingListTypeToJSON = CopyRevenueTypeMappingListTypeToJSON;
