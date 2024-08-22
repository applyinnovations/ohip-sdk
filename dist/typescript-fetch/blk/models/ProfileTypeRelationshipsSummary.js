"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileTypeRelationshipsSummaryToJSON = exports.ProfileTypeRelationshipsSummaryFromJSONTyped = exports.ProfileTypeRelationshipsSummaryFromJSON = exports.instanceOfProfileTypeRelationshipsSummary = void 0;
const runtime_1 = require("../runtime");
const RelationshipInfoSummaryType_1 = require("./RelationshipInfoSummaryType");
/**
 * Check if a given object implements the ProfileTypeRelationshipsSummary interface.
 */
function instanceOfProfileTypeRelationshipsSummary(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileTypeRelationshipsSummary = instanceOfProfileTypeRelationshipsSummary;
function ProfileTypeRelationshipsSummaryFromJSON(json) {
    return ProfileTypeRelationshipsSummaryFromJSONTyped(json, false);
}
exports.ProfileTypeRelationshipsSummaryFromJSON = ProfileTypeRelationshipsSummaryFromJSON;
function ProfileTypeRelationshipsSummaryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'relationship': !(0, runtime_1.exists)(json, 'relationship') ? undefined : (json['relationship'].map(RelationshipInfoSummaryType_1.RelationshipInfoSummaryTypeFromJSON)),
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.ProfileTypeRelationshipsSummaryFromJSONTyped = ProfileTypeRelationshipsSummaryFromJSONTyped;
function ProfileTypeRelationshipsSummaryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'hasMore': value.hasMore,
        'relationship': value.relationship === undefined ? undefined : (value.relationship.map(RelationshipInfoSummaryType_1.RelationshipInfoSummaryTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
exports.ProfileTypeRelationshipsSummaryToJSON = ProfileTypeRelationshipsSummaryToJSON;
