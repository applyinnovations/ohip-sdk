"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTemplateMarketCodeRequestToJSON = exports.PostTemplateMarketCodeRequestFromJSONTyped = exports.PostTemplateMarketCodeRequestFromJSON = exports.instanceOfPostTemplateMarketCodeRequest = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const TemplateMarketCodeType_1 = require("./TemplateMarketCodeType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PostTemplateMarketCodeRequest interface.
 */
function instanceOfPostTemplateMarketCodeRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostTemplateMarketCodeRequest = instanceOfPostTemplateMarketCodeRequest;
function PostTemplateMarketCodeRequestFromJSON(json) {
    return PostTemplateMarketCodeRequestFromJSONTyped(json, false);
}
exports.PostTemplateMarketCodeRequestFromJSON = PostTemplateMarketCodeRequestFromJSON;
function PostTemplateMarketCodeRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'templateMarketCode': !(0, runtime_1.exists)(json, 'templateMarketCode') ? undefined : (0, TemplateMarketCodeType_1.TemplateMarketCodeTypeFromJSON)(json['templateMarketCode']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PostTemplateMarketCodeRequestFromJSONTyped = PostTemplateMarketCodeRequestFromJSONTyped;
function PostTemplateMarketCodeRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'templateMarketCode': (0, TemplateMarketCodeType_1.TemplateMarketCodeTypeToJSON)(value.templateMarketCode),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PostTemplateMarketCodeRequestToJSON = PostTemplateMarketCodeRequestToJSON;
