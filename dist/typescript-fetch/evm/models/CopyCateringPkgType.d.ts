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
import type { CateringPackageCopyInstructionType } from './CateringPackageCopyInstructionType';
import type { CopyStatusModeType } from './CopyStatusModeType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Criteria to copy catering packages
 * @export
 * @interface CopyCateringPkgType
 */
export interface CopyCateringPkgType {
    /**
     * Indicates wether to to continue upon getting error processing screen. If this is true, error processing screen won't be shown.
     * @type {boolean}
     * @memberof CopyCateringPkgType
     */
    _continue?: boolean;
    /**
     * Indicates wether to perform pre-cahnge or post-change snapshot of the copied events. By default, it is always considered as false and will provide post-change snapshot.
     * @type {boolean}
     * @memberof CopyCateringPkgType
     */
    copyAsSnapshot?: boolean;
    /**
     * Indicate weather to include Non Package resources, source status etc.
     * @type {Array<CateringPackageCopyInstructionType>}
     * @memberof CopyCateringPkgType
     */
    copyInstructions?: Array<CateringPackageCopyInstructionType>;
    /**
     *
     * @type {CopyStatusModeType}
     * @memberof CopyCateringPkgType
     */
    copyStatusMode?: CopyStatusModeType;
    /**
     * Specifies a single date.
     * @type {Array<string>}
     * @memberof CopyCateringPkgType
     */
    copyToDates?: Array<string>;
    /**
     * Hotel code where the package will be copied.
     * @type {string}
     * @memberof CopyCateringPkgType
     */
    hotelId?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CopyCateringPkgType
     */
    packageId?: UniqueIDType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CopyCateringPkgType
     */
    sourceBlockId?: UniqueIDType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CopyCateringPkgType
     */
    targetBlockId?: UniqueIDType;
}
/**
 * Check if a given object implements the CopyCateringPkgType interface.
 */
export declare function instanceOfCopyCateringPkgType(value: object): boolean;
export declare function CopyCateringPkgTypeFromJSON(json: any): CopyCateringPkgType;
export declare function CopyCateringPkgTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyCateringPkgType;
export declare function CopyCateringPkgTypeToJSON(value?: CopyCateringPkgType | null): any;
