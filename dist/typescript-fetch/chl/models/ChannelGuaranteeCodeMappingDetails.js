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
exports.ChannelGuaranteeCodeMappingDetailsToJSON = exports.ChannelGuaranteeCodeMappingDetailsFromJSONTyped = exports.ChannelGuaranteeCodeMappingDetailsFromJSON = exports.instanceOfChannelGuaranteeCodeMappingDetails = void 0;
const runtime_1 = require("../runtime");
const ChannelGuaranteeCodeMappingDetailsChannelGuaranteeCodeMappings_1 = require("./ChannelGuaranteeCodeMappingDetailsChannelGuaranteeCodeMappings");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ChannelGuaranteeCodeMappingDetails interface.
 */
function instanceOfChannelGuaranteeCodeMappingDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelGuaranteeCodeMappingDetails = instanceOfChannelGuaranteeCodeMappingDetails;
function ChannelGuaranteeCodeMappingDetailsFromJSON(json) {
    return ChannelGuaranteeCodeMappingDetailsFromJSONTyped(json, false);
}
exports.ChannelGuaranteeCodeMappingDetailsFromJSON = ChannelGuaranteeCodeMappingDetailsFromJSON;
function ChannelGuaranteeCodeMappingDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelGuaranteeCodeMappings': !(0, runtime_1.exists)(json, 'channelGuaranteeCodeMappings') ? undefined : (0, ChannelGuaranteeCodeMappingDetailsChannelGuaranteeCodeMappings_1.ChannelGuaranteeCodeMappingDetailsChannelGuaranteeCodeMappingsFromJSON)(json['channelGuaranteeCodeMappings']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ChannelGuaranteeCodeMappingDetailsFromJSONTyped = ChannelGuaranteeCodeMappingDetailsFromJSONTyped;
function ChannelGuaranteeCodeMappingDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channelGuaranteeCodeMappings': (0, ChannelGuaranteeCodeMappingDetailsChannelGuaranteeCodeMappings_1.ChannelGuaranteeCodeMappingDetailsChannelGuaranteeCodeMappingsToJSON)(value.channelGuaranteeCodeMappings),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ChannelGuaranteeCodeMappingDetailsToJSON = ChannelGuaranteeCodeMappingDetailsToJSON;
