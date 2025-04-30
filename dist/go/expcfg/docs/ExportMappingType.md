# ExportMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExportMappingId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ConfigType** | Pointer to [**ExportMappingConfigType**](ExportMappingConfigType.md) |  | [optional] 
**MappingType** | Pointer to **string** | Code for the export mapping type. | [optional] 
**HasDefaultValue** | Pointer to **bool** | Specify whether the mapping type has default value. | [optional] 
**Description** | Pointer to **string** | Description of the export mapping type. | [optional] 

## Methods

### NewExportMappingType

`func NewExportMappingType() *ExportMappingType`

NewExportMappingType instantiates a new ExportMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportMappingTypeWithDefaults

`func NewExportMappingTypeWithDefaults() *ExportMappingType`

NewExportMappingTypeWithDefaults instantiates a new ExportMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExportMappingId

`func (o *ExportMappingType) GetExportMappingId() UniqueIDType`

GetExportMappingId returns the ExportMappingId field if non-nil, zero value otherwise.

### GetExportMappingIdOk

`func (o *ExportMappingType) GetExportMappingIdOk() (*UniqueIDType, bool)`

GetExportMappingIdOk returns a tuple with the ExportMappingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportMappingId

`func (o *ExportMappingType) SetExportMappingId(v UniqueIDType)`

SetExportMappingId sets ExportMappingId field to given value.

### HasExportMappingId

`func (o *ExportMappingType) HasExportMappingId() bool`

HasExportMappingId returns a boolean if a field has been set.

### GetConfigType

`func (o *ExportMappingType) GetConfigType() ExportMappingConfigType`

GetConfigType returns the ConfigType field if non-nil, zero value otherwise.

### GetConfigTypeOk

`func (o *ExportMappingType) GetConfigTypeOk() (*ExportMappingConfigType, bool)`

GetConfigTypeOk returns a tuple with the ConfigType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigType

`func (o *ExportMappingType) SetConfigType(v ExportMappingConfigType)`

SetConfigType sets ConfigType field to given value.

### HasConfigType

`func (o *ExportMappingType) HasConfigType() bool`

HasConfigType returns a boolean if a field has been set.

### GetMappingType

`func (o *ExportMappingType) GetMappingType() string`

GetMappingType returns the MappingType field if non-nil, zero value otherwise.

### GetMappingTypeOk

`func (o *ExportMappingType) GetMappingTypeOk() (*string, bool)`

GetMappingTypeOk returns a tuple with the MappingType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappingType

`func (o *ExportMappingType) SetMappingType(v string)`

SetMappingType sets MappingType field to given value.

### HasMappingType

`func (o *ExportMappingType) HasMappingType() bool`

HasMappingType returns a boolean if a field has been set.

### GetHasDefaultValue

`func (o *ExportMappingType) GetHasDefaultValue() bool`

GetHasDefaultValue returns the HasDefaultValue field if non-nil, zero value otherwise.

### GetHasDefaultValueOk

`func (o *ExportMappingType) GetHasDefaultValueOk() (*bool, bool)`

GetHasDefaultValueOk returns a tuple with the HasDefaultValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasDefaultValue

`func (o *ExportMappingType) SetHasDefaultValue(v bool)`

SetHasDefaultValue sets HasDefaultValue field to given value.

### HasHasDefaultValue

`func (o *ExportMappingType) HasHasDefaultValue() bool`

HasHasDefaultValue returns a boolean if a field has been set.

### GetDescription

`func (o *ExportMappingType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ExportMappingType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ExportMappingType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ExportMappingType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


