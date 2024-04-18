/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TotalType } from './TotalType';
/**
 *
 * @export
 * @interface AdditionalGuestAmountType
 */
export interface AdditionalGuestAmountType {
    /**
     *
     * @type {TotalType}
     * @memberof AdditionalGuestAmountType
     */
    amount?: TotalType;
    /**
     *
     * @type {string}
     * @memberof AdditionalGuestAmountType
     */
    ageQualifyingCode?: AdditionalGuestAmountTypeAgeQualifyingCodeEnum;
}
/**
 * @export
 */
export declare const AdditionalGuestAmountTypeAgeQualifyingCodeEnum: {
    readonly Adult: "ADULT";
    readonly Child: "CHILD";
    readonly Other: "OTHER";
    readonly Childbucket1: "CHILDBUCKET1";
    readonly Childbucket2: "CHILDBUCKET2";
    readonly Childbucket3: "CHILDBUCKET3";
    readonly Childbucket4: "CHILDBUCKET4";
    readonly Childbucket5: "CHILDBUCKET5";
};
export type AdditionalGuestAmountTypeAgeQualifyingCodeEnum = typeof AdditionalGuestAmountTypeAgeQualifyingCodeEnum[keyof typeof AdditionalGuestAmountTypeAgeQualifyingCodeEnum];
/**
 * Check if a given object implements the AdditionalGuestAmountType interface.
 */
export declare function instanceOfAdditionalGuestAmountType(value: object): boolean;
export declare function AdditionalGuestAmountTypeFromJSON(json: any): AdditionalGuestAmountType;
export declare function AdditionalGuestAmountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdditionalGuestAmountType;
export declare function AdditionalGuestAmountTypeToJSON(value?: AdditionalGuestAmountType | null): any;