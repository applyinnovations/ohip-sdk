/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Information needed to copy Custom Charge Exemption from one property to the other.
 * @export
 * @interface CopyCustomChargeExemptionConfigType
 */
export interface CopyCustomChargeExemptionConfigType {
    /**
     * Custom Charge Exemption to be copied.
     * @type {Array<string>}
     * @memberof CopyCustomChargeExemptionConfigType
     */
    exemptionCodes?: Array<string>;
    /**
     * Property from which Custom Charge Exemptions to be copied from.
     * @type {string}
     * @memberof CopyCustomChargeExemptionConfigType
     */
    sourceHotelCode?: string;
    /**
     * Property to which Custom Charge Exemptions to be copied to.
     * @type {Array<string>}
     * @memberof CopyCustomChargeExemptionConfigType
     */
    targetHotelCode?: Array<string>;
}
/**
 * Check if a given object implements the CopyCustomChargeExemptionConfigType interface.
 */
export declare function instanceOfCopyCustomChargeExemptionConfigType(value: object): boolean;
export declare function CopyCustomChargeExemptionConfigTypeFromJSON(json: any): CopyCustomChargeExemptionConfigType;
export declare function CopyCustomChargeExemptionConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyCustomChargeExemptionConfigType;
export declare function CopyCustomChargeExemptionConfigTypeToJSON(value?: CopyCustomChargeExemptionConfigType | null): any;
