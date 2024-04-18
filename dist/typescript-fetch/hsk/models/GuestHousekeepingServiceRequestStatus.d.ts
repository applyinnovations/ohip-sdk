/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Existing Operations Responses will eventually be modified to be extended from this type.
 * @export
 * @interface GuestHousekeepingServiceRequestStatus
 */
export interface GuestHousekeepingServiceRequestStatus {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof GuestHousekeepingServiceRequestStatus
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof GuestHousekeepingServiceRequestStatus
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the GuestHousekeepingServiceRequestStatus interface.
 */
export declare function instanceOfGuestHousekeepingServiceRequestStatus(value: object): boolean;
export declare function GuestHousekeepingServiceRequestStatusFromJSON(json: any): GuestHousekeepingServiceRequestStatus;
export declare function GuestHousekeepingServiceRequestStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestHousekeepingServiceRequestStatus;
export declare function GuestHousekeepingServiceRequestStatusToJSON(value?: GuestHousekeepingServiceRequestStatus | null): any;