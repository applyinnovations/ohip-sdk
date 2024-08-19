/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { CustomChargeExemptionDateType } from './CustomChargeExemptionDateType';
import type { CustomChargeQuantityType } from './CustomChargeQuantityType';
import type { ExcludedDateType } from './ExcludedDateType';
/**
 * Contains custom charges exemption information.
 * @export
 * @interface CustomChargeExemptionType
 */
export interface CustomChargeExemptionType {
    /**
     * Contains List of Custom Charge Exemption information for a day.
     * @type {Array<CustomChargeExemptionDateType>}
     * @memberof CustomChargeExemptionType
     */
    customChargeDates?: Array<CustomChargeExemptionDateType>;
    /**
     *
     * @type {CustomChargeQuantityType}
     * @memberof CustomChargeExemptionType
     */
    customChargeQuantity?: CustomChargeQuantityType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof CustomChargeExemptionType
     */
    customChargesExemption?: CodeDescriptionType;
    /**
     * Contains list of dates which are valid for custom charge exemptions.
     * @type {Array<ExcludedDateType>}
     * @memberof CustomChargeExemptionType
     */
    excludedDates?: Array<ExcludedDateType>;
    /**
     * Exemption Percentage
     * @type {number}
     * @memberof CustomChargeExemptionType
     */
    percentage?: number;
    /**
     * Flag specifying if custom charge exemptions is property level or not.
     * @type {boolean}
     * @memberof CustomChargeExemptionType
     */
    propertyExemption?: boolean;
}
/**
 * Check if a given object implements the CustomChargeExemptionType interface.
 */
export declare function instanceOfCustomChargeExemptionType(value: object): boolean;
export declare function CustomChargeExemptionTypeFromJSON(json: any): CustomChargeExemptionType;
export declare function CustomChargeExemptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomChargeExemptionType;
export declare function CustomChargeExemptionTypeToJSON(value?: CustomChargeExemptionType | null): any;
