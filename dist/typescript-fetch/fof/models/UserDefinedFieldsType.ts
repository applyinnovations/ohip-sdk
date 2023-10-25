/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CharacterUDFType } from './CharacterUDFType';
import {
    CharacterUDFTypeFromJSON,
    CharacterUDFTypeFromJSONTyped,
    CharacterUDFTypeToJSON,
} from './CharacterUDFType';
import type { DateUDFType } from './DateUDFType';
import {
    DateUDFTypeFromJSON,
    DateUDFTypeFromJSONTyped,
    DateUDFTypeToJSON,
} from './DateUDFType';
import type { NumericUDFType } from './NumericUDFType';
import {
    NumericUDFTypeFromJSON,
    NumericUDFTypeFromJSONTyped,
    NumericUDFTypeToJSON,
} from './NumericUDFType';

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
export function instanceOfUserDefinedFieldsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserDefinedFieldsTypeFromJSON(json: any): UserDefinedFieldsType {
    return UserDefinedFieldsTypeFromJSONTyped(json, false);
}

export function UserDefinedFieldsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDefinedFieldsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'characterUDFs': !exists(json, 'characterUDFs') ? undefined : ((json['characterUDFs'] as Array<any>).map(CharacterUDFTypeFromJSON)),
        'dateUDFs': !exists(json, 'dateUDFs') ? undefined : ((json['dateUDFs'] as Array<any>).map(DateUDFTypeFromJSON)),
        'numericUDFs': !exists(json, 'numericUDFs') ? undefined : ((json['numericUDFs'] as Array<any>).map(NumericUDFTypeFromJSON)),
    };
}

export function UserDefinedFieldsTypeToJSON(value?: UserDefinedFieldsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'characterUDFs': value.characterUDFs === undefined ? undefined : ((value.characterUDFs as Array<any>).map(CharacterUDFTypeToJSON)),
        'dateUDFs': value.dateUDFs === undefined ? undefined : ((value.dateUDFs as Array<any>).map(DateUDFTypeToJSON)),
        'numericUDFs': value.numericUDFs === undefined ? undefined : ((value.numericUDFs as Array<any>).map(NumericUDFTypeToJSON)),
    };
}

