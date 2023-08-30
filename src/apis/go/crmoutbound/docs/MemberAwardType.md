# MemberAwardType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**MembershipType** | Pointer to **string** | The type of the membership. | [optional] 
**MembershipCardNo** | Pointer to **string** | The card number associated with this membership. | [optional] 
**MembershipLevel** | Pointer to **string** | The current level of the membership. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Adults** | Pointer to **int32** | Number of adults associated with the reservation. | [optional] 
**ReservationTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**MemberPointsBefore** | Pointer to **int32** | Member points before award transaction. | [optional] 
**MemberPointsAfter** | Pointer to **int32** | Member points after award transaction. | [optional] 
**AwardPoints** | Pointer to **int32** | Points associated with the award. | [optional] 
**CancelPointsReturn** | Pointer to **int32** | Number of cancel points returned. | [optional] 
**ActualCancelPoints** | Pointer to **int32** | Actual number of cancel points. | [optional] 
**ExpiryPoints** | Pointer to **int32** | Points that will expire. | [optional] 
**AwardProcessType** | Pointer to [**MemberAwardProcessType**](MemberAwardProcessType.md) |  | [optional] 
**MemberAwardDetails** | Pointer to [**[]MemberAwardDetailType**](MemberAwardDetailType.md) | Details related to member award per stay date. | [optional] 
**HotelId** | Pointer to **string** | Property associated with the reservation. | [optional] 

## Methods

### NewMemberAwardType

`func NewMemberAwardType() *MemberAwardType`

NewMemberAwardType instantiates a new MemberAwardType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMemberAwardTypeWithDefaults

`func NewMemberAwardTypeWithDefaults() *MemberAwardType`

NewMemberAwardTypeWithDefaults instantiates a new MemberAwardType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileIdList

