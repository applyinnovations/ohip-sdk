/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { PropertyMappingType } from './PropertyMappingType';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching external system properties.
 * @export
 * @interface PropertiesMapping
 */
export interface PropertiesMapping {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof PropertiesMapping
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof PropertiesMapping
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof PropertiesMapping
     */
    limit?: number;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof PropertiesMapping
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof PropertiesMapping
     */
    offset?: number;
    /**
     * Information about an external property mapping.
     * @type {Array<PropertyMappingType>}
     * @memberof PropertiesMapping
     */
    propertiesMapping?: Array<PropertyMappingType>;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof PropertiesMapping
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof PropertiesMapping
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PropertiesMapping
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the PropertiesMapping interface.
 */
export declare function instanceOfPropertiesMapping(value: object): boolean;
export declare function PropertiesMappingFromJSON(json: any): PropertiesMapping;
export declare function PropertiesMappingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertiesMapping;
export declare function PropertiesMappingToJSON(value?: PropertiesMapping | null): any;