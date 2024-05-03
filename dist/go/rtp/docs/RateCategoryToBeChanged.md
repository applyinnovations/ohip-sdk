# RateCategoryToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelRateCategory** | Pointer to [**HotelRateCategoryType**](HotelRateCategoryType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRateCategoryToBeChanged

`func NewRateCategoryToBeChanged() *RateCategoryToBeChanged`

NewRateCategoryToBeChanged instantiates a new RateCategoryToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateCategoryToBeChangedWithDefaults

`func NewRateCategoryToBeChangedWithDefaults() *RateCategoryToBeChanged`

NewRateCategoryToBeChangedWithDefaults instantiates a new RateCategoryToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelRateCategory

`func (o *RateCategoryToBeChanged) GetHotelRateCategory() HotelRateCategoryType`

GetHotelRateCategory returns the HotelRateCategory field if non-nil, zero value otherwise.

### GetHotelRateCategoryOk

`func (o *RateCategoryToBeChanged) GetHotelRateCategoryOk() (*HotelRateCategoryType, bool)`

GetHotelRateCategoryOk returns a tuple with the HotelRateCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRateCategory

`func (o *RateCategoryToBeChanged) SetHotelRateCategory(v HotelRateCategoryType)`

SetHotelRateCategory sets HotelRateCategory field to given value.

### HasHotelRateCategory

`func (o *RateCategoryToBeChanged) HasHotelRateCategory() bool`

HasHotelRateCategory returns a boolean if a field has been set.

### GetLinks

`func (o *RateCategoryToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateCategoryToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateCategoryToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateCategoryToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RateCategoryToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateCategoryToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateCategoryToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateCategoryToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


