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
import type { WaitlistPriorityType } from './WaitlistPriorityType';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching Waitlist Priorities.
 * @export
 * @interface WaitlistPrioritiesDetails
 */
export interface WaitlistPrioritiesDetails {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof WaitlistPrioritiesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * List of Waitlist Priorities.
     * @type {Array<WaitlistPriorityType>}
     * @memberof WaitlistPrioritiesDetails
     */
    waitlistPriorities?: Array<WaitlistPriorityType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof WaitlistPrioritiesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the WaitlistPrioritiesDetails interface.
 */
export declare function instanceOfWaitlistPrioritiesDetails(value: object): boolean;
export declare function WaitlistPrioritiesDetailsFromJSON(json: any): WaitlistPrioritiesDetails;
export declare function WaitlistPrioritiesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WaitlistPrioritiesDetails;
export declare function WaitlistPrioritiesDetailsToJSON(value?: WaitlistPrioritiesDetails | null): any;
