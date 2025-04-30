# BatchZeroBalanceCheckoutDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProcessId** | Pointer to **string** | Used for Character Strings, length 0 to 40. | [optional] 
**ResvCount** | Pointer to **int32** | Zero balance Reservations count identifier. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBatchZeroBalanceCheckoutDetails

`func NewBatchZeroBalanceCheckoutDetails() *BatchZeroBalanceCheckoutDetails`

NewBatchZeroBalanceCheckoutDetails instantiates a new BatchZeroBalanceCheckoutDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchZeroBalanceCheckoutDetailsWithDefaults

`func NewBatchZeroBalanceCheckoutDetailsWithDefaults() *BatchZeroBalanceCheckoutDetails`

NewBatchZeroBalanceCheckoutDetailsWithDefaults instantiates a new BatchZeroBalanceCheckoutDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProcessId

`func (o *BatchZeroBalanceCheckoutDetails) GetProcessId() string`

GetProcessId returns the ProcessId field if non-nil, zero value otherwise.

### GetProcessIdOk

`func (o *BatchZeroBalanceCheckoutDetails) GetProcessIdOk() (*string, bool)`

GetProcessIdOk returns a tuple with the ProcessId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessId

`func (o *BatchZeroBalanceCheckoutDetails) SetProcessId(v string)`

SetProcessId sets ProcessId field to given value.

### HasProcessId

`func (o *BatchZeroBalanceCheckoutDetails) HasProcessId() bool`

HasProcessId returns a boolean if a field has been set.

### GetResvCount

`func (o *BatchZeroBalanceCheckoutDetails) GetResvCount() int32`

GetResvCount returns the ResvCount field if non-nil, zero value otherwise.

### GetResvCountOk

`func (o *BatchZeroBalanceCheckoutDetails) GetResvCountOk() (*int32, bool)`

GetResvCountOk returns a tuple with the ResvCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvCount

`func (o *BatchZeroBalanceCheckoutDetails) SetResvCount(v int32)`

SetResvCount sets ResvCount field to given value.

### HasResvCount

`func (o *BatchZeroBalanceCheckoutDetails) HasResvCount() bool`

HasResvCount returns a boolean if a field has been set.

### GetLinks

`func (o *BatchZeroBalanceCheckoutDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BatchZeroBalanceCheckoutDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BatchZeroBalanceCheckoutDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BatchZeroBalanceCheckoutDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BatchZeroBalanceCheckoutDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BatchZeroBalanceCheckoutDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BatchZeroBalanceCheckoutDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BatchZeroBalanceCheckoutDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


