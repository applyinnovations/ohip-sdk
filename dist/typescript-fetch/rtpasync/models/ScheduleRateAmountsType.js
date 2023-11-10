"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Opera Cloud Rate Plan Asynchronous Service API
 * APIs catering to the Rate Plan asynchronous related functionality in a hotel.  This includes adding/updating daily rates&apos; pricing schedules and best available rates by day or length of stay. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleRateAmountsTypeToJSON = exports.ScheduleRateAmountsTypeFromJSONTyped = exports.ScheduleRateAmountsTypeFromJSON = exports.instanceOfScheduleRateAmountsType = void 0;
const runtime_1 = require("../runtime");
const RateByAgeBucketsType_1 = require("./RateByAgeBucketsType");
/**
 * Check if a given object implements the ScheduleRateAmountsType interface.
 */
function instanceOfScheduleRateAmountsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfScheduleRateAmountsType = instanceOfScheduleRateAmountsType;
function ScheduleRateAmountsTypeFromJSON(json) {
    return ScheduleRateAmountsTypeFromJSONTyped(json, false);
}
exports.ScheduleRateAmountsTypeFromJSON = ScheduleRateAmountsTypeFromJSON;
function ScheduleRateAmountsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'extraChildRate': !(0, runtime_1.exists)(json, 'extraChildRate') ? undefined : json['extraChildRate'],
        'extraPersonRate': !(0, runtime_1.exists)(json, 'extraPersonRate') ? undefined : json['extraPersonRate'],
        'fivePersonRate': !(0, runtime_1.exists)(json, 'fivePersonRate') ? undefined : json['fivePersonRate'],
        'fourChildrenRate': !(0, runtime_1.exists)(json, 'fourChildrenRate') ? undefined : json['fourChildrenRate'],
        'fourPersonRate': !(0, runtime_1.exists)(json, 'fourPersonRate') ? undefined : json['fourPersonRate'],
        'minimumChildrenForFreeStay': !(0, runtime_1.exists)(json, 'minimumChildrenForFreeStay') ? undefined : json['minimumChildrenForFreeStay'],
        'oneChildRate': !(0, runtime_1.exists)(json, 'oneChildRate') ? undefined : json['oneChildRate'],
        'onePersonRate': !(0, runtime_1.exists)(json, 'onePersonRate') ? undefined : json['onePersonRate'],
        'overrideFloorAmount': !(0, runtime_1.exists)(json, 'overrideFloorAmount') ? undefined : json['overrideFloorAmount'],
        'pointsRequired': !(0, runtime_1.exists)(json, 'pointsRequired') ? undefined : json['pointsRequired'],
        'rateByAgeBuckets': !(0, runtime_1.exists)(json, 'rateByAgeBuckets') ? undefined : (0, RateByAgeBucketsType_1.RateByAgeBucketsTypeFromJSON)(json['rateByAgeBuckets']),
        'threeChildrenRate': !(0, runtime_1.exists)(json, 'threeChildrenRate') ? undefined : json['threeChildrenRate'],
        'threePersonRate': !(0, runtime_1.exists)(json, 'threePersonRate') ? undefined : json['threePersonRate'],
        'twoChildrenRate': !(0, runtime_1.exists)(json, 'twoChildrenRate') ? undefined : json['twoChildrenRate'],
        'twoPersonRate': !(0, runtime_1.exists)(json, 'twoPersonRate') ? undefined : json['twoPersonRate'],
    };
}
exports.ScheduleRateAmountsTypeFromJSONTyped = ScheduleRateAmountsTypeFromJSONTyped;
function ScheduleRateAmountsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'extraChildRate': value.extraChildRate,
        'extraPersonRate': value.extraPersonRate,
        'fivePersonRate': value.fivePersonRate,
        'fourChildrenRate': value.fourChildrenRate,
        'fourPersonRate': value.fourPersonRate,
        'minimumChildrenForFreeStay': value.minimumChildrenForFreeStay,
        'oneChildRate': value.oneChildRate,
        'onePersonRate': value.onePersonRate,
        'overrideFloorAmount': value.overrideFloorAmount,
        'pointsRequired': value.pointsRequired,
        'rateByAgeBuckets': (0, RateByAgeBucketsType_1.RateByAgeBucketsTypeToJSON)(value.rateByAgeBuckets),
        'threeChildrenRate': value.threeChildrenRate,
        'threePersonRate': value.threePersonRate,
        'twoChildrenRate': value.twoChildrenRate,
        'twoPersonRate': value.twoPersonRate,
    };
}
exports.ScheduleRateAmountsTypeToJSON = ScheduleRateAmountsTypeToJSON;
