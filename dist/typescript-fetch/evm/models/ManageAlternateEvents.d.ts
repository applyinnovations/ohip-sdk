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
import type { EventInfoType } from './EventInfoType';
import type { InstanceLink } from './InstanceLink';
import type { ManageAlternateEventsInstructionType } from './ManageAlternateEventsInstructionType';
import type { WarningType } from './WarningType';
/**
 * Request object for managing catering events those are alternate to other catering events.
 * @export
 * @interface ManageAlternateEvents
 */
export interface ManageAlternateEvents {
    /**
     * Pertain event information.
     * @type {Array<EventInfoType>}
     * @memberof ManageAlternateEvents
     */
    alternateEvents?: Array<EventInfoType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ManageAlternateEvents
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {ManageAlternateEventsInstructionType}
     * @memberof ManageAlternateEvents
     */
    manageAlternateEventsInstruction?: ManageAlternateEventsInstructionType;
    /**
     * Used in conjunction with the Success elementSpace to define a business error.
     * @type {Array<WarningType>}
     * @memberof ManageAlternateEvents
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ManageAlternateEvents interface.
 */
export declare function instanceOfManageAlternateEvents(value: object): boolean;
export declare function ManageAlternateEventsFromJSON(json: any): ManageAlternateEvents;
export declare function ManageAlternateEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManageAlternateEvents;
export declare function ManageAlternateEventsToJSON(value?: ManageAlternateEvents | null): any;