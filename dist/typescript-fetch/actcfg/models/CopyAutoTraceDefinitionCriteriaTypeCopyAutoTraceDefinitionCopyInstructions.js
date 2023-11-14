"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsToJSON = exports.CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsFromJSONTyped = exports.CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsFromJSON = exports.instanceOfCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions interface.
 */
function instanceOfCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions = instanceOfCopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructions;
function CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsFromJSON(json) {
    return CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsFromJSONTyped(json, false);
}
exports.CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsFromJSON = CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsFromJSON;
function CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowOwnerAssignmentsCopy': !(0, runtime_1.exists)(json, 'allowOwnerAssignmentsCopy') ? undefined : json['allowOwnerAssignmentsCopy'],
    };
}
exports.CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsFromJSONTyped = CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsFromJSONTyped;
function CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowOwnerAssignmentsCopy': value.allowOwnerAssignmentsCopy,
    };
}
exports.CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsToJSON = CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionCopyInstructionsToJSON;