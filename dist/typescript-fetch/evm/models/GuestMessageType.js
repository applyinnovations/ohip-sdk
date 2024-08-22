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
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : json['purgeDate'],
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
        'purgeDate': value.purgeDate,
        'type': value.type,
        'url': value.url,
    };
}
exports.GuestMessageTypeToJSON = GuestMessageTypeToJSON;
