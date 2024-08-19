"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARAccountTraceCriteriaTypeToJSON = exports.ARAccountTraceCriteriaTypeFromJSONTyped = exports.ARAccountTraceCriteriaTypeFromJSON = exports.instanceOfARAccountTraceCriteriaType = void 0;
const runtime_1 = require("../runtime");
const ReservationId_1 = require("./ReservationId");
const TraceResolveType_1 = require("./TraceResolveType");
const TraceTimeInfoType_1 = require("./TraceTimeInfoType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ARAccountTraceCriteriaType interface.
 */
function instanceOfARAccountTraceCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARAccountTraceCriteriaType = instanceOfARAccountTraceCriteriaType;
function ARAccountTraceCriteriaTypeFromJSON(json) {
    return ARAccountTraceCriteriaTypeFromJSONTyped(json, false);
}
exports.ARAccountTraceCriteriaTypeFromJSON = ARAccountTraceCriteriaTypeFromJSON;
function ARAccountTraceCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !(0, runtime_1.exists)(json, 'accountId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['accountId']),
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'departmentId': !(0, runtime_1.exists)(json, 'departmentId') ? undefined : json['departmentId'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idContext': !(0, runtime_1.exists)(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !(0, runtime_1.exists)(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !(0, runtime_1.exists)(json, 'instance') ? undefined : json['instance'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : json['purgeDate'],
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
        'resolveInfo': !(0, runtime_1.exists)(json, 'resolveInfo') ? undefined : (0, TraceResolveType_1.TraceResolveTypeFromJSON)(json['resolveInfo']),
        'timeInfo': !(0, runtime_1.exists)(json, 'timeInfo') ? undefined : (0, TraceTimeInfoType_1.TraceTimeInfoTypeFromJSON)(json['timeInfo']),
        'traceText': !(0, runtime_1.exists)(json, 'traceText') ? undefined : json['traceText'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
    };
}
exports.ARAccountTraceCriteriaTypeFromJSONTyped = ARAccountTraceCriteriaTypeFromJSONTyped;
function ARAccountTraceCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.accountId),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'departmentId': value.departmentId,
        'hotelId': value.hotelId,
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'purgeDate': value.purgeDate,
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
        'resolveInfo': (0, TraceResolveType_1.TraceResolveTypeToJSON)(value.resolveInfo),
        'timeInfo': (0, TraceTimeInfoType_1.TraceTimeInfoTypeToJSON)(value.timeInfo),
        'traceText': value.traceText,
        'type': value.type,
        'url': value.url,
    };
}
exports.ARAccountTraceCriteriaTypeToJSON = ARAccountTraceCriteriaTypeToJSON;
