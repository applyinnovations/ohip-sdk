/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method.
 * @export
 */
export declare const CardTypeType: {
    readonly Ab: "Ab";
    readonly Am: "Am";
    readonly Ax: "Ax";
    readonly Cb: "Cb";
    readonly Dc: "Dc";
    readonly Ds: "Ds";
    readonly Dt: "Dt";
    readonly Ec: "Ec";
    readonly Er: "Er";
    readonly Jc: "Jc";
    readonly Jl: "Jl";
    readonly Mc: "Mc";
    readonly Nb: "Nb";
    readonly So: "So";
    readonly St: "St";
    readonly Sw: "Sw";
    readonly Va: "Va";
    readonly Xy: "Xy";
    readonly Zz: "Zz";
    readonly Cp: "Cp";
    readonly Cu: "Cu";
};
export type CardTypeType = typeof CardTypeType[keyof typeof CardTypeType];
export declare function CardTypeTypeFromJSON(json: any): CardTypeType;
export declare function CardTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardTypeType;
export declare function CardTypeTypeToJSON(value?: CardTypeType | null): any;
