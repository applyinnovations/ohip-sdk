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
import type { AutoAttachElementsConfigType } from './AutoAttachElementsConfigType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Add configuration rule(s) that specify the elements to be automatically attached to the reservation.
 * @export
 * @interface AutoAttachElements
 */
export interface AutoAttachElements {
    /**
     *
     * @type {AutoAttachElementsConfigType}
     * @memberof AutoAttachElements
     */
    autoAttachRules?: AutoAttachElementsConfigType;
    /**
     *
     * @type {Links}
     * @memberof AutoAttachElements
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof AutoAttachElements
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the AutoAttachElements interface.
 */
export declare function instanceOfAutoAttachElements(value: object): boolean;
export declare function AutoAttachElementsFromJSON(json: any): AutoAttachElements;
export declare function AutoAttachElementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoAttachElements;
export declare function AutoAttachElementsToJSON(value?: AutoAttachElements | null): any;