"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipInfoSummaryTypeToJSON = exports.RelationshipInfoSummaryTypeFromJSONTyped = exports.RelationshipInfoSummaryTypeFromJSON = exports.instanceOfRelationshipInfoSummaryType = void 0;
const runtime_1 = require("../runtime");
const MasterAccountInfoType_1 = require("./MasterAccountInfoType");
const RelationshipProfileSummaryType_1 = require("./RelationshipProfileSummaryType");
/**
 * Check if a given object implements the RelationshipInfoSummaryType interface.
 */
function instanceOfRelationshipInfoSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRelationshipInfoSummaryType = instanceOfRelationshipInfoSummaryType;
function RelationshipInfoSummaryTypeFromJSON(json) {
    return RelationshipInfoSummaryTypeFromJSONTyped(json, false);
}
exports.RelationshipInfoSummaryTypeFromJSON = RelationshipInfoSummaryTypeFromJSON;
function RelationshipInfoSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'relationshipProfile': !(0, runtime_1.exists)(json, 'relationshipProfile') ? undefined : (0, RelationshipProfileSummaryType_1.RelationshipProfileSummaryTypeFromJSON)(json['relationshipProfile']),
        'masterAccountDetails': !(0, runtime_1.exists)(json, 'masterAccountDetails') ? undefined : (0, MasterAccountInfoType_1.MasterAccountInfoTypeFromJSON)(json['masterAccountDetails']),
        'relationshipID': !(0, runtime_1.exists)(json, 'relationshipID') ? undefined : json['relationshipID'],
        'sourceRelation': !(0, runtime_1.exists)(json, 'sourceRelation') ? undefined : json['sourceRelation'],
        'sourceRelationDescription': !(0, runtime_1.exists)(json, 'sourceRelationDescription') ? undefined : json['sourceRelationDescription'],
        'targetRelation': !(0, runtime_1.exists)(json, 'targetRelation') ? undefined : json['targetRelation'],
        'targetRelationDescription': !(0, runtime_1.exists)(json, 'targetRelationDescription') ? undefined : json['targetRelationDescription'],
    };
}
exports.RelationshipInfoSummaryTypeFromJSONTyped = RelationshipInfoSummaryTypeFromJSONTyped;
function RelationshipInfoSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'relationshipProfile': (0, RelationshipProfileSummaryType_1.RelationshipProfileSummaryTypeToJSON)(value.relationshipProfile),
        'masterAccountDetails': (0, MasterAccountInfoType_1.MasterAccountInfoTypeToJSON)(value.masterAccountDetails),
        'relationshipID': value.relationshipID,
        'sourceRelation': value.sourceRelation,
        'sourceRelationDescription': value.sourceRelationDescription,
        'targetRelation': value.targetRelation,
        'targetRelationDescription': value.targetRelationDescription,
    };
}
exports.RelationshipInfoSummaryTypeToJSON = RelationshipInfoSummaryTypeToJSON;
