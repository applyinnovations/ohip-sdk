"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertTypeToJSON = exports.AlertTypeFromJSONTyped = exports.AlertTypeFromJSON = exports.instanceOfAlertType = void 0;
const runtime_1 = require("../runtime");
const AlertAreaType_1 = require("./AlertAreaType");
const AlertGuestInfoType_1 = require("./AlertGuestInfoType");
const UniqueIDType_1 = require("./UniqueIDType");
const UserDefinedFieldsType_1 = require("./UserDefinedFieldsType");
const WelcomeOfferType_1 = require("./WelcomeOfferType");
/**
 * Check if a given object implements the AlertType interface.
 */
function instanceOfAlertType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAlertType = instanceOfAlertType;
function AlertTypeFromJSON(json) {
    return AlertTypeFromJSONTyped(json, false);
}
exports.AlertTypeFromJSON = AlertTypeFromJSON;
function AlertTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'area': !(0, runtime_1.exists)(json, 'area') ? undefined : (0, AlertAreaType_1.AlertAreaTypeFromJSON)(json['area']),
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'global': !(0, runtime_1.exists)(json, 'global') ? undefined : json['global'],
        'guestInfo': !(0, runtime_1.exists)(json, 'guestInfo') ? undefined : (0, AlertGuestInfoType_1.AlertGuestInfoTypeFromJSON)(json['guestInfo']),
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idContext': !(0, runtime_1.exists)(json, 'idContext') ? undefined : json['idContext'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'printerName': !(0, runtime_1.exists)(json, 'printerName') ? undefined : json['printerName'],
        'printerNotification': !(0, runtime_1.exists)(json, 'printerNotification') ? undefined : json['printerNotification'],
        'reportDescription': !(0, runtime_1.exists)(json, 'reportDescription') ? undefined : json['reportDescription'],
        'reportId': !(0, runtime_1.exists)(json, 'reportId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['reportId']),
        'reportName': !(0, runtime_1.exists)(json, 'reportName') ? undefined : json['reportName'],
        'screenNotification': !(0, runtime_1.exists)(json, 'screenNotification') ? undefined : json['screenNotification'],
        'stopCheckInCheckOut': !(0, runtime_1.exists)(json, 'stopCheckInCheckOut') ? undefined : json['stopCheckInCheckOut'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'userDefinedFields': !(0, runtime_1.exists)(json, 'userDefinedFields') ? undefined : (0, UserDefinedFieldsType_1.UserDefinedFieldsTypeFromJSON)(json['userDefinedFields']),
        'welcomeOffer': !(0, runtime_1.exists)(json, 'welcomeOffer') ? undefined : (0, WelcomeOfferType_1.WelcomeOfferTypeFromJSON)(json['welcomeOffer']),
    };
}
exports.AlertTypeFromJSONTyped = AlertTypeFromJSONTyped;
function AlertTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'area': (0, AlertAreaType_1.AlertAreaTypeToJSON)(value.area),
        'code': value.code,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'description': value.description,
        'global': value.global,
        'guestInfo': (0, AlertGuestInfoType_1.AlertGuestInfoTypeToJSON)(value.guestInfo),
        'id': value.id,
        'idContext': value.idContext,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'printerName': value.printerName,
        'printerNotification': value.printerNotification,
        'reportDescription': value.reportDescription,
        'reportId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.reportId),
        'reportName': value.reportName,
        'screenNotification': value.screenNotification,
        'stopCheckInCheckOut': value.stopCheckInCheckOut,
        'type': value.type,
        'userDefinedFields': (0, UserDefinedFieldsType_1.UserDefinedFieldsTypeToJSON)(value.userDefinedFields),
        'welcomeOffer': (0, WelcomeOfferType_1.WelcomeOfferTypeToJSON)(value.welcomeOffer),
    };
}
exports.AlertTypeToJSON = AlertTypeToJSON;