`func (o *MemberAwardType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *MemberAwardType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *MemberAwardType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *MemberAwardType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetMembershipType

`func (o *MemberAwardType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *MemberAwardType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *MemberAwardType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *MemberAwardType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetMembershipCardNo

`func (o *MemberAwardType) GetMembershipCardNo() string`

GetMembershipCardNo returns the MembershipCardNo field if non-nil, zero value otherwise.

### GetMembershipCardNoOk

`func (o *MemberAwardType) GetMembershipCardNoOk() (*string, bool)`

GetMembershipCardNoOk returns a tuple with the MembershipCardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipCardNo

`func (o *MemberAwardType) SetMembershipCardNo(v string)`

SetMembershipCardNo sets MembershipCardNo field to given value.

### HasMembershipCardNo

`func (o *MemberAwardType) HasMembershipCardNo() bool`

HasMembershipCardNo returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *MemberAwardType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *MemberAwardType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *MemberAwardType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *MemberAwardType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetReservationIdList

`func (o *MemberAwardType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *MemberAwardType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *MemberAwardType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *MemberAwardType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetAdults

`func (o *MemberAwardType) GetAdults() int32`

GetAdults returns the Adults field if non-nil, zero value otherwise.

### GetAdultsOk

`func (o *MemberAwardType) GetAdultsOk() (*int32, bool)`

GetAdultsOk returns a tuple with the Adults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdults

`func (o *MemberAwardType) SetAdults(v int32)`

SetAdults sets Adults field to given value.

### HasAdults

`func (o *MemberAwardType) HasAdults() bool`

HasAdults returns a boolean if a field has been set.

### GetReservationTimeSpan

`func (o *MemberAwardType) GetReservationTimeSpan() TimeSpanType`

GetReservationTimeSpan returns the ReservationTimeSpan field if non-nil, zero value otherwise.

### GetReservationTimeSpanOk

`func (o *MemberAwardType) GetReservationTimeSpanOk() (*TimeSpanType, bool)`

GetReservationTimeSpanOk returns a tuple with the ReservationTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationTimeSpan

`func (o *MemberAwardType) SetReservationTimeSpan(v TimeSpanType)`

SetReservationTimeSpan sets ReservationTimeSpan field to given value.

### HasReservationTimeSpan

`func (o *MemberAwardType) HasReservationTimeSpan() bool`

HasReservationTimeSpan returns a boolean if a field has been set.

### GetMemberPointsBefore

`func (o *MemberAwardType) GetMemberPointsBefore() int32`

GetMemberPointsBefore returns the MemberPointsBefore field if non-nil, zero value otherwise.

### GetMemberPointsBeforeOk

`func (o *MemberAwardType) GetMemberPointsBeforeOk() (*int32, bool)`

GetMemberPointsBeforeOk returns a tuple with the MemberPointsBefore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberPointsBefore

`func (o *MemberAwardType) SetMemberPointsBefore(v int32)`

SetMemberPointsBefore sets MemberPointsBefore field to given value.

### HasMemberPointsBefore

`func (o *MemberAwardType) HasMemberPointsBefore() bool`

HasMemberPointsBefore returns a boolean if a field has been set.

### GetMemberPointsAfter

`func (o *MemberAwardType) GetMemberPointsAfter() int32`

GetMemberPointsAfter returns the MemberPointsAfter field if non-nil, zero value otherwise.

### GetMemberPointsAfterOk

`func (o *MemberAwardType) GetMemberPointsAfterOk() (*int32, bool)`

GetMemberPointsAfterOk returns a tuple with the MemberPointsAfter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberPointsAfter

`func (o *MemberAwardType) SetMemberPointsAfter(v int32)`

SetMemberPointsAfter sets MemberPointsAfter field to given value.

### HasMemberPointsAfter

`func (o *MemberAwardType) HasMemberPointsAfter() bool`

HasMemberPointsAfter returns a boolean if a field has been set.

### GetAwardPoints

`func (o *MemberAwardType) GetAwardPoints() int32`

GetAwardPoints returns the AwardPoints field if non-nil, zero value otherwise.

### GetAwardPointsOk

`func (o *MemberAwardType) GetAwardPointsOk() (*int32, bool)`

GetAwardPointsOk returns a tuple with the AwardPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardPoints

`func (o *MemberAwardType) SetAwardPoints(v int32)`

SetAwardPoints sets AwardPoints field to given value.

### HasAwardPoints

`func (o *MemberAwardType) HasAwardPoints() bool`

HasAwardPoints returns a boolean if a field has been set.

### GetCancelPointsReturn

`func (o *MemberAwardType) GetCancelPointsReturn() int32`

GetCancelPointsReturn returns the CancelPointsReturn field if non-nil, zero value otherwise.

### GetCancelPointsReturnOk

`func (o *MemberAwardType) GetCancelPointsReturnOk() (*int32, bool)`

GetCancelPointsReturnOk returns a tuple with the CancelPointsReturn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPointsReturn

`func (o *MemberAwardType) SetCancelPointsReturn(v int32)`

SetCancelPointsReturn sets CancelPointsReturn field to given value.

### HasCancelPointsReturn

`func (o *MemberAwardType) HasCancelPointsReturn() bool`

HasCancelPointsReturn returns a boolean if a field has been set.

### GetActualCancelPoints

`func (o *MemberAwardType) GetActualCancelPoints() int32`

GetActualCancelPoints returns the ActualCancelPoints field if non-nil, zero value otherwise.

### GetActualCancelPointsOk

`func (o *MemberAwardType) GetActualCancelPointsOk() (*int32, bool)`

GetActualCancelPointsOk returns a tuple with the ActualCancelPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualCancelPoints

`func (o *MemberAwardType) SetActualCancelPoints(v int32)`

SetActualCancelPoints sets ActualCancelPoints field to given value.

### HasActualCancelPoints

`func (o *MemberAwardType) HasActualCancelPoints() bool`

HasActualCancelPoints returns a boolean if a field has been set.

### GetExpiryPoints

`func (o *MemberAwardType) GetExpiryPoints() int32`

GetExpiryPoints returns the ExpiryPoints field if non-nil, zero value otherwise.

### GetExpiryPointsOk

`func (o *MemberAwardType) GetExpiryPointsOk() (*int32, bool)`

GetExpiryPointsOk returns a tuple with the ExpiryPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryPoints

`func (o *MemberAwardType) SetExpiryPoints(v int32)`

SetExpiryPoints sets ExpiryPoints field to given value.

### HasExpiryPoints

`func (o *MemberAwardType) HasExpiryPoints() bool`

HasExpiryPoints returns a boolean if a field has been set.

### GetAwardProcessType

`func (o *MemberAwardType) GetAwardProcessType() MemberAwardProcessType`

GetAwardProcessType returns the AwardProcessType field if non-nil, zero value otherwise.

### GetAwardProcessTypeOk

`func (o *MemberAwardType) GetAwardProcessTypeOk() (*MemberAwardProcessType, bool)`

GetAwardProcessTypeOk returns a tuple with the AwardProcessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardProcessType

`func (o *MemberAwardType) SetAwardProcessType(v MemberAwardProcessType)`

SetAwardProcessType sets AwardProcessType field to given value.

### HasAwardProcessType

`func (o *MemberAwardType) HasAwardProcessType() bool`

HasAwardProcessType returns a boolean if a field has been set.

### GetMemberAwardDetails

`func (o *MemberAwardType) GetMemberAwardDetails() []MemberAwardDetailType`

GetMemberAwardDetails returns the MemberAwardDetails field if non-nil, zero value otherwise.

### GetMemberAwardDetailsOk

`func (o *MemberAwardType) GetMemberAwardDetailsOk() (*[]MemberAwardDetailType, bool)`

GetMemberAwardDetailsOk returns a tuple with the MemberAwardDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberAwardDetails

`func (o *MemberAwardType) SetMemberAwardDetails(v []MemberAwardDetailType)`

SetMemberAwardDetails sets MemberAwardDetails field to given value.

### HasMemberAwardDetails

`func (o *MemberAwardType) HasMemberAwardDetails() bool`

HasMemberAwardDetails returns a boolean if a field has been set.

### GetHotelId

`func (o *MemberAwardType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MemberAwardType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MemberAwardType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MemberAwardType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


