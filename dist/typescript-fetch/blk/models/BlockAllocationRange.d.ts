/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockAllocationRangeType } from './BlockAllocationRangeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request for updating block allocation for a range of dates.
 * @export
 * @interface BlockAllocationRange
 */
export interface BlockAllocationRange {
    /**
     *
     * @type {BlockAllocationRangeType}
     * @memberof BlockAllocationRange
     */
    blockAllocationRange?: BlockAllocationRangeType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BlockAllocationRange
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockAllocationRange
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BlockAllocationRange interface.
 */
export declare function instanceOfBlockAllocationRange(value: object): boolean;
export declare function BlockAllocationRangeFromJSON(json: any): BlockAllocationRange;
export declare function BlockAllocationRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockAllocationRange;
export declare function BlockAllocationRangeToJSON(value?: BlockAllocationRange | null): any;
