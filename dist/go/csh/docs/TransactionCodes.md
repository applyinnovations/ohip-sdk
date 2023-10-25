# TransactionCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TrxCodes** | Pointer to [**[]TrxPostingInfoType**](TrxPostingInfoType.md) | List of TransactionCodes | [optional] 
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

### GetTrxCodes

`func (o *TransactionCodes) GetTrxCodes() []TrxPostingInfoType`

GetTrxCodes returns the TrxCodes field if non-nil, zero value otherwise.

### GetTrxCodesOk

`func (o *TransactionCodes) GetTrxCodesOk() (*[]TrxPostingInfoType, bool)`

GetTrxCodesOk returns a tuple with the TrxCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodes

`func (o *TransactionCodes) SetTrxCodes(v []TrxPostingInfoType)`

SetTrxCodes sets TrxCodes field to given value.

### HasTrxCodes

`func (o *TransactionCodes) HasTrxCodes() bool`

HasTrxCodes returns a boolean if a field has been set.

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


