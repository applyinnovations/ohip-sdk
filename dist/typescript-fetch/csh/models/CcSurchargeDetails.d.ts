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
import type { CCSurchargeAmountType } from './CCSurchargeAmountType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response to the request to fetch Credit Card Surcharge information for a Credit Card Payment.
 * @export
 * @interface CcSurchargeDetails
 */
export interface CcSurchargeDetails {
    /**
     *
     * @type {CCSurchargeAmountType}
     * @memberof CcSurchargeDetails
     */
    info?: CCSurchargeAmountType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CcSurchargeDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CcSurchargeDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CcSurchargeDetails interface.
 */
export declare function instanceOfCcSurchargeDetails(value: object): boolean;
export declare function CcSurchargeDetailsFromJSON(json: any): CcSurchargeDetails;
export declare function CcSurchargeDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CcSurchargeDetails;
export declare function CcSurchargeDetailsToJSON(value?: CcSurchargeDetails | null): any;