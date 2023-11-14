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
exports.TicketTypeToJSON = exports.TicketTypeFromJSONTyped = exports.TicketTypeFromJSON = exports.instanceOfTicketType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the TicketType interface.
 */
function instanceOfTicketType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTicketType = instanceOfTicketType;
function TicketTypeFromJSON(json) {
    return TicketTypeFromJSONTyped(json, false);
}
exports.TicketTypeFromJSON = TicketTypeFromJSON;
function TicketTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'consumptionDate': !(0, runtime_1.exists)(json, 'consumptionDate') ? undefined : (new Date(json['consumptionDate'])),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'issueDate': !(0, runtime_1.exists)(json, 'issueDate') ? undefined : (new Date(json['issueDate'])),
        'packageCode': !(0, runtime_1.exists)(json, 'packageCode') ? undefined : json['packageCode'],
        'price': !(0, runtime_1.exists)(json, 'price') ? undefined : json['price'],
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'reference': !(0, runtime_1.exists)(json, 'reference') ? undefined : json['reference'],
        'rentalCode': !(0, runtime_1.exists)(json, 'rentalCode') ? undefined : json['rentalCode'],
        'reservationProductId': !(0, runtime_1.exists)(json, 'reservationProductId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['reservationProductId']),
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'statusDescription': !(0, runtime_1.exists)(json, 'statusDescription') ? undefined : json['statusDescription'],
        'ticketId': !(0, runtime_1.exists)(json, 'ticketId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['ticketId']),
        'ticketNumber': !(0, runtime_1.exists)(json, 'ticketNumber') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['ticketNumber']),
    };
}
exports.TicketTypeFromJSONTyped = TicketTypeFromJSONTyped;
function TicketTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'consumptionDate': value.consumptionDate === undefined ? undefined : (value.consumptionDate.toISOString().substring(0, 10)),
        'description': value.description,
        'issueDate': value.issueDate === undefined ? undefined : (value.issueDate.toISOString().substring(0, 10)),
        'packageCode': value.packageCode,
        'price': value.price,
        'quantity': value.quantity,
        'reference': value.reference,
        'rentalCode': value.rentalCode,
        'reservationProductId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.reservationProductId),
        'status': value.status,
        'statusDescription': value.statusDescription,
        'ticketId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.ticketId),
        'ticketNumber': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.ticketNumber),
    };
}
exports.TicketTypeToJSON = TicketTypeToJSON;