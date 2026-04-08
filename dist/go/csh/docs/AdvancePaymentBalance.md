# AdvancePaymentBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PaymentBalance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAdvancePaymentBalance

`func NewAdvancePaymentBalance() *AdvancePaymentBalance`

NewAdvancePaymentBalance instantiates a new AdvancePaymentBalance object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdvancePaymentBalanceWithDefaults

`func NewAdvancePaymentBalanceWithDefaults() *AdvancePaymentBalance`

NewAdvancePaymentBalanceWithDefaults instantiates a new AdvancePaymentBalance object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPaymentBalance

`func (o *AdvancePaymentBalance) GetPaymentBalance() CurrencyAmountType`

GetPaymentBalance returns the PaymentBalance field if non-nil, zero value otherwise.

### GetPaymentBalanceOk

`func (o *AdvancePaymentBalance) GetPaymentBalanceOk() (*CurrencyAmountType, bool)`

GetPaymentBalanceOk returns a tuple with the PaymentBalance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentBalance

`func (o *AdvancePaymentBalance) SetPaymentBalance(v CurrencyAmountType)`

SetPaymentBalance sets PaymentBalance field to given value.

### HasPaymentBalance

`func (o *AdvancePaymentBalance) HasPaymentBalance() bool`

HasPaymentBalance returns a boolean if a field has been set.

### GetLinks

`func (o *AdvancePaymentBalance) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AdvancePaymentBalance) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AdvancePaymentBalance) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AdvancePaymentBalance) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AdvancePaymentBalance) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AdvancePaymentBalance) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AdvancePaymentBalance) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AdvancePaymentBalance) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


