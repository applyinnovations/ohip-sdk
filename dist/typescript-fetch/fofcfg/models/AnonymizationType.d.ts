/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
