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
exports.RelationshipInfoTypeToJSON = exports.RelationshipInfoTypeFromJSONTyped = exports.RelationshipInfoTypeFromJSON = exports.instanceOfRelationshipInfoType = void 0;
const runtime_1 = require("../runtime");
const ChangeRelationsType_1 = require("./ChangeRelationsType");
const MasterAccountInfoType_1 = require("./MasterAccountInfoType");
const RelationshipProfileType_1 = require("./RelationshipProfileType");
/**
 * Check if a given object implements the RelationshipInfoType interface.
 */
function instanceOfRelationshipInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRelationshipInfoType = instanceOfRelationshipInfoType;
function RelationshipInfoTypeFromJSON(json) {
    return RelationshipInfoTypeFromJSONTyped(json, false);
}
exports.RelationshipInfoTypeFromJSON = RelationshipInfoTypeFromJSON;
function RelationshipInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'changeRelationship': !(0, runtime_1.exists)(json, 'changeRelationship') ? undefined : (0, ChangeRelationsType_1.ChangeRelationsTypeFromJSON)(json['changeRelationship']),
        'relationshipProfile': !(0, runtime_1.exists)(json, 'relationshipProfile') ? undefined : (0, RelationshipProfileType_1.RelationshipProfileTypeFromJSON)(json['relationshipProfile']),
        'masterAccountInfo': !(0, runtime_1.exists)(json, 'masterAccountInfo') ? undefined : (0, MasterAccountInfoType_1.MasterAccountInfoTypeFromJSON)(json['masterAccountInfo']),
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'relation': !(0, runtime_1.exists)(json, 'relation') ? undefined : json['relation'],
        'relationDescription': !(0, runtime_1.exists)(json, 'relationDescription') ? undefined : json['relationDescription'],
        'targetRelation': !(0, runtime_1.exists)(json, 'targetRelation') ? undefined : json['targetRelation'],
        'targetRelationDescription': !(0, runtime_1.exists)(json, 'targetRelationDescription') ? undefined : json['targetRelationDescription'],
    };
}
exports.RelationshipInfoTypeFromJSONTyped = RelationshipInfoTypeFromJSONTyped;
function RelationshipInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'changeRelationship': (0, ChangeRelationsType_1.ChangeRelationsTypeToJSON)(value.changeRelationship),
        'relationshipProfile': (0, RelationshipProfileType_1.RelationshipProfileTypeToJSON)(value.relationshipProfile),
        'masterAccountInfo': (0, MasterAccountInfoType_1.MasterAccountInfoTypeToJSON)(value.masterAccountInfo),
        'id': value.id,
        'relation': value.relation,
        'relationDescription': value.relationDescription,
        'targetRelation': value.targetRelation,
        'targetRelationDescription': value.targetRelationDescription,
    };
}
exports.RelationshipInfoTypeToJSON = RelationshipInfoTypeToJSON;
