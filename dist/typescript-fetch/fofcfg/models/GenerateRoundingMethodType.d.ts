/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * This type is only available for properties with zero decimals. If a property is using decimal points, this type will not be available. The rounding methods which can be specified are: UP, DOWN or NONE.
 * @export
 */
export declare const GenerateRoundingMethodType: {
    readonly Up: "Up";
    readonly Down: "Down";
    readonly None: "None";
};
export type GenerateRoundingMethodType = typeof GenerateRoundingMethodType[keyof typeof GenerateRoundingMethodType];
export declare function GenerateRoundingMethodTypeFromJSON(json: any): GenerateRoundingMethodType;
export declare function GenerateRoundingMethodTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateRoundingMethodType;
export declare function GenerateRoundingMethodTypeToJSON(value?: GenerateRoundingMethodType | null): any;
