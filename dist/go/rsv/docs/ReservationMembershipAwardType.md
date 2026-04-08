# ReservationMembershipAwardType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipType** | Pointer to **string** | Membership type for which awards are defined. | [optional] 
**NameOnCard** | Pointer to **string** | Name to be displayed on the membership card. | [optional] 
**MembershipCardNo** | Pointer to **string** | The card number associated with this membership. | [optional] 
**AwardBasedOn** | Pointer to **string** | Indicates if the Award is based on RATE, PRODUCT or UPGRADE. | [optional] 
**AwardType** | Pointer to **string** | Unique code that identifies this award. | [optional] 
**PointsRequired** | Pointer to **float32** | Number of points required for the award. | [optional] 
**DateAwarded** | Pointer to **string** | Date when the award was issued. | [optional] 
**ArrivalDate** | Pointer to **string** | The arrival date of the stay for when the award is associated. | [optional] 
**AwardCancelDate** | Pointer to **string** | If the reservation associated with the award was cancelled, the reservation cancellation date appears here. | [optional] 
**CancelPenaltyDays** | Pointer to **float32** | The cancel days, set up in awards configuration that establishes the number of days before arrival when a reservation may be cancelled without an award points penalty. | [optional] 
**CancelPenaltyPoints** | Pointer to **float32** | The award points that will be deducted (based on a cancel days restriction) if the award is cancelled. (Cancel days, set up in awards configuration, and establish the number of days before arrival when a reservation may be cancelled without an award points penalty). | [optional] 
**ActualCancelPoints** | Pointer to **float32** | The number of points actually deducted from the member&#39;s total award points if there is a penalty points restriction associated with the award cancellation. | [optional] 
**AwardCancellationNo** | Pointer to **float32** | Unique ID for the award cancellation if cancelled. | [optional] 

## Methods

### NewReservationMembershipAwardType

`func NewReservationMembershipAwardType() *ReservationMembershipAwardType`

NewReservationMembershipAwardType instantiates a new ReservationMembershipAwardType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationMembershipAwardTypeWithDefaults

`func NewReservationMembershipAwardTypeWithDefaults() *ReservationMembershipAwardType`

NewReservationMembershipAwardTypeWithDefaults instantiates a new ReservationMembershipAwardType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipType

`func (o *ReservationMembershipAwardType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *ReservationMembershipAwardType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *ReservationMembershipAwardType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *ReservationMembershipAwardType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetNameOnCard

`func (o *ReservationMembershipAwardType) GetNameOnCard() string`

GetNameOnCard returns the NameOnCard field if non-nil, zero value otherwise.

### GetNameOnCardOk

`func (o *ReservationMembershipAwardType) GetNameOnCardOk() (*string, bool)`

GetNameOnCardOk returns a tuple with the NameOnCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameOnCard

`func (o *ReservationMembershipAwardType) SetNameOnCard(v string)`

SetNameOnCard sets NameOnCard field to given value.

### HasNameOnCard

`func (o *ReservationMembershipAwardType) HasNameOnCard() bool`

HasNameOnCard returns a boolean if a field has been set.

### GetMembershipCardNo

`func (o *ReservationMembershipAwardType) GetMembershipCardNo() string`

GetMembershipCardNo returns the MembershipCardNo field if non-nil, zero value otherwise.

### GetMembershipCardNoOk

`func (o *ReservationMembershipAwardType) GetMembershipCardNoOk() (*string, bool)`

GetMembershipCardNoOk returns a tuple with the MembershipCardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipCardNo

`func (o *ReservationMembershipAwardType) SetMembershipCardNo(v string)`

SetMembershipCardNo sets MembershipCardNo field to given value.

### HasMembershipCardNo

`func (o *ReservationMembershipAwardType) HasMembershipCardNo() bool`

HasMembershipCardNo returns a boolean if a field has been set.

### GetAwardBasedOn

`func (o *ReservationMembershipAwardType) GetAwardBasedOn() string`

GetAwardBasedOn returns the AwardBasedOn field if non-nil, zero value otherwise.

### GetAwardBasedOnOk

`func (o *ReservationMembershipAwardType) GetAwardBasedOnOk() (*string, bool)`

GetAwardBasedOnOk returns a tuple with the AwardBasedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardBasedOn

`func (o *ReservationMembershipAwardType) SetAwardBasedOn(v string)`

SetAwardBasedOn sets AwardBasedOn field to given value.

### HasAwardBasedOn

`func (o *ReservationMembershipAwardType) HasAwardBasedOn() bool`

HasAwardBasedOn returns a boolean if a field has been set.

### GetAwardType

`func (o *ReservationMembershipAwardType) GetAwardType() string`

GetAwardType returns the AwardType field if non-nil, zero value otherwise.

### GetAwardTypeOk

`func (o *ReservationMembershipAwardType) GetAwardTypeOk() (*string, bool)`

GetAwardTypeOk returns a tuple with the AwardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardType

`func (o *ReservationMembershipAwardType) SetAwardType(v string)`

SetAwardType sets AwardType field to given value.

### HasAwardType

`func (o *ReservationMembershipAwardType) HasAwardType() bool`

HasAwardType returns a boolean if a field has been set.

### GetPointsRequired

`func (o *ReservationMembershipAwardType) GetPointsRequired() float32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *ReservationMembershipAwardType) GetPointsRequiredOk() (*float32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *ReservationMembershipAwardType) SetPointsRequired(v float32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *ReservationMembershipAwardType) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetDateAwarded

