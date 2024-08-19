# CommissionSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AR** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**OnHold** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Potential** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ToBePaid** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewCommissionSummaryType

`func NewCommissionSummaryType() *CommissionSummaryType`

NewCommissionSummaryType instantiates a new CommissionSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionSummaryTypeWithDefaults

`func NewCommissionSummaryTypeWithDefaults() *CommissionSummaryType`

NewCommissionSummaryTypeWithDefaults instantiates a new CommissionSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAR

`func (o *CommissionSummaryType) GetAR() CurrencyAmountType`

GetAR returns the AR field if non-nil, zero value otherwise.

### GetAROk

`func (o *CommissionSummaryType) GetAROk() (*CurrencyAmountType, bool)`

GetAROk returns a tuple with the AR field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAR

`func (o *CommissionSummaryType) SetAR(v CurrencyAmountType)`

SetAR sets AR field to given value.

### HasAR

`func (o *CommissionSummaryType) HasAR() bool`

HasAR returns a boolean if a field has been set.

### GetOnHold

`func (o *CommissionSummaryType) GetOnHold() CurrencyAmountType`

GetOnHold returns the OnHold field if non-nil, zero value otherwise.

### GetOnHoldOk

`func (o *CommissionSummaryType) GetOnHoldOk() (*CurrencyAmountType, bool)`

GetOnHoldOk returns a tuple with the OnHold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnHold

`func (o *CommissionSummaryType) SetOnHold(v CurrencyAmountType)`

SetOnHold sets OnHold field to given value.

### HasOnHold

`func (o *CommissionSummaryType) HasOnHold() bool`

HasOnHold returns a boolean if a field has been set.

### GetPotential

`func (o *CommissionSummaryType) GetPotential() CurrencyAmountType`

GetPotential returns the Potential field if non-nil, zero value otherwise.

### GetPotentialOk

`func (o *CommissionSummaryType) GetPotentialOk() (*CurrencyAmountType, bool)`

GetPotentialOk returns a tuple with the Potential field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotential

`func (o *CommissionSummaryType) SetPotential(v CurrencyAmountType)`

SetPotential sets Potential field to given value.

### HasPotential

`func (o *CommissionSummaryType) HasPotential() bool`

HasPotential returns a boolean if a field has been set.

### GetToBePaid

`func (o *CommissionSummaryType) GetToBePaid() CurrencyAmountType`

GetToBePaid returns the ToBePaid field if non-nil, zero value otherwise.

### GetToBePaidOk

`func (o *CommissionSummaryType) GetToBePaidOk() (*CurrencyAmountType, bool)`

GetToBePaidOk returns a tuple with the ToBePaid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToBePaid

`func (o *CommissionSummaryType) SetToBePaid(v CurrencyAmountType)`

SetToBePaid sets ToBePaid field to given value.

### HasToBePaid

`func (o *CommissionSummaryType) HasToBePaid() bool`

HasToBePaid returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


