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
import type { CateringEventsBulkUpdateType } from './CateringEventsBulkUpdateType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object that will Change a list of events.
 * @export
 * @interface CateringEventsBulkUpdate
 */
export interface CateringEventsBulkUpdate {
    /**
     *
     * @type {CateringEventsBulkUpdateType}
     * @memberof CateringEventsBulkUpdate
     */
    cateringEventsBulkUpdate?: CateringEventsBulkUpdateType;
    /**
     *
     * @type {Links}
     * @memberof CateringEventsBulkUpdate
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof CateringEventsBulkUpdate
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CateringEventsBulkUpdate interface.
 */
export declare function instanceOfCateringEventsBulkUpdate(value: object): boolean;
export declare function CateringEventsBulkUpdateFromJSON(json: any): CateringEventsBulkUpdate;
export declare function CateringEventsBulkUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringEventsBulkUpdate;
export declare function CateringEventsBulkUpdateToJSON(value?: CateringEventsBulkUpdate | null): any;
