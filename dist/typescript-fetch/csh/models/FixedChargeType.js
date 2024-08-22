"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedChargeTypeToJSON = exports.FixedChargeTypeFromJSONTyped = exports.FixedChargeTypeFromJSON = exports.instanceOfFixedChargeType = void 0;
const runtime_1 = require("../runtime");
const FixedChargeDetailType_1 = require("./FixedChargeDetailType");
const FixedChargeScheduleType_1 = require("./FixedChargeScheduleType");
/**
 * Check if a given object implements the FixedChargeType interface.
 */
function instanceOfFixedChargeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFixedChargeType = instanceOfFixedChargeType;
function FixedChargeTypeFromJSON(json) {
    return FixedChargeTypeFromJSONTyped(json, false);
}
exports.FixedChargeTypeFromJSON = FixedChargeTypeFromJSON;
function FixedChargeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'charge': !(0, runtime_1.exists)(json, 'charge') ? undefined : (0, FixedChargeDetailType_1.FixedChargeDetailTypeFromJSON)(json['charge']),
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idContext': !(0, runtime_1.exists)(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !(0, runtime_1.exists)(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !(0, runtime_1.exists)(json, 'instance') ? undefined : json['instance'],
        'schedule': !(0, runtime_1.exists)(json, 'schedule') ? undefined : (0, FixedChargeScheduleType_1.FixedChargeScheduleTypeFromJSON)(json['schedule']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
    };
}
exports.FixedChargeTypeFromJSONTyped = FixedChargeTypeFromJSONTyped;
function FixedChargeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'charge': (0, FixedChargeDetailType_1.FixedChargeDetailTypeToJSON)(value.charge),
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'schedule': (0, FixedChargeScheduleType_1.FixedChargeScheduleTypeToJSON)(value.schedule),
        'type': value.type,
        'url': value.url,
    };
}
exports.FixedChargeTypeToJSON = FixedChargeTypeToJSON;
