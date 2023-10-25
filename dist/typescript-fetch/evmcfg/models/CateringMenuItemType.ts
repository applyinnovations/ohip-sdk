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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { DietaryPrefType } from './DietaryPrefType';
import {
    DietaryPrefTypeFromJSON,
    DietaryPrefTypeFromJSONTyped,
    DietaryPrefTypeToJSON,
} from './DietaryPrefType';
import type { MenuTypeType } from './MenuTypeType';
import {
    MenuTypeTypeFromJSON,
    MenuTypeTypeFromJSONTyped,
    MenuTypeTypeToJSON,
} from './MenuTypeType';
import type { TranslationTextType2000 } from './TranslationTextType2000';
import {
    TranslationTextType2000FromJSON,
    TranslationTextType2000FromJSONTyped,
    TranslationTextType2000ToJSON,
} from './TranslationTextType2000';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Detailed attributes of Menu Item.
 * @export
 * @interface CateringMenuItemType
 */
export interface CateringMenuItemType {
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof CateringMenuItemType
     */
    classInfo?: CodeDescriptionType;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof CateringMenuItemType
     */
    container?: CodeDescriptionType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof CateringMenuItemType
     */
    cost?: CurrencyAmountType;
    /**
     * Indicates whether this menu item is custom
     * @type {boolean}
     * @memberof CateringMenuItemType
     */
    custom?: boolean;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof CateringMenuItemType
     */
    description?: TranslationTextType2000;
    /**
     * 
     * @type {Array<DietaryPrefType>}
     * @memberof CateringMenuItemType
     */
    dietaryPreferenceList?: Array<DietaryPrefType>;
    /**
     * Defines the Display Order of the menu item class, to which the menu item is attached
     * @type {number}
     * @memberof CateringMenuItemType
     */
    displayOrder?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof CateringMenuItemType
     */
    eventTypes?: Array<string>;
    /**
     * The Hotel code which the menu item class belongs to
     * @type {string}
     * @memberof CateringMenuItemType
     */
    hotelId?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof CateringMenuItemType
     */
    id?: UniqueIDType;
    /**
     * Check for the status of menu item
     * @type {boolean}
     * @memberof CateringMenuItemType
     */
    inactive?: boolean;
    /**
     * Included flag
     * @type {boolean}
     * @memberof CateringMenuItemType
     */
    includedYN?: boolean;
    /**
     * Selection of this notes that the price defined is charged 'as-consumed' basis
     * @type {boolean}
     * @memberof CateringMenuItemType
     */
    itemConsumption?: boolean;
    /**
     * 
     * @type {MenuTypeType}
     * @memberof CateringMenuItemType
     */
    menuType?: MenuTypeType;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof CateringMenuItemType
     */
    name1?: TranslationTextType2000;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof CateringMenuItemType
     */
    name2?: TranslationTextType2000;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof CateringMenuItemType
     */
    name3?: TranslationTextType2000;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof CateringMenuItemType
     */
    origin1?: TranslationTextType2000;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof CateringMenuItemType
     */
    origin2?: TranslationTextType2000;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof CateringMenuItemType
     */
    portion?: TranslationTextType2000;
    /**
     * check if Print action is required for menu item
     * @type {boolean}
     * @memberof CateringMenuItemType
     */
    print?: boolean;
    /**
     * Article number in Caps of menu item
     * @type {string}
     * @memberof CateringMenuItemType
     */
    quickInsertCode?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CateringMenuItemType
     */
    responsibleDepartments?: Array<string>;
    /**
     * Any particular restriction description in 100 charactera
     * @type {string}
     * @memberof CateringMenuItemType
     */
    restriction?: string;
    /**
     * RevenueType of Menu Item
     * @type {string}
     * @memberof CateringMenuItemType
     */
    revenueType?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof CateringMenuItemType
     */
    salesPrice?: CurrencyAmountType;
    /**
     * Numeric value of servings of Menu item
     * @type {number}
     * @memberof CateringMenuItemType
     */
    servings?: number;
    /**
     * Check of Menu Item if it is web bookable
     * @type {boolean}
     * @memberof CateringMenuItemType
     */
    webBookable?: boolean;
    /**
     * This value is typically the year of the Wine
     * @type {number}
     * @memberof CateringMenuItemType
     */
    year?: number;
}

/**
 * Check if a given object implements the CateringMenuItemType interface.
 */
export function instanceOfCateringMenuItemType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringMenuItemTypeFromJSON(json: any): CateringMenuItemType {
    return CateringMenuItemTypeFromJSONTyped(json, false);
}

