# MembershipAwardUpgradeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelPenaltyDays** | Pointer to **float32** | If a reservation is booked using award points, this is the number of days before the arrival date by which the reservation may be cancelled without penalty. Zero indicates that the reservation may be cancelled any time up to and including the arrival date without incurring a penalty. | [optional] 
**CancelPenaltyCharge** | Pointer to **float32** | The flat number of award points, or the percentage of the award points, that are forfeited if the guest cancels the reservation fewer than the number of days specified in Cancel Penalty Days before the arrival date. | [optional] 
**CancelPenaltyType** | Pointer to [**MembershipAwardCancelPenaltyType**](MembershipAwardCancelPenaltyType.md) |  | [optional] 
**CancelPolicyType** | Pointer to [**MembershipAwardCancelPolicyType**](MembershipAwardCancelPolicyType.md) |  | [optional] 
**NumberOfNights** | Pointer to **int32** | Number of nights cancel policy is applicable. | [optional] 
**BasedOnRoomGroup** | Pointer to **bool** | Indicates if the membership award upgrade is based on room category (N) or room category group (Y). | [optional] 

## Methods

### NewMembershipAwardUpgradeInfoType

`func NewMembershipAwardUpgradeInfoType() *MembershipAwardUpgradeInfoType`

NewMembershipAwardUpgradeInfoType instantiates a new MembershipAwardUpgradeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipAwardUpgradeInfoTypeWithDefaults

`func NewMembershipAwardUpgradeInfoTypeWithDefaults() *MembershipAwardUpgradeInfoType`

NewMembershipAwardUpgradeInfoTypeWithDefaults instantiates a new MembershipAwardUpgradeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancelPenaltyDays

`func (o *MembershipAwardUpgradeInfoType) GetCancelPenaltyDays() float32`

GetCancelPenaltyDays returns the CancelPenaltyDays field if non-nil, zero value otherwise.

### GetCancelPenaltyDaysOk

`func (o *MembershipAwardUpgradeInfoType) GetCancelPenaltyDaysOk() (*float32, bool)`

GetCancelPenaltyDaysOk returns a tuple with the CancelPenaltyDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyDays

`func (o *MembershipAwardUpgradeInfoType) SetCancelPenaltyDays(v float32)`

SetCancelPenaltyDays sets CancelPenaltyDays field to given value.

### HasCancelPenaltyDays

`func (o *MembershipAwardUpgradeInfoType) HasCancelPenaltyDays() bool`

HasCancelPenaltyDays returns a boolean if a field has been set.

### GetCancelPenaltyCharge

`func (o *MembershipAwardUpgradeInfoType) GetCancelPenaltyCharge() float32`

GetCancelPenaltyCharge returns the CancelPenaltyCharge field if non-nil, zero value otherwise.

### GetCancelPenaltyChargeOk

`func (o *MembershipAwardUpgradeInfoType) GetCancelPenaltyChargeOk() (*float32, bool)`

GetCancelPenaltyChargeOk returns a tuple with the CancelPenaltyCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyCharge

`func (o *MembershipAwardUpgradeInfoType) SetCancelPenaltyCharge(v float32)`

SetCancelPenaltyCharge sets CancelPenaltyCharge field to given value.

### HasCancelPenaltyCharge

`func (o *MembershipAwardUpgradeInfoType) HasCancelPenaltyCharge() bool`

HasCancelPenaltyCharge returns a boolean if a field has been set.

### GetCancelPenaltyType

`func (o *MembershipAwardUpgradeInfoType) GetCancelPenaltyType() MembershipAwardCancelPenaltyType`

GetCancelPenaltyType returns the CancelPenaltyType field if non-nil, zero value otherwise.

### GetCancelPenaltyTypeOk

`func (o *MembershipAwardUpgradeInfoType) GetCancelPenaltyTypeOk() (*MembershipAwardCancelPenaltyType, bool)`

GetCancelPenaltyTypeOk returns a tuple with the CancelPenaltyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyType

`func (o *MembershipAwardUpgradeInfoType) SetCancelPenaltyType(v MembershipAwardCancelPenaltyType)`

SetCancelPenaltyType sets CancelPenaltyType field to given value.

### HasCancelPenaltyType

`func (o *MembershipAwardUpgradeInfoType) HasCancelPenaltyType() bool`

HasCancelPenaltyType returns a boolean if a field has been set.

### GetCancelPolicyType

`func (o *MembershipAwardUpgradeInfoType) GetCancelPolicyType() MembershipAwardCancelPolicyType`

GetCancelPolicyType returns the CancelPolicyType field if non-nil, zero value otherwise.

### GetCancelPolicyTypeOk

`func (o *MembershipAwardUpgradeInfoType) GetCancelPolicyTypeOk() (*MembershipAwardCancelPolicyType, bool)`

GetCancelPolicyTypeOk returns a tuple with the CancelPolicyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPolicyType

`func (o *MembershipAwardUpgradeInfoType) SetCancelPolicyType(v MembershipAwardCancelPolicyType)`

SetCancelPolicyType sets CancelPolicyType field to given value.

### HasCancelPolicyType

`func (o *MembershipAwardUpgradeInfoType) HasCancelPolicyType() bool`

HasCancelPolicyType returns a boolean if a field has been set.

### GetNumberOfNights

`func (o *MembershipAwardUpgradeInfoType) GetNumberOfNights() int32`

GetNumberOfNights returns the NumberOfNights field if non-nil, zero value otherwise.

### GetNumberOfNightsOk

`func (o *MembershipAwardUpgradeInfoType) GetNumberOfNightsOk() (*int32, bool)`

GetNumberOfNightsOk returns a tuple with the NumberOfNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfNights

`func (o *MembershipAwardUpgradeInfoType) SetNumberOfNights(v int32)`

SetNumberOfNights sets NumberOfNights field to given value.

### HasNumberOfNights

`func (o *MembershipAwardUpgradeInfoType) HasNumberOfNights() bool`

HasNumberOfNights returns a boolean if a field has been set.

### GetBasedOnRoomGroup

`func (o *MembershipAwardUpgradeInfoType) GetBasedOnRoomGroup() bool`

GetBasedOnRoomGroup returns the BasedOnRoomGroup field if non-nil, zero value otherwise.

### GetBasedOnRoomGroupOk

`func (o *MembershipAwardUpgradeInfoType) GetBasedOnRoomGroupOk() (*bool, bool)`

GetBasedOnRoomGroupOk returns a tuple with the BasedOnRoomGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasedOnRoomGroup

`func (o *MembershipAwardUpgradeInfoType) SetBasedOnRoomGroup(v bool)`

SetBasedOnRoomGroup sets BasedOnRoomGroup field to given value.

### HasBasedOnRoomGroup

`func (o *MembershipAwardUpgradeInfoType) HasBasedOnRoomGroup() bool`

HasBasedOnRoomGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


