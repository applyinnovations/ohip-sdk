# HotelRateRangesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelRateRanges** | Pointer to [**[]HotelRateRangeType**](HotelRateRangeType.md) | Lists of rate ranges of the hotel. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelRateRangesCriteria

`func NewHotelRateRangesCriteria() *HotelRateRangesCriteria`

NewHotelRateRangesCriteria instantiates a new HotelRateRangesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelRateRangesCriteriaWithDefaults

`func NewHotelRateRangesCriteriaWithDefaults() *HotelRateRangesCriteria`

NewHotelRateRangesCriteriaWithDefaults instantiates a new HotelRateRangesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelRateRanges

`func (o *HotelRateRangesCriteria) GetHotelRateRanges() []HotelRateRangeType`

GetHotelRateRanges returns the HotelRateRanges field if non-nil, zero value otherwise.

### GetHotelRateRangesOk

`func (o *HotelRateRangesCriteria) GetHotelRateRangesOk() (*[]HotelRateRangeType, bool)`

GetHotelRateRangesOk returns a tuple with the HotelRateRanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRateRanges

`func (o *HotelRateRangesCriteria) SetHotelRateRanges(v []HotelRateRangeType)`

SetHotelRateRanges sets HotelRateRanges field to given value.

### HasHotelRateRanges

`func (o *HotelRateRangesCriteria) HasHotelRateRanges() bool`

HasHotelRateRanges returns a boolean if a field has been set.

### GetLinks

`func (o *HotelRateRangesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelRateRangesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelRateRangesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelRateRangesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelRateRangesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelRateRangesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelRateRangesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelRateRangesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


