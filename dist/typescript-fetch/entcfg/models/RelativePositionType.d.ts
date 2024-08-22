/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Defines the position of an entity in relation to another entity (e.g. from an airport to a hotel, the relationship is dependent on use).
 * @export
 * @interface RelativePositionType
 */
export interface RelativePositionType {
    /**
     * Defines the distance between two points.
     * @type {number}
     * @memberof RelativePositionType
     */
    distance?: number;
    /**
     * The unit of measure in a code format.
     * @type {string}
     * @memberof RelativePositionType
     */
    distanceType?: string;
    /**
     * The driving time in a free text format.
     * @type {string}
     * @memberof RelativePositionType
     */
    drivingTime?: string;
}
/**
 * Check if a given object implements the RelativePositionType interface.
 */
export declare function instanceOfRelativePositionType(value: object): boolean;
export declare function RelativePositionTypeFromJSON(json: any): RelativePositionType;
export declare function RelativePositionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelativePositionType;
export declare function RelativePositionTypeToJSON(value?: RelativePositionType | null): any;
