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
import type { CompRoutingRequestType } from './CompRoutingRequestType';
import type { RoutingInstructionType } from './RoutingInstructionType';
/**
 * Comp Accounting Request routing
 * @export
 * @interface ResvRoutingCriteriaTypeRequest
 */
export interface ResvRoutingCriteriaTypeRequest {
    /**
     *
     * @type {CompRoutingRequestType}
     * @memberof ResvRoutingCriteriaTypeRequest
     */
    compRequestInfo?: CompRoutingRequestType;
    /**
     * Set of routing instructions associated to this routing type.
     * @type {Array<RoutingInstructionType>}
     * @memberof ResvRoutingCriteriaTypeRequest
     */
    instructions?: Array<RoutingInstructionType>;
}
/**
 * Check if a given object implements the ResvRoutingCriteriaTypeRequest interface.
 */
export declare function instanceOfResvRoutingCriteriaTypeRequest(value: object): boolean;
export declare function ResvRoutingCriteriaTypeRequestFromJSON(json: any): ResvRoutingCriteriaTypeRequest;
export declare function ResvRoutingCriteriaTypeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResvRoutingCriteriaTypeRequest;
export declare function ResvRoutingCriteriaTypeRequestToJSON(value?: ResvRoutingCriteriaTypeRequest | null): any;
