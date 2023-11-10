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
import type { FiscalFolioCriteriaType } from './FiscalFolioCriteriaType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostFiscalCommandInvoiceRequest
 */
export interface PostFiscalCommandInvoiceRequest {
    /**
     *
     * @type {FiscalFolioCriteriaType}
     * @memberof PostFiscalCommandInvoiceRequest
     */
    criteria?: FiscalFolioCriteriaType;
    /**
     *
     * @type {Links}
     * @memberof PostFiscalCommandInvoiceRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PostFiscalCommandInvoiceRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostFiscalCommandInvoiceRequest interface.
 */
export declare function instanceOfPostFiscalCommandInvoiceRequest(value: object): boolean;
export declare function PostFiscalCommandInvoiceRequestFromJSON(json: any): PostFiscalCommandInvoiceRequest;
export declare function PostFiscalCommandInvoiceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostFiscalCommandInvoiceRequest;
export declare function PostFiscalCommandInvoiceRequestToJSON(value?: PostFiscalCommandInvoiceRequest | null): any;
