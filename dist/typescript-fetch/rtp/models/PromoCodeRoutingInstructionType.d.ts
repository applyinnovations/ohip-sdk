/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AuthorizerInfoType } from './AuthorizerInfoType';
import type { BillingInstructionType } from './BillingInstructionType';
import type { PromoCodeRoutingInstructionTypeDuration } from './PromoCodeRoutingInstructionTypeDuration';
import type { TrxInfoType } from './TrxInfoType';
/**
 * Routing limit can be one of the three: Credit Limit, Percetage Limit, Covers Limit
 * @export
 * @interface PromoCodeRoutingInstructionType
 */
export interface PromoCodeRoutingInstructionType {
    /**
     * Created or removed rate code.
     * @type {string}
     * @memberof PromoCodeRoutingInstructionType
     */
    actionType?: string;
    /**
     *
     * @type {AuthorizerInfoType}
     * @memberof PromoCodeRoutingInstructionType
     */
    authorizerInfo?: AuthorizerInfoType;
    /**
     * Flag to auto populate the Routing.
     * @type {boolean}
     * @memberof PromoCodeRoutingInstructionType
     */
    autoPopulateRouting?: boolean;
    /**
     * Set of Billing Instruction codes.
     * @type {Array<BillingInstructionType>}
     * @memberof PromoCodeRoutingInstructionType
     */
    billingInstructions?: Array<BillingInstructionType>;
    /**
     * User Defined Comments. Used for Comp Routing.
     * @type {string}
     * @memberof PromoCodeRoutingInstructionType
     */
    comments?: string;
    /**
     * Flag to indicate that pre approval is required.
     * @type {boolean}
     * @memberof PromoCodeRoutingInstructionType
     */
    compPreApprovalRequired?: boolean;
    /**
     * Number of covers for this routing fetchInstructions.
     * @type {number}
     * @memberof PromoCodeRoutingInstructionType
     */
    covers?: number;
    /**
     * Allowable credit amount for this routing fetchInstructions. Null value means no limit, 0 equals zero.
     * @type {number}
     * @memberof PromoCodeRoutingInstructionType
     */
    creditLimit?: number;
    /**
     *
     * @type {PromoCodeRoutingInstructionTypeDuration}
     * @memberof PromoCodeRoutingInstructionType
     */
    duration?: PromoCodeRoutingInstructionTypeDuration;
    /**
     * The folio number where it is applied.
     * @type {number}
     * @memberof PromoCodeRoutingInstructionType
     */
    folioNo?: number;
    /**
     * Amount of Credit used for this routing fetchInstructions.
     * @type {number}
     * @memberof PromoCodeRoutingInstructionType
     */
    limitUsed?: number;
    /**
     * Membership number
     * @type {string}
     * @memberof PromoCodeRoutingInstructionType
     */
    membershipId?: string;
    /**
     * The routing limit percentage allowed for this routing fetchInstructions.
     * @type {number}
     * @memberof PromoCodeRoutingInstructionType
     */
    percentageLimit?: number;
    /**
     * Flag to indicate to prompt the Authorizer.
     * @type {boolean}
     * @memberof PromoCodeRoutingInstructionType
     */
    promptForAuthorizer?: boolean;
    /**
     * List of Transaction codes info.
     * @type {Array<TrxInfoType>}
     * @memberof PromoCodeRoutingInstructionType
     */
    transactionCodes?: Array<TrxInfoType>;
}
/**
 * Check if a given object implements the PromoCodeRoutingInstructionType interface.
 */
export declare function instanceOfPromoCodeRoutingInstructionType(value: object): boolean;
export declare function PromoCodeRoutingInstructionTypeFromJSON(json: any): PromoCodeRoutingInstructionType;
export declare function PromoCodeRoutingInstructionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromoCodeRoutingInstructionType;
export declare function PromoCodeRoutingInstructionTypeToJSON(value?: PromoCodeRoutingInstructionType | null): any;