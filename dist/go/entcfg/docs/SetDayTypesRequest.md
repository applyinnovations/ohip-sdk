# SetDayTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelDayTypes** | Pointer to [**[]HotelDayTypeType**](HotelDayTypeType.md) | Collection of type details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSetDayTypesRequest

`func NewSetDayTypesRequest() *SetDayTypesRequest`

NewSetDayTypesRequest instantiates a new SetDayTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetDayTypesRequestWithDefaults

`func NewSetDayTypesRequestWithDefaults() *SetDayTypesRequest`

NewSetDayTypesRequestWithDefaults instantiates a new SetDayTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelDayTypes

`func (o *SetDayTypesRequest) GetHotelDayTypes() []HotelDayTypeType`

GetHotelDayTypes returns the HotelDayTypes field if non-nil, zero value otherwise.

### GetHotelDayTypesOk

`func (o *SetDayTypesRequest) GetHotelDayTypesOk() (*[]HotelDayTypeType, bool)`

GetHotelDayTypesOk returns a tuple with the HotelDayTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelDayTypes

`func (o *SetDayTypesRequest) SetHotelDayTypes(v []HotelDayTypeType)`

SetHotelDayTypes sets HotelDayTypes field to given value.

### HasHotelDayTypes

`func (o *SetDayTypesRequest) HasHotelDayTypes() bool`

HasHotelDayTypes returns a boolean if a field has been set.

### GetLinks

`func (o *SetDayTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SetDayTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SetDayTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SetDayTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SetDayTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SetDayTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SetDayTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SetDayTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


