/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelRateCategoryType } from './HotelRateCategoryType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for Creating a new Rate Category for a property.
 * @export
 * @interface RateCategoryCriteria
 */
export interface RateCategoryCriteria {
    /**
     *
     * @type {HotelRateCategoryType}
     * @memberof RateCategoryCriteria
     */
    hotelRateCategory?: HotelRateCategoryType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RateCategoryCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RateCategoryCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RateCategoryCriteria interface.
 */
export declare function instanceOfRateCategoryCriteria(value: object): boolean;
export declare function RateCategoryCriteriaFromJSON(json: any): RateCategoryCriteria;
export declare function RateCategoryCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateCategoryCriteria;
export declare function RateCategoryCriteriaToJSON(value?: RateCategoryCriteria | null): any;
