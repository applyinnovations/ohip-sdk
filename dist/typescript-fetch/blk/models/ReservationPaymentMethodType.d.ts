/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AuthorizationRuleType } from './AuthorizationRuleType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { ResPaymentCardType } from './ResPaymentCardType';
import type { ReservationPaymentMethodTypeEmailFolioInfo } from './ReservationPaymentMethodTypeEmailFolioInfo';
/**
 *
 * @export
 * @interface ReservationPaymentMethodType
 */
export interface ReservationPaymentMethodType {
    /**
     *
     * @type {AuthorizationRuleType}
     * @memberof ReservationPaymentMethodType
     */
    authorizationRule?: AuthorizationRuleType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ReservationPaymentMethodType
     */
    balance?: CurrencyAmountType;
    /**
     *
     * @type {string}
     * @memberof ReservationPaymentMethodType
     */
    description?: string;
    /**
     *
     * @type {ReservationPaymentMethodTypeEmailFolioInfo}
     * @memberof ReservationPaymentMethodType
     */
    emailFolioInfo?: ReservationPaymentMethodTypeEmailFolioInfo;
    /**
     *
     * @type {number}
     * @memberof ReservationPaymentMethodType
     */
    folioView?: number;
    /**
     *
     * @type {ResPaymentCardType}
     * @memberof ReservationPaymentMethodType
     */
    paymentCard?: ResPaymentCardType;
    /**
     *
     * @type {string}
     * @memberof ReservationPaymentMethodType
     */
    paymentMethod?: string;
}
/**
 * Check if a given object implements the ReservationPaymentMethodType interface.
 */
export declare function instanceOfReservationPaymentMethodType(value: object): boolean;
export declare function ReservationPaymentMethodTypeFromJSON(json: any): ReservationPaymentMethodType;
export declare function ReservationPaymentMethodTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationPaymentMethodType;
export declare function ReservationPaymentMethodTypeToJSON(value?: ReservationPaymentMethodType | null): any;
