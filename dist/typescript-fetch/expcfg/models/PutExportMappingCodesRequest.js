"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutExportMappingCodesRequestToJSON = exports.PutExportMappingCodesRequestFromJSONTyped = exports.PutExportMappingCodesRequestFromJSON = exports.instanceOfPutExportMappingCodesRequest = void 0;
const runtime_1 = require("../runtime");
const ExportMappingCodeType_1 = require("./ExportMappingCodeType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PutExportMappingCodesRequest interface.
 */
function instanceOfPutExportMappingCodesRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPutExportMappingCodesRequest = instanceOfPutExportMappingCodesRequest;
function PutExportMappingCodesRequestFromJSON(json) {
    return PutExportMappingCodesRequestFromJSONTyped(json, false);
}
exports.PutExportMappingCodesRequestFromJSON = PutExportMappingCodesRequestFromJSON;
function PutExportMappingCodesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'exportMappingCodes': !(0, runtime_1.exists)(json, 'exportMappingCodes') ? undefined : (json['exportMappingCodes'].map(ExportMappingCodeType_1.ExportMappingCodeTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PutExportMappingCodesRequestFromJSONTyped = PutExportMappingCodesRequestFromJSONTyped;
function PutExportMappingCodesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'exportMappingCodes': value.exportMappingCodes === undefined ? undefined : (value.exportMappingCodes.map(ExportMappingCodeType_1.ExportMappingCodeTypeToJSON)),
        'hotelId': value.hotelId,
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PutExportMappingCodesRequestToJSON = PutExportMappingCodesRequestToJSON;
