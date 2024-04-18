/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HSKStatType } from './HSKStatType';
/**
 * Base statistic set holder which defines the span of the statistical data.
 * @export
 * @interface HSKStatSetType
 */
export interface HSKStatSetType {
    /**
     *
     * @type {string}
     * @memberof HSKStatSetType
     */
    code?: string;
    /**
     *
     * @type {string}
     * @memberof HSKStatSetType
     */
    end?: string;
    /**
     *
     * @type {string}
     * @memberof HSKStatSetType
     */
    start?: string;
    /**
     *
     * @type {Array<HSKStatType>}
     * @memberof HSKStatSetType
     */
    stat?: Array<HSKStatType>;
}
/**
 * Check if a given object implements the HSKStatSetType interface.
 */
export declare function instanceOfHSKStatSetType(value: object): boolean;
export declare function HSKStatSetTypeFromJSON(json: any): HSKStatSetType;
export declare function HSKStatSetTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HSKStatSetType;
export declare function HSKStatSetTypeToJSON(value?: HSKStatSetType | null): any;