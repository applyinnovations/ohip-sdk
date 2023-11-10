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
import type { AlertCodesType } from './AlertCodesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PutAlertCodesRequest
 */
export interface PutAlertCodesRequest {
    /**
     *
     * @type {AlertCodesType}
     * @memberof PutAlertCodesRequest
     */
    alerts?: AlertCodesType;
    /**
     *
     * @type {Links}
     * @memberof PutAlertCodesRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PutAlertCodesRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PutAlertCodesRequest interface.
 */
export declare function instanceOfPutAlertCodesRequest(value: object): boolean;
export declare function PutAlertCodesRequestFromJSON(json: any): PutAlertCodesRequest;
export declare function PutAlertCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutAlertCodesRequest;
export declare function PutAlertCodesRequestToJSON(value?: PutAlertCodesRequest | null): any;
