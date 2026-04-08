# MembershipAwardListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipId** | Pointer to **float32** | Card number of the membership. | [optional] 
**MembershipType** | Pointer to **string** | Membership type for which awards are defined. | [optional] 
**MembershipLevel** | Pointer to **string** | Level of this Membership Type. | [optional] 
**NameOnCard** | Pointer to **string** | Name to be displayed on the membership card. | [optional] 
**JoinDate** | Pointer to **string** | Joined date on the Card. | [optional] 
**ExpireDate** | Pointer to **string** | Expiry date on the Card. | [optional] 
**MembershipCardNo** | Pointer to **string** | Indicates Membership Card Number. | [optional] 
**TotalAvailablePoints** | Pointer to **float32** | Total award points available for redemption. | [optional] 
**HotelId** | Pointer to **string** | Property at which the award was issued. | [optional] 
**AwardNumber** | Pointer to **float32** | An identifying number of the award, assigned by the system when the award was issued. | [optional] 
**AwardPoints** | Pointer to **float32** | Number of points required by the award. | [optional] 
**ThresholdPoints** | Pointer to **float32** | Indicates member is below the threshold limit or not to request award. | [optional] 
**AwardCode** | Pointer to **string** | Code assigned to this membership award. | [optional] 
**CancelDays** | Pointer to **int32** | The cancel days, set up in awards configuration that establishes the number of days before arrival when a reservation may be cancelled without an award points penalty. | [optional] 
**DateAwarded** | Pointer to **string** | Date when the award was issued | [optional] 
**BookingNumber** | Pointer to **string** | Reservation confirmation number. | [optional] 
**HotelBookingNumber** | Pointer to **string** | Property Reservation number. | [optional] 
**ArrivalDate** | Pointer to **string** | The arrival date of the stay for when the award is associated. | [optional] 
**CancelPenaltyPoints** | Pointer to **int32** | The award points that will be deducted (based on a cancel days restriction) if the award is cancelled. (Cancel days, set up in awards configuration, and establish the number of days before arrival when a reservation may be cancelled without an award points penalty.) | [optional] 
**AwardCancellationNumber** | Pointer to **int32** | If the award was cancelled, the system-generated award cancellation number appears here. | [optional] 
**AwardCancelDate** | Pointer to **string** | If the reservation associated with the award was cancelled, the reservation cancellation date appears here. | [optional] 
**ActualCancelPoints** | Pointer to **float32** | The number of points actually deducted from the member&#39;s total award points if there is a penalty points restriction associated with the award cancellation. | [optional] 
**ReservationCancellationNumber** | Pointer to **string** | If the reservation associated with the award was cancelled, the reservation cancellation number appears here. | [optional] 
**StatementId** | Pointer to **int32** | If this award was included on a statement, the statement ID appears here. The field is blank if the award has not yet been reported on a statement | [optional] 
**CancelStatementID** | Pointer to **int32** | If this award was included on a statement, the cancel statement ID appears here. The field is blank if the award has not yet been reported on a statement | [optional] 
**MemberStatementId** | Pointer to **int32** | If this award was included on a statement, the member statement ID appears here. The field is blank if the award has not yet been reported on a statement | [optional] 
**CancelMemberStatementID** | Pointer to **int32** | If this award was included on a statement, the cancel member statement ID appears here. The field is blank if the award has not yet been reported on a statement | [optional] 
**NumberOfNights** | Pointer to **int32** | Number of nights cancel policy is applicable. | [optional] 
**StayDate** | Pointer to **string** | The date of the reservation associated with the award. There may be more than one date (multiple nights) associated with award | [optional] 
**DepartureDate** | Pointer to **string** | The date of the departure of the reservation associated with the award. There may be more than one date (multiple nights) associated with award | [optional] 
**CancelPolicyType** | Pointer to **string** | Type of cancel policy. | [optional] 
**AwardSource** | Pointer to **string** | The source for the reservation associated with the award. | [optional] 
**CalculatedCancelPoints** | Pointer to **float32** | Total calculated points to cancel an issued award. | [optional] 
**AwardBasedOn** | Pointer to [**MembershipAwardBasedOnType**](MembershipAwardBasedOnType.md) |  | [optional] 
**PmsResvNo** | Pointer to **string** | Indicates PMS Reservation Number. | [optional] 
**CrsBookNo** | Pointer to **string** | Indicates CRS Booking Number. | [optional] 
**Product** | Pointer to **string** | Indicates the Product associated with the award. | [optional] 
**RatePlanCode** | Pointer to **string** | Rate plan code associated with the award. | [optional] 

