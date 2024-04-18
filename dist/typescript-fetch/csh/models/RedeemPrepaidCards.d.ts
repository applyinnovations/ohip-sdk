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
import type { InstanceLink } from './InstanceLink';
import type { RedeemPrepaidCardCriteriaType } from './RedeemPrepaidCardCriteriaType';
import type { WarningType } from './WarningType';
/**
 * Request type for Prepaid card redeem amount request
 * @export
 * @interface RedeemPrepaidCards
 */
export interface RedeemPrepaidCards {
    /**
     *
     * @type {RedeemPrepaidCardCriteriaType}
     * @memberof RedeemPrepaidCards
     */
    criteria?: RedeemPrepaidCardCriteriaType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RedeemPrepaidCards
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RedeemPrepaidCards
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RedeemPrepaidCards interface.
 */
export declare function instanceOfRedeemPrepaidCards(value: object): boolean;
export declare function RedeemPrepaidCardsFromJSON(json: any): RedeemPrepaidCards;
export declare function RedeemPrepaidCardsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedeemPrepaidCards;
export declare function RedeemPrepaidCardsToJSON(value?: RedeemPrepaidCards | null): any;