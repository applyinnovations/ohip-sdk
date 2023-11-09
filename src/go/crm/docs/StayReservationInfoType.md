# StayReservationInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttachedProfiles** | Pointer to [**ResAttachedProfileListType**](ResAttachedProfileListType.md) |  | [optional] 
**ComputedReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**ParentReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ReservationIdList** | Pointer to [**ReservationIdList**](ReservationIdList.md) |  | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**RoomStay** | Pointer to [**StayInfoType**](StayInfoType.md) |  | [optional] 

## Methods

### NewStayReservationInfoType

`func NewStayReservationInfoType() *StayReservationInfoType`

NewStayReservationInfoType instantiates a new StayReservationInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStayReservationInfoTypeWithDefaults

`func NewStayReservationInfoTypeWithDefaults() *StayReservationInfoType`

NewStayReservationInfoTypeWithDefaults instantiates a new StayReservationInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttachedProfiles

`func (o *StayReservationInfoType) GetAttachedProfiles() ResAttachedProfileListType`

GetAttachedProfiles returns the AttachedProfiles field if non-nil, zero value otherwise.

### GetAttachedProfilesOk

`func (o *StayReservationInfoType) GetAttachedProfilesOk() (*ResAttachedProfileListType, bool)`

GetAttachedProfilesOk returns a tuple with the AttachedProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachedProfiles

`func (o *StayReservationInfoType) SetAttachedProfiles(v ResAttachedProfileListType)`

SetAttachedProfiles sets AttachedProfiles field to given value.

### HasAttachedProfiles

`func (o *StayReservationInfoType) HasAttachedProfiles() bool`

HasAttachedProfiles returns a boolean if a field has been set.

### GetComputedReservationStatus

`func (o *StayReservationInfoType) GetComputedReservationStatus() PMSResStatusType`

GetComputedReservationStatus returns the ComputedReservationStatus field if non-nil, zero value otherwise.

### GetComputedReservationStatusOk

`func (o *StayReservationInfoType) GetComputedReservationStatusOk() (*PMSResStatusType, bool)`

GetComputedReservationStatusOk returns a tuple with the ComputedReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedReservationStatus

`func (o *StayReservationInfoType) SetComputedReservationStatus(v PMSResStatusType)`

SetComputedReservationStatus sets ComputedReservationStatus field to given value.

### HasComputedReservationStatus

`func (o *StayReservationInfoType) HasComputedReservationStatus() bool`

HasComputedReservationStatus returns a boolean if a field has been set.

### GetHotelId

`func (o *StayReservationInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *StayReservationInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *StayReservationInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *StayReservationInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetParentReservationId

`func (o *StayReservationInfoType) GetParentReservationId() ReservationId`

GetParentReservationId returns the ParentReservationId field if non-nil, zero value otherwise.

### GetParentReservationIdOk

`func (o *StayReservationInfoType) GetParentReservationIdOk() (*ReservationId, bool)`

GetParentReservationIdOk returns a tuple with the ParentReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentReservationId

`func (o *StayReservationInfoType) SetParentReservationId(v ReservationId)`

SetParentReservationId sets ParentReservationId field to given value.

### HasParentReservationId

`func (o *StayReservationInfoType) HasParentReservationId() bool`

HasParentReservationId returns a boolean if a field has been set.

### GetReservationIdList

`func (o *StayReservationInfoType) GetReservationIdList() ReservationIdList`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *StayReservationInfoType) GetReservationIdListOk() (*ReservationIdList, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *StayReservationInfoType) SetReservationIdList(v ReservationIdList)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *StayReservationInfoType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetReservationStatus

`func (o *StayReservationInfoType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *StayReservationInfoType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *StayReservationInfoType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *StayReservationInfoType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetRoomStay

`func (o *StayReservationInfoType) GetRoomStay() StayInfoType`

GetRoomStay returns the RoomStay field if non-nil, zero value otherwise.

### GetRoomStayOk

`func (o *StayReservationInfoType) GetRoomStayOk() (*StayInfoType, bool)`

GetRoomStayOk returns a tuple with the RoomStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStay

`func (o *StayReservationInfoType) SetRoomStay(v StayInfoType)`

SetRoomStay sets RoomStay field to given value.

### HasRoomStay

`func (o *StayReservationInfoType) HasRoomStay() bool`

HasRoomStay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


