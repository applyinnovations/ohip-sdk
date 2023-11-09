# ARInvoiceCriteriaTypeAdditionalFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | Cashier Id of the Cashier. | [optional] 
**CheckNumberWildCard** | Pointer to **string** | Lookup string which will try to match an existing Cheque number&#39;s. | [optional] 
**DateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**ReferenceWildCard** | Pointer to **string** | Filters the results for reference. | [optional] 
**SupplementWildCard** | Pointer to **string** | Filter the results for supplement. | [optional] 
**TransactionCode** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**TransactionSubGroup** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 

## Methods

### NewARInvoiceCriteriaTypeAdditionalFilter

`func NewARInvoiceCriteriaTypeAdditionalFilter() *ARInvoiceCriteriaTypeAdditionalFilter`

NewARInvoiceCriteriaTypeAdditionalFilter instantiates a new ARInvoiceCriteriaTypeAdditionalFilter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARInvoiceCriteriaTypeAdditionalFilterWithDefaults

`func NewARInvoiceCriteriaTypeAdditionalFilterWithDefaults() *ARInvoiceCriteriaTypeAdditionalFilter`

NewARInvoiceCriteriaTypeAdditionalFilterWithDefaults instantiates a new ARInvoiceCriteriaTypeAdditionalFilter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCheckNumberWildCard

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetCheckNumberWildCard() string`

GetCheckNumberWildCard returns the CheckNumberWildCard field if non-nil, zero value otherwise.

### GetCheckNumberWildCardOk

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetCheckNumberWildCardOk() (*string, bool)`

GetCheckNumberWildCardOk returns a tuple with the CheckNumberWildCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNumberWildCard

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) SetCheckNumberWildCard(v string)`

SetCheckNumberWildCard sets CheckNumberWildCard field to given value.

### HasCheckNumberWildCard

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) HasCheckNumberWildCard() bool`

HasCheckNumberWildCard returns a boolean if a field has been set.

### GetDateRange

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetDateRange() DateRangeType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetDateRangeOk() (*DateRangeType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) SetDateRange(v DateRangeType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetReferenceWildCard

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetReferenceWildCard() string`

GetReferenceWildCard returns the ReferenceWildCard field if non-nil, zero value otherwise.

### GetReferenceWildCardOk

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetReferenceWildCardOk() (*string, bool)`

GetReferenceWildCardOk returns a tuple with the ReferenceWildCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceWildCard

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) SetReferenceWildCard(v string)`

SetReferenceWildCard sets ReferenceWildCard field to given value.

### HasReferenceWildCard

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) HasReferenceWildCard() bool`

HasReferenceWildCard returns a boolean if a field has been set.

### GetSupplementWildCard

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetSupplementWildCard() string`

GetSupplementWildCard returns the SupplementWildCard field if non-nil, zero value otherwise.

### GetSupplementWildCardOk

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetSupplementWildCardOk() (*string, bool)`

GetSupplementWildCardOk returns a tuple with the SupplementWildCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupplementWildCard

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) SetSupplementWildCard(v string)`

SetSupplementWildCard sets SupplementWildCard field to given value.

### HasSupplementWildCard

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) HasSupplementWildCard() bool`

HasSupplementWildCard returns a boolean if a field has been set.

### GetTransactionCode

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetTransactionCode() CodeListType`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetTransactionCodeOk() (*CodeListType, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) SetTransactionCode(v CodeListType)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionSubGroup

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetTransactionSubGroup() CodeListType`

GetTransactionSubGroup returns the TransactionSubGroup field if non-nil, zero value otherwise.

### GetTransactionSubGroupOk

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) GetTransactionSubGroupOk() (*CodeListType, bool)`

GetTransactionSubGroupOk returns a tuple with the TransactionSubGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionSubGroup

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) SetTransactionSubGroup(v CodeListType)`

SetTransactionSubGroup sets TransactionSubGroup field to given value.

### HasTransactionSubGroup

`func (o *ARInvoiceCriteriaTypeAdditionalFilter) HasTransactionSubGroup() bool`

HasTransactionSubGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


