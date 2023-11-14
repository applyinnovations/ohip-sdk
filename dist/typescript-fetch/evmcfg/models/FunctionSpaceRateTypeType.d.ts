/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Indicates the function space rate is applied per person.
 * @export
 */
export declare const FunctionSpaceRateTypeType: {
    readonly PerRoom: "PerRoom";
    readonly PerPerson: "PerPerson";
};
export type FunctionSpaceRateTypeType = typeof FunctionSpaceRateTypeType[keyof typeof FunctionSpaceRateTypeType];
export declare function FunctionSpaceRateTypeTypeFromJSON(json: any): FunctionSpaceRateTypeType;
export declare function FunctionSpaceRateTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceRateTypeType;
export declare function FunctionSpaceRateTypeTypeToJSON(value?: FunctionSpaceRateTypeType | null): any;