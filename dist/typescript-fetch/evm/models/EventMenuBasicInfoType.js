"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventMenuBasicInfoTypeToJSON = exports.EventMenuBasicInfoTypeFromJSONTyped = exports.EventMenuBasicInfoTypeFromJSON = exports.instanceOfEventMenuBasicInfoType = void 0;
const runtime_1 = require("../runtime");
const CateringEventsAttendeesType_1 = require("./CateringEventsAttendeesType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const DateRangeType_1 = require("./DateRangeType");
const DateTimeRangeType_1 = require("./DateTimeRangeType");
const MenuTypeType_1 = require("./MenuTypeType");
const ServingType_1 = require("./ServingType");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the EventMenuBasicInfoType interface.
 */
function instanceOfEventMenuBasicInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventMenuBasicInfoType = instanceOfEventMenuBasicInfoType;
function EventMenuBasicInfoTypeFromJSON(json) {
    return EventMenuBasicInfoTypeFromJSONTyped(json, false);
}
exports.EventMenuBasicInfoTypeFromJSON = EventMenuBasicInfoTypeFromJSON;
function EventMenuBasicInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attendees': !(0, runtime_1.exists)(json, 'attendees') ? undefined : (0, CateringEventsAttendeesType_1.CateringEventsAttendeesTypeFromJSON)(json['attendees']),
        'className': !(0, runtime_1.exists)(json, 'className') ? undefined : json['className'],
        'consumptionBased': !(0, runtime_1.exists)(json, 'consumptionBased') ? undefined : json['consumptionBased'],
        'courseCount': !(0, runtime_1.exists)(json, 'courseCount') ? undefined : json['courseCount'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['description']),
        'dietaryList': !(0, runtime_1.exists)(json, 'dietaryList') ? undefined : json['dietaryList'],
        'discountPercentage': !(0, runtime_1.exists)(json, 'discountPercentage') ? undefined : json['discountPercentage'],
        'eventDateRange': !(0, runtime_1.exists)(json, 'eventDateRange') ? undefined : (0, DateRangeType_1.DateRangeTypeFromJSON)(json['eventDateRange']),
        'eventTypes': !(0, runtime_1.exists)(json, 'eventTypes') ? undefined : json['eventTypes'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'includedInMenu': !(0, runtime_1.exists)(json, 'includedInMenu') ? undefined : json['includedInMenu'],
        'includedInPrice': !(0, runtime_1.exists)(json, 'includedInPrice') ? undefined : json['includedInPrice'],
        'menuId': !(0, runtime_1.exists)(json, 'menuId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['menuId']),
        'menusSold': !(0, runtime_1.exists)(json, 'menusSold') ? undefined : json['menusSold'],
        'multiChoice': !(0, runtime_1.exists)(json, 'multiChoice') ? undefined : json['multiChoice'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['name']),
        'order': !(0, runtime_1.exists)(json, 'order') ? undefined : json['order'],
        'quickInsertCode': !(0, runtime_1.exists)(json, 'quickInsertCode') ? undefined : json['quickInsertCode'],
        'restriction': !(0, runtime_1.exists)(json, 'restriction') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['restriction']),
        'salesPrice': !(0, runtime_1.exists)(json, 'salesPrice') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['salesPrice']),
        'sellDateRange': !(0, runtime_1.exists)(json, 'sellDateRange') ? undefined : (0, DateRangeType_1.DateRangeTypeFromJSON)(json['sellDateRange']),
        'serveStartEndTime': !(0, runtime_1.exists)(json, 'serveStartEndTime') ? undefined : (0, DateTimeRangeType_1.DateTimeRangeTypeFromJSON)(json['serveStartEndTime']),
        'servingSize': !(0, runtime_1.exists)(json, 'servingSize') ? undefined : json['servingSize'],
        'servingType': !(0, runtime_1.exists)(json, 'servingType') ? undefined : (0, ServingType_1.ServingTypeFromJSON)(json['servingType']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : (0, MenuTypeType_1.MenuTypeTypeFromJSON)(json['type']),
        'webBookable': !(0, runtime_1.exists)(json, 'webBookable') ? undefined : json['webBookable'],
    };
}
exports.EventMenuBasicInfoTypeFromJSONTyped = EventMenuBasicInfoTypeFromJSONTyped;
function EventMenuBasicInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attendees': (0, CateringEventsAttendeesType_1.CateringEventsAttendeesTypeToJSON)(value.attendees),
        'className': value.className,
        'consumptionBased': value.consumptionBased,
        'courseCount': value.courseCount,
        'description': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.description),
        'dietaryList': value.dietaryList,
        'discountPercentage': value.discountPercentage,
        'eventDateRange': (0, DateRangeType_1.DateRangeTypeToJSON)(value.eventDateRange),
        'eventTypes': value.eventTypes,
        'hotelId': value.hotelId,
        'inactive': value.inactive,
        'includedInMenu': value.includedInMenu,
        'includedInPrice': value.includedInPrice,
        'menuId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.menuId),
        'menusSold': value.menusSold,
        'multiChoice': value.multiChoice,
        'name': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.name),
        'order': value.order,
        'quickInsertCode': value.quickInsertCode,
        'restriction': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.restriction),
        'salesPrice': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.salesPrice),
        'sellDateRange': (0, DateRangeType_1.DateRangeTypeToJSON)(value.sellDateRange),
        'serveStartEndTime': (0, DateTimeRangeType_1.DateTimeRangeTypeToJSON)(value.serveStartEndTime),
        'servingSize': value.servingSize,
        'servingType': (0, ServingType_1.ServingTypeToJSON)(value.servingType),
        'type': (0, MenuTypeType_1.MenuTypeTypeToJSON)(value.type),
        'webBookable': value.webBookable,
    };
}
exports.EventMenuBasicInfoTypeToJSON = EventMenuBasicInfoTypeToJSON;