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
import type { InstanceLink } from './InstanceLink';
import type { TemplateTurnAwayCodeType } from './TemplateTurnAwayCodeType';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching template turnaway codes.
 * @export
 * @interface TemplateTurnAwayCodes
 */
export interface TemplateTurnAwayCodes {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TemplateTurnAwayCodes
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of template turnaway codes
     * @type {Array<TemplateTurnAwayCodeType>}
     * @memberof TemplateTurnAwayCodes
     */
    turnAwayCodes?: Array<TemplateTurnAwayCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateTurnAwayCodes
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TemplateTurnAwayCodes interface.
 */
export declare function instanceOfTemplateTurnAwayCodes(value: object): boolean;
export declare function TemplateTurnAwayCodesFromJSON(json: any): TemplateTurnAwayCodes;
export declare function TemplateTurnAwayCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateTurnAwayCodes;
export declare function TemplateTurnAwayCodesToJSON(value?: TemplateTurnAwayCodes | null): any;