/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { ParameterType } from './ParameterType';
import type { UserSessionDefaultsType } from './UserSessionDefaultsType';
/**
 *
 * @export
 * @interface UserSessionInfoType
 */
export interface UserSessionInfoType {
    /**
     *
     * @type {string}
     * @memberof UserSessionInfoType
     */
    businessDate?: string;
    /**
     *
     * @type {string}
     * @memberof UserSessionInfoType
     */
    cROCountryCode?: string;
    /**
     *
     * @type {string}
     * @memberof UserSessionInfoType
     */
    chain?: string;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof UserSessionInfoType
     */
    cro?: CodeDescriptionType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof UserSessionInfoType
     */
    hotel?: CodeDescriptionType;
    /**
     * Collection of generic Name-Value-Pair parameters.
     * @type {Array<ParameterType>}
     * @memberof UserSessionInfoType
     */
    parameters?: Array<ParameterType>;
    /**
     *
     * @type {string}
     * @memberof UserSessionInfoType
     */
    runningApp?: string;
    /**
     *
     * @type {UserSessionDefaultsType}
     * @memberof UserSessionInfoType
     */
    sessionDefaults?: UserSessionDefaultsType;
    /**
     *
     * @type {boolean}
     * @memberof UserSessionInfoType
     */
    shareProfiles?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserSessionInfoType
     */
    systemDate?: string;
    /**
     *
     * @type {string}
     * @memberof UserSessionInfoType
     */
    terminal?: string;
}
/**
 * Check if a given object implements the UserSessionInfoType interface.
 */
export declare function instanceOfUserSessionInfoType(value: object): boolean;
export declare function UserSessionInfoTypeFromJSON(json: any): UserSessionInfoType;
export declare function UserSessionInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSessionInfoType;
export declare function UserSessionInfoTypeToJSON(value?: UserSessionInfoType | null): any;
