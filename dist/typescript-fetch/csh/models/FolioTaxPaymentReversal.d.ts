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
import type { InstanceLink } from './InstanceLink';
import type { SummaryPostingType } from './SummaryPostingType';
import type { TrxInfoType } from './TrxInfoType';
import type { WarningType } from './WarningType';
/**
 * Response for the reverse Thailand Tax Payment Tax record request.
 * @export
 * @interface FolioTaxPaymentReversal
 */
export interface FolioTaxPaymentReversal {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof FolioTaxPaymentReversal
     */
    links?: Array<InstanceLink>;
    /**
     * List of postings.
     * @type {Array<SummaryPostingType>}
     * @memberof FolioTaxPaymentReversal
     */
    postings?: Array<SummaryPostingType>;
    /**
     * List of Transaction codes info.
     * @type {Array<TrxInfoType>}
     * @memberof FolioTaxPaymentReversal
     */
    trxCodesInfo?: Array<TrxInfoType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FolioTaxPaymentReversal
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the FolioTaxPaymentReversal interface.
 */
export declare function instanceOfFolioTaxPaymentReversal(value: object): boolean;
export declare function FolioTaxPaymentReversalFromJSON(json: any): FolioTaxPaymentReversal;
export declare function FolioTaxPaymentReversalFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioTaxPaymentReversal;
export declare function FolioTaxPaymentReversalToJSON(value?: FolioTaxPaymentReversal | null): any;