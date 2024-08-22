"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelCardTypeMappingDetailsToJSON = exports.ChannelCardTypeMappingDetailsFromJSONTyped = exports.ChannelCardTypeMappingDetailsFromJSON = exports.instanceOfChannelCardTypeMappingDetails = void 0;
const runtime_1 = require("../runtime");
const ChannelCardTypeMappingDetailsChannelCardTypeMappings_1 = require("./ChannelCardTypeMappingDetailsChannelCardTypeMappings");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ChannelCardTypeMappingDetails interface.
 */
function instanceOfChannelCardTypeMappingDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelCardTypeMappingDetails = instanceOfChannelCardTypeMappingDetails;
function ChannelCardTypeMappingDetailsFromJSON(json) {
    return ChannelCardTypeMappingDetailsFromJSONTyped(json, false);
}
exports.ChannelCardTypeMappingDetailsFromJSON = ChannelCardTypeMappingDetailsFromJSON;
function ChannelCardTypeMappingDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelCardTypeMappings': !(0, runtime_1.exists)(json, 'channelCardTypeMappings') ? undefined : (0, ChannelCardTypeMappingDetailsChannelCardTypeMappings_1.ChannelCardTypeMappingDetailsChannelCardTypeMappingsFromJSON)(json['channelCardTypeMappings']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ChannelCardTypeMappingDetailsFromJSONTyped = ChannelCardTypeMappingDetailsFromJSONTyped;
function ChannelCardTypeMappingDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channelCardTypeMappings': (0, ChannelCardTypeMappingDetailsChannelCardTypeMappings_1.ChannelCardTypeMappingDetailsChannelCardTypeMappingsToJSON)(value.channelCardTypeMappings),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ChannelCardTypeMappingDetailsToJSON = ChannelCardTypeMappingDetailsToJSON;
