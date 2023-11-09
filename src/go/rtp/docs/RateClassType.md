# RateClassType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the rate class. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code the rate class belongs to. | [optional] 
**RateCategories** | Pointer to [**SimpleRateCategoriesType**](SimpleRateCategoriesType.md) |  | [optional] 
**RateClass** | Pointer to **string** | Code that uniquely identifies the rate class. | [optional] 
**Sequence** | Pointer to **int32** | Display Sequence of the rate class. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewRateClassType

`func NewRateClassType() *RateClassType`

NewRateClassType instantiates a new RateClassType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateClassTypeWithDefaults

`func NewRateClassTypeWithDefaults() *RateClassType`

NewRateClassTypeWithDefaults instantiates a new RateClassType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *RateClassType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RateClassType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RateClassType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RateClassType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *RateClassType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RateClassType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RateClassType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RateClassType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRateCategories

`func (o *RateClassType) GetRateCategories() SimpleRateCategoriesType`

GetRateCategories returns the RateCategories field if non-nil, zero value otherwise.

### GetRateCategoriesOk

`func (o *RateClassType) GetRateCategoriesOk() (*SimpleRateCategoriesType, bool)`

GetRateCategoriesOk returns a tuple with the RateCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCategories

`func (o *RateClassType) SetRateCategories(v SimpleRateCategoriesType)`

SetRateCategories sets RateCategories field to given value.

### HasRateCategories

`func (o *RateClassType) HasRateCategories() bool`

HasRateCategories returns a boolean if a field has been set.

### GetRateClass

`func (o *RateClassType) GetRateClass() string`

GetRateClass returns the RateClass field if non-nil, zero value otherwise.

### GetRateClassOk

`func (o *RateClassType) GetRateClassOk() (*string, bool)`

GetRateClassOk returns a tuple with the RateClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateClass

`func (o *RateClassType) SetRateClass(v string)`

SetRateClass sets RateClass field to given value.

### HasRateClass

`func (o *RateClassType) HasRateClass() bool`

HasRateClass returns a boolean if a field has been set.

### GetSequence

`func (o *RateClassType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *RateClassType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *RateClassType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *RateClassType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetTimeSpan

`func (o *RateClassType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *RateClassType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *RateClassType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *RateClassType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


