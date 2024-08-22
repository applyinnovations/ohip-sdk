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
exports.CateringEventResourceTypeToJSON = exports.CateringEventResourceTypeFromJSONTyped = exports.CateringEventResourceTypeFromJSON = exports.instanceOfCateringEventResourceType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const EventResourceNoteType_1 = require("./EventResourceNoteType");
const ResourceId_1 = require("./ResourceId");
const ResourceType_1 = require("./ResourceType");
/**
 * Check if a given object implements the CateringEventResourceType interface.
 */
function instanceOfCateringEventResourceType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCateringEventResourceType = instanceOfCateringEventResourceType;
function CateringEventResourceTypeFromJSON(json) {
    return CateringEventResourceTypeFromJSONTyped(json, false);
}
exports.CateringEventResourceTypeFromJSON = CateringEventResourceTypeFromJSON;
function CateringEventResourceTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'consumptionBased': !(0, runtime_1.exists)(json, 'consumptionBased') ? undefined : json['consumptionBased'],
        'custom': !(0, runtime_1.exists)(json, 'custom') ? undefined : json['custom'],
        'discount': !(0, runtime_1.exists)(json, 'discount') ? undefined : json['discount'],
        'eventEndDate': !(0, runtime_1.exists)(json, 'eventEndDate') ? undefined : json['eventEndDate'],
        'eventResourceNotes': !(0, runtime_1.exists)(json, 'eventResourceNotes') ? undefined : (json['eventResourceNotes'].map(EventResourceNoteType_1.EventResourceNoteTypeFromJSON)),
        'eventStartDate': !(0, runtime_1.exists)(json, 'eventStartDate') ? undefined : json['eventStartDate'],
        'external': !(0, runtime_1.exists)(json, 'external') ? undefined : json['external'],
        'hasDiscountMenuItem': !(0, runtime_1.exists)(json, 'hasDiscountMenuItem') ? undefined : json['hasDiscountMenuItem'],
        'hasNotes': !(0, runtime_1.exists)(json, 'hasNotes') ? undefined : json['hasNotes'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hours': !(0, runtime_1.exists)(json, 'hours') ? undefined : json['hours'],
        'itemAttribute': !(0, runtime_1.exists)(json, 'itemAttribute') ? undefined : json['itemAttribute'],
        'multiChoice': !(0, runtime_1.exists)(json, 'multiChoice') ? undefined : json['multiChoice'],
        'order': !(0, runtime_1.exists)(json, 'order') ? undefined : json['order'],
        'packaged': !(0, runtime_1.exists)(json, 'packaged') ? undefined : json['packaged'],
        'persons': !(0, runtime_1.exists)(json, 'persons') ? undefined : json['persons'],
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'quantityExcluded': !(0, runtime_1.exists)(json, 'quantityExcluded') ? undefined : json['quantityExcluded'],
        'quantityIncluded': !(0, runtime_1.exists)(json, 'quantityIncluded') ? undefined : json['quantityIncluded'],
        'rentalCode': !(0, runtime_1.exists)(json, 'rentalCode') ? undefined : json['rentalCode'],
        'resourceId': !(0, runtime_1.exists)(json, 'resourceId') ? undefined : (0, ResourceId_1.ResourceIdFromJSON)(json['resourceId']),
        'resourceName': !(0, runtime_1.exists)(json, 'resourceName') ? undefined : json['resourceName'],
        'resourceType': !(0, runtime_1.exists)(json, 'resourceType') ? undefined : (0, ResourceType_1.ResourceTypeFromJSON)(json['resourceType']),
        'revenue': !(0, runtime_1.exists)(json, 'revenue') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['revenue']),
        'sellEndDate': !(0, runtime_1.exists)(json, 'sellEndDate') ? undefined : json['sellEndDate'],
        'sellStartDate': !(0, runtime_1.exists)(json, 'sellStartDate') ? undefined : json['sellStartDate'],
        'setupCode': !(0, runtime_1.exists)(json, 'setupCode') ? undefined : json['setupCode'],
        'unitPrice': !(0, runtime_1.exists)(json, 'unitPrice') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['unitPrice']),
    };
}
exports.CateringEventResourceTypeFromJSONTyped = CateringEventResourceTypeFromJSONTyped;
function CateringEventResourceTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'consumptionBased': value.consumptionBased,
        'custom': value.custom,
        'discount': value.discount,
        'eventEndDate': value.eventEndDate,
        'eventResourceNotes': value.eventResourceNotes === undefined ? undefined : (value.eventResourceNotes.map(EventResourceNoteType_1.EventResourceNoteTypeToJSON)),
        'eventStartDate': value.eventStartDate,
        'external': value.external,
        'hasDiscountMenuItem': value.hasDiscountMenuItem,
        'hasNotes': value.hasNotes,
        'hotelId': value.hotelId,
        'hours': value.hours,
        'itemAttribute': value.itemAttribute,
        'multiChoice': value.multiChoice,
        'order': value.order,
        'packaged': value.packaged,
        'persons': value.persons,
        'quantity': value.quantity,
        'quantityExcluded': value.quantityExcluded,
        'quantityIncluded': value.quantityIncluded,
        'rentalCode': value.rentalCode,
        'resourceId': (0, ResourceId_1.ResourceIdToJSON)(value.resourceId),
        'resourceName': value.resourceName,
        'resourceType': (0, ResourceType_1.ResourceTypeToJSON)(value.resourceType),
        'revenue': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.revenue),
        'sellEndDate': value.sellEndDate,
        'sellStartDate': value.sellStartDate,
        'setupCode': value.setupCode,
        'unitPrice': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.unitPrice),
    };
}
exports.CateringEventResourceTypeToJSON = CateringEventResourceTypeToJSON;
