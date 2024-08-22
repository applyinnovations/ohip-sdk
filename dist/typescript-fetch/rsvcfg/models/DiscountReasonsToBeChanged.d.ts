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
import type { DiscountReasonType } from './DiscountReasonType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for changing Discount Reasons.
 * @export
 * @interface DiscountReasonsToBeChanged
 */
export interface DiscountReasonsToBeChanged {
    /**
     * List of Discount Reasons.
     * @type {Array<DiscountReasonType>}
     * @memberof DiscountReasonsToBeChanged
     */
    discountReasons?: Array<DiscountReasonType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof DiscountReasonsToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof DiscountReasonsToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the DiscountReasonsToBeChanged interface.
 */
export declare function instanceOfDiscountReasonsToBeChanged(value: object): boolean;
export declare function DiscountReasonsToBeChangedFromJSON(json: any): DiscountReasonsToBeChanged;
export declare function DiscountReasonsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscountReasonsToBeChanged;
export declare function DiscountReasonsToBeChangedToJSON(value?: DiscountReasonsToBeChanged | null): any;
