/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuthorizerInfoType } from './AuthorizerInfoType';
import {
    AuthorizerInfoTypeFromJSON,
    AuthorizerInfoTypeFromJSONTyped,
    AuthorizerInfoTypeToJSON,
} from './AuthorizerInfoType';
import type { BillingInstructionsType } from './BillingInstructionsType';
import {
    BillingInstructionsTypeFromJSON,
    BillingInstructionsTypeFromJSONTyped,
    BillingInstructionsTypeToJSON,
} from './BillingInstructionsType';
import type { PromoCodeRoutingInstructionTypeDuration } from './PromoCodeRoutingInstructionTypeDuration';
import {
    PromoCodeRoutingInstructionTypeDurationFromJSON,
    PromoCodeRoutingInstructionTypeDurationFromJSONTyped,
    PromoCodeRoutingInstructionTypeDurationToJSON,
} from './PromoCodeRoutingInstructionTypeDuration';
import type { TrxCodesInfoType } from './TrxCodesInfoType';
import {
    TrxCodesInfoTypeFromJSON,
    TrxCodesInfoTypeFromJSONTyped,
    TrxCodesInfoTypeToJSON,
} from './TrxCodesInfoType';

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
     * 
     * @type {BillingInstructionsType}
     * @memberof PromoCodeRoutingInstructionType
     */
    billingInstructions?: BillingInstructionsType;
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
     * 
     * @type {TrxCodesInfoType}
     * @memberof PromoCodeRoutingInstructionType
     */
    transactionCodes?: TrxCodesInfoType;
}

/**
 * Check if a given object implements the PromoCodeRoutingInstructionType interface.
 */
export function instanceOfPromoCodeRoutingInstructionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PromoCodeRoutingInstructionTypeFromJSON(json: any): PromoCodeRoutingInstructionType {
    return PromoCodeRoutingInstructionTypeFromJSONTyped(json, false);
}

export function PromoCodeRoutingInstructionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromoCodeRoutingInstructionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionType': !exists(json, 'actionType') ? undefined : json['actionType'],
        'authorizerInfo': !exists(json, 'authorizerInfo') ? undefined : AuthorizerInfoTypeFromJSON(json['authorizerInfo']),
        'autoPopulateRouting': !exists(json, 'autoPopulateRouting') ? undefined : json['autoPopulateRouting'],
        'billingInstructions': !exists(json, 'billingInstructions') ? undefined : BillingInstructionsTypeFromJSON(json['billingInstructions']),
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'compPreApprovalRequired': !exists(json, 'compPreApprovalRequired') ? undefined : json['compPreApprovalRequired'],
        'covers': !exists(json, 'covers') ? undefined : json['covers'],
        'creditLimit': !exists(json, 'creditLimit') ? undefined : json['creditLimit'],
        'duration': !exists(json, 'duration') ? undefined : PromoCodeRoutingInstructionTypeDurationFromJSON(json['duration']),
        'folioNo': !exists(json, 'folioNo') ? undefined : json['folioNo'],
        'limitUsed': !exists(json, 'limitUsed') ? undefined : json['limitUsed'],
        'membershipId': !exists(json, 'membershipId') ? undefined : json['membershipId'],
        'percentageLimit': !exists(json, 'percentageLimit') ? undefined : json['percentageLimit'],
        'promptForAuthorizer': !exists(json, 'promptForAuthorizer') ? undefined : json['promptForAuthorizer'],
        'transactionCodes': !exists(json, 'transactionCodes') ? undefined : TrxCodesInfoTypeFromJSON(json['transactionCodes']),
    };
}

export function PromoCodeRoutingInstructionTypeToJSON(value?: PromoCodeRoutingInstructionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionType': value.actionType,
        'authorizerInfo': AuthorizerInfoTypeToJSON(value.authorizerInfo),
        'autoPopulateRouting': value.autoPopulateRouting,
        'billingInstructions': BillingInstructionsTypeToJSON(value.billingInstructions),
        'comments': value.comments,
        'compPreApprovalRequired': value.compPreApprovalRequired,
        'covers': value.covers,
        'creditLimit': value.creditLimit,
        'duration': PromoCodeRoutingInstructionTypeDurationToJSON(value.duration),
        'folioNo': value.folioNo,
        'limitUsed': value.limitUsed,
        'membershipId': value.membershipId,
        'percentageLimit': value.percentageLimit,
        'promptForAuthorizer': value.promptForAuthorizer,
        'transactionCodes': TrxCodesInfoTypeToJSON(value.transactionCodes),
    };
}
