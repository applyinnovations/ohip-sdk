# RoomOwnerReferralDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HasOwnershipRecords** | Pointer to **bool** | Flag to indicate if the associated profile has any active Room Ownership records attached to it. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoomOwnerReferrals** | Pointer to [**RoomOwnerReferralList**](RoomOwnerReferralList.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRoomOwnerReferralDetails

`func NewRoomOwnerReferralDetails() *RoomOwnerReferralDetails`

NewRoomOwnerReferralDetails instantiates a new RoomOwnerReferralDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomOwnerReferralDetailsWithDefaults

`func NewRoomOwnerReferralDetailsWithDefaults() *RoomOwnerReferralDetails`

NewRoomOwnerReferralDetailsWithDefaults instantiates a new RoomOwnerReferralDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHasOwnershipRecords

`func (o *RoomOwnerReferralDetails) GetHasOwnershipRecords() bool`

GetHasOwnershipRecords returns the HasOwnershipRecords field if non-nil, zero value otherwise.

### GetHasOwnershipRecordsOk

`func (o *RoomOwnerReferralDetails) GetHasOwnershipRecordsOk() (*bool, bool)`

GetHasOwnershipRecordsOk returns a tuple with the HasOwnershipRecords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasOwnershipRecords

`func (o *RoomOwnerReferralDetails) SetHasOwnershipRecords(v bool)`

SetHasOwnershipRecords sets HasOwnershipRecords field to given value.

### HasHasOwnershipRecords

`func (o *RoomOwnerReferralDetails) HasHasOwnershipRecords() bool`

HasHasOwnershipRecords returns a boolean if a field has been set.

### GetLinks

`func (o *RoomOwnerReferralDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomOwnerReferralDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomOwnerReferralDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomOwnerReferralDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomOwnerReferrals

`func (o *RoomOwnerReferralDetails) GetRoomOwnerReferrals() RoomOwnerReferralList`

GetRoomOwnerReferrals returns the RoomOwnerReferrals field if non-nil, zero value otherwise.

### GetRoomOwnerReferralsOk

`func (o *RoomOwnerReferralDetails) GetRoomOwnerReferralsOk() (*RoomOwnerReferralList, bool)`

GetRoomOwnerReferralsOk returns a tuple with the RoomOwnerReferrals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnerReferrals

`func (o *RoomOwnerReferralDetails) SetRoomOwnerReferrals(v RoomOwnerReferralList)`

SetRoomOwnerReferrals sets RoomOwnerReferrals field to given value.

### HasRoomOwnerReferrals

`func (o *RoomOwnerReferralDetails) HasRoomOwnerReferrals() bool`

HasRoomOwnerReferrals returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomOwnerReferralDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomOwnerReferralDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomOwnerReferralDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomOwnerReferralDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


