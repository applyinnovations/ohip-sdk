/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { WaitlistedEventProcessingInstructionsType } from './WaitlistedEventProcessingInstructionsType';
import type { WaitlistedEventType } from './WaitlistedEventType';
import type { WaitlistedEventsSearchType } from './WaitlistedEventsSearchType';
import type { WarningType } from './WarningType';
/**
 *
 * @export
 * @interface ManageWaitlistedEventsRequest
 */
export interface ManageWaitlistedEventsRequest {
    /**
     *
     * @type {WaitlistedEventsSearchType}
     * @memberof ManageWaitlistedEventsRequest
     */
    criteria?: WaitlistedEventsSearchType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ManageWaitlistedEventsRequest
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {WaitlistedEventProcessingInstructionsType}
     * @memberof ManageWaitlistedEventsRequest
     */
    processingInstructions?: WaitlistedEventProcessingInstructionsType;
    /**
     * Pertain waitlisted event Information.
     * @type {Array<WaitlistedEventType>}
     * @memberof ManageWaitlistedEventsRequest
     */
    waitlistedEvents?: Array<WaitlistedEventType>;
    /**
     * Used in conjunction with the Success elementSpace to define a business error.
     * @type {Array<WarningType>}
     * @memberof ManageWaitlistedEventsRequest
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ManageWaitlistedEventsRequest interface.
 */
export declare function instanceOfManageWaitlistedEventsRequest(value: object): boolean;
export declare function ManageWaitlistedEventsRequestFromJSON(json: any): ManageWaitlistedEventsRequest;
export declare function ManageWaitlistedEventsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManageWaitlistedEventsRequest;
export declare function ManageWaitlistedEventsRequestToJSON(value?: ManageWaitlistedEventsRequest | null): any;