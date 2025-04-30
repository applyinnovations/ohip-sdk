# ExtendedCashierLock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierLock** | Pointer to [**OperaRecordLock**](OperaRecordLock.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewExtendedCashierLock

`func NewExtendedCashierLock() *ExtendedCashierLock`

NewExtendedCashierLock instantiates a new ExtendedCashierLock object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExtendedCashierLockWithDefaults

`func NewExtendedCashierLockWithDefaults() *ExtendedCashierLock`

NewExtendedCashierLockWithDefaults instantiates a new ExtendedCashierLock object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierLock

`func (o *ExtendedCashierLock) GetCashierLock() OperaRecordLock`

GetCashierLock returns the CashierLock field if non-nil, zero value otherwise.

### GetCashierLockOk

`func (o *ExtendedCashierLock) GetCashierLockOk() (*OperaRecordLock, bool)`

GetCashierLockOk returns a tuple with the CashierLock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierLock

`func (o *ExtendedCashierLock) SetCashierLock(v OperaRecordLock)`

SetCashierLock sets CashierLock field to given value.

### HasCashierLock

`func (o *ExtendedCashierLock) HasCashierLock() bool`

HasCashierLock returns a boolean if a field has been set.

### GetLinks

`func (o *ExtendedCashierLock) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExtendedCashierLock) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExtendedCashierLock) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExtendedCashierLock) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ExtendedCashierLock) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExtendedCashierLock) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExtendedCashierLock) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExtendedCashierLock) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


