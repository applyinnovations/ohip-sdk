/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CateringMenuDetailType } from './CateringMenuDetailType';
import {
    CateringMenuDetailTypeFromJSON,
    CateringMenuDetailTypeFromJSONTyped,
    CateringMenuDetailTypeToJSON,
} from './CateringMenuDetailType';
import type { CateringMenuInfoType } from './CateringMenuInfoType';
import {
    CateringMenuInfoTypeFromJSON,
    CateringMenuInfoTypeFromJSONTyped,
    CateringMenuInfoTypeToJSON,
} from './CateringMenuInfoType';
import type { CateringMenuRevType } from './CateringMenuRevType';
import {
    CateringMenuRevTypeFromJSON,
    CateringMenuRevTypeFromJSONTyped,
    CateringMenuRevTypeToJSON,
} from './CateringMenuRevType';
import type { CateringMultiChoiceMenuType } from './CateringMultiChoiceMenuType';
import {
    CateringMultiChoiceMenuTypeFromJSON,
    CateringMultiChoiceMenuTypeFromJSONTyped,
    CateringMultiChoiceMenuTypeToJSON,
} from './CateringMultiChoiceMenuType';
import type { EventResourceNoteType } from './EventResourceNoteType';
import {
    EventResourceNoteTypeFromJSON,
    EventResourceNoteTypeFromJSONTyped,
    EventResourceNoteTypeToJSON,
} from './EventResourceNoteType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface CateringMenuType
 */
export interface CateringMenuType {
    /**
     * This type holds class id for given menu.
     * @type {string}
     * @memberof CateringMenuType
     */
    classId?: string;
    /**
     * The Hotel code which the catering menu belongs to.
     * @type {string}
     * @memberof CateringMenuType
     */
    hotelId?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof CateringMenuType
     */
    id?: UniqueIDType;
    /**
     * 
     * @type {CateringMenuInfoType}
     * @memberof CateringMenuType
     */
    info?: CateringMenuInfoType;
    /**
     * List of Values of Catering Menu Detail.
     * @type {Array<CateringMenuDetailType>}
     * @memberof CateringMenuType
     */
    menuDetailList?: Array<CateringMenuDetailType>;
    /**
     * Contains event resource note information.
     * @type {Array<EventResourceNoteType>}
     * @memberof CateringMenuType
     */
    menuNoteList?: Array<EventResourceNoteType>;
    /**
     * This type holds Multi choice Menu.
     * @type {Array<CateringMultiChoiceMenuType>}
     * @memberof CateringMenuType
     */
    multiChoiceList?: Array<CateringMultiChoiceMenuType>;
    /**
     * This type holds revenue list.
     * @type {Array<CateringMenuRevType>}
     * @memberof CateringMenuType
     */
    revenueList?: Array<CateringMenuRevType>;
}

/**
 * Check if a given object implements the CateringMenuType interface.
 */
export function instanceOfCateringMenuType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringMenuTypeFromJSON(json: any): CateringMenuType {
    return CateringMenuTypeFromJSONTyped(json, false);
}

export function CateringMenuTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringMenuType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'classId': !exists(json, 'classId') ? undefined : json['classId'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !exists(json, 'id') ? undefined : UniqueIDTypeFromJSON(json['id']),
        'info': !exists(json, 'info') ? undefined : CateringMenuInfoTypeFromJSON(json['info']),
        'menuDetailList': !exists(json, 'menuDetailList') ? undefined : ((json['menuDetailList'] as Array<any>).map(CateringMenuDetailTypeFromJSON)),
        'menuNoteList': !exists(json, 'menuNoteList') ? undefined : ((json['menuNoteList'] as Array<any>).map(EventResourceNoteTypeFromJSON)),
        'multiChoiceList': !exists(json, 'multiChoiceList') ? undefined : ((json['multiChoiceList'] as Array<any>).map(CateringMultiChoiceMenuTypeFromJSON)),
        'revenueList': !exists(json, 'revenueList') ? undefined : ((json['revenueList'] as Array<any>).map(CateringMenuRevTypeFromJSON)),
    };
}

export function CateringMenuTypeToJSON(value?: CateringMenuType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'classId': value.classId,
        'hotelId': value.hotelId,
        'id': UniqueIDTypeToJSON(value.id),
        'info': CateringMenuInfoTypeToJSON(value.info),
        'menuDetailList': value.menuDetailList === undefined ? undefined : ((value.menuDetailList as Array<any>).map(CateringMenuDetailTypeToJSON)),
        'menuNoteList': value.menuNoteList === undefined ? undefined : ((value.menuNoteList as Array<any>).map(EventResourceNoteTypeToJSON)),
        'multiChoiceList': value.multiChoiceList === undefined ? undefined : ((value.multiChoiceList as Array<any>).map(CateringMultiChoiceMenuTypeToJSON)),
        'revenueList': value.revenueList === undefined ? undefined : ((value.revenueList as Array<any>).map(CateringMenuRevTypeToJSON)),
    };
}

