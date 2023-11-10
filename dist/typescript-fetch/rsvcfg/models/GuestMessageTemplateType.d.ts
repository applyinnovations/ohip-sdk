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
import type { TranslationTextType2000 } from './TranslationTextType2000';
/**
 * A template for guest message.
 * @export
 * @interface GuestMessageTemplateType
 */
export interface GuestMessageTemplateType {
    /**
     * Code for the guest message type
     * @type {string}
     * @memberof GuestMessageTemplateType
     */
    code?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof GuestMessageTemplateType
     */
    description?: TranslationTextType2000;
    /**
     * Sequence for guest message template.
     * @type {number}
     * @memberof GuestMessageTemplateType
     */
    displaySequence?: number;
}
/**
 * Check if a given object implements the GuestMessageTemplateType interface.
 */
export declare function instanceOfGuestMessageTemplateType(value: object): boolean;
export declare function GuestMessageTemplateTypeFromJSON(json: any): GuestMessageTemplateType;
export declare function GuestMessageTemplateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestMessageTemplateType;
export declare function GuestMessageTemplateTypeToJSON(value?: GuestMessageTemplateType | null): any;
