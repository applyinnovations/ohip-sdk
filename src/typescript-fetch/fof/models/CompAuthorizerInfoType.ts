/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Authorizer Information
 * @export
 * @interface CompAuthorizerInfoType
 */
export interface CompAuthorizerInfoType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof CompAuthorizerInfoType
     */
    authorizerId?: UniqueIDType;
    /**
     * Full name of the authorizer.
     * @type {string}
     * @memberof CompAuthorizerInfoType
     */
    authorizerName?: string;
    /**
     * Application user name of the authorizer
     * @type {string}
     * @memberof CompAuthorizerInfoType
     */
    authorizerUserName?: string;
}

/**
 * Check if a given object implements the CompAuthorizerInfoType interface.
 */
export function instanceOfCompAuthorizerInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompAuthorizerInfoTypeFromJSON(json: any): CompAuthorizerInfoType {
    return CompAuthorizerInfoTypeFromJSONTyped(json, false);
}

export function CompAuthorizerInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompAuthorizerInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorizerId': !exists(json, 'authorizerId') ? undefined : UniqueIDTypeFromJSON(json['authorizerId']),
        'authorizerName': !exists(json, 'authorizerName') ? undefined : json['authorizerName'],
        'authorizerUserName': !exists(json, 'authorizerUserName') ? undefined : json['authorizerUserName'],
    };
}

export function CompAuthorizerInfoTypeToJSON(value?: CompAuthorizerInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authorizerId': UniqueIDTypeToJSON(value.authorizerId),
        'authorizerName': value.authorizerName,
        'authorizerUserName': value.authorizerUserName,
    };
}

