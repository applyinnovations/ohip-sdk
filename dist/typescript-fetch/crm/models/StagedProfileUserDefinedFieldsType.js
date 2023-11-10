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
exports.StagedProfileUserDefinedFieldsTypeToJSON = exports.StagedProfileUserDefinedFieldsTypeFromJSONTyped = exports.StagedProfileUserDefinedFieldsTypeFromJSON = exports.instanceOfStagedProfileUserDefinedFieldsType = void 0;
const runtime_1 = require("../runtime");
const StagedProfileCharacterUDFsType_1 = require("./StagedProfileCharacterUDFsType");
const StagedProfileDateUDFsType_1 = require("./StagedProfileDateUDFsType");
const StagedProfileNumericUDFsType_1 = require("./StagedProfileNumericUDFsType");
/**
 * Check if a given object implements the StagedProfileUserDefinedFieldsType interface.
 */
function instanceOfStagedProfileUserDefinedFieldsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStagedProfileUserDefinedFieldsType = instanceOfStagedProfileUserDefinedFieldsType;
function StagedProfileUserDefinedFieldsTypeFromJSON(json) {
    return StagedProfileUserDefinedFieldsTypeFromJSONTyped(json, false);
}
exports.StagedProfileUserDefinedFieldsTypeFromJSON = StagedProfileUserDefinedFieldsTypeFromJSON;
function StagedProfileUserDefinedFieldsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'characterUDFs': !(0, runtime_1.exists)(json, 'characterUDFs') ? undefined : (0, StagedProfileCharacterUDFsType_1.StagedProfileCharacterUDFsTypeFromJSON)(json['characterUDFs']),
        'dateUDFs': !(0, runtime_1.exists)(json, 'dateUDFs') ? undefined : (0, StagedProfileDateUDFsType_1.StagedProfileDateUDFsTypeFromJSON)(json['dateUDFs']),
        'numericUDFs': !(0, runtime_1.exists)(json, 'numericUDFs') ? undefined : (0, StagedProfileNumericUDFsType_1.StagedProfileNumericUDFsTypeFromJSON)(json['numericUDFs']),
    };
}
exports.StagedProfileUserDefinedFieldsTypeFromJSONTyped = StagedProfileUserDefinedFieldsTypeFromJSONTyped;
function StagedProfileUserDefinedFieldsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'characterUDFs': (0, StagedProfileCharacterUDFsType_1.StagedProfileCharacterUDFsTypeToJSON)(value.characterUDFs),
        'dateUDFs': (0, StagedProfileDateUDFsType_1.StagedProfileDateUDFsTypeToJSON)(value.dateUDFs),
        'numericUDFs': (0, StagedProfileNumericUDFsType_1.StagedProfileNumericUDFsTypeToJSON)(value.numericUDFs),
    };
}
exports.StagedProfileUserDefinedFieldsTypeToJSON = StagedProfileUserDefinedFieldsTypeToJSON;
