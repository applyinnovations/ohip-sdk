"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IfcMenuTypeTypeToJSON = exports.IfcMenuTypeTypeFromJSONTyped = exports.IfcMenuTypeTypeFromJSON = exports.IfcMenuTypeType = void 0;
/**
 * Data Card System
 * @export
 */
exports.IfcMenuTypeType = {
    Cas: 'Cas',
    Kss: 'Kss',
    Mbs: 'Mbs',
    Pbx: 'Pbx',
    Pos: 'Pos',
    Vss: 'Vss',
    Dcs: 'Dcs'
};
function IfcMenuTypeTypeFromJSON(json) {
    return IfcMenuTypeTypeFromJSONTyped(json, false);
}
exports.IfcMenuTypeTypeFromJSON = IfcMenuTypeTypeFromJSON;
function IfcMenuTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.IfcMenuTypeTypeFromJSONTyped = IfcMenuTypeTypeFromJSONTyped;
function IfcMenuTypeTypeToJSON(value) {
    return value;
}
exports.IfcMenuTypeTypeToJSON = IfcMenuTypeTypeToJSON;
