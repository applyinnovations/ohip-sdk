/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { TemplateAirportsType } from './TemplateAirportsType';
import type { WarningsType } from './WarningsType';
/**
 * Request object for creating new template airports.
 * @export
 * @interface TemplateAirportsCriteria
 */
export interface TemplateAirportsCriteria {
    /**
     *
     * @type {Links}
     * @memberof TemplateAirportsCriteria
     */
    links?: Links;
    /**
     *
     * @type {TemplateAirportsType}
     * @memberof TemplateAirportsCriteria
     */
    templateAirports?: TemplateAirportsType;
    /**
     *
     * @type {WarningsType}
     * @memberof TemplateAirportsCriteria
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the TemplateAirportsCriteria interface.
 */
export declare function instanceOfTemplateAirportsCriteria(value: object): boolean;
export declare function TemplateAirportsCriteriaFromJSON(json: any): TemplateAirportsCriteria;
export declare function TemplateAirportsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateAirportsCriteria;
export declare function TemplateAirportsCriteriaToJSON(value?: TemplateAirportsCriteria | null): any;