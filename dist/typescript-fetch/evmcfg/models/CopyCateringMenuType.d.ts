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
import type { CateringMenuClassType } from './CateringMenuClassType';
import type { UniqueIDType } from './UniqueIDType';
/**
 *
 * @export
 * @interface CopyCateringMenuType
 */
export interface CopyCateringMenuType {
    /**
     * Source Hotel code from where the menu will be copied.
     * @type {string}
     * @memberof CopyCateringMenuType
     */
    hotelId?: string;
    /**
     * List of Values of Menu.
     * @type {Array<CateringMenuClassType>}
     * @memberof CopyCateringMenuType
     */
    menuClassList?: Array<CateringMenuClassType>;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CopyCateringMenuType
     */
    menuId?: UniqueIDType;
}
/**
 * Check if a given object implements the CopyCateringMenuType interface.
 */
export declare function instanceOfCopyCateringMenuType(value: object): boolean;
export declare function CopyCateringMenuTypeFromJSON(json: any): CopyCateringMenuType;
export declare function CopyCateringMenuTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyCateringMenuType;
export declare function CopyCateringMenuTypeToJSON(value?: CopyCateringMenuType | null): any;
