"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeChannelParametersToJSON = exports.ChangeChannelParametersFromJSONTyped = exports.ChangeChannelParametersFromJSON = exports.instanceOfChangeChannelParameters = void 0;
const runtime_1 = require("../runtime");
const ChangeChannelParametersType_1 = require("./ChangeChannelParametersType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ChangeChannelParameters interface.
 */
function instanceOfChangeChannelParameters(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeChannelParameters = instanceOfChangeChannelParameters;
function ChangeChannelParametersFromJSON(json) {
    return ChangeChannelParametersFromJSONTyped(json, false);
}
exports.ChangeChannelParametersFromJSON = ChangeChannelParametersFromJSON;
function ChangeChannelParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, ChangeChannelParametersType_1.ChangeChannelParametersTypeFromJSON)(json['criteria']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ChangeChannelParametersFromJSONTyped = ChangeChannelParametersFromJSONTyped;
function ChangeChannelParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, ChangeChannelParametersType_1.ChangeChannelParametersTypeToJSON)(value.criteria),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ChangeChannelParametersToJSON = ChangeChannelParametersToJSON;