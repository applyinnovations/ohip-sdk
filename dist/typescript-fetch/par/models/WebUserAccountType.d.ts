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
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { WebUserHistoryType } from './WebUserHistoryType';
/**
 * Web User Account of the guest.
 * @export
 * @interface WebUserAccountType
 */
export interface WebUserAccountType {
    /**
     * A flag which determines if the password is auto generated.
     * @type {boolean}
     * @memberof WebUserAccountType
     */
    autoGeneratePassword?: boolean;
    /**
     * Comments.
     * @type {string}
     * @memberof WebUserAccountType
     */
    comments?: string;
    /**
     * Domain code.
     * @type {string}
     * @memberof WebUserAccountType
     */
    domainCode?: string;
    /**
     *
     * @type {WebUserHistoryType}
     * @memberof WebUserAccountType
     */
    history?: WebUserHistoryType;
    /**
     * Boolean flag that indicates whether the web account is inactive or not.
     * @type {boolean}
     * @memberof WebUserAccountType
     */
    inactive?: boolean;
    /**
     * Boolean flag that indicates whether the web account is locked or not.
     * @type {boolean}
     * @memberof WebUserAccountType
     */
    locked?: boolean;
    /**
     * Login Name of the guest.
     * @type {string}
     * @memberof WebUserAccountType
     */
    loginName?: string;
    /**
     * New Login Name of the guest.
     * @type {string}
     * @memberof WebUserAccountType
     */
    newLoginName?: string;
    /**
     * Login Password.
     * @type {string}
     * @memberof WebUserAccountType
     */
    newPassword?: string;
    /**
     * Answer to the Security Question.
     * @type {string}
     * @memberof WebUserAccountType
     */
    securityAnswer?: string;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof WebUserAccountType
     */
    securityQuestion?: CodeDescriptionType;
}
/**
 * Check if a given object implements the WebUserAccountType interface.
 */
export declare function instanceOfWebUserAccountType(value: object): boolean;
export declare function WebUserAccountTypeFromJSON(json: any): WebUserAccountType;
export declare function WebUserAccountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebUserAccountType;
export declare function WebUserAccountTypeToJSON(value?: WebUserAccountType | null): any;
