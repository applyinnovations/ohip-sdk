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
exports.ChangeTemplateMarketGroupRequestToJSON = exports.ChangeTemplateMarketGroupRequestFromJSONTyped = exports.ChangeTemplateMarketGroupRequestFromJSON = exports.instanceOfChangeTemplateMarketGroupRequest = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const TemplateMarketGroupType_1 = require("./TemplateMarketGroupType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ChangeTemplateMarketGroupRequest interface.
 */
function instanceOfChangeTemplateMarketGroupRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeTemplateMarketGroupRequest = instanceOfChangeTemplateMarketGroupRequest;
function ChangeTemplateMarketGroupRequestFromJSON(json) {
    return ChangeTemplateMarketGroupRequestFromJSONTyped(json, false);
}
exports.ChangeTemplateMarketGroupRequestFromJSON = ChangeTemplateMarketGroupRequestFromJSON;
function ChangeTemplateMarketGroupRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'templateMarketGroup': !(0, runtime_1.exists)(json, 'templateMarketGroup') ? undefined : (0, TemplateMarketGroupType_1.TemplateMarketGroupTypeFromJSON)(json['templateMarketGroup']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ChangeTemplateMarketGroupRequestFromJSONTyped = ChangeTemplateMarketGroupRequestFromJSONTyped;
function ChangeTemplateMarketGroupRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'templateMarketGroup': (0, TemplateMarketGroupType_1.TemplateMarketGroupTypeToJSON)(value.templateMarketGroup),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ChangeTemplateMarketGroupRequestToJSON = ChangeTemplateMarketGroupRequestToJSON;
