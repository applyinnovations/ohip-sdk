/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FBAStatusType } from './FBAStatusType';
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
export declare function instanceOfFBAInfoType(value: object): boolean;
export declare function FBAInfoTypeFromJSON(json: any): FBAInfoType;
export declare function FBAInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FBAInfoType;
export declare function FBAInfoTypeToJSON(value?: FBAInfoType | null): any;
