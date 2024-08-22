/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AuthorizerInfoType } from './AuthorizerInfoType';
import type { PromoCodeCompRoutingTypeDuration } from './PromoCodeCompRoutingTypeDuration';
/**
 * Promotion Code Complimentary Routing limit can be one of the three: Credit Limit, Percetage Limit, Covers Limit
 * @export
 * @interface PromoCodeCompRoutingType
 */
export interface PromoCodeCompRoutingType {
    /**
     *
     * @type {AuthorizerInfoType}
     * @memberof PromoCodeCompRoutingType
     */
    authorizerInfo?: AuthorizerInfoType;
    /**
     * User Defined Comments. Used for promotion code Complimentary Routing.
     * @type {string}
     * @memberof PromoCodeCompRoutingType
     */
    comments?: string;
    /**
     * Flag to indicate that pre approval is required for promotion code complimentary routing .
     * @type {boolean}
     * @memberof PromoCodeCompRoutingType
     */
    compPreApprovalRequired?: boolean;
    /**
     * Number of covers for this promotion code complimentary routing instruction.
     * @type {number}
     * @memberof PromoCodeCompRoutingType
     */
    covers?: number;
    /**
     * Allowable credit amount for this promotion code complimentary routing instruction. Null value means no limit, 0 equals zero.
     * @type {number}
     * @memberof PromoCodeCompRoutingType
     */
    creditLimit?: number;
    /**
     *
     * @type {PromoCodeCompRoutingTypeDuration}
     * @memberof PromoCodeCompRoutingType
     */
    duration?: PromoCodeCompRoutingTypeDuration;
    /**
     * The folio number where it is applied for promotion code complimentary routing.
     * @type {number}
     * @memberof PromoCodeCompRoutingType
     */
    folioNo?: number;
    /**
     * Membership number for promotion code complimentary routing
     * @type {string}
     * @memberof PromoCodeCompRoutingType
     */
    membershipId?: string;
    /**
     * The promotion code complimentary routing limit percentage allowed for this routing instruction.
     * @type {number}
     * @memberof PromoCodeCompRoutingType
     */
    percentageLimit?: number;
    /**
     * Promotion code for Complimentary Routing
     * @type {string}
     * @memberof PromoCodeCompRoutingType
     */
    promotionCode?: string;
    /**
     * Flag to indicate to prompt the Authorizer for promotion code complimentary routing.
     * @type {boolean}
     * @memberof PromoCodeCompRoutingType
     */
    promptForAuthorizer?: boolean;
}
/**
 * Check if a given object implements the PromoCodeCompRoutingType interface.
 */
export declare function instanceOfPromoCodeCompRoutingType(value: object): boolean;
export declare function PromoCodeCompRoutingTypeFromJSON(json: any): PromoCodeCompRoutingType;
export declare function PromoCodeCompRoutingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromoCodeCompRoutingType;
export declare function PromoCodeCompRoutingTypeToJSON(value?: PromoCodeCompRoutingType | null): any;
