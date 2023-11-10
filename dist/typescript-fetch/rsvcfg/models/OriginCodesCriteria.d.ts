/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { OriginCodesType } from './OriginCodesType';
import type { WarningsType } from './WarningsType';
/**
 * Request object for creating Origin Codes.
 * @export
 * @interface OriginCodesCriteria
 */
export interface OriginCodesCriteria {
    /**
     *
     * @type {Links}
     * @memberof OriginCodesCriteria
     */
    links?: Links;
    /**
     *
     * @type {OriginCodesType}
     * @memberof OriginCodesCriteria
     */
    originCodes?: OriginCodesType;
    /**
     *
     * @type {WarningsType}
     * @memberof OriginCodesCriteria
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the OriginCodesCriteria interface.
 */
export declare function instanceOfOriginCodesCriteria(value: object): boolean;
export declare function OriginCodesCriteriaFromJSON(json: any): OriginCodesCriteria;
export declare function OriginCodesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): OriginCodesCriteria;
export declare function OriginCodesCriteriaToJSON(value?: OriginCodesCriteria | null): any;
