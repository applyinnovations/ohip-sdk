"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Content Service
 * Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageResultTypeToJSON = exports.ImageResultTypeFromJSONTyped = exports.ImageResultTypeFromJSON = exports.instanceOfImageResultType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ImageResultType interface.
 */
function instanceOfImageResultType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfImageResultType = instanceOfImageResultType;
function ImageResultTypeFromJSON(json) {
    return ImageResultTypeFromJSONTyped(json, false);
}
exports.ImageResultTypeFromJSON = ImageResultTypeFromJSON;
function ImageResultTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'base64Image': !(0, runtime_1.exists)(json, 'base64Image') ? undefined : json['base64Image'],
        'image': !(0, runtime_1.exists)(json, 'image') ? undefined : json['image'],
        'imageId': !(0, runtime_1.exists)(json, 'imageId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['imageId']),
        'imageLinkId': !(0, runtime_1.exists)(json, 'imageLinkId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['imageLinkId']),
        'imageSet': !(0, runtime_1.exists)(json, 'imageSet') ? undefined : json['imageSet'],
        'linkId': !(0, runtime_1.exists)(json, 'linkId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['linkId']),
        'mimeType': !(0, runtime_1.exists)(json, 'mimeType') ? undefined : json['mimeType'],
    };
}
exports.ImageResultTypeFromJSONTyped = ImageResultTypeFromJSONTyped;
function ImageResultTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'base64Image': value.base64Image,
        'image': value.image,
        'imageId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.imageId),
        'imageLinkId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.imageLinkId),
        'imageSet': value.imageSet,
        'linkId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.linkId),
        'mimeType': value.mimeType,
    };
}
exports.ImageResultTypeToJSON = ImageResultTypeToJSON;
