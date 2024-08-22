/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
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
     * Used to hold collection of user defined fields of Numeric Type.
     * @type {Array<NumericUDFType>}
     * @memberof UserDefinedFieldsType
     */
    numericUDFs?: Array<NumericUDFType>;
    /**
     * Used to hold collection of user defined fields of Date Type.
     * @type {Array<DateUDFType>}
     * @memberof UserDefinedFieldsType
     */
    dateUDFs?: Array<DateUDFType>;
}
/**
 * Check if a given object implements the UserDefinedFieldsType interface.
 */
export declare function instanceOfUserDefinedFieldsType(value: object): boolean;
export declare function UserDefinedFieldsTypeFromJSON(json: any): UserDefinedFieldsType;
export declare function UserDefinedFieldsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDefinedFieldsType;
export declare function UserDefinedFieldsTypeToJSON(value?: UserDefinedFieldsType | null): any;
