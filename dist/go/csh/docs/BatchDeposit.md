# BatchDeposit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchDeposit** | Pointer to [**BatchDepositType**](BatchDepositType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBatchDeposit

`func NewBatchDeposit() *BatchDeposit`

NewBatchDeposit instantiates a new BatchDeposit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchDepositWithDefaults

`func NewBatchDepositWithDefaults() *BatchDeposit`

NewBatchDepositWithDefaults instantiates a new BatchDeposit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchDeposit

`func (o *BatchDeposit) GetBatchDeposit() BatchDepositType`

GetBatchDeposit returns the BatchDeposit field if non-nil, zero value otherwise.

### GetBatchDepositOk

`func (o *BatchDeposit) GetBatchDepositOk() (*BatchDepositType, bool)`

GetBatchDepositOk returns a tuple with the BatchDeposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchDeposit

`func (o *BatchDeposit) SetBatchDeposit(v BatchDepositType)`

SetBatchDeposit sets BatchDeposit field to given value.

### HasBatchDeposit

`func (o *BatchDeposit) HasBatchDeposit() bool`

HasBatchDeposit returns a boolean if a field has been set.

### GetLinks

`func (o *BatchDeposit) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BatchDeposit) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BatchDeposit) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BatchDeposit) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BatchDeposit) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BatchDeposit) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BatchDeposit) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BatchDeposit) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


