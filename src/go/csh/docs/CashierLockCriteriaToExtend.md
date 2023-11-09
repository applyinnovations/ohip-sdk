# CashierLockCriteriaToExtend

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalTimeToLive** | Pointer to **float32** | The number of seconds to add to the lock&#39;s validity time. | [optional] 
**CashierLockHandle** | Pointer to **float32** | The Cashier Lock Handle to pass along with operation which required cashier to be locked. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCashierLockCriteriaToExtend

`func NewCashierLockCriteriaToExtend() *CashierLockCriteriaToExtend`

NewCashierLockCriteriaToExtend instantiates a new CashierLockCriteriaToExtend object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashierLockCriteriaToExtendWithDefaults

`func NewCashierLockCriteriaToExtendWithDefaults() *CashierLockCriteriaToExtend`

NewCashierLockCriteriaToExtendWithDefaults instantiates a new CashierLockCriteriaToExtend object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalTimeToLive

`func (o *CashierLockCriteriaToExtend) GetAdditionalTimeToLive() float32`

GetAdditionalTimeToLive returns the AdditionalTimeToLive field if non-nil, zero value otherwise.

### GetAdditionalTimeToLiveOk

`func (o *CashierLockCriteriaToExtend) GetAdditionalTimeToLiveOk() (*float32, bool)`

GetAdditionalTimeToLiveOk returns a tuple with the AdditionalTimeToLive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalTimeToLive

`func (o *CashierLockCriteriaToExtend) SetAdditionalTimeToLive(v float32)`

SetAdditionalTimeToLive sets AdditionalTimeToLive field to given value.

### HasAdditionalTimeToLive

`func (o *CashierLockCriteriaToExtend) HasAdditionalTimeToLive() bool`

HasAdditionalTimeToLive returns a boolean if a field has been set.

### GetCashierLockHandle

`func (o *CashierLockCriteriaToExtend) GetCashierLockHandle() float32`

GetCashierLockHandle returns the CashierLockHandle field if non-nil, zero value otherwise.

### GetCashierLockHandleOk

`func (o *CashierLockCriteriaToExtend) GetCashierLockHandleOk() (*float32, bool)`

GetCashierLockHandleOk returns a tuple with the CashierLockHandle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierLockHandle

`func (o *CashierLockCriteriaToExtend) SetCashierLockHandle(v float32)`

SetCashierLockHandle sets CashierLockHandle field to given value.

### HasCashierLockHandle

`func (o *CashierLockCriteriaToExtend) HasCashierLockHandle() bool`

HasCashierLockHandle returns a boolean if a field has been set.

### GetLinks

`func (o *CashierLockCriteriaToExtend) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CashierLockCriteriaToExtend) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CashierLockCriteriaToExtend) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CashierLockCriteriaToExtend) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CashierLockCriteriaToExtend) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CashierLockCriteriaToExtend) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CashierLockCriteriaToExtend) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CashierLockCriteriaToExtend) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


