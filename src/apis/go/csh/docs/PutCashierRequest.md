# PutCashierRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**CashierClosureType**](CashierClosureType.md) |  | [optional] 
**CashierLockHandle** | Pointer to **float32** | The Cashier Lock Handle to pass along with operation which required cashier to be locked. | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutCashierRequest

`func NewPutCashierRequest() *PutCashierRequest`

NewPutCashierRequest instantiates a new PutCashierRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCashierRequestWithDefaults

`func NewPutCashierRequestWithDefaults() *PutCashierRequest`

NewPutCashierRequestWithDefaults instantiates a new PutCashierRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *PutCashierRequest) GetCriteria() CashierClosureType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PutCashierRequest) GetCriteriaOk() (*CashierClosureType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PutCashierRequest) SetCriteria(v CashierClosureType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PutCashierRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetCashierLockHandle

`func (o *PutCashierRequest) GetCashierLockHandle() float32`

GetCashierLockHandle returns the CashierLockHandle field if non-nil, zero value otherwise.

### GetCashierLockHandleOk

`func (o *PutCashierRequest) GetCashierLockHandleOk() (*float32, bool)`

GetCashierLockHandleOk returns a tuple with the CashierLockHandle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierLockHandle

`func (o *PutCashierRequest) SetCashierLockHandle(v float32)`

SetCashierLockHandle sets CashierLockHandle field to given value.

### HasCashierLockHandle

`func (o *PutCashierRequest) HasCashierLockHandle() bool`

HasCashierLockHandle returns a boolean if a field has been set.

### GetHotelId

`func (o *PutCashierRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PutCashierRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PutCashierRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PutCashierRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PutCashierRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutCashierRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutCashierRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutCashierRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutCashierRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutCashierRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutCashierRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutCashierRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


