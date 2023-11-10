"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailInfoResponseTypeToJSON = exports.EmailInfoResponseTypeFromJSONTyped = exports.EmailInfoResponseTypeFromJSON = exports.instanceOfEmailInfoResponseType = void 0;
const runtime_1 = require("../runtime");
const AccountId_1 = require("./AccountId");
const BlockId_1 = require("./BlockId");
const CodeListType_1 = require("./CodeListType");
const ContactId_1 = require("./ContactId");
const EmailID_1 = require("./EmailID");
/**
 * Check if a given object implements the EmailInfoResponseType interface.
 */
function instanceOfEmailInfoResponseType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEmailInfoResponseType = instanceOfEmailInfoResponseType;
function EmailInfoResponseTypeFromJSON(json) {
    return EmailInfoResponseTypeFromJSONTyped(json, false);
}
exports.EmailInfoResponseTypeFromJSON = EmailInfoResponseTypeFromJSON;
function EmailInfoResponseTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !(0, runtime_1.exists)(json, 'accountId') ? undefined : (0, AccountId_1.AccountIdFromJSON)(json['accountId']),
        'blockId': !(0, runtime_1.exists)(json, 'blockId') ? undefined : (0, BlockId_1.BlockIdFromJSON)(json['blockId']),
        'contactId': !(0, runtime_1.exists)(json, 'contactId') ? undefined : (0, ContactId_1.ContactIdFromJSON)(json['contactId']),
        'emailAttachmentId': !(0, runtime_1.exists)(json, 'emailAttachmentId') ? undefined : json['emailAttachmentId'],
        'emailID': !(0, runtime_1.exists)(json, 'emailID') ? undefined : (0, EmailID_1.EmailIDFromJSON)(json['emailID']),
        'emailReceivedDateTime': !(0, runtime_1.exists)(json, 'emailReceivedDateTime') ? undefined : json['emailReceivedDateTime'],
        'emailRecipients': !(0, runtime_1.exists)(json, 'emailRecipients') ? undefined : json['emailRecipients'],
        'emailSubject': !(0, runtime_1.exists)(json, 'emailSubject') ? undefined : json['emailSubject'],
        'hasEmailAttachments': !(0, runtime_1.exists)(json, 'hasEmailAttachments') ? undefined : json['hasEmailAttachments'],
        'hotelCodes': !(0, runtime_1.exists)(json, 'hotelCodes') ? undefined : (0, CodeListType_1.CodeListTypeFromJSON)(json['hotelCodes']),
        'senderEmailAddress': !(0, runtime_1.exists)(json, 'senderEmailAddress') ? undefined : json['senderEmailAddress'],
        'senderFirstName': !(0, runtime_1.exists)(json, 'senderFirstName') ? undefined : json['senderFirstName'],
        'senderLastName': !(0, runtime_1.exists)(json, 'senderLastName') ? undefined : json['senderLastName'],
    };
}
exports.EmailInfoResponseTypeFromJSONTyped = EmailInfoResponseTypeFromJSONTyped;
function EmailInfoResponseTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountId': (0, AccountId_1.AccountIdToJSON)(value.accountId),
        'blockId': (0, BlockId_1.BlockIdToJSON)(value.blockId),
        'contactId': (0, ContactId_1.ContactIdToJSON)(value.contactId),
        'emailAttachmentId': value.emailAttachmentId,
        'emailID': (0, EmailID_1.EmailIDToJSON)(value.emailID),
        'emailReceivedDateTime': value.emailReceivedDateTime,
        'emailRecipients': value.emailRecipients,
        'emailSubject': value.emailSubject,
        'hasEmailAttachments': value.hasEmailAttachments,
        'hotelCodes': (0, CodeListType_1.CodeListTypeToJSON)(value.hotelCodes),
        'senderEmailAddress': value.senderEmailAddress,
        'senderFirstName': value.senderFirstName,
        'senderLastName': value.senderLastName,
    };
}
exports.EmailInfoResponseTypeToJSON = EmailInfoResponseTypeToJSON;
