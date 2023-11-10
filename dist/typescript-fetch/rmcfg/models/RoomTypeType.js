"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomTypeTypeToJSON = exports.RoomTypeTypeFromJSONTyped = exports.RoomTypeTypeFromJSON = exports.instanceOfRoomTypeType = void 0;
const runtime_1 = require("../runtime");
const RoomFeaturesType_1 = require("./RoomFeaturesType");
const RoomTypeComponentsType_1 = require("./RoomTypeComponentsType");
const RoomTypeTypeSuite_1 = require("./RoomTypeTypeSuite");
const RoomTypeYieldableType_1 = require("./RoomTypeYieldableType");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
/**
 * Check if a given object implements the RoomTypeType interface.
 */
function instanceOfRoomTypeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomTypeType = instanceOfRoomTypeType;
function RoomTypeTypeFromJSON(json) {
    return RoomTypeTypeFromJSONTyped(json, false);
}
exports.RoomTypeTypeFromJSON = RoomTypeTypeFromJSON;
function RoomTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessible': !(0, runtime_1.exists)(json, 'accessible') ? undefined : json['accessible'],
        'activeDate': !(0, runtime_1.exists)(json, 'activeDate') ? undefined : (new Date(json['activeDate'])),
        'autoCheckin': !(0, runtime_1.exists)(json, 'autoCheckin') ? undefined : json['autoCheckin'],
        'autoPopulate': !(0, runtime_1.exists)(json, 'autoPopulate') ? undefined : json['autoPopulate'],
        'autoRoomAssign': !(0, runtime_1.exists)(json, 'autoRoomAssign') ? undefined : json['autoRoomAssign'],
        'bedType': !(0, runtime_1.exists)(json, 'bedType') ? undefined : json['bedType'],
        'components': !(0, runtime_1.exists)(json, 'components') ? undefined : (0, RoomTypeComponentsType_1.RoomTypeComponentsTypeFromJSON)(json['components']),
        'defaultOccupancy': !(0, runtime_1.exists)(json, 'defaultOccupancy') ? undefined : json['defaultOccupancy'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['description']),
        'features': !(0, runtime_1.exists)(json, 'features') ? undefined : (0, RoomFeaturesType_1.RoomFeaturesTypeFromJSON)(json['features']),
        'generic': !(0, runtime_1.exists)(json, 'generic') ? undefined : json['generic'],
        'houseKeeping': !(0, runtime_1.exists)(json, 'houseKeeping') ? undefined : json['houseKeeping'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'infoURL': !(0, runtime_1.exists)(json, 'infoURL') ? undefined : json['infoURL'],
        'maintenance': !(0, runtime_1.exists)(json, 'maintenance') ? undefined : json['maintenance'],
        'maxAdults': !(0, runtime_1.exists)(json, 'maxAdults') ? undefined : json['maxAdults'],
        'maxChildren': !(0, runtime_1.exists)(json, 'maxChildren') ? undefined : json['maxChildren'],
        'maximumOccupancy': !(0, runtime_1.exists)(json, 'maximumOccupancy') ? undefined : json['maximumOccupancy'],
        'meetingRoom': !(0, runtime_1.exists)(json, 'meetingRoom') ? undefined : json['meetingRoom'],
        'minimumOccupancy': !(0, runtime_1.exists)(json, 'minimumOccupancy') ? undefined : json['minimumOccupancy'],
        'newRoomType': !(0, runtime_1.exists)(json, 'newRoomType') ? undefined : json['newRoomType'],
        'numberOfRooms': !(0, runtime_1.exists)(json, 'numberOfRooms') ? undefined : json['numberOfRooms'],
        'pseudo': !(0, runtime_1.exists)(json, 'pseudo') ? undefined : json['pseudo'],
        'rateFloor': !(0, runtime_1.exists)(json, 'rateFloor') ? undefined : json['rateFloor'],
        'roomClass': !(0, runtime_1.exists)(json, 'roomClass') ? undefined : json['roomClass'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'sellSequence': !(0, runtime_1.exists)(json, 'sellSequence') ? undefined : json['sellSequence'],
        'sendToInterface': !(0, runtime_1.exists)(json, 'sendToInterface') ? undefined : json['sendToInterface'],
        'shortDescription': !(0, runtime_1.exists)(json, 'shortDescription') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['shortDescription']),
        'smokingPreference': !(0, runtime_1.exists)(json, 'smokingPreference') ? undefined : json['smokingPreference'],
        'suite': !(0, runtime_1.exists)(json, 'suite') ? undefined : (0, RoomTypeTypeSuite_1.RoomTypeTypeSuiteFromJSON)(json['suite']),
        'yieldCategory': !(0, runtime_1.exists)(json, 'yieldCategory') ? undefined : json['yieldCategory'],
        'yieldStatus': !(0, runtime_1.exists)(json, 'yieldStatus') ? undefined : (0, RoomTypeYieldableType_1.RoomTypeYieldableTypeFromJSON)(json['yieldStatus']),
    };
}
exports.RoomTypeTypeFromJSONTyped = RoomTypeTypeFromJSONTyped;
function RoomTypeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accessible': value.accessible,
        'activeDate': value.activeDate === undefined ? undefined : (value.activeDate.toISOString().substr(0, 10)),
        'autoCheckin': value.autoCheckin,
        'autoPopulate': value.autoPopulate,
        'autoRoomAssign': value.autoRoomAssign,
        'bedType': value.bedType,
        'components': (0, RoomTypeComponentsType_1.RoomTypeComponentsTypeToJSON)(value.components),
        'defaultOccupancy': value.defaultOccupancy,
        'description': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.description),
        'features': (0, RoomFeaturesType_1.RoomFeaturesTypeToJSON)(value.features),
        'generic': value.generic,
        'houseKeeping': value.houseKeeping,
        'inactive': value.inactive,
        'infoURL': value.infoURL,
        'maintenance': value.maintenance,
        'maxAdults': value.maxAdults,
        'maxChildren': value.maxChildren,
        'maximumOccupancy': value.maximumOccupancy,
        'meetingRoom': value.meetingRoom,
        'minimumOccupancy': value.minimumOccupancy,
        'newRoomType': value.newRoomType,
        'numberOfRooms': value.numberOfRooms,
        'pseudo': value.pseudo,
        'rateFloor': value.rateFloor,
        'roomClass': value.roomClass,
        'roomType': value.roomType,
        'sellSequence': value.sellSequence,
        'sendToInterface': value.sendToInterface,
        'shortDescription': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.shortDescription),
        'smokingPreference': value.smokingPreference,
        'suite': (0, RoomTypeTypeSuite_1.RoomTypeTypeSuiteToJSON)(value.suite),
        'yieldCategory': value.yieldCategory,
        'yieldStatus': (0, RoomTypeYieldableType_1.RoomTypeYieldableTypeToJSON)(value.yieldStatus),
    };
}
exports.RoomTypeTypeToJSON = RoomTypeTypeToJSON;
