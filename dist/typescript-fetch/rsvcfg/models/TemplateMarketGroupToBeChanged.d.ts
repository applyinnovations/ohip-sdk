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
import type { TemplateMarketGroupType } from './TemplateMarketGroupType';
import type { WarningsType } from './WarningsType';
/**
 * Request object that holds the details of template Market Group to be changed.
 * @export
 * @interface TemplateMarketGroupToBeChanged
 */
export interface TemplateMarketGroupToBeChanged {
    /**
     *
     * @type {Links}
     * @memberof TemplateMarketGroupToBeChanged
     */
    links?: Links;
    /**
     *
     * @type {TemplateMarketGroupType}
     * @memberof TemplateMarketGroupToBeChanged
     */
    templateMarketGroup?: TemplateMarketGroupType;
    /**
     *
     * @type {WarningsType}
     * @memberof TemplateMarketGroupToBeChanged
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the TemplateMarketGroupToBeChanged interface.
 */
export declare function instanceOfTemplateMarketGroupToBeChanged(value: object): boolean;
export declare function TemplateMarketGroupToBeChangedFromJSON(json: any): TemplateMarketGroupToBeChanged;
export declare function TemplateMarketGroupToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateMarketGroupToBeChanged;
export declare function TemplateMarketGroupToBeChangedToJSON(value?: TemplateMarketGroupToBeChanged | null): any;
