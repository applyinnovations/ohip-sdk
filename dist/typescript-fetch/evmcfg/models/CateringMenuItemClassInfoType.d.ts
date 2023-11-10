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
import type { CodeListType } from './CodeListType';
import type { MenuTypeType } from './MenuTypeType';
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
export declare function instanceOfCateringMenuItemClassInfoType(value: object): boolean;
export declare function CateringMenuItemClassInfoTypeFromJSON(json: any): CateringMenuItemClassInfoType;
export declare function CateringMenuItemClassInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringMenuItemClassInfoType;
export declare function CateringMenuItemClassInfoTypeToJSON(value?: CateringMenuItemClassInfoType | null): any;
