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
 * Mask the dialled digits as per the room configuration.
 * @export
 */
export declare const MaskDialNumberType: {
    readonly NoMasking: "NoMasking";
    readonly MaskLast2Digits: "MaskLast2Digits";
    readonly MaskLast4Digits: "MaskLast4Digits";
    readonly Mask4DigitsLeaveLast2Intact: "Mask4DigitsLeaveLast2Intact";
    readonly MaskAllExceptFirst2: "MaskAllExceptFirst2";
    readonly MaskAll: "MaskAll";
    readonly MaskingPerRoom: "MaskingPerRoom";
};
export type MaskDialNumberType = typeof MaskDialNumberType[keyof typeof MaskDialNumberType];
export declare function MaskDialNumberTypeFromJSON(json: any): MaskDialNumberType;
export declare function MaskDialNumberTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaskDialNumberType;
export declare function MaskDialNumberTypeToJSON(value?: MaskDialNumberType | null): any;
