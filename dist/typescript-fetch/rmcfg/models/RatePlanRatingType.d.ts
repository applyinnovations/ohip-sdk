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
export declare const RatePlanRatingType: {
    readonly MostImportant: "MostImportant";
    readonly Important: "Important";
    readonly SomewhatImportant: "SomewhatImportant";
    readonly LessImportant: "LessImportant";
    readonly LeastImportant: "LeastImportant";
    readonly NoValueSet: "NoValueSet";
};
export type RatePlanRatingType = typeof RatePlanRatingType[keyof typeof RatePlanRatingType];
export declare function RatePlanRatingTypeFromJSON(json: any): RatePlanRatingType;
export declare function RatePlanRatingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanRatingType;
export declare function RatePlanRatingTypeToJSON(value?: RatePlanRatingType | null): any;
