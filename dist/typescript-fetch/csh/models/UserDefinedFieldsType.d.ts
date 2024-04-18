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
import type { CharacterUDFType } from './CharacterUDFType';
import type { DateUDFType } from './DateUDFType';
import type { NumericUDFType } from './NumericUDFType';
/**
 * A common type used to hold user defined fields(UDFs). This type should be used to handle UDFs on RReservation, Profiles, etc.
 * @export
 * @interface UserDefinedFieldsType
 */
export interface UserDefinedFieldsType {
    /**
     * Used to hold collection of user defined fields of Character/String Type.
     * @type {Array<CharacterUDFType>}
     * @memberof UserDefinedFieldsType
     */
    characterUDFs?: Array<CharacterUDFType>;
    /**
     * Used to hold collection of user defined fields of Date Type.
     * @type {Array<DateUDFType>}
     * @memberof UserDefinedFieldsType
     */
    dateUDFs?: Array<DateUDFType>;
    /**
     * Used to hold collection of user defined fields of Numeric Type.
     * @type {Array<NumericUDFType>}
     * @memberof UserDefinedFieldsType
     */
    numericUDFs?: Array<NumericUDFType>;
}
/**
 * Check if a given object implements the UserDefinedFieldsType interface.
 */
export declare function instanceOfUserDefinedFieldsType(value: object): boolean;
export declare function UserDefinedFieldsTypeFromJSON(json: any): UserDefinedFieldsType;
export declare function UserDefinedFieldsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDefinedFieldsType;
export declare function UserDefinedFieldsTypeToJSON(value?: UserDefinedFieldsType | null): any;