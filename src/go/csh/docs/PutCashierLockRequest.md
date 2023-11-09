# PutCashierLockRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalTimeToLive** | Pointer to **float32** | The number of seconds to add to the lock&#39;s validity time. | [optional] 
**CashierLockHandle** | Pointer to **float32** | The Cashier Lock Handle to pass along with operation which required cashier to be locked. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutCashierLockRequest

`func NewPutCashierLockRequest() *PutCashierLockRequest`

NewPutCashierLockRequest instantiates a new PutCashierLockRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCashierLockRequestWithDefaults

`func NewPutCashierLockRequestWithDefaults() *PutCashierLockRequest`

NewPutCashierLockRequestWithDefaults instantiates a new PutCashierLockRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalTimeToLive

`func (o *PutCashierLockRequest) GetAdditionalTimeToLive() float32`

GetAdditionalTimeToLive returns the AdditionalTimeToLive field if non-nil, zero value otherwise.

### GetAdditionalTimeToLiveOk

`func (o *PutCashierLockRequest) GetAdditionalTimeToLiveOk() (*float32, bool)`

GetAdditionalTimeToLiveOk returns a tuple with the AdditionalTimeToLive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalTimeToLive

`func (o *PutCashierLockRequest) SetAdditionalTimeToLive(v float32)`

SetAdditionalTimeToLive sets AdditionalTimeToLive field to given value.

### HasAdditionalTimeToLive

`func (o *PutCashierLockRequest) HasAdditionalTimeToLive() bool`

HasAdditionalTimeToLive returns a boolean if a field has been set.

### GetCashierLockHandle

`func (o *PutCashierLockRequest) GetCashierLockHandle() float32`

GetCashierLockHandle returns the CashierLockHandle field if non-nil, zero value otherwise.

### GetCashierLockHandleOk

`func (o *PutCashierLockRequest) GetCashierLockHandleOk() (*float32, bool)`

GetCashierLockHandleOk returns a tuple with the CashierLockHandle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierLockHandle

`func (o *PutCashierLockRequest) SetCashierLockHandle(v float32)`

SetCashierLockHandle sets CashierLockHandle field to given value.

### HasCashierLockHandle

`func (o *PutCashierLockRequest) HasCashierLockHandle() bool`

HasCashierLockHandle returns a boolean if a field has been set.

### GetLinks

`func (o *PutCashierLockRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutCashierLockRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutCashierLockRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutCashierLockRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutCashierLockRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutCashierLockRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutCashierLockRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutCashierLockRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


