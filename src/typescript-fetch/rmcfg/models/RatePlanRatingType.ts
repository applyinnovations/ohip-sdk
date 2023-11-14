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


/**
 * Possible Rate plan rating values.
 * @export
 */
export const RatePlanRatingType = {
    MostImportant: 'MostImportant',
    Important: 'Important',
    SomewhatImportant: 'SomewhatImportant',
    LessImportant: 'LessImportant',
    LeastImportant: 'LeastImportant',
    NoValueSet: 'NoValueSet'
} as const;
export type RatePlanRatingType = typeof RatePlanRatingType[keyof typeof RatePlanRatingType];


export function RatePlanRatingTypeFromJSON(json: any): RatePlanRatingType {
    return RatePlanRatingTypeFromJSONTyped(json, false);
}

export function RatePlanRatingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanRatingType {
    return json as RatePlanRatingType;
}

export function RatePlanRatingTypeToJSON(value?: RatePlanRatingType | null): any {
    return value as any;
}
