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
import type { CertificateReconciliationTypes } from './CertificateReconciliationTypes';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostFBAReimbursementRequest
 */
export interface PostFBAReimbursementRequest {
    /**
     *
     * @type {CertificateReconciliationTypes}
     * @memberof PostFBAReimbursementRequest
     */
    certificateReconciliationTypes?: CertificateReconciliationTypes;
    /**
     *
     * @type {Links}
     * @memberof PostFBAReimbursementRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PostFBAReimbursementRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostFBAReimbursementRequest interface.
 */
export declare function instanceOfPostFBAReimbursementRequest(value: object): boolean;
export declare function PostFBAReimbursementRequestFromJSON(json: any): PostFBAReimbursementRequest;
export declare function PostFBAReimbursementRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostFBAReimbursementRequest;
export declare function PostFBAReimbursementRequestToJSON(value?: PostFBAReimbursementRequest | null): any;
