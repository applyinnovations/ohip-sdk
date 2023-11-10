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
exports.MessageDeliveryTypeToJSON = exports.MessageDeliveryTypeFromJSONTyped = exports.MessageDeliveryTypeFromJSON = exports.instanceOfMessageDeliveryType = void 0;
const runtime_1 = require("../runtime");
const MessageStatusType_1 = require("./MessageStatusType");
/**
 * Check if a given object implements the MessageDeliveryType interface.
 */
function instanceOfMessageDeliveryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMessageDeliveryType = instanceOfMessageDeliveryType;
function MessageDeliveryTypeFromJSON(json) {
    return MessageDeliveryTypeFromJSONTyped(json, false);
}
exports.MessageDeliveryTypeFromJSON = MessageDeliveryTypeFromJSON;
function MessageDeliveryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'deliveredBy': !(0, runtime_1.exists)(json, 'deliveredBy') ? undefined : json['deliveredBy'],
        'deliveryDate': !(0, runtime_1.exists)(json, 'deliveryDate') ? undefined : json['deliveryDate'],
        'deliveryStatus': !(0, runtime_1.exists)(json, 'deliveryStatus') ? undefined : (0, MessageStatusType_1.MessageStatusTypeFromJSON)(json['deliveryStatus']),
        'printDate': !(0, runtime_1.exists)(json, 'printDate') ? undefined : json['printDate'],
        'textMessageRecipientNo': !(0, runtime_1.exists)(json, 'textMessageRecipientNo') ? undefined : json['textMessageRecipientNo'],
        'textMessageSentBy': !(0, runtime_1.exists)(json, 'textMessageSentBy') ? undefined : json['textMessageSentBy'],
        'textMessageSentById': !(0, runtime_1.exists)(json, 'textMessageSentById') ? undefined : json['textMessageSentById'],
        'textMessageSentDate': !(0, runtime_1.exists)(json, 'textMessageSentDate') ? undefined : json['textMessageSentDate'],
    };
}
exports.MessageDeliveryTypeFromJSONTyped = MessageDeliveryTypeFromJSONTyped;
function MessageDeliveryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'deliveredBy': value.deliveredBy,
        'deliveryDate': value.deliveryDate,
        'deliveryStatus': (0, MessageStatusType_1.MessageStatusTypeToJSON)(value.deliveryStatus),
        'printDate': value.printDate,
        'textMessageRecipientNo': value.textMessageRecipientNo,
        'textMessageSentBy': value.textMessageSentBy,
        'textMessageSentById': value.textMessageSentById,
        'textMessageSentDate': value.textMessageSentDate,
    };
}
exports.MessageDeliveryTypeToJSON = MessageDeliveryTypeToJSON;
