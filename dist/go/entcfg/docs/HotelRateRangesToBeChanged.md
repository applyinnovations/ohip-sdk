# HotelRateRangesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelRateRanges** | Pointer to [**[]HotelRateRangeType**](HotelRateRangeType.md) | Lists of rate ranges of the hotel. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelRateRangesToBeChanged

`func NewHotelRateRangesToBeChanged() *HotelRateRangesToBeChanged`

NewHotelRateRangesToBeChanged instantiates a new HotelRateRangesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelRateRangesToBeChangedWithDefaults

`func NewHotelRateRangesToBeChangedWithDefaults() *HotelRateRangesToBeChanged`

NewHotelRateRangesToBeChangedWithDefaults instantiates a new HotelRateRangesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelRateRanges

`func (o *HotelRateRangesToBeChanged) GetHotelRateRanges() []HotelRateRangeType`

GetHotelRateRanges returns the HotelRateRanges field if non-nil, zero value otherwise.

### GetHotelRateRangesOk

`func (o *HotelRateRangesToBeChanged) GetHotelRateRangesOk() (*[]HotelRateRangeType, bool)`

GetHotelRateRangesOk returns a tuple with the HotelRateRanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRateRanges

`func (o *HotelRateRangesToBeChanged) SetHotelRateRanges(v []HotelRateRangeType)`

SetHotelRateRanges sets HotelRateRanges field to given value.

### HasHotelRateRanges

`func (o *HotelRateRangesToBeChanged) HasHotelRateRanges() bool`

HasHotelRateRanges returns a boolean if a field has been set.

### GetLinks

`func (o *HotelRateRangesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelRateRangesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelRateRangesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelRateRangesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelRateRangesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelRateRangesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelRateRangesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelRateRangesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


