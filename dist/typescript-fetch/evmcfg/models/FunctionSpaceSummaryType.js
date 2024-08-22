"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionSpaceSummaryTypeToJSON = exports.FunctionSpaceSummaryTypeFromJSONTyped = exports.FunctionSpaceSummaryTypeFromJSON = exports.instanceOfFunctionSpaceSummaryType = void 0;
const runtime_1 = require("../runtime");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
/**
 * Check if a given object implements the FunctionSpaceSummaryType interface.
 */
function instanceOfFunctionSpaceSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFunctionSpaceSummaryType = instanceOfFunctionSpaceSummaryType;
function FunctionSpaceSummaryTypeFromJSON(json) {
    return FunctionSpaceSummaryTypeFromJSONTyped(json, false);
}
exports.FunctionSpaceSummaryTypeFromJSON = FunctionSpaceSummaryTypeFromJSON;
function FunctionSpaceSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'combo': !(0, runtime_1.exists)(json, 'combo') ? undefined : json['combo'],
        'element': !(0, runtime_1.exists)(json, 'element') ? undefined : json['element'],
        'floor': !(0, runtime_1.exists)(json, 'floor') ? undefined : json['floor'],
        'forceAlternate': !(0, runtime_1.exists)(json, 'forceAlternate') ? undefined : json['forceAlternate'],
        'fullUtilizationTime': !(0, runtime_1.exists)(json, 'fullUtilizationTime') ? undefined : json['fullUtilizationTime'],
        'handicapFacilities': !(0, runtime_1.exists)(json, 'handicapFacilities') ? undefined : json['handicapFacilities'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'location': !(0, runtime_1.exists)(json, 'location') ? undefined : json['location'],
        'orderBy1': !(0, runtime_1.exists)(json, 'orderBy1') ? undefined : json['orderBy1'],
        'orderBy2': !(0, runtime_1.exists)(json, 'orderBy2') ? undefined : json['orderBy2'],
        'orderBy3': !(0, runtime_1.exists)(json, 'orderBy3') ? undefined : json['orderBy3'],
        'psuedoRoomType': !(0, runtime_1.exists)(json, 'psuedoRoomType') ? undefined : json['psuedoRoomType'],
        'roomCode': !(0, runtime_1.exists)(json, 'roomCode') ? undefined : json['roomCode'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'shareable': !(0, runtime_1.exists)(json, 'shareable') ? undefined : json['shareable'],
        'shortName': !(0, runtime_1.exists)(json, 'shortName') ? undefined : json['shortName'],
        'spaceName': !(0, runtime_1.exists)(json, 'spaceName') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['spaceName']),
        'spaceType': !(0, runtime_1.exists)(json, 'spaceType') ? undefined : json['spaceType'],
        'webBookable': !(0, runtime_1.exists)(json, 'webBookable') ? undefined : json['webBookable'],
        'webViewable': !(0, runtime_1.exists)(json, 'webViewable') ? undefined : json['webViewable'],
    };
}
exports.FunctionSpaceSummaryTypeFromJSONTyped = FunctionSpaceSummaryTypeFromJSONTyped;
function FunctionSpaceSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'combo': value.combo,
        'element': value.element,
        'floor': value.floor,
        'forceAlternate': value.forceAlternate,
        'fullUtilizationTime': value.fullUtilizationTime,
        'handicapFacilities': value.handicapFacilities,
        'hotelId': value.hotelId,
        'location': value.location,
        'orderBy1': value.orderBy1,
        'orderBy2': value.orderBy2,
        'orderBy3': value.orderBy3,
        'psuedoRoomType': value.psuedoRoomType,
        'roomCode': value.roomCode,
        'roomType': value.roomType,
        'shareable': value.shareable,
        'shortName': value.shortName,
        'spaceName': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.spaceName),
        'spaceType': value.spaceType,
        'webBookable': value.webBookable,
        'webViewable': value.webViewable,
    };
}
exports.FunctionSpaceSummaryTypeToJSON = FunctionSpaceSummaryTypeToJSON;
