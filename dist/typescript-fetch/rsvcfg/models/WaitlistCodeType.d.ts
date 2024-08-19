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
import type { TranslationTextType2000 } from './TranslationTextType2000';
/**
 * Contains Common Master configuration detail.
 * @export
 * @interface WaitlistCodeType
 */
export interface WaitlistCodeType {
    /**
     * Common Master unique code.
     * @type {string}
     * @memberof WaitlistCodeType
     */
    code?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof WaitlistCodeType
     */
    description?: TranslationTextType2000;
    /**
     * Common Master record sequence number.
     * @type {number}
     * @memberof WaitlistCodeType
     */
    displayOrder?: number;
}
/**
 * Check if a given object implements the WaitlistCodeType interface.
 */
export declare function instanceOfWaitlistCodeType(value: object): boolean;
export declare function WaitlistCodeTypeFromJSON(json: any): WaitlistCodeType;
export declare function WaitlistCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WaitlistCodeType;
export declare function WaitlistCodeTypeToJSON(value?: WaitlistCodeType | null): any;
