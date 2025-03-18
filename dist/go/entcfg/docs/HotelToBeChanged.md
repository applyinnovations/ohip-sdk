# HotelToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelInfo** | Pointer to [**HotelInfoType**](HotelInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelToBeChanged

`func NewHotelToBeChanged() *HotelToBeChanged`

NewHotelToBeChanged instantiates a new HotelToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelToBeChangedWithDefaults

`func NewHotelToBeChangedWithDefaults() *HotelToBeChanged`

NewHotelToBeChangedWithDefaults instantiates a new HotelToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelInfo

`func (o *HotelToBeChanged) GetHotelInfo() HotelInfoType`

GetHotelInfo returns the HotelInfo field if non-nil, zero value otherwise.

### GetHotelInfoOk

`func (o *HotelToBeChanged) GetHotelInfoOk() (*HotelInfoType, bool)`

GetHotelInfoOk returns a tuple with the HotelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelInfo

`func (o *HotelToBeChanged) SetHotelInfo(v HotelInfoType)`

SetHotelInfo sets HotelInfo field to given value.

### HasHotelInfo

`func (o *HotelToBeChanged) HasHotelInfo() bool`

HasHotelInfo returns a boolean if a field has been set.

### GetLinks

`func (o *HotelToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


