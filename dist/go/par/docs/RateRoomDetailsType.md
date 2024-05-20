# RateRoomDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Memberships** | Pointer to [**[]MembershipSearchType**](MembershipSearchType.md) | Detail regarding customer loyalty program. | [optional] 
**RestrictionType** | Pointer to [**MasterRestrictionStatusesType**](MasterRestrictionStatusesType.md) |  | [optional] 
**RoomStays** | Pointer to [**[]RoomStayType**](RoomStayType.md) | Room stay information. | [optional] 

## Methods

### NewRateRoomDetailsType

`func NewRateRoomDetailsType() *RateRoomDetailsType`

NewRateRoomDetailsType instantiates a new RateRoomDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateRoomDetailsTypeWithDefaults

`func NewRateRoomDetailsTypeWithDefaults() *RateRoomDetailsType`

NewRateRoomDetailsTypeWithDefaults instantiates a new RateRoomDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMemberships

`func (o *RateRoomDetailsType) GetMemberships() []MembershipSearchType`

GetMemberships returns the Memberships field if non-nil, zero value otherwise.

### GetMembershipsOk

`func (o *RateRoomDetailsType) GetMembershipsOk() (*[]MembershipSearchType, bool)`

GetMembershipsOk returns a tuple with the Memberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberships

`func (o *RateRoomDetailsType) SetMemberships(v []MembershipSearchType)`

SetMemberships sets Memberships field to given value.

### HasMemberships

`func (o *RateRoomDetailsType) HasMemberships() bool`

HasMemberships returns a boolean if a field has been set.

### GetRestrictionType

`func (o *RateRoomDetailsType) GetRestrictionType() MasterRestrictionStatusesType`

GetRestrictionType returns the RestrictionType field if non-nil, zero value otherwise.

### GetRestrictionTypeOk

`func (o *RateRoomDetailsType) GetRestrictionTypeOk() (*MasterRestrictionStatusesType, bool)`

GetRestrictionTypeOk returns a tuple with the RestrictionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionType

`func (o *RateRoomDetailsType) SetRestrictionType(v MasterRestrictionStatusesType)`

SetRestrictionType sets RestrictionType field to given value.

### HasRestrictionType

`func (o *RateRoomDetailsType) HasRestrictionType() bool`

HasRestrictionType returns a boolean if a field has been set.

### GetRoomStays

`func (o *RateRoomDetailsType) GetRoomStays() []RoomStayType`

GetRoomStays returns the RoomStays field if non-nil, zero value otherwise.

### GetRoomStaysOk

`func (o *RateRoomDetailsType) GetRoomStaysOk() (*[]RoomStayType, bool)`

GetRoomStaysOk returns a tuple with the RoomStays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStays

`func (o *RateRoomDetailsType) SetRoomStays(v []RoomStayType)`

SetRoomStays sets RoomStays field to given value.

### HasRoomStays

`func (o *RateRoomDetailsType) HasRoomStays() bool`

HasRoomStays returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


