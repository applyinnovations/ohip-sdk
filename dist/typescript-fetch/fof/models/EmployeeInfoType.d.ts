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
import type { AddressInfoType } from './AddressInfoType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { EmailInfoType } from './EmailInfoType';
import type { PersonNameType } from './PersonNameType';
import type { TelephoneInfoType } from './TelephoneInfoType';
import type { UniqueIDType } from './UniqueIDType';
/**
 *
 * @export
 * @interface EmployeeInfoType
 */
export interface EmployeeInfoType {
    /**
     *
     * @type {AddressInfoType}
     * @memberof EmployeeInfoType
     */
    addressInfo?: AddressInfoType;
    /**
     * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
     * @type {string}
     * @memberof EmployeeInfoType
     */
    birthDate?: string;
    /**
     * Indicates the date of birth as masked.
     * @type {string}
     * @memberof EmployeeInfoType
     */
    birthDateMasked?: string;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof EmployeeInfoType
     */
    department?: CodeDescriptionType;
    /**
     *
     * @type {EmailInfoType}
     * @memberof EmployeeInfoType
     */
    emailInfo?: EmailInfoType;
    /**
     * Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration.
     * @type {string}
     * @memberof EmployeeInfoType
     */
    gender?: string;
    /**
     *
     * @type {PersonNameType}
     * @memberof EmployeeInfoType
     */
    personName?: PersonNameType;
    /**
     *
     * @type {TelephoneInfoType}
     * @memberof EmployeeInfoType
     */
    phoneInfo?: TelephoneInfoType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof EmployeeInfoType
     */
    profileId?: UniqueIDType;
}
/**
 * Check if a given object implements the EmployeeInfoType interface.
 */
export declare function instanceOfEmployeeInfoType(value: object): boolean;
export declare function EmployeeInfoTypeFromJSON(json: any): EmployeeInfoType;
export declare function EmployeeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmployeeInfoType;
export declare function EmployeeInfoTypeToJSON(value?: EmployeeInfoType | null): any;
