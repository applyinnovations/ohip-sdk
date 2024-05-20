# RoundingDifferenceAmountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property where the payment is being posted. | [optional] 
**RoundingDifference** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewRoundingDifferenceAmountType

`func NewRoundingDifferenceAmountType() *RoundingDifferenceAmountType`

NewRoundingDifferenceAmountType instantiates a new RoundingDifferenceAmountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoundingDifferenceAmountTypeWithDefaults

`func NewRoundingDifferenceAmountTypeWithDefaults() *RoundingDifferenceAmountType`

NewRoundingDifferenceAmountTypeWithDefaults instantiates a new RoundingDifferenceAmountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *RoundingDifferenceAmountType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *RoundingDifferenceAmountType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *RoundingDifferenceAmountType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *RoundingDifferenceAmountType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetHotelId

`func (o *RoundingDifferenceAmountType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoundingDifferenceAmountType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoundingDifferenceAmountType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoundingDifferenceAmountType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoundingDifference

`func (o *RoundingDifferenceAmountType) GetRoundingDifference() CurrencyAmountType`

GetRoundingDifference returns the RoundingDifference field if non-nil, zero value otherwise.

### GetRoundingDifferenceOk

`func (o *RoundingDifferenceAmountType) GetRoundingDifferenceOk() (*CurrencyAmountType, bool)`

GetRoundingDifferenceOk returns a tuple with the RoundingDifference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoundingDifference

`func (o *RoundingDifferenceAmountType) SetRoundingDifference(v CurrencyAmountType)`

SetRoundingDifference sets RoundingDifference field to given value.

### HasRoundingDifference

`func (o *RoundingDifferenceAmountType) HasRoundingDifference() bool`

HasRoundingDifference returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


