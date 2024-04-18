/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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