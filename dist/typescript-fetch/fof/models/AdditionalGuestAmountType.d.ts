/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
     * @type {string}
     * @memberof AdditionalGuestAmountType
     */
    ageQualifyingCode?: AdditionalGuestAmountTypeAgeQualifyingCodeEnum;
    /**
     *
     * @type {TotalType}
     * @memberof AdditionalGuestAmountType
     */
    amount?: TotalType;
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