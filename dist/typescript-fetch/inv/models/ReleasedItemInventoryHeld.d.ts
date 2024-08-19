/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Response object for releasing item inventory hold.
 * @export
 * @interface ReleasedItemInventoryHeld
 */
export interface ReleasedItemInventoryHeld {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ReleasedItemInventoryHeld
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ReleasedItemInventoryHeld
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ReleasedItemInventoryHeld interface.
 */
export declare function instanceOfReleasedItemInventoryHeld(value: object): boolean;
export declare function ReleasedItemInventoryHeldFromJSON(json: any): ReleasedItemInventoryHeld;
export declare function ReleasedItemInventoryHeldFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReleasedItemInventoryHeld;
export declare function ReleasedItemInventoryHeldToJSON(value?: ReleasedItemInventoryHeld | null): any;
