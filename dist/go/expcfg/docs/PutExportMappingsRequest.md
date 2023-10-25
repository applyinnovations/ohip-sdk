# PutExportMappingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExportMapping** | Pointer to [**[]ExportMappingType**](ExportMappingType.md) | The details of the export definition being created. | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutExportMappingsRequest

`func NewPutExportMappingsRequest() *PutExportMappingsRequest`

NewPutExportMappingsRequest instantiates a new PutExportMappingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutExportMappingsRequestWithDefaults

`func NewPutExportMappingsRequestWithDefaults() *PutExportMappingsRequest`

NewPutExportMappingsRequestWithDefaults instantiates a new PutExportMappingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExportMapping

`func (o *PutExportMappingsRequest) GetExportMapping() []ExportMappingType`

GetExportMapping returns the ExportMapping field if non-nil, zero value otherwise.

### GetExportMappingOk

`func (o *PutExportMappingsRequest) GetExportMappingOk() (*[]ExportMappingType, bool)`

GetExportMappingOk returns a tuple with the ExportMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportMapping

`func (o *PutExportMappingsRequest) SetExportMapping(v []ExportMappingType)`

SetExportMapping sets ExportMapping field to given value.

### HasExportMapping

`func (o *PutExportMappingsRequest) HasExportMapping() bool`

HasExportMapping returns a boolean if a field has been set.

### GetHotelId

`func (o *PutExportMappingsRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PutExportMappingsRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PutExportMappingsRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PutExportMappingsRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PutExportMappingsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutExportMappingsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutExportMappingsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutExportMappingsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutExportMappingsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutExportMappingsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutExportMappingsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutExportMappingsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


