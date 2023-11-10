/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { RateSeasonsType } from './RateSeasonsType';
import type { WarningsType } from './WarningsType';
/**
 * Request object for creating new rate seasons for a hotel.
 * @export
 * @interface RateSeasonsCriteria
 */
export interface RateSeasonsCriteria {
    /**
     *
     * @type {Links}
     * @memberof RateSeasonsCriteria
     */
    links?: Links;
    /**
     *
     * @type {RateSeasonsType}
     * @memberof RateSeasonsCriteria
     */
    rateSeasons?: RateSeasonsType;
    /**
     *
     * @type {WarningsType}
     * @memberof RateSeasonsCriteria
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the RateSeasonsCriteria interface.
 */
export declare function instanceOfRateSeasonsCriteria(value: object): boolean;
export declare function RateSeasonsCriteriaFromJSON(json: any): RateSeasonsCriteria;
export declare function RateSeasonsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateSeasonsCriteria;
export declare function RateSeasonsCriteriaToJSON(value?: RateSeasonsCriteria | null): any;
