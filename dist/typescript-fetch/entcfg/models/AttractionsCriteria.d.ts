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
import type { AttractionCodeType } from './AttractionCodeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for creating a new group of attractions.
 * @export
 * @interface AttractionsCriteria
 */
export interface AttractionsCriteria {
    /**
     * Collection of hotel level alert codes with attached alert types.
     * @type {Array<AttractionCodeType>}
     * @memberof AttractionsCriteria
     */
    attractions?: Array<AttractionCodeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof AttractionsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AttractionsCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the AttractionsCriteria interface.
 */
export declare function instanceOfAttractionsCriteria(value: object): boolean;
export declare function AttractionsCriteriaFromJSON(json: any): AttractionsCriteria;
export declare function AttractionsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttractionsCriteria;
export declare function AttractionsCriteriaToJSON(value?: AttractionsCriteria | null): any;