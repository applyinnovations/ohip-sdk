/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Used to hold user defined field of Numeric Type. It is highly recommended to use UDFN01, UDFN02,...UDFN40 (Total 40) as Numeric UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
 * @export
 * @interface NumericUDFType
 */
export interface NumericUDFType {
    /**
     * Label of user defined field used by vendors or customers.
     * @type {string}
     * @memberof NumericUDFType
     */
    alternateName?: string;
    /**
     * Name of user defined field.
     * @type {string}
     * @memberof NumericUDFType
     */
    name?: string;
    /**
     * Value of user defined field.
     * @type {number}
     * @memberof NumericUDFType
     */
    value?: number;
}
/**
 * Check if a given object implements the NumericUDFType interface.
 */
export declare function instanceOfNumericUDFType(value: object): boolean;
export declare function NumericUDFTypeFromJSON(json: any): NumericUDFType;
export declare function NumericUDFTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumericUDFType;
export declare function NumericUDFTypeToJSON(value?: NumericUDFType | null): any;
