# TransactionCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TrxCodeUsages** | Pointer to [**[]TrxCodeUsageType**](TrxCodeUsageType.md) | Element on which the transaction code is being used. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransactionCodes

`func NewTransactionCodes() *TransactionCodes`

NewTransactionCodes instantiates a new TransactionCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionCodesWithDefaults

`func NewTransactionCodesWithDefaults() *TransactionCodes`

NewTransactionCodesWithDefaults instantiates a new TransactionCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TransactionCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrxCodeUsages

`func (o *TransactionCodes) GetTrxCodeUsages() []TrxCodeUsageType`

GetTrxCodeUsages returns the TrxCodeUsages field if non-nil, zero value otherwise.

### GetTrxCodeUsagesOk

`func (o *TransactionCodes) GetTrxCodeUsagesOk() (*[]TrxCodeUsageType, bool)`

GetTrxCodeUsagesOk returns a tuple with the TrxCodeUsages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodeUsages

`func (o *TransactionCodes) SetTrxCodeUsages(v []TrxCodeUsageType)`

SetTrxCodeUsages sets TrxCodeUsages field to given value.

### HasTrxCodeUsages

`func (o *TransactionCodes) HasTrxCodeUsages() bool`

HasTrxCodeUsages returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


