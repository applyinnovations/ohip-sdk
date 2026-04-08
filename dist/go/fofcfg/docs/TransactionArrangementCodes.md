# TransactionArrangementCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionArrangementCodes** | Pointer to [**[]TransactionArrangementCodeType**](TransactionArrangementCodeType.md) | Contains transaction codes along with associated arrangement codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransactionArrangementCodes

`func NewTransactionArrangementCodes() *TransactionArrangementCodes`

NewTransactionArrangementCodes instantiates a new TransactionArrangementCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionArrangementCodesWithDefaults

`func NewTransactionArrangementCodesWithDefaults() *TransactionArrangementCodes`

NewTransactionArrangementCodesWithDefaults instantiates a new TransactionArrangementCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionArrangementCodes

`func (o *TransactionArrangementCodes) GetTransactionArrangementCodes() []TransactionArrangementCodeType`

GetTransactionArrangementCodes returns the TransactionArrangementCodes field if non-nil, zero value otherwise.

### GetTransactionArrangementCodesOk

`func (o *TransactionArrangementCodes) GetTransactionArrangementCodesOk() (*[]TransactionArrangementCodeType, bool)`

GetTransactionArrangementCodesOk returns a tuple with the TransactionArrangementCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionArrangementCodes

`func (o *TransactionArrangementCodes) SetTransactionArrangementCodes(v []TransactionArrangementCodeType)`

SetTransactionArrangementCodes sets TransactionArrangementCodes field to given value.

### HasTransactionArrangementCodes

`func (o *TransactionArrangementCodes) HasTransactionArrangementCodes() bool`

HasTransactionArrangementCodes returns a boolean if a field has been set.

### GetLinks

`func (o *TransactionArrangementCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionArrangementCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionArrangementCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionArrangementCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionArrangementCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionArrangementCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionArrangementCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionArrangementCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


