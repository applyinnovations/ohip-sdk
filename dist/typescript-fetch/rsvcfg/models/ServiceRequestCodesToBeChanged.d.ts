/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { ServiceRequestCodeType } from './ServiceRequestCodeType';
import type { WarningType } from './WarningType';
/**
 * Request object for changing existing service request codes.
 * @export
 * @interface ServiceRequestCodesToBeChanged
 */
export interface ServiceRequestCodesToBeChanged {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ServiceRequestCodesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Details for service request code type.
     * @type {Array<ServiceRequestCodeType>}
     * @memberof ServiceRequestCodesToBeChanged
     */
    serviceRequestCodes?: Array<ServiceRequestCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ServiceRequestCodesToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ServiceRequestCodesToBeChanged interface.
 */
export declare function instanceOfServiceRequestCodesToBeChanged(value: object): boolean;
export declare function ServiceRequestCodesToBeChangedFromJSON(json: any): ServiceRequestCodesToBeChanged;
export declare function ServiceRequestCodesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceRequestCodesToBeChanged;
export declare function ServiceRequestCodesToBeChangedToJSON(value?: ServiceRequestCodesToBeChanged | null): any;