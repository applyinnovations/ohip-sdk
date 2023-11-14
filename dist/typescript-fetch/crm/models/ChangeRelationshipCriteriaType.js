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
exports.ChangeRelationshipCriteriaTypeToJSON = exports.ChangeRelationshipCriteriaTypeFromJSONTyped = exports.ChangeRelationshipCriteriaTypeFromJSON = exports.instanceOfChangeRelationshipCriteriaType = void 0;
const runtime_1 = require("../runtime");
const ChangeRelationsInfoType_1 = require("./ChangeRelationsInfoType");
/**
 * Check if a given object implements the ChangeRelationshipCriteriaType interface.
 */
function instanceOfChangeRelationshipCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeRelationshipCriteriaType = instanceOfChangeRelationshipCriteriaType;
function ChangeRelationshipCriteriaTypeFromJSON(json) {
    return ChangeRelationshipCriteriaTypeFromJSONTyped(json, false);
}
exports.ChangeRelationshipCriteriaTypeFromJSON = ChangeRelationshipCriteriaTypeFromJSON;
function ChangeRelationshipCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'changeRelationship': !(0, runtime_1.exists)(json, 'changeRelationship') ? undefined : (0, ChangeRelationsInfoType_1.ChangeRelationsInfoTypeFromJSON)(json['changeRelationship']),
        'relationshipID': !(0, runtime_1.exists)(json, 'relationshipID') ? undefined : json['relationshipID'],
        'sourceRelation': !(0, runtime_1.exists)(json, 'sourceRelation') ? undefined : json['sourceRelation'],
        'sourceRelationDescription': !(0, runtime_1.exists)(json, 'sourceRelationDescription') ? undefined : json['sourceRelationDescription'],
        'targetRelation': !(0, runtime_1.exists)(json, 'targetRelation') ? undefined : json['targetRelation'],
        'targetRelationDescription': !(0, runtime_1.exists)(json, 'targetRelationDescription') ? undefined : json['targetRelationDescription'],
    };
}
exports.ChangeRelationshipCriteriaTypeFromJSONTyped = ChangeRelationshipCriteriaTypeFromJSONTyped;
function ChangeRelationshipCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'changeRelationship': (0, ChangeRelationsInfoType_1.ChangeRelationsInfoTypeToJSON)(value.changeRelationship),
        'relationshipID': value.relationshipID,
        'sourceRelation': value.sourceRelation,
        'sourceRelationDescription': value.sourceRelationDescription,
        'targetRelation': value.targetRelation,
        'targetRelationDescription': value.targetRelationDescription,
    };
}
exports.ChangeRelationshipCriteriaTypeToJSON = ChangeRelationshipCriteriaTypeToJSON;