"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestMessageTypeToJSON = exports.GuestMessageTypeFromJSONTyped = exports.GuestMessageTypeFromJSON = exports.instanceOfGuestMessageType = void 0;
const runtime_1 = require("../runtime");
const MessageDeliveryType_1 = require("./MessageDeliveryType");
const MessageType_1 = require("./MessageType");
/**
 * Check if a given object implements the GuestMessageType interface.
 */
function instanceOfGuestMessageType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGuestMessageType = instanceOfGuestMessageType;
function GuestMessageTypeFromJSON(json) {
    return GuestMessageTypeFromJSONTyped(json, false);
}
exports.GuestMessageTypeFromJSON = GuestMessageTypeFromJSON;
function GuestMessageTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'delivery': !(0, runtime_1.exists)(json, 'delivery') ? undefined : (0, MessageDeliveryType_1.MessageDeliveryTypeFromJSON)(json['delivery']),
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idContext': !(0, runtime_1.exists)(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !(0, runtime_1.exists)(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !(0, runtime_1.exists)(json, 'instance') ? undefined : json['instance'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : (0, MessageType_1.MessageTypeFromJSON)(json['message']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
    };
}
exports.GuestMessageTypeFromJSONTyped = GuestMessageTypeFromJSONTyped;
function GuestMessageTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'delivery': (0, MessageDeliveryType_1.MessageDeliveryTypeToJSON)(value.delivery),
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'message': (0, MessageType_1.MessageTypeToJSON)(value.message),
        'type': value.type,
        'url': value.url,
    };
}
exports.GuestMessageTypeToJSON = GuestMessageTypeToJSON;
