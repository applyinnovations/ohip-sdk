# ExportMappingCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataType** | Pointer to [**ExportCodeDataType**](ExportCodeDataType.md) |  | [optional] 
**Description** | Pointer to **string** | Description of the export mapping code. | [optional] 
**ExportMappingId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**LovName** | Pointer to **string** | Name of the LOV group to be used. | [optional] 
**MappingTypeCode** | Pointer to **string** | Code for the export mapping type. | [optional] 
**Required** | Pointer to **bool** | This flag indicates the configuration item cannot be saved until a mapping for this mapping detail has been entered. | [optional] 
**SequenceNumber** | Pointer to **float32** | Display sequence. | [optional] 
**UseLov** | Pointer to **bool** | This flag show LOV button when linking this mapping code to the configuration item. | [optional] 

## Methods

### NewExportMappingCodeType

`func NewExportMappingCodeType() *ExportMappingCodeType`

NewExportMappingCodeType instantiates a new ExportMappingCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportMappingCodeTypeWithDefaults

`func NewExportMappingCodeTypeWithDefaults() *ExportMappingCodeType`

NewExportMappingCodeTypeWithDefaults instantiates a new ExportMappingCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataType

`func (o *ExportMappingCodeType) GetDataType() ExportCodeDataType`

GetDataType returns the DataType field if non-nil, zero value otherwise.

### GetDataTypeOk

`func (o *ExportMappingCodeType) GetDataTypeOk() (*ExportCodeDataType, bool)`

GetDataTypeOk returns a tuple with the DataType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataType

`func (o *ExportMappingCodeType) SetDataType(v ExportCodeDataType)`

SetDataType sets DataType field to given value.

### HasDataType

`func (o *ExportMappingCodeType) HasDataType() bool`

HasDataType returns a boolean if a field has been set.

### GetDescription

`func (o *ExportMappingCodeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ExportMappingCodeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ExportMappingCodeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ExportMappingCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExportMappingId

`func (o *ExportMappingCodeType) GetExportMappingId() UniqueIDType`

GetExportMappingId returns the ExportMappingId field if non-nil, zero value otherwise.

### GetExportMappingIdOk

`func (o *ExportMappingCodeType) GetExportMappingIdOk() (*UniqueIDType, bool)`

GetExportMappingIdOk returns a tuple with the ExportMappingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportMappingId

`func (o *ExportMappingCodeType) SetExportMappingId(v UniqueIDType)`

SetExportMappingId sets ExportMappingId field to given value.

### HasExportMappingId

`func (o *ExportMappingCodeType) HasExportMappingId() bool`

HasExportMappingId returns a boolean if a field has been set.

### GetLovName

`func (o *ExportMappingCodeType) GetLovName() string`

GetLovName returns the LovName field if non-nil, zero value otherwise.

### GetLovNameOk

`func (o *ExportMappingCodeType) GetLovNameOk() (*string, bool)`

GetLovNameOk returns a tuple with the LovName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLovName

`func (o *ExportMappingCodeType) SetLovName(v string)`

SetLovName sets LovName field to given value.

### HasLovName

`func (o *ExportMappingCodeType) HasLovName() bool`

HasLovName returns a boolean if a field has been set.

### GetMappingTypeCode

`func (o *ExportMappingCodeType) GetMappingTypeCode() string`

GetMappingTypeCode returns the MappingTypeCode field if non-nil, zero value otherwise.

### GetMappingTypeCodeOk

`func (o *ExportMappingCodeType) GetMappingTypeCodeOk() (*string, bool)`

GetMappingTypeCodeOk returns a tuple with the MappingTypeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappingTypeCode

`func (o *ExportMappingCodeType) SetMappingTypeCode(v string)`

SetMappingTypeCode sets MappingTypeCode field to given value.

### HasMappingTypeCode

`func (o *ExportMappingCodeType) HasMappingTypeCode() bool`

HasMappingTypeCode returns a boolean if a field has been set.

### GetRequired

`func (o *ExportMappingCodeType) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *ExportMappingCodeType) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *ExportMappingCodeType) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *ExportMappingCodeType) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetSequenceNumber

`func (o *ExportMappingCodeType) GetSequenceNumber() float32`

GetSequenceNumber returns the SequenceNumber field if non-nil, zero value otherwise.

### GetSequenceNumberOk

`func (o *ExportMappingCodeType) GetSequenceNumberOk() (*float32, bool)`

GetSequenceNumberOk returns a tuple with the SequenceNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequenceNumber

`func (o *ExportMappingCodeType) SetSequenceNumber(v float32)`

SetSequenceNumber sets SequenceNumber field to given value.

### HasSequenceNumber

`func (o *ExportMappingCodeType) HasSequenceNumber() bool`

HasSequenceNumber returns a boolean if a field has been set.

### GetUseLov

`func (o *ExportMappingCodeType) GetUseLov() bool`

GetUseLov returns the UseLov field if non-nil, zero value otherwise.

### GetUseLovOk

`func (o *ExportMappingCodeType) GetUseLovOk() (*bool, bool)`

GetUseLovOk returns a tuple with the UseLov field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseLov

`func (o *ExportMappingCodeType) SetUseLov(v bool)`

SetUseLov sets UseLov field to given value.

### HasUseLov

`func (o *ExportMappingCodeType) HasUseLov() bool`

HasUseLov returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


