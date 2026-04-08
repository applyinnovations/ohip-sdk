# ChannelRateCategoriesRateCategories

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateCategory** | Pointer to [**[]SystemRateCategoryType**](SystemRateCategoryType.md) | Channel rate category details. | [optional] 
**BookingChannelCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 

## Methods

### NewChannelRateCategoriesRateCategories

`func NewChannelRateCategoriesRateCategories() *ChannelRateCategoriesRateCategories`

NewChannelRateCategoriesRateCategories instantiates a new ChannelRateCategoriesRateCategories object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRateCategoriesRateCategoriesWithDefaults

`func NewChannelRateCategoriesRateCategoriesWithDefaults() *ChannelRateCategoriesRateCategories`

NewChannelRateCategoriesRateCategoriesWithDefaults instantiates a new ChannelRateCategoriesRateCategories object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateCategory

`func (o *ChannelRateCategoriesRateCategories) GetRateCategory() []SystemRateCategoryType`

GetRateCategory returns the RateCategory field if non-nil, zero value otherwise.

### GetRateCategoryOk

`func (o *ChannelRateCategoriesRateCategories) GetRateCategoryOk() (*[]SystemRateCategoryType, bool)`

GetRateCategoryOk returns a tuple with the RateCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCategory

`func (o *ChannelRateCategoriesRateCategories) SetRateCategory(v []SystemRateCategoryType)`

SetRateCategory sets RateCategory field to given value.

### HasRateCategory

`func (o *ChannelRateCategoriesRateCategories) HasRateCategory() bool`

HasRateCategory returns a boolean if a field has been set.

### GetBookingChannelCode

`func (o *ChannelRateCategoriesRateCategories) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *ChannelRateCategoriesRateCategories) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *ChannelRateCategoriesRateCategories) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *ChannelRateCategoriesRateCategories) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


