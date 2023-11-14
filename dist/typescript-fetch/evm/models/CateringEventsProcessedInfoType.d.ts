/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockId } from './BlockId';
import type { CodeDescriptionType } from './CodeDescriptionType';
/**
 * Status/Info of the processed events.
 * @export
 * @interface CateringEventsProcessedInfoType
 */
export interface CateringEventsProcessedInfoType {
    /**
     *
     * @type {BlockId}
     * @memberof CateringEventsProcessedInfoType
     */
    blockId?: BlockId;
    /**
     * Date of the event
     * @type {Date}
     * @memberof CateringEventsProcessedInfoType
     */
    eventDate?: Date;
    /**
     * Name of event.
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    eventName?: string;
    /**
     * Type of event.
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    eventType?: string;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof CateringEventsProcessedInfoType
     */
    functionSpaceDetails?: CodeDescriptionType;
    /**
     * Hotel code where event will be copied.
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    hotelId?: string;
    /**
     * Erorr/Warning code for not processing th event.
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    processingInfoCode?: string;
    /**
     * Flag to indicate the warning messages from the API
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    processingInfoType?: string;
    /**
     * Reason for not processing the event.
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    reason?: string;
    /**
     * Status of the processed event. e.g Completed, Not Processed.
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    status?: string;
}
/**
 * Check if a given object implements the CateringEventsProcessedInfoType interface.
 */
export declare function instanceOfCateringEventsProcessedInfoType(value: object): boolean;
export declare function CateringEventsProcessedInfoTypeFromJSON(json: any): CateringEventsProcessedInfoType;
export declare function CateringEventsProcessedInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringEventsProcessedInfoType;
export declare function CateringEventsProcessedInfoTypeToJSON(value?: CateringEventsProcessedInfoType | null): any;