# ReservationPolicies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancellationPolicies** | Pointer to [**[]ResCancellationPolicyType**](ResCancellationPolicyType.md) | A list of reservation cancellation policies. | [optional] 
**DepositPolicies** | Pointer to [**[]ResDepositPolicyType**](ResDepositPolicyType.md) | A list of deposit policies attached with the reservation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationPolicies

`func NewReservationPolicies() *ReservationPolicies`

NewReservationPolicies instantiates a new ReservationPolicies object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationPoliciesWithDefaults

`func NewReservationPoliciesWithDefaults() *ReservationPolicies`

NewReservationPoliciesWithDefaults instantiates a new ReservationPolicies object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancellationPolicies

`func (o *ReservationPolicies) GetCancellationPolicies() []ResCancellationPolicyType`

GetCancellationPolicies returns the CancellationPolicies field if non-nil, zero value otherwise.

### GetCancellationPoliciesOk

`func (o *ReservationPolicies) GetCancellationPoliciesOk() (*[]ResCancellationPolicyType, bool)`

GetCancellationPoliciesOk returns a tuple with the CancellationPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationPolicies

`func (o *ReservationPolicies) SetCancellationPolicies(v []ResCancellationPolicyType)`

SetCancellationPolicies sets CancellationPolicies field to given value.

### HasCancellationPolicies

`func (o *ReservationPolicies) HasCancellationPolicies() bool`

HasCancellationPolicies returns a boolean if a field has been set.

### GetDepositPolicies

`func (o *ReservationPolicies) GetDepositPolicies() []ResDepositPolicyType`

GetDepositPolicies returns the DepositPolicies field if non-nil, zero value otherwise.

### GetDepositPoliciesOk

`func (o *ReservationPolicies) GetDepositPoliciesOk() (*[]ResDepositPolicyType, bool)`

GetDepositPoliciesOk returns a tuple with the DepositPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositPolicies

`func (o *ReservationPolicies) SetDepositPolicies(v []ResDepositPolicyType)`

SetDepositPolicies sets DepositPolicies field to given value.

### HasDepositPolicies

`func (o *ReservationPolicies) HasDepositPolicies() bool`

HasDepositPolicies returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationPolicies) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationPolicies) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationPolicies) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationPolicies) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationPolicies) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationPolicies) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationPolicies) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationPolicies) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


