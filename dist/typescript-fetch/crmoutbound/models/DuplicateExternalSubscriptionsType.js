"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateExternalSubscriptionsTypeToJSON = exports.DuplicateExternalSubscriptionsTypeFromJSONTyped = exports.DuplicateExternalSubscriptionsTypeFromJSON = exports.instanceOfDuplicateExternalSubscriptionsType = void 0;
const runtime_1 = require("../runtime");
const ProfileId_1 = require("./ProfileId");
const ProfileSubscriptionListType_1 = require("./ProfileSubscriptionListType");
/**
 * Check if a given object implements the DuplicateExternalSubscriptionsType interface.
 */
function instanceOfDuplicateExternalSubscriptionsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDuplicateExternalSubscriptionsType = instanceOfDuplicateExternalSubscriptionsType;
function DuplicateExternalSubscriptionsTypeFromJSON(json) {
    return DuplicateExternalSubscriptionsTypeFromJSONTyped(json, false);
}
exports.DuplicateExternalSubscriptionsTypeFromJSON = DuplicateExternalSubscriptionsTypeFromJSON;
function DuplicateExternalSubscriptionsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
        'databaseId': !(0, runtime_1.exists)(json, 'databaseId') ? undefined : json['databaseId'],
        'profileSubscriptions': !(0, runtime_1.exists)(json, 'profileSubscriptions') ? undefined : (0, ProfileSubscriptionListType_1.ProfileSubscriptionListTypeFromJSON)(json['profileSubscriptions']),
    };
}
exports.DuplicateExternalSubscriptionsTypeFromJSONTyped = DuplicateExternalSubscriptionsTypeFromJSONTyped;
function DuplicateExternalSubscriptionsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'databaseId': value.databaseId,
        'profileSubscriptions': (0, ProfileSubscriptionListType_1.ProfileSubscriptionListTypeToJSON)(value.profileSubscriptions),
    };
}
exports.DuplicateExternalSubscriptionsTypeToJSON = DuplicateExternalSubscriptionsTypeToJSON;
