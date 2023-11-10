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
import type { UniqueIDType } from './UniqueIDType';
/**
 * Criteria type for reversing certificate postings of transactions.
 * @export
 * @interface ReverseCertificatePostingsCriteriaType
 */
export interface ReverseCertificatePostingsCriteriaType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof ReverseCertificatePostingsCriteriaType
     */
    cashierId?: number;
    /**
     * Property code where the reservation transaction exists.
     * @type {string}
     * @memberof ReverseCertificatePostingsCriteriaType
     */
    hotelId?: string;
    /**
     * The reason code for the deletion.
     * @type {string}
     * @memberof ReverseCertificatePostingsCriteriaType
     */
    reasonCode?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ReverseCertificatePostingsCriteriaType
     */
    reservationNameId?: UniqueIDType;
    /**
     * The unique transaction number of this transaction.
     * @type {Array<number>}
     * @memberof ReverseCertificatePostingsCriteriaType
     */
    transactionList?: Array<number>;
}
/**
 * Check if a given object implements the ReverseCertificatePostingsCriteriaType interface.
 */
export declare function instanceOfReverseCertificatePostingsCriteriaType(value: object): boolean;
export declare function ReverseCertificatePostingsCriteriaTypeFromJSON(json: any): ReverseCertificatePostingsCriteriaType;
export declare function ReverseCertificatePostingsCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReverseCertificatePostingsCriteriaType;
export declare function ReverseCertificatePostingsCriteriaTypeToJSON(value?: ReverseCertificatePostingsCriteriaType | null): any;
