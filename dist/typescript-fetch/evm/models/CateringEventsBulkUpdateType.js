"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CateringEventsBulkUpdateTypeToJSON = exports.CateringEventsBulkUpdateTypeFromJSONTyped = exports.CateringEventsBulkUpdateTypeFromJSON = exports.instanceOfCateringEventsBulkUpdateType = void 0;
const runtime_1 = require("../runtime");
const CateringEventBulkUpdateDetailType_1 = require("./CateringEventBulkUpdateDetailType");
const CateringEventBulkUpdateFunctionSpaceType_1 = require("./CateringEventBulkUpdateFunctionSpaceType");
const EventIdList_1 = require("./EventIdList");
/**
 * Check if a given object implements the CateringEventsBulkUpdateType interface.
 */
function instanceOfCateringEventsBulkUpdateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCateringEventsBulkUpdateType = instanceOfCateringEventsBulkUpdateType;
function CateringEventsBulkUpdateTypeFromJSON(json) {
    return CateringEventsBulkUpdateTypeFromJSONTyped(json, false);
}
exports.CateringEventsBulkUpdateTypeFromJSON = CateringEventsBulkUpdateTypeFromJSON;
function CateringEventsBulkUpdateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'eventIdList': !(0, runtime_1.exists)(json, 'eventIdList') ? undefined : (0, EventIdList_1.EventIdListFromJSON)(json['eventIdList']),
        'eventRec': !(0, runtime_1.exists)(json, 'eventRec') ? undefined : (0, CateringEventBulkUpdateDetailType_1.CateringEventBulkUpdateDetailTypeFromJSON)(json['eventRec']),
        'functionSpaceRec': !(0, runtime_1.exists)(json, 'functionSpaceRec') ? undefined : (0, CateringEventBulkUpdateFunctionSpaceType_1.CateringEventBulkUpdateFunctionSpaceTypeFromJSON)(json['functionSpaceRec']),
        'overrideProcessWarnings': !(0, runtime_1.exists)(json, 'overrideProcessWarnings') ? undefined : json['overrideProcessWarnings'],
    };
}
exports.CateringEventsBulkUpdateTypeFromJSONTyped = CateringEventsBulkUpdateTypeFromJSONTyped;
function CateringEventsBulkUpdateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'eventIdList': (0, EventIdList_1.EventIdListToJSON)(value.eventIdList),
        'eventRec': (0, CateringEventBulkUpdateDetailType_1.CateringEventBulkUpdateDetailTypeToJSON)(value.eventRec),
        'functionSpaceRec': (0, CateringEventBulkUpdateFunctionSpaceType_1.CateringEventBulkUpdateFunctionSpaceTypeToJSON)(value.functionSpaceRec),
        'overrideProcessWarnings': value.overrideProcessWarnings,
    };
}
exports.CateringEventsBulkUpdateTypeToJSON = CateringEventsBulkUpdateTypeToJSON;