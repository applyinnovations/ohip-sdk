/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';

/**
 * FBA ( Flexible Benefits Awards ) related fields.
 * @export
 * @interface CertificateReconciliationType
 */
export interface CertificateReconciliationType {
    /**
     * Award's FBA amount.
     * @type {number}
     * @memberof CertificateReconciliationType
     */
    amount?: number;
    /**
     * The number for the given certificate.
     * @type {string}
     * @memberof CertificateReconciliationType
     */
    certificateNumber?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof CertificateReconciliationType
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof CertificateReconciliationType
     */
    currencySymbol?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof CertificateReconciliationType
     */
    decimalPlaces?: number;
    /**
     * 
     * @type {FBAStatusType}
     * @memberof CertificateReconciliationType
     */
    fBAStatus?: FBAStatusType;
    /**
     * Business date of the FBA bill generation.
     * @type {string}
     * @memberof CertificateReconciliationType
     */
    fbaBillGenDate?: string;
    /**
     * Indicates if this certificate is a Flexible Benefit Award certificate.
     * @type {boolean}
     * @memberof CertificateReconciliationType
     */
    flexibleBenefitAward?: boolean;
    /**
     * Hotel context for the selected certificate.
     * @type {string}
     * @memberof CertificateReconciliationType
     */
    hotelId?: string;
    /**
     * Award's FBA monetary values.
     * @type {number}
     * @memberof CertificateReconciliationType
     */
    monetaryValue?: number;
    /**
     * Indicates whether the certificate is Orphan or not.
     * @type {boolean}
     * @memberof CertificateReconciliationType
     */
    orphanCertificate?: boolean;
    /**
     * Indicates whether FBA has been posted.
     * @type {boolean}
     * @memberof CertificateReconciliationType
     */
    posted?: boolean;
    /**
     * Award's FBA posted amount.
     * @type {number}
     * @memberof CertificateReconciliationType
     */
    postedAmount?: number;
    /**
     * Business date of the FBA posting.
     * @type {string}
     * @memberof CertificateReconciliationType
     */
    postingBusinessDate?: string;
    /**
     * Date and time of the FBA posting.
     * @type {string}
     * @memberof CertificateReconciliationType
     */
    postingDateTime?: string;
    /**
     * Marks if the certificate is eligible for reimbursement.
     * @type {boolean}
     * @memberof CertificateReconciliationType
     */
    reimburseAllowed?: boolean;
    /**
     * Indicates whether FBA has been reimbursed.
     * @type {boolean}
     * @memberof CertificateReconciliationType
     */
    reimbursed?: boolean;
    /**
     * Award's FBA reimbursed amount.
     * @type {number}
     * @memberof CertificateReconciliationType
     */
    reimbursedAmount?: number;
    /**
     * Business date of the FBA reimbursement.
     * @type {string}
     * @memberof CertificateReconciliationType
     */
    reimbursementBusinessDate?: string;
    /**
     * Date and time of the FBA reimbursement.
     * @type {string}
     * @memberof CertificateReconciliationType
     */
    reimbursementDateTime?: string;
    /**
     * 
     * @type {ReservationId}
     * @memberof CertificateReconciliationType
     */
    reservationId?: ReservationId;
    /**
     * Marks if the certificate is eligible for resettlement
     * @type {boolean}
     * @memberof CertificateReconciliationType
     */
    resettleAllowed?: boolean;
    /**
     * Indicates whether FBA has been settled.
     * @type {boolean}
     * @memberof CertificateReconciliationType
     */
    settled?: boolean;
    /**
     * Business date of the FBA settlement.
     * @type {string}
     * @memberof CertificateReconciliationType
     */
    settlementBusinessDate?: string;
    /**
     * Date and time of the FBA settlement.
     * @type {string}
     * @memberof CertificateReconciliationType
     */
    settlementDateTime?: string;
    /**
     * 
     * @type {FBAStatusType}
     * @memberof CertificateReconciliationType
     */
    status?: FBAStatusType;
}

/**
 * Check if a given object implements the CertificateReconciliationType interface.
 */
export function instanceOfCertificateReconciliationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CertificateReconciliationTypeFromJSON(json: any): CertificateReconciliationType {
    return CertificateReconciliationTypeFromJSONTyped(json, false);
}

export function CertificateReconciliationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateReconciliationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'certificateNumber': !exists(json, 'certificateNumber') ? undefined : json['certificateNumber'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !exists(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'decimalPlaces': !exists(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'fBAStatus': !exists(json, 'fBAStatus') ? undefined : FBAStatusTypeFromJSON(json['fBAStatus']),
        'fbaBillGenDate': !exists(json, 'fbaBillGenDate') ? undefined : json['fbaBillGenDate'],
        'flexibleBenefitAward': !exists(json, 'flexibleBenefitAward') ? undefined : json['flexibleBenefitAward'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
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
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'resettleAllowed': !exists(json, 'resettleAllowed') ? undefined : json['resettleAllowed'],
        'settled': !exists(json, 'settled') ? undefined : json['settled'],
        'settlementBusinessDate': !exists(json, 'settlementBusinessDate') ? undefined : json['settlementBusinessDate'],
        'settlementDateTime': !exists(json, 'settlementDateTime') ? undefined : json['settlementDateTime'],
        'status': !exists(json, 'status') ? undefined : FBAStatusTypeFromJSON(json['status']),
    };
}

export function CertificateReconciliationTypeToJSON(value?: CertificateReconciliationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'certificateNumber': value.certificateNumber,
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'decimalPlaces': value.decimalPlaces,
        'fBAStatus': FBAStatusTypeToJSON(value.fBAStatus),
        'fbaBillGenDate': value.fbaBillGenDate,
        'flexibleBenefitAward': value.flexibleBenefitAward,
        'hotelId': value.hotelId,
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
        'reservationId': ReservationIdToJSON(value.reservationId),
        'resettleAllowed': value.resettleAllowed,
        'settled': value.settled,
        'settlementBusinessDate': value.settlementBusinessDate,
        'settlementDateTime': value.settlementDateTime,
        'status': FBAStatusTypeToJSON(value.status),
    };
}

