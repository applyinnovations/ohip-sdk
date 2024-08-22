/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ARAccountType } from './ARAccountType';
import type { CompAuthorizerHeaderType } from './CompAuthorizerHeaderType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Information related to comp authorizers.
 * @export
 * @interface CompAuthorizerType
 */
export interface CompAuthorizerType {
    /**
     *
     * @type {ARAccountType}
     * @memberof CompAuthorizerType
     */
    aRAccount?: ARAccountType;
    /**
     * Name for the authorizer.
     * @type {string}
     * @memberof CompAuthorizerType
     */
    authorizer?: string;
    /**
     * Display name for the authorizer.
     * @type {string}
     * @memberof CompAuthorizerType
     */
    authorizerDisplayName?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CompAuthorizerType
     */
    authorizerId?: UniqueIDType;
    /**
     * Comp authorizer details information.
     * @type {Array<CompAuthorizerHeaderType>}
     * @memberof CompAuthorizerType
     */
    compAuthorizerHeaders?: Array<CompAuthorizerHeaderType>;
    /**
     * First name for the authorizer.
     * @type {string}
     * @memberof CompAuthorizerType
     */
    firstName?: string;
    /**
     * Property code.
     * @type {string}
     * @memberof CompAuthorizerType
     */
    hotelId?: string;
    /**
     * Indicator that tells whether the authorizer is active or not.
     * @type {boolean}
     * @memberof CompAuthorizerType
     */
    inactive?: boolean;
    /**
     * Last name for the authorizer.
     * @type {string}
     * @memberof CompAuthorizerType
     */
    lastName?: string;
    /**
     * Full name of the authorizer.
     * @type {string}
     * @memberof CompAuthorizerType
     */
    name?: string;
    /**
     * Indicator that tells whether to override warnings when deactivating authorizer.
     * @type {boolean}
     * @memberof CompAuthorizerType
     */
    overrideWarning?: boolean;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CompAuthorizerType
     */
    profileId?: UniqueIDType;
    /**
     * Credit limit associated for the authorizer.
     * @type {number}
     * @memberof CompAuthorizerType
     */
    totalCreditLimit?: number;
}
/**
 * Check if a given object implements the CompAuthorizerType interface.
 */
export declare function instanceOfCompAuthorizerType(value: object): boolean;
export declare function CompAuthorizerTypeFromJSON(json: any): CompAuthorizerType;
export declare function CompAuthorizerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompAuthorizerType;
export declare function CompAuthorizerTypeToJSON(value?: CompAuthorizerType | null): any;
