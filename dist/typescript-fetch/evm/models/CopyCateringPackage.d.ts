/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CopyCateringPkgType } from './CopyCateringPkgType';
import type { WarningsType } from './WarningsType';
/**
 * Request object for Copying Catering Package/Template to another block.
 * @export
 * @interface CopyCateringPackage
 */
export interface CopyCateringPackage {
    /**
     *
     * @type {CopyCateringPkgType}
     * @memberof CopyCateringPackage
     */
    criteria?: CopyCateringPkgType;
    /**
     *
     * @type {WarningsType}
     * @memberof CopyCateringPackage
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CopyCateringPackage interface.
 */
export declare function instanceOfCopyCateringPackage(value: object): boolean;
export declare function CopyCateringPackageFromJSON(json: any): CopyCateringPackage;
export declare function CopyCateringPackageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyCateringPackage;
export declare function CopyCateringPackageToJSON(value?: CopyCateringPackage | null): any;
