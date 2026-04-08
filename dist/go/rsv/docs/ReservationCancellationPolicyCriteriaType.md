# ReservationCancellationPolicyCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueType** | Pointer to [**DepositCancelRevenueType**](DepositCancelRevenueType.md) |  | [optional] 
**Policy** | Pointer to [**ResCancelPenaltyType**](ResCancelPenaltyType.md) |  | [optional] 
**PercentageDue** | Pointer to **float32** | The percentage amount due for reservation cancellation. | [optional] 
**Comments** | Pointer to **string** | Comments attached with the reservation cancellation. | [optional] 
**PolicyId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property where the reservation exists. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 

## Methods

### NewReservationCancellationPolicyCriteriaType

`func NewReservationCancellationPolicyCriteriaType() *ReservationCancellationPolicyCriteriaType`

NewReservationCancellationPolicyCriteriaType instantiates a new ReservationCancellationPolicyCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationCancellationPolicyCriteriaTypeWithDefaults

`func NewReservationCancellationPolicyCriteriaTypeWithDefaults() *ReservationCancellationPolicyCriteriaType`

NewReservationCancellationPolicyCriteriaTypeWithDefaults instantiates a new ReservationCancellationPolicyCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueType

`func (o *ReservationCancellationPolicyCriteriaType) GetRevenueType() DepositCancelRevenueType`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *ReservationCancellationPolicyCriteriaType) GetRevenueTypeOk() (*DepositCancelRevenueType, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *ReservationCancellationPolicyCriteriaType) SetRevenueType(v DepositCancelRevenueType)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *ReservationCancellationPolicyCriteriaType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetPolicy

`func (o *ReservationCancellationPolicyCriteriaType) GetPolicy() ResCancelPenaltyType`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *ReservationCancellationPolicyCriteriaType) GetPolicyOk() (*ResCancelPenaltyType, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *ReservationCancellationPolicyCriteriaType) SetPolicy(v ResCancelPenaltyType)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *ReservationCancellationPolicyCriteriaType) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetPercentageDue

`func (o *ReservationCancellationPolicyCriteriaType) GetPercentageDue() float32`

GetPercentageDue returns the PercentageDue field if non-nil, zero value otherwise.

### GetPercentageDueOk

`func (o *ReservationCancellationPolicyCriteriaType) GetPercentageDueOk() (*float32, bool)`

GetPercentageDueOk returns a tuple with the PercentageDue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageDue

`func (o *ReservationCancellationPolicyCriteriaType) SetPercentageDue(v float32)`

SetPercentageDue sets PercentageDue field to given value.

### HasPercentageDue

`func (o *ReservationCancellationPolicyCriteriaType) HasPercentageDue() bool`

HasPercentageDue returns a boolean if a field has been set.

### GetComments

`func (o *ReservationCancellationPolicyCriteriaType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *ReservationCancellationPolicyCriteriaType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *ReservationCancellationPolicyCriteriaType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *ReservationCancellationPolicyCriteriaType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetPolicyId

`func (o *ReservationCancellationPolicyCriteriaType) GetPolicyId() UniqueIDType`

GetPolicyId returns the PolicyId field if non-nil, zero value otherwise.

### GetPolicyIdOk

`func (o *ReservationCancellationPolicyCriteriaType) GetPolicyIdOk() (*UniqueIDType, bool)`

GetPolicyIdOk returns a tuple with the PolicyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyId

`func (o *ReservationCancellationPolicyCriteriaType) SetPolicyId(v UniqueIDType)`

SetPolicyId sets PolicyId field to given value.

### HasPolicyId

`func (o *ReservationCancellationPolicyCriteriaType) HasPolicyId() bool`

HasPolicyId returns a boolean if a field has been set.

### GetHotelId

`func (o *ReservationCancellationPolicyCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationCancellationPolicyCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationCancellationPolicyCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationCancellationPolicyCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationCancellationPolicyCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationCancellationPolicyCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationCancellationPolicyCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationCancellationPolicyCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


