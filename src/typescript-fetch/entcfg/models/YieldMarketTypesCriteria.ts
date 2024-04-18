/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for creating new Yield Market Types.
 * @export
 * @interface YieldMarketTypesCriteria
 */
export interface YieldMarketTypesCriteria {
    /**
     * Yield Market Code.
     * @type {string}
     * @memberof YieldMarketTypesCriteria
     */
    code?: string;
    /**
     * Hotel code for which the yield market type belong to.
     * @type {string}
     * @memberof YieldMarketTypesCriteria
     */
    hotelId?: string;
    /**
     * Description for the yield market code.
     * @type {string}
     * @memberof YieldMarketTypesCriteria
     */
    description?: string;
    /**
     * If the yield market code does not return a result, this alternative yield market code is used instead.
     * @type {string}
     * @memberof YieldMarketTypesCriteria
     */
    alternativeCode?: string;
    /**
     * Indicates the default yield market type.
     * @type {boolean}
     * @memberof YieldMarketTypesCriteria
     */
    _default?: boolean;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof YieldMarketTypesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof YieldMarketTypesCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the YieldMarketTypesCriteria interface.
 */
export function instanceOfYieldMarketTypesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function YieldMarketTypesCriteriaFromJSON(json: any): YieldMarketTypesCriteria {
    return YieldMarketTypesCriteriaFromJSONTyped(json, false);
}

export function YieldMarketTypesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): YieldMarketTypesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'alternativeCode': !exists(json, 'alternativeCode') ? undefined : json['alternativeCode'],
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function YieldMarketTypesCriteriaToJSON(value?: YieldMarketTypesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'hotelId': value.hotelId,
        'description': value.description,
        'alternativeCode': value.alternativeCode,
        'default': value._default,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
