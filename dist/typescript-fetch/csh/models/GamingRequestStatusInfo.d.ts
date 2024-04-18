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
import type { GamingRequestStatusType } from './GamingRequestStatusType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for fetch gaming info
 * @export
 * @interface GamingRequestStatusInfo
 */
export interface GamingRequestStatusInfo {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof GamingRequestStatusInfo
     */
    links?: Array<InstanceLink>;
    /**
     * List of guest request status details.
     * @type {Array<GamingRequestStatusType>}
     * @memberof GamingRequestStatusInfo
     */
    statusInfo?: Array<GamingRequestStatusType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof GamingRequestStatusInfo
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the GamingRequestStatusInfo interface.
 */
export declare function instanceOfGamingRequestStatusInfo(value: object): boolean;
export declare function GamingRequestStatusInfoFromJSON(json: any): GamingRequestStatusInfo;
export declare function GamingRequestStatusInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GamingRequestStatusInfo;
export declare function GamingRequestStatusInfoToJSON(value?: GamingRequestStatusInfo | null): any;