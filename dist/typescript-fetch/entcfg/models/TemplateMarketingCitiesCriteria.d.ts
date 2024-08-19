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
import type { InstanceLink } from './InstanceLink';
import type { TemplateMarketingCityConfigType } from './TemplateMarketingCityConfigType';
import type { WarningType } from './WarningType';
/**
 * Request object for creating new template marketing cities.
 * @export
 * @interface TemplateMarketingCitiesCriteria
 */
export interface TemplateMarketingCitiesCriteria {
    /**
     * Template marketing city details.
     * @type {Array<TemplateMarketingCityConfigType>}
     * @memberof TemplateMarketingCitiesCriteria
     */
    templateMarketingCities?: Array<TemplateMarketingCityConfigType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TemplateMarketingCitiesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateMarketingCitiesCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TemplateMarketingCitiesCriteria interface.
 */
export declare function instanceOfTemplateMarketingCitiesCriteria(value: object): boolean;
export declare function TemplateMarketingCitiesCriteriaFromJSON(json: any): TemplateMarketingCitiesCriteria;
export declare function TemplateMarketingCitiesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateMarketingCitiesCriteria;
export declare function TemplateMarketingCitiesCriteriaToJSON(value?: TemplateMarketingCitiesCriteria | null): any;
