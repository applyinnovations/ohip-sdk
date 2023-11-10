"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CateringMenuInfoTypeToJSON = exports.CateringMenuInfoTypeFromJSONTyped = exports.CateringMenuInfoTypeFromJSON = exports.instanceOfCateringMenuInfoType = void 0;
const runtime_1 = require("../runtime");
const CodeListType_1 = require("./CodeListType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const DateRangeType_1 = require("./DateRangeType");
const MenuTypeType_1 = require("./MenuTypeType");
const ServingType_1 = require("./ServingType");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
/**
 * Check if a given object implements the CateringMenuInfoType interface.
 */
function instanceOfCateringMenuInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCateringMenuInfoType = instanceOfCateringMenuInfoType;
function CateringMenuInfoTypeFromJSON(json) {
    return CateringMenuInfoTypeFromJSONTyped(json, false);
}
exports.CateringMenuInfoTypeFromJSON = CateringMenuInfoTypeFromJSON;
function CateringMenuInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'className': !(0, runtime_1.exists)(json, 'className') ? undefined : json['className'],
        'consumptionBased': !(0, runtime_1.exists)(json, 'consumptionBased') ? undefined : json['consumptionBased'],
        'courseCount': !(0, runtime_1.exists)(json, 'courseCount') ? undefined : json['courseCount'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['description']),
        'dietaryList': !(0, runtime_1.exists)(json, 'dietaryList') ? undefined : (0, CodeListType_1.CodeListTypeFromJSON)(json['dietaryList']),
        'eventDateRange': !(0, runtime_1.exists)(json, 'eventDateRange') ? undefined : (0, DateRangeType_1.DateRangeTypeFromJSON)(json['eventDateRange']),
        'eventTypes': !(0, runtime_1.exists)(json, 'eventTypes') ? undefined : (0, CodeListType_1.CodeListTypeFromJSON)(json['eventTypes']),
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'includedInMenu': !(0, runtime_1.exists)(json, 'includedInMenu') ? undefined : json['includedInMenu'],
        'includedInPrice': !(0, runtime_1.exists)(json, 'includedInPrice') ? undefined : json['includedInPrice'],
        'menusSold': !(0, runtime_1.exists)(json, 'menusSold') ? undefined : json['menusSold'],
        'multiChoice': !(0, runtime_1.exists)(json, 'multiChoice') ? undefined : json['multiChoice'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['name']),
        'quickInsertCode': !(0, runtime_1.exists)(json, 'quickInsertCode') ? undefined : json['quickInsertCode'],
        'restriction': !(0, runtime_1.exists)(json, 'restriction') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['restriction']),
        'salesPrice': !(0, runtime_1.exists)(json, 'salesPrice') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['salesPrice']),
        'sellDateRange': !(0, runtime_1.exists)(json, 'sellDateRange') ? undefined : (0, DateRangeType_1.DateRangeTypeFromJSON)(json['sellDateRange']),
        'servingSize': !(0, runtime_1.exists)(json, 'servingSize') ? undefined : json['servingSize'],
        'servingType': !(0, runtime_1.exists)(json, 'servingType') ? undefined : (0, ServingType_1.ServingTypeFromJSON)(json['servingType']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : (0, MenuTypeType_1.MenuTypeTypeFromJSON)(json['type']),
        'webBookable': !(0, runtime_1.exists)(json, 'webBookable') ? undefined : json['webBookable'],
    };
}
exports.CateringMenuInfoTypeFromJSONTyped = CateringMenuInfoTypeFromJSONTyped;
function CateringMenuInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'className': value.className,
        'consumptionBased': value.consumptionBased,
        'courseCount': value.courseCount,
        'description': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.description),
        'dietaryList': (0, CodeListType_1.CodeListTypeToJSON)(value.dietaryList),
        'eventDateRange': (0, DateRangeType_1.DateRangeTypeToJSON)(value.eventDateRange),
        'eventTypes': (0, CodeListType_1.CodeListTypeToJSON)(value.eventTypes),
        'inactive': value.inactive,
        'includedInMenu': value.includedInMenu,
        'includedInPrice': value.includedInPrice,
        'menusSold': value.menusSold,
        'multiChoice': value.multiChoice,
        'name': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.name),
        'quickInsertCode': value.quickInsertCode,
        'restriction': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.restriction),
        'salesPrice': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.salesPrice),
        'sellDateRange': (0, DateRangeType_1.DateRangeTypeToJSON)(value.sellDateRange),
        'servingSize': value.servingSize,
        'servingType': (0, ServingType_1.ServingTypeToJSON)(value.servingType),
        'type': (0, MenuTypeType_1.MenuTypeTypeToJSON)(value.type),
        'webBookable': value.webBookable,
    };
}
exports.CateringMenuInfoTypeToJSON = CateringMenuInfoTypeToJSON;
