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
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { WebUserHistoryType } from './WebUserHistoryType';
/**
 * Web User Account of the guest.
 * @export
 * @interface WebUserAccountType
 */
export interface WebUserAccountType {
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof WebUserAccountType
     */
    securityQuestion?: CodeDescriptionType;
    /**
     * Answer to the Security Question.
     * @type {string}
     * @memberof WebUserAccountType
     */
    securityAnswer?: string;
    /**
     * Comments.
     * @type {string}
     * @memberof WebUserAccountType
     */
    comments?: string;
    /**
     *
     * @type {WebUserHistoryType}
     * @memberof WebUserAccountType
     */
    history?: WebUserHistoryType;
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
     * A flag which determines if the password is auto generated.
     * @type {boolean}
     * @memberof WebUserAccountType
     */
    autoGeneratePassword?: boolean;
    /**
     * Login Name of the guest.
     * @type {string}
     * @memberof WebUserAccountType
     */
    loginName?: string;
    /**
     * Domain code.
     * @type {string}
     * @memberof WebUserAccountType
     */
    domainCode?: string;
    /**
     * Boolean flag that indicates whether the web account is locked or not.
     * @type {boolean}
     * @memberof WebUserAccountType
     */
    locked?: boolean;
    /**
     * Boolean flag that indicates whether the web account is inactive or not.
     * @type {boolean}
     * @memberof WebUserAccountType
     */
    inactive?: boolean;
}
/**
 * Check if a given object implements the WebUserAccountType interface.
 */
export declare function instanceOfWebUserAccountType(value: object): boolean;
export declare function WebUserAccountTypeFromJSON(json: any): WebUserAccountType;
export declare function WebUserAccountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebUserAccountType;
export declare function WebUserAccountTypeToJSON(value?: WebUserAccountType | null): any;