`func (o *ReservationMembershipAwardType) GetDateAwarded() string`

GetDateAwarded returns the DateAwarded field if non-nil, zero value otherwise.

### GetDateAwardedOk

`func (o *ReservationMembershipAwardType) GetDateAwardedOk() (*string, bool)`

GetDateAwardedOk returns a tuple with the DateAwarded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateAwarded

`func (o *ReservationMembershipAwardType) SetDateAwarded(v string)`

SetDateAwarded sets DateAwarded field to given value.

### HasDateAwarded

`func (o *ReservationMembershipAwardType) HasDateAwarded() bool`

HasDateAwarded returns a boolean if a field has been set.

### GetArrivalDate

`func (o *ReservationMembershipAwardType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *ReservationMembershipAwardType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *ReservationMembershipAwardType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *ReservationMembershipAwardType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetAwardCancelDate

`func (o *ReservationMembershipAwardType) GetAwardCancelDate() string`

GetAwardCancelDate returns the AwardCancelDate field if non-nil, zero value otherwise.

### GetAwardCancelDateOk

`func (o *ReservationMembershipAwardType) GetAwardCancelDateOk() (*string, bool)`

GetAwardCancelDateOk returns a tuple with the AwardCancelDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCancelDate

`func (o *ReservationMembershipAwardType) SetAwardCancelDate(v string)`

SetAwardCancelDate sets AwardCancelDate field to given value.

### HasAwardCancelDate

`func (o *ReservationMembershipAwardType) HasAwardCancelDate() bool`

HasAwardCancelDate returns a boolean if a field has been set.

### GetCancelPenaltyDays

`func (o *ReservationMembershipAwardType) GetCancelPenaltyDays() float32`

GetCancelPenaltyDays returns the CancelPenaltyDays field if non-nil, zero value otherwise.

### GetCancelPenaltyDaysOk

`func (o *ReservationMembershipAwardType) GetCancelPenaltyDaysOk() (*float32, bool)`

GetCancelPenaltyDaysOk returns a tuple with the CancelPenaltyDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyDays

`func (o *ReservationMembershipAwardType) SetCancelPenaltyDays(v float32)`

SetCancelPenaltyDays sets CancelPenaltyDays field to given value.

### HasCancelPenaltyDays

`func (o *ReservationMembershipAwardType) HasCancelPenaltyDays() bool`

HasCancelPenaltyDays returns a boolean if a field has been set.

### GetCancelPenaltyPoints

`func (o *ReservationMembershipAwardType) GetCancelPenaltyPoints() float32`

GetCancelPenaltyPoints returns the CancelPenaltyPoints field if non-nil, zero value otherwise.

### GetCancelPenaltyPointsOk

`func (o *ReservationMembershipAwardType) GetCancelPenaltyPointsOk() (*float32, bool)`

GetCancelPenaltyPointsOk returns a tuple with the CancelPenaltyPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyPoints

`func (o *ReservationMembershipAwardType) SetCancelPenaltyPoints(v float32)`

SetCancelPenaltyPoints sets CancelPenaltyPoints field to given value.

### HasCancelPenaltyPoints

`func (o *ReservationMembershipAwardType) HasCancelPenaltyPoints() bool`

HasCancelPenaltyPoints returns a boolean if a field has been set.

### GetActualCancelPoints

`func (o *ReservationMembershipAwardType) GetActualCancelPoints() float32`

GetActualCancelPoints returns the ActualCancelPoints field if non-nil, zero value otherwise.

### GetActualCancelPointsOk

`func (o *ReservationMembershipAwardType) GetActualCancelPointsOk() (*float32, bool)`

GetActualCancelPointsOk returns a tuple with the ActualCancelPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualCancelPoints

`func (o *ReservationMembershipAwardType) SetActualCancelPoints(v float32)`

SetActualCancelPoints sets ActualCancelPoints field to given value.

### HasActualCancelPoints

`func (o *ReservationMembershipAwardType) HasActualCancelPoints() bool`

HasActualCancelPoints returns a boolean if a field has been set.

### GetAwardCancellationNo

`func (o *ReservationMembershipAwardType) GetAwardCancellationNo() float32`

GetAwardCancellationNo returns the AwardCancellationNo field if non-nil, zero value otherwise.

### GetAwardCancellationNoOk

`func (o *ReservationMembershipAwardType) GetAwardCancellationNoOk() (*float32, bool)`

GetAwardCancellationNoOk returns a tuple with the AwardCancellationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCancellationNo

`func (o *ReservationMembershipAwardType) SetAwardCancellationNo(v float32)`

SetAwardCancellationNo sets AwardCancellationNo field to given value.

### HasAwardCancellationNo

`func (o *ReservationMembershipAwardType) HasAwardCancellationNo() bool`

HasAwardCancellationNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


