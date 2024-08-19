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
import type { UniqueIDType } from './UniqueIDType';
/**
 * Authorizer Information
 * @export
 * @interface AuthorizerInfoType
 */
export interface AuthorizerInfoType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof AuthorizerInfoType
     */
    authorizerId?: UniqueIDType;
    /**
     * Application user name of the authorizer
     * @type {string}
     * @memberof AuthorizerInfoType
     */
    authorizerUserName?: string;
    /**
     * Full name of the authorizer.
     * @type {string}
     * @memberof AuthorizerInfoType
     */
    authorizerName?: string;
    /**
     * Rate code of the authorizer.
     * @type {string}
     * @memberof AuthorizerInfoType
     */
    authorizerRateCode?: string;
    /**
     * Indicates whether user has the choice to have reservation inherit rate code from the authorizer.
     * @type {boolean}
     * @memberof AuthorizerInfoType
     */
    inheritAuthorizerRateCode?: boolean;
}
/**
 * Check if a given object implements the AuthorizerInfoType interface.
 */
export declare function instanceOfAuthorizerInfoType(value: object): boolean;
export declare function AuthorizerInfoTypeFromJSON(json: any): AuthorizerInfoType;
export declare function AuthorizerInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizerInfoType;
export declare function AuthorizerInfoTypeToJSON(value?: AuthorizerInfoType | null): any;
