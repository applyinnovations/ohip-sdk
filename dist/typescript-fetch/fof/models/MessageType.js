"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTypeToJSON = exports.MessageTypeFromJSONTyped = exports.MessageTypeFromJSON = exports.instanceOfMessageType = void 0;
const runtime_1 = require("../runtime");
const TypeOfMessageType_1 = require("./TypeOfMessageType");
/**
 * Check if a given object implements the MessageType interface.
 */
function instanceOfMessageType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMessageType = instanceOfMessageType;
function MessageTypeFromJSON(json) {
    return MessageTypeFromJSONTyped(json, false);
}
exports.MessageTypeFromJSON = MessageTypeFromJSON;
function MessageTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'messageDate': !(0, runtime_1.exists)(json, 'messageDate') ? undefined : json['messageDate'],
        'messageText': !(0, runtime_1.exists)(json, 'messageText') ? undefined : json['messageText'],
        'operator': !(0, runtime_1.exists)(json, 'operator') ? undefined : json['operator'],
        'recipient': !(0, runtime_1.exists)(json, 'recipient') ? undefined : json['recipient'],
        'typeOfMessage': !(0, runtime_1.exists)(json, 'typeOfMessage') ? undefined : (0, TypeOfMessageType_1.TypeOfMessageTypeFromJSON)(json['typeOfMessage']),
    };
}
exports.MessageTypeFromJSONTyped = MessageTypeFromJSONTyped;
function MessageTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'messageDate': value.messageDate,
        'messageText': value.messageText,
        'operator': value.operator,
        'recipient': value.recipient,
        'typeOfMessage': (0, TypeOfMessageType_1.TypeOfMessageTypeToJSON)(value.typeOfMessage),
    };
}
exports.MessageTypeToJSON = MessageTypeToJSON;
