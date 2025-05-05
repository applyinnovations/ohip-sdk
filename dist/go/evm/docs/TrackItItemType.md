# TrackItItemType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** |  | [optional] 
**TrackItId** | Pointer to [**TrackItId**](TrackItId.md) |  | [optional] 
**Group** | Pointer to [**TrackItGroup**](TrackItGroup.md) |  | [optional] 
**TicketNumber** | Pointer to **string** |  | [optional] 
**ReferenceNumber** | Pointer to **string** |  | [optional] 
**Type** | Pointer to [**TrackItType**](TrackItType.md) |  | [optional] 
**Action** | Pointer to [**TrackItActionType**](TrackItActionType.md) |  | [optional] 
**Location** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Quantity** | Pointer to **int32** |  | [optional] 
**FollowUpDate** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**AssignedTo** | Pointer to [**ApplicationUserType**](ApplicationUserType.md) |  | [optional] 
**ReservationInfo** | Pointer to [**TrackItReservationInfoType**](TrackItReservationInfoType.md) |  | [optional] 
**TrackItLogList** | Pointer to [**[]TrackItLogType**](TrackItLogType.md) |  | [optional] 

## Methods

### NewTrackItItemType

`func NewTrackItItemType() *TrackItItemType`

NewTrackItItemType instantiates a new TrackItItemType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrackItItemTypeWithDefaults

`func NewTrackItItemTypeWithDefaults() *TrackItItemType`

NewTrackItItemTypeWithDefaults instantiates a new TrackItItemType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TrackItItemType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TrackItItemType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TrackItItemType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TrackItItemType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTrackItId

`func (o *TrackItItemType) GetTrackItId() TrackItId`

GetTrackItId returns the TrackItId field if non-nil, zero value otherwise.

### GetTrackItIdOk

`func (o *TrackItItemType) GetTrackItIdOk() (*TrackItId, bool)`

GetTrackItIdOk returns a tuple with the TrackItId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItId

`func (o *TrackItItemType) SetTrackItId(v TrackItId)`

SetTrackItId sets TrackItId field to given value.

### HasTrackItId

`func (o *TrackItItemType) HasTrackItId() bool`

HasTrackItId returns a boolean if a field has been set.

### GetGroup

`func (o *TrackItItemType) GetGroup() TrackItGroup`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *TrackItItemType) GetGroupOk() (*TrackItGroup, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *TrackItItemType) SetGroup(v TrackItGroup)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *TrackItItemType) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### GetTicketNumber

`func (o *TrackItItemType) GetTicketNumber() string`

GetTicketNumber returns the TicketNumber field if non-nil, zero value otherwise.

### GetTicketNumberOk

`func (o *TrackItItemType) GetTicketNumberOk() (*string, bool)`

GetTicketNumberOk returns a tuple with the TicketNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTicketNumber

`func (o *TrackItItemType) SetTicketNumber(v string)`

SetTicketNumber sets TicketNumber field to given value.

### HasTicketNumber

`func (o *TrackItItemType) HasTicketNumber() bool`

HasTicketNumber returns a boolean if a field has been set.

### GetReferenceNumber

`func (o *TrackItItemType) GetReferenceNumber() string`

GetReferenceNumber returns the ReferenceNumber field if non-nil, zero value otherwise.

### GetReferenceNumberOk

`func (o *TrackItItemType) GetReferenceNumberOk() (*string, bool)`

GetReferenceNumberOk returns a tuple with the ReferenceNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceNumber

`func (o *TrackItItemType) SetReferenceNumber(v string)`

SetReferenceNumber sets ReferenceNumber field to given value.

### HasReferenceNumber

`func (o *TrackItItemType) HasReferenceNumber() bool`

HasReferenceNumber returns a boolean if a field has been set.

### GetType

`func (o *TrackItItemType) GetType() TrackItType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TrackItItemType) GetTypeOk() (*TrackItType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TrackItItemType) SetType(v TrackItType)`

SetType sets Type field to given value.

### HasType

`func (o *TrackItItemType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAction

`func (o *TrackItItemType) GetAction() TrackItActionType`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *TrackItItemType) GetActionOk() (*TrackItActionType, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *TrackItItemType) SetAction(v TrackItActionType)`

SetAction sets Action field to given value.

### HasAction

`func (o *TrackItItemType) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetLocation

`func (o *TrackItItemType) GetLocation() CodeDescriptionType`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *TrackItItemType) GetLocationOk() (*CodeDescriptionType, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *TrackItItemType) SetLocation(v CodeDescriptionType)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *TrackItItemType) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetQuantity

`func (o *TrackItItemType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *TrackItItemType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *TrackItItemType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *TrackItItemType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetFollowUpDate

`func (o *TrackItItemType) GetFollowUpDate() string`

GetFollowUpDate returns the FollowUpDate field if non-nil, zero value otherwise.

### GetFollowUpDateOk

`func (o *TrackItItemType) GetFollowUpDateOk() (*string, bool)`

GetFollowUpDateOk returns a tuple with the FollowUpDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFollowUpDate

`func (o *TrackItItemType) SetFollowUpDate(v string)`

SetFollowUpDate sets FollowUpDate field to given value.

### HasFollowUpDate

`func (o *TrackItItemType) HasFollowUpDate() bool`

HasFollowUpDate returns a boolean if a field has been set.

### GetDescription

`func (o *TrackItItemType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TrackItItemType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TrackItItemType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TrackItItemType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAssignedTo

`func (o *TrackItItemType) GetAssignedTo() ApplicationUserType`

GetAssignedTo returns the AssignedTo field if non-nil, zero value otherwise.

### GetAssignedToOk

`func (o *TrackItItemType) GetAssignedToOk() (*ApplicationUserType, bool)`

GetAssignedToOk returns a tuple with the AssignedTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedTo

`func (o *TrackItItemType) SetAssignedTo(v ApplicationUserType)`

SetAssignedTo sets AssignedTo field to given value.

### HasAssignedTo

`func (o *TrackItItemType) HasAssignedTo() bool`

HasAssignedTo returns a boolean if a field has been set.

### GetReservationInfo

`func (o *TrackItItemType) GetReservationInfo() TrackItReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *TrackItItemType) GetReservationInfoOk() (*TrackItReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *TrackItItemType) SetReservationInfo(v TrackItReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *TrackItItemType) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetTrackItLogList

`func (o *TrackItItemType) GetTrackItLogList() []TrackItLogType`

GetTrackItLogList returns the TrackItLogList field if non-nil, zero value otherwise.

### GetTrackItLogListOk

`func (o *TrackItItemType) GetTrackItLogListOk() (*[]TrackItLogType, bool)`

GetTrackItLogListOk returns a tuple with the TrackItLogList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItLogList

`func (o *TrackItItemType) SetTrackItLogList(v []TrackItLogType)`

SetTrackItLogList sets TrackItLogList field to given value.

### HasTrackItLogList

`func (o *TrackItItemType) HasTrackItLogList() bool`

HasTrackItLogList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