## Methods

### NewMembershipAwardListType

`func NewMembershipAwardListType() *MembershipAwardListType`

NewMembershipAwardListType instantiates a new MembershipAwardListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipAwardListTypeWithDefaults

`func NewMembershipAwardListTypeWithDefaults() *MembershipAwardListType`

NewMembershipAwardListTypeWithDefaults instantiates a new MembershipAwardListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipId

`func (o *MembershipAwardListType) GetMembershipId() float32`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *MembershipAwardListType) GetMembershipIdOk() (*float32, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *MembershipAwardListType) SetMembershipId(v float32)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *MembershipAwardListType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipType

`func (o *MembershipAwardListType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *MembershipAwardListType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *MembershipAwardListType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *MembershipAwardListType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *MembershipAwardListType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *MembershipAwardListType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *MembershipAwardListType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *MembershipAwardListType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetNameOnCard

`func (o *MembershipAwardListType) GetNameOnCard() string`

GetNameOnCard returns the NameOnCard field if non-nil, zero value otherwise.

### GetNameOnCardOk

`func (o *MembershipAwardListType) GetNameOnCardOk() (*string, bool)`

GetNameOnCardOk returns a tuple with the NameOnCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameOnCard

`func (o *MembershipAwardListType) SetNameOnCard(v string)`

SetNameOnCard sets NameOnCard field to given value.

### HasNameOnCard

`func (o *MembershipAwardListType) HasNameOnCard() bool`

HasNameOnCard returns a boolean if a field has been set.

### GetJoinDate

`func (o *MembershipAwardListType) GetJoinDate() string`

GetJoinDate returns the JoinDate field if non-nil, zero value otherwise.

### GetJoinDateOk

`func (o *MembershipAwardListType) GetJoinDateOk() (*string, bool)`

GetJoinDateOk returns a tuple with the JoinDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoinDate

`func (o *MembershipAwardListType) SetJoinDate(v string)`

SetJoinDate sets JoinDate field to given value.

### HasJoinDate

`func (o *MembershipAwardListType) HasJoinDate() bool`

HasJoinDate returns a boolean if a field has been set.

### GetExpireDate

`func (o *MembershipAwardListType) GetExpireDate() string`

GetExpireDate returns the ExpireDate field if non-nil, zero value otherwise.

### GetExpireDateOk

`func (o *MembershipAwardListType) GetExpireDateOk() (*string, bool)`

GetExpireDateOk returns a tuple with the ExpireDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpireDate

`func (o *MembershipAwardListType) SetExpireDate(v string)`

SetExpireDate sets ExpireDate field to given value.

### HasExpireDate

`func (o *MembershipAwardListType) HasExpireDate() bool`

HasExpireDate returns a boolean if a field has been set.

### GetMembershipCardNo

`func (o *MembershipAwardListType) GetMembershipCardNo() string`

GetMembershipCardNo returns the MembershipCardNo field if non-nil, zero value otherwise.

### GetMembershipCardNoOk

`func (o *MembershipAwardListType) GetMembershipCardNoOk() (*string, bool)`

GetMembershipCardNoOk returns a tuple with the MembershipCardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipCardNo

`func (o *MembershipAwardListType) SetMembershipCardNo(v string)`

SetMembershipCardNo sets MembershipCardNo field to given value.

### HasMembershipCardNo

`func (o *MembershipAwardListType) HasMembershipCardNo() bool`

HasMembershipCardNo returns a boolean if a field has been set.

### GetTotalAvailablePoints

`func (o *MembershipAwardListType) GetTotalAvailablePoints() float32`

GetTotalAvailablePoints returns the TotalAvailablePoints field if non-nil, zero value otherwise.

### GetTotalAvailablePointsOk

`func (o *MembershipAwardListType) GetTotalAvailablePointsOk() (*float32, bool)`

GetTotalAvailablePointsOk returns a tuple with the TotalAvailablePoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAvailablePoints

`func (o *MembershipAwardListType) SetTotalAvailablePoints(v float32)`

SetTotalAvailablePoints sets TotalAvailablePoints field to given value.

### HasTotalAvailablePoints

`func (o *MembershipAwardListType) HasTotalAvailablePoints() bool`

HasTotalAvailablePoints returns a boolean if a field has been set.

### GetHotelId

`func (o *MembershipAwardListType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MembershipAwardListType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MembershipAwardListType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MembershipAwardListType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetAwardNumber

`func (o *MembershipAwardListType) GetAwardNumber() float32`

GetAwardNumber returns the AwardNumber field if non-nil, zero value otherwise.

### GetAwardNumberOk

`func (o *MembershipAwardListType) GetAwardNumberOk() (*float32, bool)`

GetAwardNumberOk returns a tuple with the AwardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardNumber

`func (o *MembershipAwardListType) SetAwardNumber(v float32)`

SetAwardNumber sets AwardNumber field to given value.

### HasAwardNumber

`func (o *MembershipAwardListType) HasAwardNumber() bool`

HasAwardNumber returns a boolean if a field has been set.

### GetAwardPoints

`func (o *MembershipAwardListType) GetAwardPoints() float32`

GetAwardPoints returns the AwardPoints field if non-nil, zero value otherwise.

### GetAwardPointsOk

`func (o *MembershipAwardListType) GetAwardPointsOk() (*float32, bool)`

GetAwardPointsOk returns a tuple with the AwardPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardPoints

`func (o *MembershipAwardListType) SetAwardPoints(v float32)`

SetAwardPoints sets AwardPoints field to given value.

### HasAwardPoints

`func (o *MembershipAwardListType) HasAwardPoints() bool`

HasAwardPoints returns a boolean if a field has been set.

### GetThresholdPoints

`func (o *MembershipAwardListType) GetThresholdPoints() float32`

GetThresholdPoints returns the ThresholdPoints field if non-nil, zero value otherwise.

### GetThresholdPointsOk

`func (o *MembershipAwardListType) GetThresholdPointsOk() (*float32, bool)`

GetThresholdPointsOk returns a tuple with the ThresholdPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThresholdPoints

`func (o *MembershipAwardListType) SetThresholdPoints(v float32)`

SetThresholdPoints sets ThresholdPoints field to given value.

### HasThresholdPoints

`func (o *MembershipAwardListType) HasThresholdPoints() bool`

HasThresholdPoints returns a boolean if a field has been set.

### GetAwardCode

`func (o *MembershipAwardListType) GetAwardCode() string`

GetAwardCode returns the AwardCode field if non-nil, zero value otherwise.

### GetAwardCodeOk

`func (o *MembershipAwardListType) GetAwardCodeOk() (*string, bool)`

GetAwardCodeOk returns a tuple with the AwardCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCode

`func (o *MembershipAwardListType) SetAwardCode(v string)`

SetAwardCode sets AwardCode field to given value.

### HasAwardCode

`func (o *MembershipAwardListType) HasAwardCode() bool`

HasAwardCode returns a boolean if a field has been set.

### GetCancelDays

`func (o *MembershipAwardListType) GetCancelDays() int32`

GetCancelDays returns the CancelDays field if non-nil, zero value otherwise.

### GetCancelDaysOk

`func (o *MembershipAwardListType) GetCancelDaysOk() (*int32, bool)`

GetCancelDaysOk returns a tuple with the CancelDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelDays

`func (o *MembershipAwardListType) SetCancelDays(v int32)`

SetCancelDays sets CancelDays field to given value.

### HasCancelDays

`func (o *MembershipAwardListType) HasCancelDays() bool`

HasCancelDays returns a boolean if a field has been set.

### GetDateAwarded

`func (o *MembershipAwardListType) GetDateAwarded() string`

GetDateAwarded returns the DateAwarded field if non-nil, zero value otherwise.

### GetDateAwardedOk

`func (o *MembershipAwardListType) GetDateAwardedOk() (*string, bool)`

GetDateAwardedOk returns a tuple with the DateAwarded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateAwarded

`func (o *MembershipAwardListType) SetDateAwarded(v string)`

SetDateAwarded sets DateAwarded field to given value.

### HasDateAwarded

`func (o *MembershipAwardListType) HasDateAwarded() bool`

HasDateAwarded returns a boolean if a field has been set.

### GetBookingNumber

`func (o *MembershipAwardListType) GetBookingNumber() string`

GetBookingNumber returns the BookingNumber field if non-nil, zero value otherwise.

### GetBookingNumberOk

`func (o *MembershipAwardListType) GetBookingNumberOk() (*string, bool)`

GetBookingNumberOk returns a tuple with the BookingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingNumber

`func (o *MembershipAwardListType) SetBookingNumber(v string)`

SetBookingNumber sets BookingNumber field to given value.

### HasBookingNumber

`func (o *MembershipAwardListType) HasBookingNumber() bool`

HasBookingNumber returns a boolean if a field has been set.

### GetHotelBookingNumber

`func (o *MembershipAwardListType) GetHotelBookingNumber() string`

GetHotelBookingNumber returns the HotelBookingNumber field if non-nil, zero value otherwise.

### GetHotelBookingNumberOk

`func (o *MembershipAwardListType) GetHotelBookingNumberOk() (*string, bool)`

GetHotelBookingNumberOk returns a tuple with the HotelBookingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelBookingNumber

`func (o *MembershipAwardListType) SetHotelBookingNumber(v string)`

SetHotelBookingNumber sets HotelBookingNumber field to given value.

### HasHotelBookingNumber

`func (o *MembershipAwardListType) HasHotelBookingNumber() bool`

HasHotelBookingNumber returns a boolean if a field has been set.

### GetArrivalDate

`func (o *MembershipAwardListType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *MembershipAwardListType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *MembershipAwardListType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *MembershipAwardListType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetCancelPenaltyPoints

`func (o *MembershipAwardListType) GetCancelPenaltyPoints() int32`

GetCancelPenaltyPoints returns the CancelPenaltyPoints field if non-nil, zero value otherwise.

### GetCancelPenaltyPointsOk

`func (o *MembershipAwardListType) GetCancelPenaltyPointsOk() (*int32, bool)`

GetCancelPenaltyPointsOk returns a tuple with the CancelPenaltyPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyPoints

`func (o *MembershipAwardListType) SetCancelPenaltyPoints(v int32)`

SetCancelPenaltyPoints sets CancelPenaltyPoints field to given value.

### HasCancelPenaltyPoints

`func (o *MembershipAwardListType) HasCancelPenaltyPoints() bool`

HasCancelPenaltyPoints returns a boolean if a field has been set.

### GetAwardCancellationNumber

`func (o *MembershipAwardListType) GetAwardCancellationNumber() int32`

GetAwardCancellationNumber returns the AwardCancellationNumber field if non-nil, zero value otherwise.

### GetAwardCancellationNumberOk

`func (o *MembershipAwardListType) GetAwardCancellationNumberOk() (*int32, bool)`

GetAwardCancellationNumberOk returns a tuple with the AwardCancellationNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCancellationNumber

`func (o *MembershipAwardListType) SetAwardCancellationNumber(v int32)`

SetAwardCancellationNumber sets AwardCancellationNumber field to given value.

### HasAwardCancellationNumber

`func (o *MembershipAwardListType) HasAwardCancellationNumber() bool`

HasAwardCancellationNumber returns a boolean if a field has been set.

### GetAwardCancelDate

`func (o *MembershipAwardListType) GetAwardCancelDate() string`

GetAwardCancelDate returns the AwardCancelDate field if non-nil, zero value otherwise.

### GetAwardCancelDateOk

`func (o *MembershipAwardListType) GetAwardCancelDateOk() (*string, bool)`

GetAwardCancelDateOk returns a tuple with the AwardCancelDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCancelDate

`func (o *MembershipAwardListType) SetAwardCancelDate(v string)`

SetAwardCancelDate sets AwardCancelDate field to given value.

### HasAwardCancelDate

`func (o *MembershipAwardListType) HasAwardCancelDate() bool`

HasAwardCancelDate returns a boolean if a field has been set.

### GetActualCancelPoints

`func (o *MembershipAwardListType) GetActualCancelPoints() float32`

GetActualCancelPoints returns the ActualCancelPoints field if non-nil, zero value otherwise.

### GetActualCancelPointsOk

`func (o *MembershipAwardListType) GetActualCancelPointsOk() (*float32, bool)`

GetActualCancelPointsOk returns a tuple with the ActualCancelPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualCancelPoints

`func (o *MembershipAwardListType) SetActualCancelPoints(v float32)`

SetActualCancelPoints sets ActualCancelPoints field to given value.

### HasActualCancelPoints

`func (o *MembershipAwardListType) HasActualCancelPoints() bool`

HasActualCancelPoints returns a boolean if a field has been set.

### GetReservationCancellationNumber

`func (o *MembershipAwardListType) GetReservationCancellationNumber() string`

GetReservationCancellationNumber returns the ReservationCancellationNumber field if non-nil, zero value otherwise.

### GetReservationCancellationNumberOk

`func (o *MembershipAwardListType) GetReservationCancellationNumberOk() (*string, bool)`

GetReservationCancellationNumberOk returns a tuple with the ReservationCancellationNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationCancellationNumber

`func (o *MembershipAwardListType) SetReservationCancellationNumber(v string)`

SetReservationCancellationNumber sets ReservationCancellationNumber field to given value.

### HasReservationCancellationNumber

`func (o *MembershipAwardListType) HasReservationCancellationNumber() bool`

HasReservationCancellationNumber returns a boolean if a field has been set.

### GetStatementId

`func (o *MembershipAwardListType) GetStatementId() int32`

GetStatementId returns the StatementId field if non-nil, zero value otherwise.

### GetStatementIdOk

`func (o *MembershipAwardListType) GetStatementIdOk() (*int32, bool)`

GetStatementIdOk returns a tuple with the StatementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementId

`func (o *MembershipAwardListType) SetStatementId(v int32)`

SetStatementId sets StatementId field to given value.

### HasStatementId

`func (o *MembershipAwardListType) HasStatementId() bool`

HasStatementId returns a boolean if a field has been set.

### GetCancelStatementID

`func (o *MembershipAwardListType) GetCancelStatementID() int32`

GetCancelStatementID returns the CancelStatementID field if non-nil, zero value otherwise.

### GetCancelStatementIDOk

`func (o *MembershipAwardListType) GetCancelStatementIDOk() (*int32, bool)`

GetCancelStatementIDOk returns a tuple with the CancelStatementID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelStatementID

`func (o *MembershipAwardListType) SetCancelStatementID(v int32)`

SetCancelStatementID sets CancelStatementID field to given value.

### HasCancelStatementID

`func (o *MembershipAwardListType) HasCancelStatementID() bool`

HasCancelStatementID returns a boolean if a field has been set.

### GetMemberStatementId

`func (o *MembershipAwardListType) GetMemberStatementId() int32`

GetMemberStatementId returns the MemberStatementId field if non-nil, zero value otherwise.

### GetMemberStatementIdOk

`func (o *MembershipAwardListType) GetMemberStatementIdOk() (*int32, bool)`

GetMemberStatementIdOk returns a tuple with the MemberStatementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberStatementId

`func (o *MembershipAwardListType) SetMemberStatementId(v int32)`

SetMemberStatementId sets MemberStatementId field to given value.

### HasMemberStatementId

`func (o *MembershipAwardListType) HasMemberStatementId() bool`

HasMemberStatementId returns a boolean if a field has been set.

### GetCancelMemberStatementID

`func (o *MembershipAwardListType) GetCancelMemberStatementID() int32`

GetCancelMemberStatementID returns the CancelMemberStatementID field if non-nil, zero value otherwise.

### GetCancelMemberStatementIDOk

`func (o *MembershipAwardListType) GetCancelMemberStatementIDOk() (*int32, bool)`

GetCancelMemberStatementIDOk returns a tuple with the CancelMemberStatementID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelMemberStatementID

`func (o *MembershipAwardListType) SetCancelMemberStatementID(v int32)`

SetCancelMemberStatementID sets CancelMemberStatementID field to given value.

### HasCancelMemberStatementID

`func (o *MembershipAwardListType) HasCancelMemberStatementID() bool`

HasCancelMemberStatementID returns a boolean if a field has been set.

### GetNumberOfNights

`func (o *MembershipAwardListType) GetNumberOfNights() int32`

GetNumberOfNights returns the NumberOfNights field if non-nil, zero value otherwise.

### GetNumberOfNightsOk

`func (o *MembershipAwardListType) GetNumberOfNightsOk() (*int32, bool)`

GetNumberOfNightsOk returns a tuple with the NumberOfNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfNights

`func (o *MembershipAwardListType) SetNumberOfNights(v int32)`

SetNumberOfNights sets NumberOfNights field to given value.

### HasNumberOfNights

`func (o *MembershipAwardListType) HasNumberOfNights() bool`

HasNumberOfNights returns a boolean if a field has been set.

### GetStayDate

`func (o *MembershipAwardListType) GetStayDate() string`

GetStayDate returns the StayDate field if non-nil, zero value otherwise.

### GetStayDateOk

`func (o *MembershipAwardListType) GetStayDateOk() (*string, bool)`

GetStayDateOk returns a tuple with the StayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDate

`func (o *MembershipAwardListType) SetStayDate(v string)`

SetStayDate sets StayDate field to given value.

### HasStayDate

`func (o *MembershipAwardListType) HasStayDate() bool`

HasStayDate returns a boolean if a field has been set.

### GetDepartureDate

`func (o *MembershipAwardListType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *MembershipAwardListType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *MembershipAwardListType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *MembershipAwardListType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetCancelPolicyType

`func (o *MembershipAwardListType) GetCancelPolicyType() string`

GetCancelPolicyType returns the CancelPolicyType field if non-nil, zero value otherwise.

### GetCancelPolicyTypeOk

`func (o *MembershipAwardListType) GetCancelPolicyTypeOk() (*string, bool)`

GetCancelPolicyTypeOk returns a tuple with the CancelPolicyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPolicyType

`func (o *MembershipAwardListType) SetCancelPolicyType(v string)`

SetCancelPolicyType sets CancelPolicyType field to given value.

### HasCancelPolicyType

`func (o *MembershipAwardListType) HasCancelPolicyType() bool`

HasCancelPolicyType returns a boolean if a field has been set.

### GetAwardSource

`func (o *MembershipAwardListType) GetAwardSource() string`

GetAwardSource returns the AwardSource field if non-nil, zero value otherwise.

### GetAwardSourceOk

`func (o *MembershipAwardListType) GetAwardSourceOk() (*string, bool)`

GetAwardSourceOk returns a tuple with the AwardSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardSource

`func (o *MembershipAwardListType) SetAwardSource(v string)`

SetAwardSource sets AwardSource field to given value.

### HasAwardSource

`func (o *MembershipAwardListType) HasAwardSource() bool`

HasAwardSource returns a boolean if a field has been set.

### GetCalculatedCancelPoints

`func (o *MembershipAwardListType) GetCalculatedCancelPoints() float32`

GetCalculatedCancelPoints returns the CalculatedCancelPoints field if non-nil, zero value otherwise.

### GetCalculatedCancelPointsOk

`func (o *MembershipAwardListType) GetCalculatedCancelPointsOk() (*float32, bool)`

GetCalculatedCancelPointsOk returns a tuple with the CalculatedCancelPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculatedCancelPoints

`func (o *MembershipAwardListType) SetCalculatedCancelPoints(v float32)`

SetCalculatedCancelPoints sets CalculatedCancelPoints field to given value.

### HasCalculatedCancelPoints

`func (o *MembershipAwardListType) HasCalculatedCancelPoints() bool`

HasCalculatedCancelPoints returns a boolean if a field has been set.

### GetAwardBasedOn

`func (o *MembershipAwardListType) GetAwardBasedOn() MembershipAwardBasedOnType`

GetAwardBasedOn returns the AwardBasedOn field if non-nil, zero value otherwise.

### GetAwardBasedOnOk

`func (o *MembershipAwardListType) GetAwardBasedOnOk() (*MembershipAwardBasedOnType, bool)`

GetAwardBasedOnOk returns a tuple with the AwardBasedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardBasedOn

`func (o *MembershipAwardListType) SetAwardBasedOn(v MembershipAwardBasedOnType)`

SetAwardBasedOn sets AwardBasedOn field to given value.

### HasAwardBasedOn

`func (o *MembershipAwardListType) HasAwardBasedOn() bool`

HasAwardBasedOn returns a boolean if a field has been set.

### GetPmsResvNo

`func (o *MembershipAwardListType) GetPmsResvNo() string`

GetPmsResvNo returns the PmsResvNo field if non-nil, zero value otherwise.

### GetPmsResvNoOk

`func (o *MembershipAwardListType) GetPmsResvNoOk() (*string, bool)`

GetPmsResvNoOk returns a tuple with the PmsResvNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPmsResvNo

`func (o *MembershipAwardListType) SetPmsResvNo(v string)`

SetPmsResvNo sets PmsResvNo field to given value.

### HasPmsResvNo

`func (o *MembershipAwardListType) HasPmsResvNo() bool`

HasPmsResvNo returns a boolean if a field has been set.

### GetCrsBookNo

`func (o *MembershipAwardListType) GetCrsBookNo() string`

GetCrsBookNo returns the CrsBookNo field if non-nil, zero value otherwise.

### GetCrsBookNoOk

`func (o *MembershipAwardListType) GetCrsBookNoOk() (*string, bool)`

GetCrsBookNoOk returns a tuple with the CrsBookNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCrsBookNo

`func (o *MembershipAwardListType) SetCrsBookNo(v string)`

SetCrsBookNo sets CrsBookNo field to given value.

### HasCrsBookNo

`func (o *MembershipAwardListType) HasCrsBookNo() bool`

HasCrsBookNo returns a boolean if a field has been set.

### GetProduct

`func (o *MembershipAwardListType) GetProduct() string`

GetProduct returns the Product field if non-nil, zero value otherwise.

### GetProductOk

`func (o *MembershipAwardListType) GetProductOk() (*string, bool)`

GetProductOk returns a tuple with the Product field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProduct

`func (o *MembershipAwardListType) SetProduct(v string)`

SetProduct sets Product field to given value.

### HasProduct

`func (o *MembershipAwardListType) HasProduct() bool`

HasProduct returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *MembershipAwardListType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *MembershipAwardListType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *MembershipAwardListType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *MembershipAwardListType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


