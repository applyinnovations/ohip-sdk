"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectiveRateTypeToJSON = exports.EffectiveRateTypeFromJSONTyped = exports.EffectiveRateTypeFromJSON = exports.instanceOfEffectiveRateType = void 0;
const runtime_1 = require("../runtime");
const RateByAgeBucketType_1 = require("./RateByAgeBucketType");
/**
 * Check if a given object implements the EffectiveRateType interface.
 */
function instanceOfEffectiveRateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEffectiveRateType = instanceOfEffectiveRateType;
function EffectiveRateTypeFromJSON(json) {
    return EffectiveRateTypeFromJSONTyped(json, false);
}
exports.EffectiveRateTypeFromJSON = EffectiveRateTypeFromJSON;
function EffectiveRateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amountBeforeTax': !(0, runtime_1.exists)(json, 'amountBeforeTax') ? undefined : json['amountBeforeTax'],
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : json['end'],
        'extraChildRate': !(0, runtime_1.exists)(json, 'extraChildRate') ? undefined : json['extraChildRate'],
        'extraPersonRate': !(0, runtime_1.exists)(json, 'extraPersonRate') ? undefined : json['extraPersonRate'],
        'fivePersonRate': !(0, runtime_1.exists)(json, 'fivePersonRate') ? undefined : json['fivePersonRate'],
        'fourChildrenRate': !(0, runtime_1.exists)(json, 'fourChildrenRate') ? undefined : json['fourChildrenRate'],
        'fourPersonRate': !(0, runtime_1.exists)(json, 'fourPersonRate') ? undefined : json['fourPersonRate'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'minimumChildrenForFreeStay': !(0, runtime_1.exists)(json, 'minimumChildrenForFreeStay') ? undefined : json['minimumChildrenForFreeStay'],
        'numberOfRooms': !(0, runtime_1.exists)(json, 'numberOfRooms') ? undefined : json['numberOfRooms'],
        'oneChildRate': !(0, runtime_1.exists)(json, 'oneChildRate') ? undefined : json['oneChildRate'],
        'onePersonRate': !(0, runtime_1.exists)(json, 'onePersonRate') ? undefined : json['onePersonRate'],
        'overrideFloorAmount': !(0, runtime_1.exists)(json, 'overrideFloorAmount') ? undefined : json['overrideFloorAmount'],
        'pointsRequired': !(0, runtime_1.exists)(json, 'pointsRequired') ? undefined : json['pointsRequired'],
        'rateByAgeBuckets': !(0, runtime_1.exists)(json, 'rateByAgeBuckets') ? undefined : (json['rateByAgeBuckets'].map(RateByAgeBucketType_1.RateByAgeBucketTypeFromJSON)),
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : json['start'],
        'threeChildrenRate': !(0, runtime_1.exists)(json, 'threeChildrenRate') ? undefined : json['threeChildrenRate'],
        'threePersonRate': !(0, runtime_1.exists)(json, 'threePersonRate') ? undefined : json['threePersonRate'],
        'twoChildrenRate': !(0, runtime_1.exists)(json, 'twoChildrenRate') ? undefined : json['twoChildrenRate'],
        'twoPersonRate': !(0, runtime_1.exists)(json, 'twoPersonRate') ? undefined : json['twoPersonRate'],
    };
}
exports.EffectiveRateTypeFromJSONTyped = EffectiveRateTypeFromJSONTyped;
function EffectiveRateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amountBeforeTax': value.amountBeforeTax,
        'end': value.end,
        'extraChildRate': value.extraChildRate,
        'extraPersonRate': value.extraPersonRate,
        'fivePersonRate': value.fivePersonRate,
        'fourChildrenRate': value.fourChildrenRate,
        'fourPersonRate': value.fourPersonRate,
        'hotelId': value.hotelId,
        'minimumChildrenForFreeStay': value.minimumChildrenForFreeStay,
        'numberOfRooms': value.numberOfRooms,
        'oneChildRate': value.oneChildRate,
        'onePersonRate': value.onePersonRate,
        'overrideFloorAmount': value.overrideFloorAmount,
        'pointsRequired': value.pointsRequired,
        'rateByAgeBuckets': value.rateByAgeBuckets === undefined ? undefined : (value.rateByAgeBuckets.map(RateByAgeBucketType_1.RateByAgeBucketTypeToJSON)),
        'ratePlanCode': value.ratePlanCode,
        'roomType': value.roomType,
        'start': value.start,
        'threeChildrenRate': value.threeChildrenRate,
        'threePersonRate': value.threePersonRate,
        'twoChildrenRate': value.twoChildrenRate,
        'twoPersonRate': value.twoPersonRate,
    };
}
exports.EffectiveRateTypeToJSON = EffectiveRateTypeToJSON;
