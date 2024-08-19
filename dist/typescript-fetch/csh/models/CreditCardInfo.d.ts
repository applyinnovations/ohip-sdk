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
import type { CardTypeType } from './CardTypeType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Information on a credit card for the customer.
 * @export
 * @interface CreditCardInfo
 */
export interface CreditCardInfo {
    /**
     *
     * @type {string}
     * @memberof CreditCardInfo
     */
    cardHolderName?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CreditCardInfo
     */
    cardId?: UniqueIDType;
    /**
     *
     * @type {string}
     * @memberof CreditCardInfo
     */
    cardNumberLast4Digits?: string;
    /**
     *
     * @type {string}
     * @memberof CreditCardInfo
     */
    cardNumberMasked?: string;
    /**
     *
     * @type {CardTypeType}
     * @memberof CreditCardInfo
     */
    cardType?: CardTypeType;
    /**
     * Masked Expiration date of the credit card
     * @type {string}
     * @memberof CreditCardInfo
     */
    expirationDateMasked?: string;
    /**
     * Expiration date in string representation.
     * @type {string}
     * @memberof CreditCardInfo
     */
    expirationDateString?: string;
}
/**
 * Check if a given object implements the CreditCardInfo interface.
 */
export declare function instanceOfCreditCardInfo(value: object): boolean;
export declare function CreditCardInfoFromJSON(json: any): CreditCardInfo;
export declare function CreditCardInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditCardInfo;
export declare function CreditCardInfoToJSON(value?: CreditCardInfo | null): any;
