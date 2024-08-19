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
import type { InstanceLink } from './InstanceLink';
import type { ResPaymentCardType } from './ResPaymentCardType';
import type { WarningType } from './WarningType';
/**
 *
 * @export
 * @interface DecodedCard
 */
export interface DecodedCard {
    /**
     *
     * @type {ResPaymentCardType}
     * @memberof DecodedCard
     */
    creditCard?: ResPaymentCardType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof DecodedCard
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof DecodedCard
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the DecodedCard interface.
 */
export declare function instanceOfDecodedCard(value: object): boolean;
export declare function DecodedCardFromJSON(json: any): DecodedCard;
export declare function DecodedCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): DecodedCard;
export declare function DecodedCardToJSON(value?: DecodedCard | null): any;
