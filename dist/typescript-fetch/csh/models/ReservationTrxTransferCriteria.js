"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationTrxTransferCriteriaToJSON = exports.ReservationTrxTransferCriteriaFromJSONTyped = exports.ReservationTrxTransferCriteriaFromJSON = exports.instanceOfReservationTrxTransferCriteria = void 0;
const runtime_1 = require("../runtime");
const ReservationIdList_1 = require("./ReservationIdList");
const UniqueIDListType_1 = require("./UniqueIDListType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ReservationTrxTransferCriteria interface.
 */
function instanceOfReservationTrxTransferCriteria(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationTrxTransferCriteria = instanceOfReservationTrxTransferCriteria;
function ReservationTrxTransferCriteriaFromJSON(json) {
    return ReservationTrxTransferCriteriaFromJSONTyped(json, false);
}
exports.ReservationTrxTransferCriteriaFromJSON = ReservationTrxTransferCriteriaFromJSON;
function ReservationTrxTransferCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authorizerId': !(0, runtime_1.exists)(json, 'authorizerId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['authorizerId']),
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'membershipIdNo': !(0, runtime_1.exists)(json, 'membershipIdNo') ? undefined : json['membershipIdNo'],
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (0, ReservationIdList_1.ReservationIdListFromJSON)(json['reservationIdList']),
        'targetFolioWindowNo': !(0, runtime_1.exists)(json, 'targetFolioWindowNo') ? undefined : json['targetFolioWindowNo'],
        'targetReservationIdList': !(0, runtime_1.exists)(json, 'targetReservationIdList') ? undefined : (0, UniqueIDListType_1.UniqueIDListTypeFromJSON)(json['targetReservationIdList']),
        'transactionList': !(0, runtime_1.exists)(json, 'transactionList') ? undefined : json['transactionList'],
    };
}
exports.ReservationTrxTransferCriteriaFromJSONTyped = ReservationTrxTransferCriteriaFromJSONTyped;
function ReservationTrxTransferCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'authorizerId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.authorizerId),
        'cashierId': value.cashierId,
        'hotelId': value.hotelId,
        'membershipIdNo': value.membershipIdNo,
        'reservationIdList': (0, ReservationIdList_1.ReservationIdListToJSON)(value.reservationIdList),
        'targetFolioWindowNo': value.targetFolioWindowNo,
        'targetReservationIdList': (0, UniqueIDListType_1.UniqueIDListTypeToJSON)(value.targetReservationIdList),
        'transactionList': value.transactionList,
    };
}
exports.ReservationTrxTransferCriteriaToJSON = ReservationTrxTransferCriteriaToJSON;