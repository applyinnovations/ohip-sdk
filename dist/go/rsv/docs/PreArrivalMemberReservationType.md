# PreArrivalMemberReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreateDateTime** | Pointer to **string** | Date on which Reservation is Created. | [optional] 
**ArrivalDate** | Pointer to **string** | Arrival Date. | [optional] 
**MembershipId** | Pointer to **string** | Membership Card number. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 

## Methods

### NewPreArrivalMemberReservationType

`func NewPreArrivalMemberReservationType() *PreArrivalMemberReservationType`

NewPreArrivalMemberReservationType instantiates a new PreArrivalMemberReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreArrivalMemberReservationTypeWithDefaults

`func NewPreArrivalMemberReservationTypeWithDefaults() *PreArrivalMemberReservationType`

NewPreArrivalMemberReservationTypeWithDefaults instantiates a new PreArrivalMemberReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreateDateTime

`func (o *PreArrivalMemberReservationType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *PreArrivalMemberReservationType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *PreArrivalMemberReservationType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *PreArrivalMemberReservationType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetArrivalDate

`func (o *PreArrivalMemberReservationType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *PreArrivalMemberReservationType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *PreArrivalMemberReservationType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *PreArrivalMemberReservationType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetMembershipId

`func (o *PreArrivalMemberReservationType) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *PreArrivalMemberReservationType) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *PreArrivalMemberReservationType) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *PreArrivalMemberReservationType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetReservationIdList

`func (o *PreArrivalMemberReservationType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *PreArrivalMemberReservationType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *PreArrivalMemberReservationType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *PreArrivalMemberReservationType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


