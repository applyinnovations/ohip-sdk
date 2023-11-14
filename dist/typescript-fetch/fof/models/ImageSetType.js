"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageSetTypeToJSON = exports.ImageSetTypeFromJSONTyped = exports.ImageSetTypeFromJSON = exports.instanceOfImageSetType = void 0;
const runtime_1 = require("../runtime");
const ImageStyleType_1 = require("./ImageStyleType");
/**
 * Check if a given object implements the ImageSetType interface.
 */
function instanceOfImageSetType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfImageSetType = instanceOfImageSetType;
function ImageSetTypeFromJSON(json) {
    return ImageSetTypeFromJSONTyped(json, false);
}
exports.ImageSetTypeFromJSON = ImageSetTypeFromJSON;
function ImageSetTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'imageOrder': !(0, runtime_1.exists)(json, 'imageOrder') ? undefined : json['imageOrder'],
        'imageSet': !(0, runtime_1.exists)(json, 'imageSet') ? undefined : json['imageSet'],
        'imageStyle': !(0, runtime_1.exists)(json, 'imageStyle') ? undefined : (0, ImageStyleType_1.ImageStyleTypeFromJSON)(json['imageStyle']),
        'imageType': !(0, runtime_1.exists)(json, 'imageType') ? undefined : json['imageType'],
        'imageURL': !(0, runtime_1.exists)(json, 'imageURL') ? undefined : json['imageURL'],
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'sequenceId': !(0, runtime_1.exists)(json, 'sequenceId') ? undefined : json['sequenceId'],
        'website': !(0, runtime_1.exists)(json, 'website') ? undefined : json['website'],
    };
}
exports.ImageSetTypeFromJSONTyped = ImageSetTypeFromJSONTyped;
function ImageSetTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainCode': value.chainCode,
        'description': value.description,
        'hotelId': value.hotelId,
        'imageOrder': value.imageOrder,
        'imageSet': value.imageSet,
        'imageStyle': (0, ImageStyleType_1.ImageStyleTypeToJSON)(value.imageStyle),
        'imageType': value.imageType,
        'imageURL': value.imageURL,
        'language': value.language,
        'sequenceId': value.sequenceId,
        'website': value.website,
    };
}
exports.ImageSetTypeToJSON = ImageSetTypeToJSON;