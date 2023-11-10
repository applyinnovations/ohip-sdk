"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreEmailRequestToJSON = exports.StoreEmailRequestFromJSONTyped = exports.StoreEmailRequestFromJSON = exports.instanceOfStoreEmailRequest = void 0;
const runtime_1 = require("../runtime");
const BasicEmailListType_1 = require("./BasicEmailListType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the StoreEmailRequest interface.
 */
function instanceOfStoreEmailRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStoreEmailRequest = instanceOfStoreEmailRequest;
function StoreEmailRequestFromJSON(json) {
    return StoreEmailRequestFromJSONTyped(json, false);
}
exports.StoreEmailRequestFromJSON = StoreEmailRequestFromJSON;
function StoreEmailRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockId': !(0, runtime_1.exists)(json, 'blockId') ? undefined : json['blockId'],
        'emailBody': !(0, runtime_1.exists)(json, 'emailBody') ? undefined : json['emailBody'],
        'emailReceiveDate': !(0, runtime_1.exists)(json, 'emailReceiveDate') ? undefined : json['emailReceiveDate'],
        'fromAddress': !(0, runtime_1.exists)(json, 'fromAddress') ? undefined : json['fromAddress'],
        'hasAttachment': !(0, runtime_1.exists)(json, 'hasAttachment') ? undefined : json['hasAttachment'],
        'messageId': !(0, runtime_1.exists)(json, 'messageId') ? undefined : json['messageId'],
        'subject': !(0, runtime_1.exists)(json, 'subject') ? undefined : json['subject'],
        'toAddress': !(0, runtime_1.exists)(json, 'toAddress') ? undefined : (0, BasicEmailListType_1.BasicEmailListTypeFromJSON)(json['toAddress']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.StoreEmailRequestFromJSONTyped = StoreEmailRequestFromJSONTyped;
function StoreEmailRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockId': value.blockId,
        'emailBody': value.emailBody,
        'emailReceiveDate': value.emailReceiveDate,
        'fromAddress': value.fromAddress,
        'hasAttachment': value.hasAttachment,
        'messageId': value.messageId,
        'subject': value.subject,
        'toAddress': (0, BasicEmailListType_1.BasicEmailListTypeToJSON)(value.toAddress),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.StoreEmailRequestToJSON = StoreEmailRequestToJSON;
