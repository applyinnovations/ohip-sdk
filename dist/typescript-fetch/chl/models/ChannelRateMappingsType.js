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
exports.ChannelRateMappingsTypeToJSON = exports.ChannelRateMappingsTypeFromJSONTyped = exports.ChannelRateMappingsTypeFromJSON = exports.instanceOfChannelRateMappingsType = void 0;
const runtime_1 = require("../runtime");
const ChannelRateMappingType_1 = require("./ChannelRateMappingType");
/**
 * Check if a given object implements the ChannelRateMappingsType interface.
 */
function instanceOfChannelRateMappingsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelRateMappingsType = instanceOfChannelRateMappingsType;
function ChannelRateMappingsTypeFromJSON(json) {
    return ChannelRateMappingsTypeFromJSONTyped(json, false);
}
exports.ChannelRateMappingsTypeFromJSON = ChannelRateMappingsTypeFromJSON;
function ChannelRateMappingsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelRateMapping': !(0, runtime_1.exists)(json, 'channelRateMapping') ? undefined : (json['channelRateMapping'].map(ChannelRateMappingType_1.ChannelRateMappingTypeFromJSON)),
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.ChannelRateMappingsTypeFromJSONTyped = ChannelRateMappingsTypeFromJSONTyped;
function ChannelRateMappingsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channelRateMapping': value.channelRateMapping === undefined ? undefined : (value.channelRateMapping.map(ChannelRateMappingType_1.ChannelRateMappingTypeToJSON)),
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
    };
}
exports.ChannelRateMappingsTypeToJSON = ChannelRateMappingsTypeToJSON;
