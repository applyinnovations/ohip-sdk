/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Basic information about membership benefit.
 * @export
 * @interface BenefitType
 */
export interface BenefitType {
    /**
     * Benefit code associated with a membership.
     * @type {string}
     * @memberof BenefitType
     */
    code?: string;
    /**
     * Indicates whether membership benefit is active or inactive.
     * @type {boolean}
     * @memberof BenefitType
     */
    inactive?: boolean;
    /**
     * Processing message for membership benefit.
     * @type {string}
     * @memberof BenefitType
     */
    message?: string;
}
/**
 * Check if a given object implements the BenefitType interface.
 */
export declare function instanceOfBenefitType(value: object): boolean;
export declare function BenefitTypeFromJSON(json: any): BenefitType;
export declare function BenefitTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BenefitType;
export declare function BenefitTypeToJSON(value?: BenefitType | null): any;
