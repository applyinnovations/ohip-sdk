"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentTypeToJSON = exports.AttachmentTypeFromJSONTyped = exports.AttachmentTypeFromJSON = exports.instanceOfAttachmentType = void 0;
const runtime_1 = require("../runtime");
const DateTimeStampGroupType_1 = require("./DateTimeStampGroupType");
/**
 * Check if a given object implements the AttachmentType interface.
 */
function instanceOfAttachmentType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAttachmentType = instanceOfAttachmentType;
function AttachmentTypeFromJSON(json) {
    return AttachmentTypeFromJSONTyped(json, false);
}
exports.AttachmentTypeFromJSON = AttachmentTypeFromJSON;
function AttachmentTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'fileName': !(0, runtime_1.exists)(json, 'fileName') ? undefined : json['fileName'],
        'fileSize': !(0, runtime_1.exists)(json, 'fileSize') ? undefined : json['fileSize'],
        'global': !(0, runtime_1.exists)(json, 'global') ? undefined : json['global'],
        'history': !(0, runtime_1.exists)(json, 'history') ? undefined : (0, DateTimeStampGroupType_1.DateTimeStampGroupTypeFromJSON)(json['history']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idContext': !(0, runtime_1.exists)(json, 'idContext') ? undefined : json['idContext'],
        'instance': !(0, runtime_1.exists)(json, 'instance') ? undefined : json['instance'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.AttachmentTypeFromJSONTyped = AttachmentTypeFromJSONTyped;
function AttachmentTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'fileName': value.fileName,
        'fileSize': value.fileSize,
        'global': value.global,
        'history': (0, DateTimeStampGroupType_1.DateTimeStampGroupTypeToJSON)(value.history),
        'hotelId': value.hotelId,
        'id': value.id,
        'idContext': value.idContext,
        'instance': value.instance,
        'type': value.type,
    };
}
exports.AttachmentTypeToJSON = AttachmentTypeToJSON;
