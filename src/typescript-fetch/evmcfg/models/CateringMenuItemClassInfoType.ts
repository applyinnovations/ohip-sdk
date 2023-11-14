/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeListType } from './CodeListType';
import {
    CodeListTypeFromJSON,
    CodeListTypeFromJSONTyped,
    CodeListTypeToJSON,
} from './CodeListType';
import type { MenuTypeType } from './MenuTypeType';
import {
    MenuTypeTypeFromJSON,
    MenuTypeTypeFromJSONTyped,
    MenuTypeTypeToJSON,
} from './MenuTypeType';

/**
 * 
 * @export
 * @interface CateringMenuItemClassInfoType
 */
export interface CateringMenuItemClassInfoType {
    /**
     * Menu Item Class Name
     * @type {string}
     * @memberof CateringMenuItemClassInfoType
     */
    className?: string;
    /**
     * 
     * @type {CodeListType}
     * @memberof CateringMenuItemClassInfoType
     */
    eventTypeList?: CodeListType;
    /**
     * The Hotel code which the menu item class belongs to
     * @type {string}
     * @memberof CateringMenuItemClassInfoType
     */
    hotelId?: string;
    /**
     * Icon Name of the Menu Class
     * @type {string}
     * @memberof CateringMenuItemClassInfoType
     */
    iconName?: string;
    /**
     * 
     * @type {MenuTypeType}
     * @memberof CateringMenuItemClassInfoType
     */
    menuType?: MenuTypeType;
    /**
     * 
     * @type {CodeListType}
     * @memberof CateringMenuItemClassInfoType
     */
    responsibleDepartmentList?: CodeListType;
    /**
     * Sequence of the Menu Class
     * @type {number}
     * @memberof CateringMenuItemClassInfoType
     */
    sequence?: number;
    /**
     * Boolean value indicates whether the Menu Class is web bookable or not
     * @type {boolean}
     * @memberof CateringMenuItemClassInfoType
     */
    webBookable?: boolean;
}

/**
 * Check if a given object implements the CateringMenuItemClassInfoType interface.
 */
export function instanceOfCateringMenuItemClassInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringMenuItemClassInfoTypeFromJSON(json: any): CateringMenuItemClassInfoType {
    return CateringMenuItemClassInfoTypeFromJSONTyped(json, false);
}

export function CateringMenuItemClassInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringMenuItemClassInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'className': !exists(json, 'className') ? undefined : json['className'],
        'eventTypeList': !exists(json, 'eventTypeList') ? undefined : CodeListTypeFromJSON(json['eventTypeList']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'iconName': !exists(json, 'iconName') ? undefined : json['iconName'],
        'menuType': !exists(json, 'menuType') ? undefined : MenuTypeTypeFromJSON(json['menuType']),
        'responsibleDepartmentList': !exists(json, 'responsibleDepartmentList') ? undefined : CodeListTypeFromJSON(json['responsibleDepartmentList']),
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'webBookable': !exists(json, 'webBookable') ? undefined : json['webBookable'],
    };
}

export function CateringMenuItemClassInfoTypeToJSON(value?: CateringMenuItemClassInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'className': value.className,
        'eventTypeList': CodeListTypeToJSON(value.eventTypeList),
        'hotelId': value.hotelId,
        'iconName': value.iconName,
        'menuType': MenuTypeTypeToJSON(value.menuType),
        'responsibleDepartmentList': CodeListTypeToJSON(value.responsibleDepartmentList),
        'sequence': value.sequence,
        'webBookable': value.webBookable,
    };
}
