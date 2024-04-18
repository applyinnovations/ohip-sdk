/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AnonymizationStatusType } from './AnonymizationStatusType';
/**
 * Provides information about guest's anonymization status.
 * @export
 * @interface AnonymizationType
 */
export interface AnonymizationType {
    /**
     * Date and Time when the guest was anonymized.
     * @type {string}
     * @memberof AnonymizationType
     */
    anonymizationDate?: string;
    /**
     *
     * @type {AnonymizationStatusType}
     * @memberof AnonymizationType
     */
    anonymizationStatus?: AnonymizationStatusType;
}
/**
 * Check if a given object implements the AnonymizationType interface.
 */
export declare function instanceOfAnonymizationType(value: object): boolean;
export declare function AnonymizationTypeFromJSON(json: any): AnonymizationType;
export declare function AnonymizationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnonymizationType;
export declare function AnonymizationTypeToJSON(value?: AnonymizationType | null): any;