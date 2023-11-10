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
import type { EventMenuBasicInfoType } from './EventMenuBasicInfoType';
import type { EventMenuItemsType } from './EventMenuItemsType';
import type { EventMenuRevenuesType } from './EventMenuRevenuesType';
/**
 * Information about event menu.
 * @export
 * @interface EventMenuType
 */
export interface EventMenuType {
    /**
     *
     * @type {EventMenuBasicInfoType}
     * @memberof EventMenuType
     */
    basicInfo?: EventMenuBasicInfoType;
    /**
     * Hotel code of the Resource.
     * @type {string}
     * @memberof EventMenuType
     */
    hotelId?: string;
    /**
     *
     * @type {EventMenuItemsType}
     * @memberof EventMenuType
     */
    menuItems?: EventMenuItemsType;
    /**
     *
     * @type {EventMenuRevenuesType}
     * @memberof EventMenuType
     */
    revenues?: EventMenuRevenuesType;
}
/**
 * Check if a given object implements the EventMenuType interface.
 */
export declare function instanceOfEventMenuType(value: object): boolean;
export declare function EventMenuTypeFromJSON(json: any): EventMenuType;
export declare function EventMenuTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventMenuType;
export declare function EventMenuTypeToJSON(value?: EventMenuType | null): any;
