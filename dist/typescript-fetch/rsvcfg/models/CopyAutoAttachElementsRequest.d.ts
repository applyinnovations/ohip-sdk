/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CopyConfigurationCodeType } from './CopyConfigurationCodeType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface CopyAutoAttachElementsRequest
 */
export interface CopyAutoAttachElementsRequest {
    /**
     * List of the auto attach configuration rule(s) to be copied.
     * @type {Array<CopyConfigurationCodeType>}
     * @memberof CopyAutoAttachElementsRequest
     */
    autoAttachRule?: Array<CopyConfigurationCodeType>;
    /**
     *
     * @type {Links}
     * @memberof CopyAutoAttachElementsRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof CopyAutoAttachElementsRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CopyAutoAttachElementsRequest interface.
 */
export declare function instanceOfCopyAutoAttachElementsRequest(value: object): boolean;
export declare function CopyAutoAttachElementsRequestFromJSON(json: any): CopyAutoAttachElementsRequest;
export declare function CopyAutoAttachElementsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyAutoAttachElementsRequest;
export declare function CopyAutoAttachElementsRequestToJSON(value?: CopyAutoAttachElementsRequest | null): any;
