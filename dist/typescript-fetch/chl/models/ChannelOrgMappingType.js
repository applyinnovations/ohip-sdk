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
exports.ChannelOrgMappingTypeToJSON = exports.ChannelOrgMappingTypeFromJSONTyped = exports.ChannelOrgMappingTypeFromJSON = exports.instanceOfChannelOrgMappingType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ChannelOrgMappingType interface.
 */
function instanceOfChannelOrgMappingType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelOrgMappingType = instanceOfChannelOrgMappingType;
function ChannelOrgMappingTypeFromJSON(json) {
    return ChannelOrgMappingTypeFromJSONTyped(json, false);
}
exports.ChannelOrgMappingTypeFromJSON = ChannelOrgMappingTypeFromJSON;
function ChannelOrgMappingTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelCode': !(0, runtime_1.exists)(json, 'channelCode') ? undefined : json['channelCode'],
        'defaultLoginResort': !(0, runtime_1.exists)(json, 'defaultLoginResort') ? undefined : json['defaultLoginResort'],
        'orgCode': !(0, runtime_1.exists)(json, 'orgCode') ? undefined : json['orgCode'],
    };
}
exports.ChannelOrgMappingTypeFromJSONTyped = ChannelOrgMappingTypeFromJSONTyped;
function ChannelOrgMappingTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channelCode': value.channelCode,
        'defaultLoginResort': value.defaultLoginResort,
        'orgCode': value.orgCode,
    };
}
exports.ChannelOrgMappingTypeToJSON = ChannelOrgMappingTypeToJSON;
