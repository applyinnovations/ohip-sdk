# ExportMappingLinkedTypes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**LinkedCodes** | Pointer to [**[]ExportMappingLinkedCodeType**](ExportMappingLinkedCodeType.md) | The linked codes for the given hotel. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewExportMappingLinkedTypes

`func NewExportMappingLinkedTypes() *ExportMappingLinkedTypes`

NewExportMappingLinkedTypes instantiates a new ExportMappingLinkedTypes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportMappingLinkedTypesWithDefaults

`func NewExportMappingLinkedTypesWithDefaults() *ExportMappingLinkedTypes`

NewExportMappingLinkedTypesWithDefaults instantiates a new ExportMappingLinkedTypes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ExportMappingLinkedTypes) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ExportMappingLinkedTypes) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ExportMappingLinkedTypes) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ExportMappingLinkedTypes) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinkedCodes

`func (o *ExportMappingLinkedTypes) GetLinkedCodes() []ExportMappingLinkedCodeType`

GetLinkedCodes returns the LinkedCodes field if non-nil, zero value otherwise.

### GetLinkedCodesOk

`func (o *ExportMappingLinkedTypes) GetLinkedCodesOk() (*[]ExportMappingLinkedCodeType, bool)`

GetLinkedCodesOk returns a tuple with the LinkedCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedCodes

`func (o *ExportMappingLinkedTypes) SetLinkedCodes(v []ExportMappingLinkedCodeType)`

SetLinkedCodes sets LinkedCodes field to given value.

### HasLinkedCodes

`func (o *ExportMappingLinkedTypes) HasLinkedCodes() bool`

HasLinkedCodes returns a boolean if a field has been set.

### GetLinks

`func (o *ExportMappingLinkedTypes) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExportMappingLinkedTypes) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExportMappingLinkedTypes) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExportMappingLinkedTypes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ExportMappingLinkedTypes) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExportMappingLinkedTypes) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExportMappingLinkedTypes) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExportMappingLinkedTypes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


