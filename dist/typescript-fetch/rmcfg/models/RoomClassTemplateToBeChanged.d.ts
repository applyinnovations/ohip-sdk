/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { RoomClassTemplateType } from './RoomClassTemplateType';
import type { WarningsType } from './WarningsType';
/**
 * Request object for modifying an existing room class template.
 * @export
 * @interface RoomClassTemplateToBeChanged
 */
export interface RoomClassTemplateToBeChanged {
    /**
     *
     * @type {Links}
     * @memberof RoomClassTemplateToBeChanged
     */
    links?: Links;
    /**
     *
     * @type {RoomClassTemplateType}
     * @memberof RoomClassTemplateToBeChanged
     */
    roomClassTemplate?: RoomClassTemplateType;
    /**
     *
     * @type {WarningsType}
     * @memberof RoomClassTemplateToBeChanged
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the RoomClassTemplateToBeChanged interface.
 */
export declare function instanceOfRoomClassTemplateToBeChanged(value: object): boolean;
export declare function RoomClassTemplateToBeChangedFromJSON(json: any): RoomClassTemplateToBeChanged;
export declare function RoomClassTemplateToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomClassTemplateToBeChanged;
export declare function RoomClassTemplateToBeChangedToJSON(value?: RoomClassTemplateToBeChanged | null): any;
