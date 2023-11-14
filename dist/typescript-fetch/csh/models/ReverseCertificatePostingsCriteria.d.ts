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
import type { Links } from './Links';
import type { ReverseCertificatePostingsCriteriaType } from './ReverseCertificatePostingsCriteriaType';
import type { WarningsType } from './WarningsType';
/**
 * Request to reverse the certificate postings of transactions.
 * @export
 * @interface ReverseCertificatePostingsCriteria
 */
export interface ReverseCertificatePostingsCriteria {
    /**
     *
     * @type {Links}
     * @memberof ReverseCertificatePostingsCriteria
     */
    links?: Links;
    /**
     *
     * @type {ReverseCertificatePostingsCriteriaType}
     * @memberof ReverseCertificatePostingsCriteria
     */
    reverseCriteria?: ReverseCertificatePostingsCriteriaType;
    /**
     *
     * @type {WarningsType}
     * @memberof ReverseCertificatePostingsCriteria
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ReverseCertificatePostingsCriteria interface.
 */
export declare function instanceOfReverseCertificatePostingsCriteria(value: object): boolean;
export declare function ReverseCertificatePostingsCriteriaFromJSON(json: any): ReverseCertificatePostingsCriteria;
export declare function ReverseCertificatePostingsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReverseCertificatePostingsCriteria;
export declare function ReverseCertificatePostingsCriteriaToJSON(value?: ReverseCertificatePostingsCriteria | null): any;