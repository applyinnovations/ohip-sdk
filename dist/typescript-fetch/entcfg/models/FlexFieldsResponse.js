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
exports.FlexFieldsResponseToJSON = exports.FlexFieldsResponseFromJSONTyped = exports.FlexFieldsResponseFromJSON = exports.instanceOfFlexFieldsResponse = void 0;
const runtime_1 = require("../runtime");
const FlexFieldType_1 = require("./FlexFieldType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the FlexFieldsResponse interface.
 */
function instanceOfFlexFieldsResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFlexFieldsResponse = instanceOfFlexFieldsResponse;
function FlexFieldsResponseFromJSON(json) {
    return FlexFieldsResponseFromJSONTyped(json, false);
}
exports.FlexFieldsResponseFromJSON = FlexFieldsResponseFromJSON;
function FlexFieldsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'flexFields': !(0, runtime_1.exists)(json, 'flexFields') ? undefined : (json['flexFields'].map(FlexFieldType_1.FlexFieldTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
    };
}
exports.FlexFieldsResponseFromJSONTyped = FlexFieldsResponseFromJSONTyped;
function FlexFieldsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'flexFields': value.flexFields === undefined ? undefined : (value.flexFields.map(FlexFieldType_1.FlexFieldTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
        'totalPages': value.totalPages,
        'offset': value.offset,
        'limit': value.limit,
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
        'count': value.count,
    };
}
exports.FlexFieldsResponseToJSON = FlexFieldsResponseToJSON;