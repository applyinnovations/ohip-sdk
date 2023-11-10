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
import type { FiscalSupportingDocumentCriteriaType } from './FiscalSupportingDocumentCriteriaType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request to send supporting document to fiscal partner.
 * @export
 * @interface FiscalSupportingDocumentCriteria
 */
export interface FiscalSupportingDocumentCriteria {
    /**
     *
     * @type {FiscalSupportingDocumentCriteriaType}
     * @memberof FiscalSupportingDocumentCriteria
     */
    criteria?: FiscalSupportingDocumentCriteriaType;
    /**
     *
     * @type {Links}
     * @memberof FiscalSupportingDocumentCriteria
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof FiscalSupportingDocumentCriteria
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FiscalSupportingDocumentCriteria interface.
 */
export declare function instanceOfFiscalSupportingDocumentCriteria(value: object): boolean;
export declare function FiscalSupportingDocumentCriteriaFromJSON(json: any): FiscalSupportingDocumentCriteria;
export declare function FiscalSupportingDocumentCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiscalSupportingDocumentCriteria;
export declare function FiscalSupportingDocumentCriteriaToJSON(value?: FiscalSupportingDocumentCriteria | null): any;
