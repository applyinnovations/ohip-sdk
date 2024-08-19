/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CityPostalCodeType } from './CityPostalCodeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for creating new city and postal codes.
 * @export
 * @interface CityPostalCodesCriteria
 */
export interface CityPostalCodesCriteria {
    /**
     * Lists of City and Postal Codes.
     * @type {Array<CityPostalCodeType>}
     * @memberof CityPostalCodesCriteria
     */
    cityPostalCodes?: Array<CityPostalCodeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CityPostalCodesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CityPostalCodesCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CityPostalCodesCriteria interface.
 */
export declare function instanceOfCityPostalCodesCriteria(value: object): boolean;
export declare function CityPostalCodesCriteriaFromJSON(json: any): CityPostalCodesCriteria;
export declare function CityPostalCodesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CityPostalCodesCriteria;
export declare function CityPostalCodesCriteriaToJSON(value?: CityPostalCodesCriteria | null): any;
