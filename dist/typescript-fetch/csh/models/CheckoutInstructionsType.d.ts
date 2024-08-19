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
 *
 * @export
 * @interface CheckoutInstructionsType
 */
export interface CheckoutInstructionsType {
    /**
     * Currency Code which the Guest preferred to use and to be stored on the reservation of the Guest.
     * @type {string}
     * @memberof CheckoutInstructionsType
     */
    guestPreferredCurrency?: string;
    /**
     * Dictates whether to ignore warnings before check out.
     * @type {boolean}
     * @memberof CheckoutInstructionsType
     */
    ignoreWarnings?: boolean;
    /**
     * Housekeeping Status to be assigned to the room after checkout.
     * @type {string}
     * @memberof CheckoutInstructionsType
     */
    roomStatus?: string;
    /**
     * Date and time for scheduled check out which could be performed when SCHEDULED CHECKOUT is active. Room status will be assigned according to SCHEDULED CHECKOUT ROOM STATUS parameter value.
     * @type {string}
     * @memberof CheckoutInstructionsType
     */
    scheduleOn?: string;
}
/**
 * Check if a given object implements the CheckoutInstructionsType interface.
 */
export declare function instanceOfCheckoutInstructionsType(value: object): boolean;
export declare function CheckoutInstructionsTypeFromJSON(json: any): CheckoutInstructionsType;
export declare function CheckoutInstructionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckoutInstructionsType;
export declare function CheckoutInstructionsTypeToJSON(value?: CheckoutInstructionsType | null): any;
