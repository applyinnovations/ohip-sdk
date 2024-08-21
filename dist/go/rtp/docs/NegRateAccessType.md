# NegRateAccessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionCode** | Pointer to **string** | Commission code for the negotiated rate. | [optional] 
**Discounts** | Pointer to [**[]ProfileDiscountType**](ProfileDiscountType.md) | List of discounts for the negotiated rate. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**NegotiatedRateOrder** | Pointer to **int32** | Sequence for the negotiated rate. | [optional] 
**NewTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 

## Methods

### NewNegRateAccessType

`func NewNegRateAccessType() *NegRateAccessType`

NewNegRateAccessType instantiates a new NegRateAccessType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNegRateAccessTypeWithDefaults

`func NewNegRateAccessTypeWithDefaults() *NegRateAccessType`

NewNegRateAccessTypeWithDefaults instantiates a new NegRateAccessType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionCode

`func (o *NegRateAccessType) GetCommissionCode() string`

GetCommissionCode returns the CommissionCode field if non-nil, zero value otherwise.

### GetCommissionCodeOk

`func (o *NegRateAccessType) GetCommissionCodeOk() (*string, bool)`

GetCommissionCodeOk returns a tuple with the CommissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCode

`func (o *NegRateAccessType) SetCommissionCode(v string)`

SetCommissionCode sets CommissionCode field to given value.

### HasCommissionCode

`func (o *NegRateAccessType) HasCommissionCode() bool`

HasCommissionCode returns a boolean if a field has been set.

### GetDiscounts

`func (o *NegRateAccessType) GetDiscounts() []ProfileDiscountType`

GetDiscounts returns the Discounts field if non-nil, zero value otherwise.

### GetDiscountsOk

`func (o *NegRateAccessType) GetDiscountsOk() (*[]ProfileDiscountType, bool)`

GetDiscountsOk returns a tuple with the Discounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscounts

`func (o *NegRateAccessType) SetDiscounts(v []ProfileDiscountType)`

SetDiscounts sets Discounts field to given value.

### HasDiscounts

`func (o *NegRateAccessType) HasDiscounts() bool`

HasDiscounts returns a boolean if a field has been set.

### GetEnd

`func (o *NegRateAccessType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *NegRateAccessType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *NegRateAccessType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *NegRateAccessType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetNegotiatedRateOrder

`func (o *NegRateAccessType) GetNegotiatedRateOrder() int32`

GetNegotiatedRateOrder returns the NegotiatedRateOrder field if non-nil, zero value otherwise.

### GetNegotiatedRateOrderOk

`func (o *NegRateAccessType) GetNegotiatedRateOrderOk() (*int32, bool)`

GetNegotiatedRateOrderOk returns a tuple with the NegotiatedRateOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedRateOrder

`func (o *NegRateAccessType) SetNegotiatedRateOrder(v int32)`

SetNegotiatedRateOrder sets NegotiatedRateOrder field to given value.

### HasNegotiatedRateOrder

`func (o *NegRateAccessType) HasNegotiatedRateOrder() bool`

HasNegotiatedRateOrder returns a boolean if a field has been set.

### GetNewTimeSpan

`func (o *NegRateAccessType) GetNewTimeSpan() TimeSpanType`

GetNewTimeSpan returns the NewTimeSpan field if non-nil, zero value otherwise.

### GetNewTimeSpanOk

`func (o *NegRateAccessType) GetNewTimeSpanOk() (*TimeSpanType, bool)`

GetNewTimeSpanOk returns a tuple with the NewTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewTimeSpan

`func (o *NegRateAccessType) SetNewTimeSpan(v TimeSpanType)`

SetNewTimeSpan sets NewTimeSpan field to given value.

### HasNewTimeSpan

`func (o *NegRateAccessType) HasNewTimeSpan() bool`

HasNewTimeSpan returns a boolean if a field has been set.

### GetStart

`func (o *NegRateAccessType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *NegRateAccessType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *NegRateAccessType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *NegRateAccessType) HasStart() bool`

HasStart returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


