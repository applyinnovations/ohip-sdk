# RatePlanRatingInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code of the rate plan codes. | [optional] 
**RateCategory** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**RatePlan** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Rating** | Pointer to [**RatePlanRatingType**](RatePlanRatingType.md) |  | [optional] 

## Methods

### NewRatePlanRatingInfoType

`func NewRatePlanRatingInfoType() *RatePlanRatingInfoType`

NewRatePlanRatingInfoType instantiates a new RatePlanRatingInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanRatingInfoTypeWithDefaults

`func NewRatePlanRatingInfoTypeWithDefaults() *RatePlanRatingInfoType`

NewRatePlanRatingInfoTypeWithDefaults instantiates a new RatePlanRatingInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RatePlanRatingInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RatePlanRatingInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RatePlanRatingInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RatePlanRatingInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRateCategory

`func (o *RatePlanRatingInfoType) GetRateCategory() CodeDescriptionType`

GetRateCategory returns the RateCategory field if non-nil, zero value otherwise.

### GetRateCategoryOk

`func (o *RatePlanRatingInfoType) GetRateCategoryOk() (*CodeDescriptionType, bool)`

GetRateCategoryOk returns a tuple with the RateCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCategory

`func (o *RatePlanRatingInfoType) SetRateCategory(v CodeDescriptionType)`

SetRateCategory sets RateCategory field to given value.

### HasRateCategory

`func (o *RatePlanRatingInfoType) HasRateCategory() bool`

HasRateCategory returns a boolean if a field has been set.

### GetRatePlan

`func (o *RatePlanRatingInfoType) GetRatePlan() CodeDescriptionType`

GetRatePlan returns the RatePlan field if non-nil, zero value otherwise.

### GetRatePlanOk

`func (o *RatePlanRatingInfoType) GetRatePlanOk() (*CodeDescriptionType, bool)`

GetRatePlanOk returns a tuple with the RatePlan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlan

`func (o *RatePlanRatingInfoType) SetRatePlan(v CodeDescriptionType)`

SetRatePlan sets RatePlan field to given value.

### HasRatePlan

`func (o *RatePlanRatingInfoType) HasRatePlan() bool`

HasRatePlan returns a boolean if a field has been set.

### GetRating

`func (o *RatePlanRatingInfoType) GetRating() RatePlanRatingType`

GetRating returns the Rating field if non-nil, zero value otherwise.

### GetRatingOk

`func (o *RatePlanRatingInfoType) GetRatingOk() (*RatePlanRatingType, bool)`

GetRatingOk returns a tuple with the Rating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRating

`func (o *RatePlanRatingInfoType) SetRating(v RatePlanRatingType)`

SetRating sets Rating field to given value.

### HasRating

`func (o *RatePlanRatingInfoType) HasRating() bool`

HasRating returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


