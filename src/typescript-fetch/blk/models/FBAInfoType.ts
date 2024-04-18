/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { FBAStatusType } from './FBAStatusType';
import {
    FBAStatusTypeFromJSON,
    FBAStatusTypeFromJSONTyped,
    FBAStatusTypeToJSON,
} from './FBAStatusType';

/**
 * FBA ( Flexible Benefits Awards ) related fields.
 * @export
 * @interface FBAInfoType
 */
export interface FBAInfoType {
    /**
     * Award's FBA amount.
     * @type {number}
     * @memberof FBAInfoType
     */
    amount?: number;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof FBAInfoType
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof FBAInfoType
     */
    currencySymbol?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof FBAInfoType
     */
    decimalPlaces?: number;
    /**
     * Business date of the FBA bill generation.
     * @type {string}
     * @memberof FBAInfoType
     */
    fbaBillGenDate?: string;
    /**
     * Indicates if this certificate is a Flexible Benefit Award certificate.
     * @type {boolean}
     * @memberof FBAInfoType
     */
    flexibleBenefitAward?: boolean;
    /**
     * Award's FBA monetary values.
     * @type {number}
     * @memberof FBAInfoType
     */
    monetaryValue?: number;
    /**
     * Indicates whether the certificate is Orphan or not.
     * @type {boolean}
     * @memberof FBAInfoType
     */
    orphanCertificate?: boolean;
    /**
     * Indicates whether FBA has been posted.
     * @type {boolean}
     * @memberof FBAInfoType
     */
    posted?: boolean;
    /**
     * Award's FBA posted amount.
     * @type {number}
     * @memberof FBAInfoType
     */
    postedAmount?: number;
    /**
     * Business date of the FBA posting.
     * @type {string}
     * @memberof FBAInfoType
     */
    postingBusinessDate?: string;
    /**
     * Date and time of the FBA posting.
     * @type {string}
     * @memberof FBAInfoType
     */
    postingDateTime?: string;
    /**
     * Marks if the certificate is eligible for reimbursement.
     * @type {boolean}
     * @memberof FBAInfoType
     */
    reimburseAllowed?: boolean;
    /**
     * Indicates whether FBA has been reimbursed.
     * @type {boolean}
     * @memberof FBAInfoType
     */
    reimbursed?: boolean;
    /**
     * Award's FBA reimbursed amount.
     * @type {number}
     * @memberof FBAInfoType
     */
    reimbursedAmount?: number;
    /**
     * Business date of the FBA reimbursement.
     * @type {string}
     * @memberof FBAInfoType
     */
    reimbursementBusinessDate?: string;
    /**
     * Date and time of the FBA reimbursement.
     * @type {string}
     * @memberof FBAInfoType
     */
    reimbursementDateTime?: string;
    /**
     * Marks if the certificate is eligible for resettlement
     * @type {boolean}
     * @memberof FBAInfoType
     */
    resettleAllowed?: boolean;
    /**
     * Indicates whether FBA has been settled.
     * @type {boolean}
     * @memberof FBAInfoType
     */
    settled?: boolean;
    /**
     * Business date of the FBA settlement.
     * @type {string}
     * @memberof FBAInfoType
     */
    settlementBusinessDate?: string;
    /**
     * Date and time of the FBA settlement.
     * @type {string}
     * @memberof FBAInfoType
     */
    settlementDateTime?: string;
    /**
     * 
     * @type {FBAStatusType}
     * @memberof FBAInfoType
     */
    status?: FBAStatusType;
}

/**
 * Check if a given object implements the FBAInfoType interface.
 */
export function instanceOfFBAInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FBAInfoTypeFromJSON(json: any): FBAInfoType {
    return FBAInfoTypeFromJSONTyped(json, false);
}

export function FBAInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FBAInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !exists(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'decimalPlaces': !exists(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'fbaBillGenDate': !exists(json, 'fbaBillGenDate') ? undefined : json['fbaBillGenDate'],
        'flexibleBenefitAward': !exists(json, 'flexibleBenefitAward') ? undefined : json['flexibleBenefitAward'],
        'monetaryValue': !exists(json, 'monetaryValue') ? undefined : json['monetaryValue'],
        'orphanCertificate': !exists(json, 'orphanCertificate') ? undefined : json['orphanCertificate'],
        'posted': !exists(json, 'posted') ? undefined : json['posted'],
        'postedAmount': !exists(json, 'postedAmount') ? undefined : json['postedAmount'],
        'postingBusinessDate': !exists(json, 'postingBusinessDate') ? undefined : json['postingBusinessDate'],
        'postingDateTime': !exists(json, 'postingDateTime') ? undefined : json['postingDateTime'],
        'reimburseAllowed': !exists(json, 'reimburseAllowed') ? undefined : json['reimburseAllowed'],
        'reimbursed': !exists(json, 'reimbursed') ? undefined : json['reimbursed'],
        'reimbursedAmount': !exists(json, 'reimbursedAmount') ? undefined : json['reimbursedAmount'],
        'reimbursementBusinessDate': !exists(json, 'reimbursementBusinessDate') ? undefined : json['reimbursementBusinessDate'],
        'reimbursementDateTime': !exists(json, 'reimbursementDateTime') ? undefined : json['reimbursementDateTime'],
        'resettleAllowed': !exists(json, 'resettleAllowed') ? undefined : json['resettleAllowed'],
        'settled': !exists(json, 'settled') ? undefined : json['settled'],
        'settlementBusinessDate': !exists(json, 'settlementBusinessDate') ? undefined : json['settlementBusinessDate'],
        'settlementDateTime': !exists(json, 'settlementDateTime') ? undefined : json['settlementDateTime'],
        'status': !exists(json, 'status') ? undefined : FBAStatusTypeFromJSON(json['status']),
    };
}

export function FBAInfoTypeToJSON(value?: FBAInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'decimalPlaces': value.decimalPlaces,
        'fbaBillGenDate': value.fbaBillGenDate,
        'flexibleBenefitAward': value.flexibleBenefitAward,
        'monetaryValue': value.monetaryValue,
        'orphanCertificate': value.orphanCertificate,
        'posted': value.posted,
        'postedAmount': value.postedAmount,
        'postingBusinessDate': value.postingBusinessDate,
        'postingDateTime': value.postingDateTime,
        'reimburseAllowed': value.reimburseAllowed,
        'reimbursed': value.reimbursed,
        'reimbursedAmount': value.reimbursedAmount,
        'reimbursementBusinessDate': value.reimbursementBusinessDate,
        'reimbursementDateTime': value.reimbursementDateTime,
        'resettleAllowed': value.resettleAllowed,
        'settled': value.settled,
        'settlementBusinessDate': value.settlementBusinessDate,
        'settlementDateTime': value.settlementDateTime,
        'status': FBAStatusTypeToJSON(value.status),
    };
}