export function CateringMenuItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringMenuItemType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'classInfo': !exists(json, 'classInfo') ? undefined : CodeDescriptionTypeFromJSON(json['classInfo']),
        'container': !exists(json, 'container') ? undefined : CodeDescriptionTypeFromJSON(json['container']),
        'cost': !exists(json, 'cost') ? undefined : CurrencyAmountTypeFromJSON(json['cost']),
        'custom': !exists(json, 'custom') ? undefined : json['custom'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'dietaryPreferenceList': !exists(json, 'dietaryPreferenceList') ? undefined : ((json['dietaryPreferenceList'] as Array<any>).map(DietaryPrefTypeFromJSON)),
        'displayOrder': !exists(json, 'displayOrder') ? undefined : json['displayOrder'],
        'eventTypes': !exists(json, 'eventTypes') ? undefined : json['eventTypes'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !exists(json, 'id') ? undefined : UniqueIDTypeFromJSON(json['id']),
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'includedYN': !exists(json, 'includedYN') ? undefined : json['includedYN'],
        'itemConsumption': !exists(json, 'itemConsumption') ? undefined : json['itemConsumption'],
        'menuType': !exists(json, 'menuType') ? undefined : MenuTypeTypeFromJSON(json['menuType']),
        'name1': !exists(json, 'name1') ? undefined : TranslationTextType2000FromJSON(json['name1']),
        'name2': !exists(json, 'name2') ? undefined : TranslationTextType2000FromJSON(json['name2']),
        'name3': !exists(json, 'name3') ? undefined : TranslationTextType2000FromJSON(json['name3']),
        'origin1': !exists(json, 'origin1') ? undefined : TranslationTextType2000FromJSON(json['origin1']),
        'origin2': !exists(json, 'origin2') ? undefined : TranslationTextType2000FromJSON(json['origin2']),
        'portion': !exists(json, 'portion') ? undefined : TranslationTextType2000FromJSON(json['portion']),
        'print': !exists(json, 'print') ? undefined : json['print'],
        'quickInsertCode': !exists(json, 'quickInsertCode') ? undefined : json['quickInsertCode'],
        'responsibleDepartments': !exists(json, 'responsibleDepartments') ? undefined : json['responsibleDepartments'],
        'restriction': !exists(json, 'restriction') ? undefined : json['restriction'],
        'revenueType': !exists(json, 'revenueType') ? undefined : json['revenueType'],
        'salesPrice': !exists(json, 'salesPrice') ? undefined : CurrencyAmountTypeFromJSON(json['salesPrice']),
        'servings': !exists(json, 'servings') ? undefined : json['servings'],
        'webBookable': !exists(json, 'webBookable') ? undefined : json['webBookable'],
        'year': !exists(json, 'year') ? undefined : json['year'],
    };
}

export function CateringMenuItemTypeToJSON(value?: CateringMenuItemType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'classInfo': CodeDescriptionTypeToJSON(value.classInfo),
        'container': CodeDescriptionTypeToJSON(value.container),
        'cost': CurrencyAmountTypeToJSON(value.cost),
        'custom': value.custom,
        'description': TranslationTextType2000ToJSON(value.description),
        'dietaryPreferenceList': value.dietaryPreferenceList === undefined ? undefined : ((value.dietaryPreferenceList as Array<any>).map(DietaryPrefTypeToJSON)),
        'displayOrder': value.displayOrder,
        'eventTypes': value.eventTypes,
        'hotelId': value.hotelId,
        'id': UniqueIDTypeToJSON(value.id),
        'inactive': value.inactive,
        'includedYN': value.includedYN,
        'itemConsumption': value.itemConsumption,
        'menuType': MenuTypeTypeToJSON(value.menuType),
        'name1': TranslationTextType2000ToJSON(value.name1),
        'name2': TranslationTextType2000ToJSON(value.name2),
        'name3': TranslationTextType2000ToJSON(value.name3),
        'origin1': TranslationTextType2000ToJSON(value.origin1),
        'origin2': TranslationTextType2000ToJSON(value.origin2),
        'portion': TranslationTextType2000ToJSON(value.portion),
        'print': value.print,
        'quickInsertCode': value.quickInsertCode,
        'responsibleDepartments': value.responsibleDepartments,
        'restriction': value.restriction,
        'revenueType': value.revenueType,
        'salesPrice': CurrencyAmountTypeToJSON(value.salesPrice),
        'servings': value.servings,
        'webBookable': value.webBookable,
        'year': value.year,
    };
}

