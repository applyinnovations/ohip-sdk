/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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
     * Application user name of the authorizer
     * @type {string}
     * @memberof AuthorizerInfoType
     */
    authorizerUserName?: string;
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
