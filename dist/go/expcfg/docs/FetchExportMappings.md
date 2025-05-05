# FetchExportMappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ExportMappings** | Pointer to [**[]ExportMappingType**](ExportMappingType.md) | The export file ID to delete definition. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchExportMappings

`func NewFetchExportMappings() *FetchExportMappings`

NewFetchExportMappings instantiates a new FetchExportMappings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchExportMappingsWithDefaults

`func NewFetchExportMappingsWithDefaults() *FetchExportMappings`

NewFetchExportMappingsWithDefaults instantiates a new FetchExportMappings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *FetchExportMappings) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FetchExportMappings) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FetchExportMappings) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FetchExportMappings) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetExportMappings

`func (o *FetchExportMappings) GetExportMappings() []ExportMappingType`

GetExportMappings returns the ExportMappings field if non-nil, zero value otherwise.

### GetExportMappingsOk

`func (o *FetchExportMappings) GetExportMappingsOk() (*[]ExportMappingType, bool)`

GetExportMappingsOk returns a tuple with the ExportMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportMappings

`func (o *FetchExportMappings) SetExportMappings(v []ExportMappingType)`

SetExportMappings sets ExportMappings field to given value.

### HasExportMappings

`func (o *FetchExportMappings) HasExportMappings() bool`

HasExportMappings returns a boolean if a field has been set.

### GetLinks

`func (o *FetchExportMappings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchExportMappings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchExportMappings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchExportMappings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchExportMappings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchExportMappings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchExportMappings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchExportMappings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


