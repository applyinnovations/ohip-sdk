/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CustomChargeExemptionDateType } from './CustomChargeExemptionDateType';
/**
 * Contains List of Custom Charge Exemption information for a day.
 * @export
 * @interface CustomChargeExemptionDatesType
 */
export interface CustomChargeExemptionDatesType extends Array<CustomChargeExemptionDateType> {
}
/**
 * Check if a given object implements the CustomChargeExemptionDatesType interface.
 */
export declare function instanceOfCustomChargeExemptionDatesType(value: object): boolean;
export declare function CustomChargeExemptionDatesTypeFromJSON(json: any): CustomChargeExemptionDatesType;
export declare function CustomChargeExemptionDatesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomChargeExemptionDatesType;
export declare function CustomChargeExemptionDatesTypeToJSON(value?: CustomChargeExemptionDatesType | null): any;