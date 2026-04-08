# ReservationPoliciesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancellationPolicies** | Pointer to [**[]ResCancellationPolicyType**](ResCancellationPolicyType.md) | A list of reservation cancellation policies. | [optional] 
**DepositPolicies** | Pointer to [**[]ResDepositPolicyType**](ResDepositPolicyType.md) | A list of deposit policies attached with the reservation. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Name** | Pointer to **string** | Name identifier for the reservation. | [optional] 

## Methods

### NewReservationPoliciesType

`func NewReservationPoliciesType() *ReservationPoliciesType`

NewReservationPoliciesType instantiates a new ReservationPoliciesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationPoliciesTypeWithDefaults

`func NewReservationPoliciesTypeWithDefaults() *ReservationPoliciesType`

NewReservationPoliciesTypeWithDefaults instantiates a new ReservationPoliciesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancellationPolicies

`func (o *ReservationPoliciesType) GetCancellationPolicies() []ResCancellationPolicyType`

GetCancellationPolicies returns the CancellationPolicies field if non-nil, zero value otherwise.

### GetCancellationPoliciesOk

`func (o *ReservationPoliciesType) GetCancellationPoliciesOk() (*[]ResCancellationPolicyType, bool)`

GetCancellationPoliciesOk returns a tuple with the CancellationPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationPolicies

`func (o *ReservationPoliciesType) SetCancellationPolicies(v []ResCancellationPolicyType)`

SetCancellationPolicies sets CancellationPolicies field to given value.

### HasCancellationPolicies

`func (o *ReservationPoliciesType) HasCancellationPolicies() bool`

HasCancellationPolicies returns a boolean if a field has been set.

### GetDepositPolicies

`func (o *ReservationPoliciesType) GetDepositPolicies() []ResDepositPolicyType`

GetDepositPolicies returns the DepositPolicies field if non-nil, zero value otherwise.

### GetDepositPoliciesOk

`func (o *ReservationPoliciesType) GetDepositPoliciesOk() (*[]ResDepositPolicyType, bool)`

GetDepositPoliciesOk returns a tuple with the DepositPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositPolicies

`func (o *ReservationPoliciesType) SetDepositPolicies(v []ResDepositPolicyType)`

SetDepositPolicies sets DepositPolicies field to given value.

### HasDepositPolicies

`func (o *ReservationPoliciesType) HasDepositPolicies() bool`

HasDepositPolicies returns a boolean if a field has been set.

### GetReservationIdList

`func (o *ReservationPoliciesType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ReservationPoliciesType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ReservationPoliciesType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ReservationPoliciesType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetName

`func (o *ReservationPoliciesType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ReservationPoliciesType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ReservationPoliciesType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ReservationPoliciesType) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


