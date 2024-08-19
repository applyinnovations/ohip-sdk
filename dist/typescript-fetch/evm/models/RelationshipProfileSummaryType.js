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
exports.RelationshipProfileSummaryTypeToJSON = exports.RelationshipProfileSummaryTypeFromJSONTyped = exports.RelationshipProfileSummaryTypeFromJSON = exports.instanceOfRelationshipProfileSummaryType = void 0;
const runtime_1 = require("../runtime");
const ProfileStatusType_1 = require("./ProfileStatusType");
const ProfileTypeType_1 = require("./ProfileTypeType");
const RelationshipAddressType_1 = require("./RelationshipAddressType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the RelationshipProfileSummaryType interface.
 */
function instanceOfRelationshipProfileSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRelationshipProfileSummaryType = instanceOfRelationshipProfileSummaryType;
function RelationshipProfileSummaryTypeFromJSON(json) {
    return RelationshipProfileSummaryTypeFromJSONTyped(json, false);
}
exports.RelationshipProfileSummaryTypeFromJSON = RelationshipProfileSummaryTypeFromJSON;
function RelationshipProfileSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': !(0, runtime_1.exists)(json, 'address') ? undefined : (0, RelationshipAddressType_1.RelationshipAddressTypeFromJSON)(json['address']),
        'companyName': !(0, runtime_1.exists)(json, 'companyName') ? undefined : json['companyName'],
        'customerName': !(0, runtime_1.exists)(json, 'customerName') ? undefined : json['customerName'],
        'emailAddress': !(0, runtime_1.exists)(json, 'emailAddress') ? undefined : json['emailAddress'],
        'ownerCode': !(0, runtime_1.exists)(json, 'ownerCode') ? undefined : json['ownerCode'],
        'primary': !(0, runtime_1.exists)(json, 'primary') ? undefined : json['primary'],
        'primaryOwnerCode': !(0, runtime_1.exists)(json, 'primaryOwnerCode') ? undefined : json['primaryOwnerCode'],
        'profileIdList': !(0, runtime_1.exists)(json, 'profileIdList') ? undefined : (json['profileIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'profileStatus': !(0, runtime_1.exists)(json, 'profileStatus') ? undefined : (0, ProfileStatusType_1.ProfileStatusTypeFromJSON)(json['profileStatus']),
        'profileType': !(0, runtime_1.exists)(json, 'profileType') ? undefined : (0, ProfileTypeType_1.ProfileTypeTypeFromJSON)(json['profileType']),
        'telephoneNumber': !(0, runtime_1.exists)(json, 'telephoneNumber') ? undefined : json['telephoneNumber'],
    };
}
exports.RelationshipProfileSummaryTypeFromJSONTyped = RelationshipProfileSummaryTypeFromJSONTyped;
function RelationshipProfileSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': (0, RelationshipAddressType_1.RelationshipAddressTypeToJSON)(value.address),
        'companyName': value.companyName,
        'customerName': value.customerName,
        'emailAddress': value.emailAddress,
        'ownerCode': value.ownerCode,
        'primary': value.primary,
        'primaryOwnerCode': value.primaryOwnerCode,
        'profileIdList': value.profileIdList === undefined ? undefined : (value.profileIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'profileStatus': (0, ProfileStatusType_1.ProfileStatusTypeToJSON)(value.profileStatus),
        'profileType': (0, ProfileTypeType_1.ProfileTypeTypeToJSON)(value.profileType),
        'telephoneNumber': value.telephoneNumber,
    };
}
exports.RelationshipProfileSummaryTypeToJSON = RelationshipProfileSummaryTypeToJSON;
