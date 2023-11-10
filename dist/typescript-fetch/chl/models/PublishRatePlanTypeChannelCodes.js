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
exports.PublishRatePlanTypeChannelCodesToJSON = exports.PublishRatePlanTypeChannelCodesFromJSONTyped = exports.PublishRatePlanTypeChannelCodesFromJSON = exports.instanceOfPublishRatePlanTypeChannelCodes = void 0;
const runtime_1 = require("../runtime");
const CodeListType_1 = require("./CodeListType");
/**
 * Check if a given object implements the PublishRatePlanTypeChannelCodes interface.
 */
function instanceOfPublishRatePlanTypeChannelCodes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPublishRatePlanTypeChannelCodes = instanceOfPublishRatePlanTypeChannelCodes;
function PublishRatePlanTypeChannelCodesFromJSON(json) {
    return PublishRatePlanTypeChannelCodesFromJSONTyped(json, false);
}
exports.PublishRatePlanTypeChannelCodesFromJSON = PublishRatePlanTypeChannelCodesFromJSON;
function PublishRatePlanTypeChannelCodesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelRatePlanCodes': !(0, runtime_1.exists)(json, 'channelRatePlanCodes') ? undefined : (0, CodeListType_1.CodeListTypeFromJSON)(json['channelRatePlanCodes']),
        'channelRoomTypes': !(0, runtime_1.exists)(json, 'channelRoomTypes') ? undefined : (0, CodeListType_1.CodeListTypeFromJSON)(json['channelRoomTypes']),
    };
}
exports.PublishRatePlanTypeChannelCodesFromJSONTyped = PublishRatePlanTypeChannelCodesFromJSONTyped;
function PublishRatePlanTypeChannelCodesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channelRatePlanCodes': (0, CodeListType_1.CodeListTypeToJSON)(value.channelRatePlanCodes),
        'channelRoomTypes': (0, CodeListType_1.CodeListTypeToJSON)(value.channelRoomTypes),
    };
}
exports.PublishRatePlanTypeChannelCodesToJSON = PublishRatePlanTypeChannelCodesToJSON;
