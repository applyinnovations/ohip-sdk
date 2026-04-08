# AlternateAvailDateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Date** | Pointer to **string** | A specific date from the alternate dates. | [optional] 
**Status** | Pointer to [**AvailabilityStatusType**](AvailabilityStatusType.md) |  | [optional] 

## Methods

### NewAlternateAvailDateType

`func NewAlternateAvailDateType() *AlternateAvailDateType`

NewAlternateAvailDateType instantiates a new AlternateAvailDateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlternateAvailDateTypeWithDefaults

`func NewAlternateAvailDateTypeWithDefaults() *AlternateAvailDateType`

NewAlternateAvailDateTypeWithDefaults instantiates a new AlternateAvailDateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateAmount

`func (o *AlternateAvailDateType) GetRateAmount() CurrencyAmountType`

GetRateAmount returns the RateAmount field if non-nil, zero value otherwise.

### GetRateAmountOk

`func (o *AlternateAvailDateType) GetRateAmountOk() (*CurrencyAmountType, bool)`

GetRateAmountOk returns a tuple with the RateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmount

`func (o *AlternateAvailDateType) SetRateAmount(v CurrencyAmountType)`

SetRateAmount sets RateAmount field to given value.

### HasRateAmount

`func (o *AlternateAvailDateType) HasRateAmount() bool`

HasRateAmount returns a boolean if a field has been set.

### GetDate

`func (o *AlternateAvailDateType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *AlternateAvailDateType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *AlternateAvailDateType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *AlternateAvailDateType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetStatus

`func (o *AlternateAvailDateType) GetStatus() AvailabilityStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AlternateAvailDateType) GetStatusOk() (*AvailabilityStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AlternateAvailDateType) SetStatus(v AvailabilityStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AlternateAvailDateType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


