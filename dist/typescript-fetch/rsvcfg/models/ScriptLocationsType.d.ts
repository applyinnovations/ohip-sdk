/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ScriptLocationType } from './ScriptLocationType';
/**
 * Collection of locations where a Script is to be used.
 * @export
 * @interface ScriptLocationsType
 */
export interface ScriptLocationsType {
    /**
     * Location where a Script is to be used.
     * @type {Array<ScriptLocationType>}
     * @memberof ScriptLocationsType
     */
    cROs?: Array<ScriptLocationType>;
    /**
     * Location where a Script is to be used..
     * @type {Array<ScriptLocationType>}
     * @memberof ScriptLocationsType
     */
    chains?: Array<ScriptLocationType>;
    /**
     * Location where a Script is to be used.
     * @type {Array<ScriptLocationType>}
     * @memberof ScriptLocationsType
     */
    hotels?: Array<ScriptLocationType>;
}
/**
 * Check if a given object implements the ScriptLocationsType interface.
 */
export declare function instanceOfScriptLocationsType(value: object): boolean;
export declare function ScriptLocationsTypeFromJSON(json: any): ScriptLocationsType;
export declare function ScriptLocationsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScriptLocationsType;
export declare function ScriptLocationsTypeToJSON(value?: ScriptLocationsType | null): any;